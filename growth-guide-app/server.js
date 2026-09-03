#!/usr/bin/env node
// Growth Guide app - zero-dependency local server.
// The markdown files in brands/<brand>/ are the source of truth; this server
// just mirrors them into the web UI and writes every edit straight back.
// Run: node growth-guide-app/server.js   (from the workspace root)

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const ROOT = process.env.GG_ROOT || path.resolve(__dirname, '..');
const BRANDS_DIR = path.join(ROOT, 'brands');
const PORT = +(process.env.GG_PORT || 4400);
const VE = { 'loser': '❌', 'kpi winner': '🎯', 'spend winner': '💸', 'breakthrough': '🏆' };
const VERDICTS = Object.keys(VE);
const DOC_PATHS = {
  research: 'research/market-research.md',
  summary: 'research/market-research-summary.md',
  avatars: 'research/avatars.md',
  desires: 'research/desires.md',
  learnings: 'learnings/learnings.md',
};

/* ---------- date helpers: DD-MM-YYYY in files, ISO in the app ---------- */
const iso = s => { const m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(String(s).trim()); return m ? `${m[3]}-${m[2]}-${m[1]}` : String(s).trim(); };
const dmy = s => { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(s)); return m ? `${m[3]}-${m[2]}-${m[1]}` : String(s); };
const todayIso = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

/* ---------- growth-guide.md <-> object ---------- */
const FIELD_KEYS = {
  'status': 'status', 'avatar': 'avatar', 'desire': 'desire', 'awareness': 'aw',
  'type': 'type', 'format': 'format', 'iterates': 'iterates', 'brief': 'brief',
  'final ad': 'finalAd', 'timeline': 'tl', 'verdict': 'result', 'result': 'result',
  'memo': 'idea', 'the idea (what / why / how)': 'idea', 'learning': 'learning',
};
const DASH_NULL = new Set(['iterates', 'brief', 'finalAd', 'result', 'learning']);

function parseGuide(md, slug) {
  const brand = { slug, name: slug, preamble: '', avatars: [], desires: [], ideas: [], cards: [], notes: '' };
  const lines = md.split(/\r?\n/);
  let section = 'preamble', card = null, lastField = null, inComment = false;
  const notesLines = [], preLines = [];

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');
    if (inComment) { if (line.includes('-->')) inComment = false; continue; }
    if (line.includes('<!--')) { if (!line.includes('-->')) inComment = true; continue; }
    const h1 = /^#\s+Growth Guide\s*-\s*(.+)$/.exec(line);
    if (h1) { brand.name = h1[1].trim(); continue; }
    const h2 = /^##\s+(.+)$/.exec(line);
    if (h2) {
      const s = h2[1].trim().toLowerCase();
      section = ['avatars', 'desires', 'idea bank', 'concepts', 'notes'].includes(s) ? s : 'notes';
      if (section === 'notes' && s !== 'notes') notesLines.push(line); // preserve unknown sections verbatim
      card = null; lastField = null; continue;
    }
    if (section === 'preamble') { if (line.trim()) preLines.push(line); continue; }
    if (section === 'avatars' || section === 'desires') {
      const m = /^-\s+(.+)$/.exec(line);
      if (m) brand[section].push(m[1].trim());
      continue;
    }
    if (section === 'idea bank') {
      const m = /^-\s+(?:(\d{2}-\d{2}-\d{4})\s+·\s+)?(.+)$/.exec(line);
      if (m && m[2].trim()) brand.ideas.push({ date: m[1] ? iso(m[1]) : todayIso(), text: m[2].trim(), x: 0, y: 0 });
      continue;
    }
    if (section === 'notes') { notesLines.push(line); continue; }

    // concepts
    const h3 = /^###\s+(\S+)\s+·\s+(.+)$/.exec(line);
    if (h3) {
      card = { id: h3[1], title: h3[2].trim(), avatar: '', desire: '', aw: 'Unaware', type: 'Ideation', format: 'Video',
        iterates: null, status: 'concepts', tl: [], idea: '', brief: null, finalAd: null, result: null, learning: null };
      brand.cards.push(card); lastField = null; continue;
    }
    if (!card) continue;
    const f = /^-\s+(?:\*\*)?([^:*]+):(?:\*\*)?\s*(.*)$/.exec(line);
    if (f && FIELD_KEYS[f[1].trim().toLowerCase()] !== undefined) {
      const key = FIELD_KEYS[f[1].trim().toLowerCase()];
      let val = f[2].trim();
      if (key === 'tl') {
        card.tl = val.split('->').map(s => s.trim()).filter(Boolean).map(seg => {
          const sp = seg.lastIndexOf(' ');
          return [seg.slice(0, sp).trim().toLowerCase(), iso(seg.slice(sp + 1))];
        });
        lastField = null; continue;
      }
      if (DASH_NULL.has(key) && (val === '-' || val === '')) { card[key] = null; lastField = null; continue; }
      if (key === 'result') {
        const v = VERDICTS.find(x => val.toLowerCase().includes(x));
        card.result = v || null; lastField = null; continue;
      }
      if (key === 'status') val = val.toLowerCase();
      card[key] = val;
      lastField = (key === 'idea' || key === 'learning') ? key : null;
      continue;
    }
    if (!line.trim()) { lastField = null; continue; }
    if (lastField) card[lastField] = (card[lastField] ? card[lastField] + '\n' : '') + line.replace(/^\s+/, '');
  }
  brand.preamble = preLines.join('\n');
  brand.notes = notesLines.join('\n').replace(/^\n+|\n+$/g, '');
  return brand;
}

function emitMulti(label, value) {
  const parts = String(value).replace(/\n{2,}/g, '\n').split('\n');
  return [`- **${label}:** ${parts[0]}`, ...parts.slice(1).map(l => '  ' + l)];
}

function serializeGuide(b) {
  const out = [`# Growth Guide - ${b.name}`, ''];
  if (b.preamble) out.push(b.preamble, '');
  out.push('## Avatars', ...b.avatars.map(a => `- ${a}`), '');
  out.push('## Desires', ...b.desires.map(d => `- ${d}`), '');
  out.push('## Idea Bank', ...b.ideas.map(i => `- ${dmy(i.date)} · ${i.text}`), '');
  out.push('## Concepts', '');
  for (const c of b.cards) {
    out.push(`### ${c.id} · ${c.title}`);
    out.push(`- **Status:** ${c.status}`);
    out.push(`- **Avatar:** ${c.avatar}`);
    out.push(`- **Desire:** ${c.desire}`);
    out.push(`- **Awareness:** ${c.aw}`);
    out.push(`- **Type:** ${c.type}`);
    out.push(`- **Format:** ${c.format}`);
    out.push(`- **Iterates:** ${c.iterates || '-'}`);
    out.push(`- **Brief:** ${c.brief || '-'}`);
    out.push(`- **Final ad:** ${c.finalAd || '-'}`);
    out.push(`- **Timeline:** ${c.tl.map(([st, d]) => `${st} ${dmy(d)}`).join(' -> ')}`);
    if (c.result) out.push(`- **Verdict:** ${c.result}`);
    out.push(...emitMulti('Memo', c.idea || '-'));
    if (c.learning) out.push(...emitMulti('Learning', c.learning));
    out.push('');
  }
  if (b.notes) out.push('## Notes', '', b.notes, '');
  return out.join('\n').replace(/\n{3,}/g, '\n\n');
}

/* ---------- filesystem ---------- */
const safeSlug = s => typeof s === 'string' && /^[a-zA-Z0-9_-]+$/.test(s) && !s.startsWith('_');
const brandDir = slug => path.join(BRANDS_DIR, slug);
const uiPath = slug => path.join(brandDir(slug), '.growth-guide-ui.json');

function atomicWrite(file, content) {
  const tmp = file + '.tmp-' + process.pid;
  fs.writeFileSync(tmp, content);
  fs.renameSync(tmp, file);
}

function readDocs(slug) {
  const docs = {};
  for (const [key, rel] of Object.entries(DOC_PATHS)) {
    const p = path.join(brandDir(slug), rel);
    try {
      const st = fs.statSync(p);
      docs[key] = { updated: st.mtime.toISOString().slice(0, 10), md: fs.readFileSync(p, 'utf8') };
    } catch {
      docs[key] = { updated: todayIso(), md: `# Not created yet\n\nThis document does not exist for this brand yet. Open Claude Code and run **/new-brand** (or the standalone skill for this doc) to generate \`${rel}\`.` };
    }
  }
  return docs;
}

function loadBrand(slug) {
  const guidePath = path.join(brandDir(slug), 'growth-guide.md');
  const brand = parseGuide(fs.readFileSync(guidePath, 'utf8'), slug);
  let ui = {};
  try { ui = JSON.parse(fs.readFileSync(uiPath(slug), 'utf8')); } catch {}
  const pos = ui.ideaPos || {};
  brand.ideas.forEach((idea, n) => {
    const p = pos[idea.text];
    if (p) { idea.x = p[0]; idea.y = p[1]; }
    else { idea.x = 250 + (n * 220) % 660; idea.y = 14 + Math.floor((n * 220) / 660) * 200; }
  });
  brand.docs = readDocs(slug);
  return brand;
}

/* ---------- the library: resources/ served read-only ---------- */
const RESOURCES_DIR = path.join(ROOT, 'resources');
// The app surfaces only the playbooks (learnings + iteration) and the
// copywriting guides - Karlo's call. The rest of resources/ stays
// Claude-side by design.
const LIB_GROUPS = [
  { group: 'Playbooks', e: '📖', dir: '.' },
  { group: 'Copywriting', e: '✍️', dir: 'copywriting' },
];
const SKIP_DOCS = new Set(['README.md', 'CONTEXT.md']);

function docTitle(md, fallback) {
  const m = /^#\s+(.+)$/m.exec(md);
  return (m ? m[1] : fallback.replace(/[_-]/g, ' ').replace(/\.md$/, '')).replace(/\*\*/g, '').trim();
}

function listLibrary() {
  const out = [];
  for (const g of LIB_GROUPS) {
    const dir = path.join(RESOURCES_DIR, g.dir);
    let files = [];
    try { files = fs.readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    const docs = files
      .filter(f => f.isFile() && f.name.endsWith('.md') && !SKIP_DOCS.has(f.name))
      .map(f => {
        const rel = g.dir === '.' ? f.name : g.dir + '/' + f.name;
        const p = path.join(dir, f.name);
        let title = f.name, updated = todayIso();
        try {
          const st = fs.statSync(p);
          updated = st.mtime.toISOString().slice(0, 10);
          title = docTitle(fs.readFileSync(p, 'utf8'), f.name);
        } catch {}
        return { id: rel, title, updated };
      })
      .sort((a, b) => a.title.localeCompare(b.title));
    if (docs.length) out.push({ group: g.group, e: g.e, docs });
  }
  return out;
}

function readLibraryDoc(id) {
  const p = path.resolve(RESOURCES_DIR, String(id));
  if (!p.startsWith(RESOURCES_DIR + path.sep) || !p.endsWith('.md')) return null;
  try { return fs.readFileSync(p, 'utf8'); } catch { return null; }
}

function listBrands() {
  let entries = [];
  try { entries = fs.readdirSync(BRANDS_DIR, { withFileTypes: true }); } catch {}
  return entries
    .filter(e => e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.'))
    .filter(e => fs.existsSync(path.join(BRANDS_DIR, e.name, 'growth-guide.md')))
    .map(e => loadBrand(e.name));
}

function saveBrand(slug, brand) {
  atomicWrite(path.join(brandDir(slug), 'growth-guide.md'), serializeGuide(brand));
  const ideaPos = {};
  for (const i of brand.ideas || []) ideaPos[i.text] = [Math.round(i.x || 0), Math.round(i.y || 0)];
  atomicWrite(uiPath(slug), JSON.stringify({ ideaPos }, null, 2) + '\n');
}

function appendLearning(slug, cardId) {
  const brand = loadBrand(slug);
  const c = brand.cards.find(x => x.id === cardId);
  if (!c || !c.result || !c.learning) return { appended: false, reason: 'card needs a verdict and a learning first' };
  const file = path.join(brandDir(slug), DOC_PATHS.learnings);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  let cur = '';
  try { cur = fs.readFileSync(file, 'utf8'); } catch {
    cur = `# Learnings - ${brand.name}\n\nThe living knowledge base. Every finished batch writes its learning here - read it before every new concept.\n`;
  }
  if (cur.includes(`· ${cardId} ·`)) return { appended: false, reason: 'already in the learnings doc' };
  const entry = `\n## ${dmy(todayIso())} · ${cardId} · ${c.title} · ${VE[c.result]} ${c.result}\n\n${c.learning.trim()}\n`;
  atomicWrite(file, cur.replace(/\n+$/, '\n') + entry);
  return { appended: true };
}

/* ---------- http ---------- */
const json = (res, code, obj) => { res.writeHead(code, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(obj)); };

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  try {
    if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/index.html')) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
      return;
    }
    if (req.method === 'GET' && url.pathname === '/api/brands') return json(res, 200, listBrands());
    if (req.method === 'GET' && url.pathname === '/api/library') return json(res, 200, listLibrary());
    if (req.method === 'GET' && url.pathname === '/api/library/doc') {
      const md = readLibraryDoc(url.searchParams.get('id') || '');
      return md === null ? json(res, 404, { error: 'no such doc' }) : json(res, 200, { md });
    }
    if (req.method === 'POST') {
      let body = '';
      req.on('data', ch => { body += ch; if (body.length > 4e6) req.destroy(); });
      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          if (!safeSlug(data.slug)) return json(res, 400, { error: 'bad slug' });
          if (url.pathname === '/api/guide') { saveBrand(data.slug, data.brand); return json(res, 200, { ok: true }); }
          if (url.pathname === '/api/learn') return json(res, 200, appendLearning(data.slug, String(data.id)));
          json(res, 404, { error: 'not found' });
        } catch (e) { json(res, 500, { error: String(e.message || e) }); }
      });
      return;
    }
    json(res, 404, { error: 'not found' });
  } catch (e) { json(res, 500, { error: String(e.message || e) }); }
});

if (require.main === module) {
  server.listen(PORT, '127.0.0.1', () => {
    const url = `http://localhost:${PORT}`;
    console.log(`Growth Guide running at ${url}`);
    console.log(`Workspace root: ${ROOT}`);
    if (process.platform === 'darwin' && !process.env.GG_NO_OPEN) execFile('open', [url], () => {});
  });
}

module.exports = { parseGuide, serializeGuide };
