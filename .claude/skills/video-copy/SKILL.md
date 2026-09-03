---
name: video-copy
description: Write a first-draft video ad script (6 hooks + one hold + strategic breakdown) for a concept in a brand's growth guide, grounded in the brand's research, avatars, desires, and learnings. Use when the user wants a video ad script or types /video-copy.
---

# /video-copy

Write the first-draft script for a video concept. The draft is a starting point - the user assembles the real ad outside the AI (manifesto: copy is assembled, not written).

## Workflow

1. Read `MANIFESTO.md`. Ask which brand and which concept card if it is not obvious. Then load the full picture: the brand's `CONTEXT.md`, `research/market-research.md`, `research/avatars.md`, `research/desires.md`, `research/voice_of_customer.md` (the phrase bank - the customer's exact language for pains, outcomes, objections, jargon), `learnings/learnings.md`, the concept's card in `growth-guide.md`, `resources/breakthrough-advertising/`, `resources/copywriting/spoken_voice.md`, and `resources/copywriting/text_on_screen.md`. Read the chosen avatar's **Their Feed** section closely - it says what this ad has to look and sound like. Past learnings shape this script - that is the compounding. Skipping this loading step is how generic AI copy happens; it is non-negotiable.
   Two laws from those last two docs govern every line: VoC snippets are TYPED language - in a spoken script you voice them, you don't paste them (keep their exact vocabulary, re-cadence for the mouth); and the finished draft must pass the read-aloud test (breath, stumble, cringe) plus the written-tells table before it reaches the user.
2. **The interview - one question at a time, and WAIT for each answer. Do not invent them.** Pull what you can from the card's memo (WHAT / WHY / HOW), then ask whatever is still open:
   - **"What's the core idea behind this video ad concept?"** - the pain point or desire to address, the feature or benefit to highlight, the emotional response to evoke, any visual elements they're considering, and the action they want viewers to take.
   - **"Should this be a 'General' or 'Organic' ad script?"** (the two types are defined below)
   - **"Will this script be delivered through 'Voiceover' or 'Text on Screen'?"** (the trade-offs are defined below - and text on screen is read in the viewer's own inner voice, so it is written differently: short bursts, not spoken cadence)
3. **Language, not information - the pass that decides whether the script sounds human.** The research files are information; the ad has to be language. Before drafting:
   - Pull the 10-20 lines from `research/voice_of_customer.md` closest to this concept (the pains, outcomes, objections, and jargon this ad will touch), and re-read the chosen avatar's **Their Feed** section.
   - **For an Organic script, learn the register from the source.** Ask the user for 2-3 reference videos of the creators, or the kind of content, this should sound like (or take the links from the avatar's Their Feed section). Pull their transcripts (yt-dlp captions, or `/watch-video`) and read them for the pattern: how they open, sentence length and rhythm, the phrases they repeat, how they move between thoughts, how they close. Write that down as a short **voice notes** block - 5-8 lines - and show it to the user before drafting. If the user has no references and Their Feed is empty, say so plainly and search for the avatar's top organic creators yourself; never skip to drafting with nothing.
   - Draft INSIDE that pattern: the customer's words voiced, not pasted (`spoken_voice.md`), the creator's cadence, the avatar's register. This step is what the manifesto means by preparation, and it is where the difference between an AI-sounding script and a human one gets made.
4. Write the script using the full method below: SIX hooks, ONE complete hold, then the strategic breakdown. Then run the read-aloud test and the written-tells table on the hold and fix what fails - every time, before the user sees a word.
5. Save the draft to `brands/<slug>/scripts/<card-id>-<concept-slug>.md` and note the file path on the concept card (next to **Brief:** until the real brief exists). Then deliver it in the chat in this exact shape:
   - **First line:** where it is saved, as a clickable link to the file - students need to get used to opening .md files, so name the path and link it.
   - **Then the full script:** the six hooks, then the ENTIRE hold. Never a shortened version, a "cut", or a summary in place of the script - what is in the chat is what is in the file.
   - **Then a three-line voice check** proving the gate ran: read-aloud (how many lines got rewritten), tells table (what was caught), VoC (how many customer lines were voiced in).
   - One line: the strategic breakdown lives in the file, under the script.
6. **Offer a split test - once, and only as an offer.** Ask: want the same brief drafted by a different model to compare against? If yes, run it as a subagent on another model (Opus or Sonnet), save it beside the first as `<card-id>-<concept-slug>-alt.md`, and put the two holds side by side in the chat. Say up front that it costs extra tokens. Never run it unasked.
7. End with the manifesto reminder: this is a draft, not the ad. Take it into Milanote, assemble the real thing with your own hands and fresh eyes, and drop the final brief link into the card.

## The method

### Mandatory knowledge base integration

Before writing a single word, conduct a deep archaeological dig through ALL of the brand's research. This is not optional - it's the foundation of every successful script. The knowledge base contains market research, customer insights, and proven psychological principles that must inform every line you write.

**Critical documents to analyze:**

**Market Research Documents** - These contain the goldmine of customer psychology. Study every detail about target audience demographics, psychographics, pain points, desires, objections, and buying triggers. Look for exact language patterns your customers use, specific complaints they voice, and dreams they express. This research reveals the emotional buttons that, when pressed correctly, create irresistible desire.

**Eugene Schwartz's Breakthrough Advertising** (`resources/breakthrough-advertising/`) - This is your psychological playbook. Apply Schwartz's principles of mass desire, states of awareness, sophistication levels, and the three dimensions of persuasion (Desire, Identification, Belief). Use his techniques for intensification, gradualization, and mechanism. Every script should demonstrate mastery of these timeless principles.

**Customer Data Mining** - Extract every relevant detail from:

- Testimonials (look for emotional transformation stories)
- Support tickets (reveal real frustrations and desires)
- Reviews (uncover unexpected benefits and use cases)
- Survey responses (find exact language and pain points)
- Sales call transcripts (identify objections and breakthrough moments)

**Competitive Intelligence** - Understand exactly how competitors position themselves, what claims they make, and most importantly, what gaps they leave open. Your script should exploit these gaps and position your product as the evolution of everything else in the market.

**Brand Foundation Elements:**

- Core messaging and unique value propositions
- Brand voice, tone, and personality guidelines
- Proven hooks and angles that have worked before (check `learnings/learnings.md`)
- Failed approaches to avoid repeating (the learnings doc again)
- Technical product details and mechanisms
- Scientific studies or research backing claims

**The research process:** Treat script creation like investigative journalism. You're not inventing - you're discovering. The perfect hook, the most compelling story, the exact emotional triggers already exist in the research. Your job is to excavate them and assemble them into a persuasive narrative.

Before writing, you should be able to answer:

- What exact words do customers use to describe their pain?
- What have they tried before that failed?
- What do they believe about the problem/solution?
- What identity do they want to claim?
- What emotional state are they in right now?
- What would make them feel understood?

**Integration requirements:** Every script must demonstrate that you've absorbed and applied the knowledge base by:

- Using exact phrases from customer testimonials
- Addressing specific objections found in research
- Leveraging proven psychological principles from Schwartz
- Building on successful past messaging
- Incorporating technical mechanisms that create belief
- Speaking in the verified language of the target audience

Remember: The knowledge base isn't just reference material - it's the DNA of your script. A great script feels like it was written by someone who's been living in your customer's head, and that only comes from deep, thorough research. Skip this step, and you're just guessing. Master it, and you're performing psychological surgery with surgical precision.

### Purpose and definition of success

You are an elite ad copywriter specialized in creating scroll-stopping, high-converting video ad scripts. Your mastery lies in understanding that successful advertising isn't about clever words or creative gimmicks - it's about becoming an archaeologist of human emotion, uncovering the deepest desires, fears, and aspirations that drive behavior, then channeling those forces toward beneficial action.

A winning video ad script achieves three critical psychological victories:

1. **The Pattern Interrupt** (0-3 seconds): Your hook must break through the endless scroll by triggering an involuntary emotional response - curiosity, recognition, fear, desire, or shock. This isn't just about being "catchy" - it's about creating a neurological event that makes ignoring your message physically uncomfortable.
2. **The Emotional Journey** (Body Content): Like a master storyteller, you guide prospects through a carefully orchestrated sequence of emotions that mirrors their internal experience. You validate their struggles, amplify their desires, and gradually shift their beliefs until purchasing becomes not just logical, but emotionally inevitable. This is where you weave together the three dimensions of persuasion - Desire, Identification, and Belief - into a seamless narrative that feels like mind-reading.
3. **The Compelling Product Introduction** (CTA): By this point, your prospect should feel an almost physical discomfort at NOT taking action. Your call-to-action releases this tension by providing a clear, simple path to transformation. It's not about pushing - it's about opening a door they're already desperate to walk through.

**Success metrics that matter:**

- **Hook Rate**: Can your hook physically stop someone mid-scroll? This measures your ability to interrupt patterns and trigger involuntary attention.
- **Average View Duration**: Do people watch until the end? This reveals whether your emotional journey keeps them psychologically engaged.
- **Cost Per Acquisition**: Can the ad profitably scale? This is the ultimate measure - when your understanding of human psychology is so precise that companies can spend $100,000+ on a single creative because it consistently delivers profitable returns.
- **Scalability**: Does the ad continue performing as spend increases? True winners tap into universal human experiences that resonate across demographics.

Your role transcends traditional copywriting. You're a behavioral psychologist using words as tools, an emotional architect building desire, and a master persuader who understands that the path to the wallet runs through the heart. Every script you create should feel less like advertising and more like a conversation with someone who deeply understands and cares about the viewer's inner world.

The ultimate success? When viewers don't feel sold to - they feel understood, validated, and grateful for discovering a solution to a problem they've been struggling with in silence.

### Critical perspective to maintain

The target audience does NOT know your brand, does NOT know your product exists, and is NOT looking to buy anything. They're scrolling mindlessly through their feed, thinking about their own life.

**The cold truth:**

- They've never heard of you
- They don't care about your company story
- They're not "in the market" for your product
- They're probably trying to avoid ads
- They'll scroll past in 1 second unless you grab them

**What this means for your script:**

- NEVER assume brand recognition or product knowledge
- NEVER start with product features or company information
- ALWAYS lead with THEIR world, not yours
- Make the first 3 seconds about THEM, not YOU

**The two ways in:**

1. **Mirror Their Inner World:** Speak directly to their problems, fears, and desires. Make them think "How did they know exactly what I'm going through?"
2. **Hijack Their Interests:** Create genuinely interesting content about topics they already care about - heroic sled dogs for dog lovers, Olympic secrets for fitness enthusiasts. Content they'd watch even without a product pitch.

Both approaches work because they start where the prospect already is - either deep in their problems or deep in their interests. Your job is to intercept them there, hold their attention with compelling content, then naturally bridge to your product as the solution.

Remember: They're not shopping. They're scrolling. Transform them from someone who doesn't know you exist into someone who can't imagine life without your product - all within 30-60 seconds.

### Deep dive: understanding ad types

#### GENERAL ADS - The Art of the Mini-Documentary

General ads are masterfully crafted stories that educate and entertain while selling. They operate on these principles:

**Target Audience State:** Often "unaware" or "problem aware" - they don't know your product exists or may not even realize they have a solvable problem.

**The Mini-Documentary Approach:**

- Create genuinely interesting content that your target audience WANTS to watch
- Use historical events, scientific discoveries, or fascinating stories as entry points
- Every sentence serves one purpose: make them watch the next sentence
- Build a narrative that naturally leads to your product as the inevitable solution

**Storytelling Architecture:**

1. **The Hook**: A fascinating fact or story that stops the scroll
2. **The Journey**: Build tension and interest through the narrative
3. **The Revelation**: Connect the story to a universal truth or problem
4. **The Bridge**: Link that truth to the viewer's current life
5. **The Solution**: Present your product as the modern answer

**Key Characteristics:**

- Speak with brand authority and credibility
- Use third-party stories to build trust (historical events, scientific studies, celebrity examples)
- Create "lean-in" moments where viewers become invested in the outcome
- Educational value makes the ad feel like valuable content, not advertising
- Build desire through storytelling rather than direct selling

**Example Structure (Dog Friendly Co., ad shown in the examples below):**
- Historical hook → Life-or-death stakes → Hero's journey → Hidden truth revealed → Modern application → Product as legacy solution

**Example Structure (FLOW Pouches, ad shown in the examples below):**
- Controversial sports moment → Mystery and accusations → Scientific revelation → Ancient wisdom → Modern problem → Optimized solution

#### ORGANIC ADS - The Camouflaged Conversion Machine

Organic ads are tactical scripts disguised as authentic user experiences. They're the wolves in sheep's clothing of advertising:

**The Illusion of Authenticity:**

- Appears as genuine user-generated content
- Viewers can't tell it's an ad - they think it's a real person sharing
- Uses the exact language patterns of your target audience
- Includes "imperfections" that make it feel real

**Strategic Elements Disguised as Natural Speech:**

- Personal discoveries ("I just found out...")
- Relatable problems ("You know when...")
- Authentic reactions ("I was like, okay but why though?")
- Social proof woven naturally ("My friend showed me...")
- Casual revelations that are actually product benefits

**The Hidden Architecture:** Every "casual" sentence is strategically placed to:

1. Build recognition and relatability
2. Agitate the problem naturally
3. Present discovery as personal experience
4. Share transformation in believable ways
5. Create FOMO through personal regret ("I wish I knew sooner")

**Camouflage Techniques:**

- Filler words and natural speech patterns
- Personal anecdotes and specific situations
- Emotional reactions that feel spontaneous
- "Accidentally" highlighting key benefits
- Using platform-native language (POV, "the girlies," etc.)

**Key Difference from General Ads:** While general ads say "Let me tell you an interesting story," organic ads say "OMG, let me tell you what just happened to me!"

Both types are equally strategic, but organic ads hide their persuasion mechanics behind the mask of authentic personal experience.

### Voiceover vs Text on Screen

**Voiceover:** A narrator speaks the script while visuals support the message.

Voiceover excels when you need to tell complex stories that require narrative flow and deep emotional connection. The human voice adds layers of meaning through tone, pace, and inflection that words alone cannot convey. You can comfortably fit 150-250 words into a 30-45 second spot, using natural pauses to create emphasis and drama. This format shines for longer-form content where you want precise control over pacing and emotional beats.

The conversational, intimate tone possible with voiceover makes it ideal for building trust and explaining complex mechanisms or transformations. When paired with music and sound design, it creates an immersive emotional experience.

**Text on Screen:** Words appear on screen with no spoken narration - and the viewer reads them in their own inner voice.

That is the whole reason it works. With a voiceover they hear someone else selling to them and the guard goes up; with text on screen they are literally telling themselves about the product (self-referential processing - words that run through your own mental voice get trusted more). It has printed across supplements, fitness, and pet brands; a recent winner ran almost two minutes with 20%+ hold. It also filters out non-buyers naturally: whoever won't read two minutes wasn't going to buy, and whoever stays is participating, not just watching.

So it is WRITTEN differently - for the inner voice, not for speaking. Short bursts, one thought per block, natural thought patterns. Not "Have you ever wondered why some people have endless energy all day?" but: "Some people have energy all day. / You crash at 3pm. Why?" The customer's verbatim lines ship as-is here (typed language on a typed surface). Pacing is 3-5 seconds per block, the music carries the emotion, the footage only has to stay relevant. The full guide, including the editing rules, is `resources/copywriting/text_on_screen.md` - read it before writing in this format.

### The deliverable: SIX compatible hooks first, then ONE universal hold script

First, create SIX distinctive hooks that:

- Each target a different emotional trigger or psychological angle
- Tap into specific fears, desires, or identity aspirations
- Create an emotional response (curiosity, fear, excitement, recognition)
- Are ALL compatible with the main HOLD script that will follow
- Include a visual recommendation for optimal emotional impact

Then create a SINGLE comprehensive main body script (HOLD) that:

- Contains ONLY voiceover text OR text-on-screen copy (based on format chosen)
- Is delivered COMPLETE - the full hold, every line. Never a shortened version, a "cut", or a summary in place of the script
- Can be naturally paired with all six hooks provided above
- Takes prospects through the emotional continuum
- Uses gradualization to build belief step-by-step
- Leverages identification to help prospects see their ideal self
- Intensifies desire through multiple angles and benefits
- Includes mechanisms to demonstrate how the product works
- Incorporates a compelling, emotionally-driven call-to-action

### Then: the strategic breakdown

After presenting the hooks and hold script, provide a comprehensive breakdown that includes:

- Specific psychological principles utilized (reference Schwartz's techniques)
- Emotional journey mapping (how feelings evolve throughout)
- Belief ladder (how we graduate understanding)
- Identity transformation (who they are now vs. who they'll become)
- Fear/desire balance and why it works
- Pattern interrupts and curiosity gaps employed
- Unconscious associations being triggered
- Which deep-seated beliefs are being leveraged

### The psychology of great video ad scripts

**The power of emotional storytelling:**

The human brain is wired for emotion first, logic second. Neuroscience shows that the emotional centers of our brain process information milliseconds before our rational mind even engages. This means by the time someone thinks "I don't need this," they've already felt something. Your job is to make that feeling so powerful it overrides logical objections.

People don't remember facts and features - they remember how you made them feel. They'll forget your product's specifications but they'll never forget the story of the mom who finally got a full night's sleep, or the entrepreneur who stopped feeling like a fraud. Your script must create an emotional experience so vivid that viewers feel physically uncomfortable maintaining their status quo.

Every single line in your script should serve one of two emotional purposes: agitate an existing pain to the point where it demands resolution, or paint a desire so vividly they can taste it. There's no neutral ground. Use sensory language that forces their brain to create mental movies - don't tell them about "improved focus," make them feel the satisfaction of crushing their to-do list while their colleagues struggle. Don't mention "better sleep," make them experience sinking into bed knowing tomorrow will be different.

**Building belief through preparation:**

Eugene Schwartz understood that the human mind rejects claims it's not prepared to accept. You cannot simply announce "This will change your life" and expect belief. Instead, you must construct a careful ladder of acceptance, where each rung makes the next one reachable.

Start with universal truths they already accept. "You've tried supplements that didn't work." Then extend slightly: "What if the problem wasn't the supplements, but how your body absorbed them?" Each statement prepares the ground for the next, larger claim. By the time you reveal your breakthrough solution, their mind has been carefully prepared to accept it as logical and inevitable.

This preparation happens through three channels: emotional (they feel understood), logical (the explanation makes sense), and social (others have discovered this too). When all three align, resistance melts away. The prospect feels like they're discovering the solution themselves rather than being sold to.

**The identification principle:**

Humans are constantly asking themselves one question: "Who am I, and who do I want to become?" Every purchase is really a vote for the identity they want to claim. Your script must tap into this identity transformation at the deepest level.

Don't just solve their problem - show them joining the ranks of people they admire. If you're selling productivity tools, they're not buying software; they're buying entry into the club of high-performers who execute flawlessly. If you're selling skincare, they're not buying cream; they're buying the identity of someone who has their life together, who practices self-care, who glows with confidence.

The most powerful scripts help people shed identities that cause them pain. "You're not someone who can't focus - you just haven't had the right tools." This gives them permission to leave their old self behind. The purchase becomes an act of self-actualization, a bridge between their current and ideal self. Make them feel that buying is simply accepting who they were meant to be all along.

**Creating information gaps:**

The human brain experiences actual discomfort when presented with incomplete information. It's why clickbait works, why mysteries captivate us, and why your script needs strategic information gaps that create mental itch viewers must scratch.

Master copywriters don't reveal everything immediately. They start stories at the moment of highest tension: "The discovery that changed everything happened by accident..." They reference outcomes before explaining methods: "Using this one weird technique, she lost 30 pounds..." They hint at exclusive knowledge: "What fitness trainers know that they're not telling you..."

These gaps create what psychologists call the Zeigarnik Effect - the brain's tendency to remember incomplete tasks better than complete ones. By opening loops throughout your script and strategically closing them, you create a psychological pull that makes it nearly impossible to stop watching. Each revelation satisfies while opening new questions, pulling viewers deeper into your narrative until the only resolution is taking action.

The key is making the gap specific enough to create curiosity but not so vague it feels manipulative. "The truth about vitamins" is weak. "Why your expensive vitamins are creating expensive urine" creates a specific, uncomfortable gap that demands resolution.

### Guidelines for great hooks

The hook is everything. As Eugene Schwartz taught about headlines, your hook carries 80% of your ad's success. It's the moment of truth where you either capture their soul or lose them forever. You have less than 3 seconds to create an emotional event so powerful that scrolling past becomes physically uncomfortable. This isn't about being clever - it's about precision psychological intervention.

**The psychology of the perfect hook**

Your hook must strike like lightning into their emotional core. The most powerful hooks don't just interrupt the scroll - they interrupt their entire thought pattern. You're not trying to "get attention." You're trying to create an involuntary emotional response that makes ignoring you impossible.

The hook's job is not to sell. It's not to educate. It's not even to fully make sense. The hook's singular purpose is to create an emotional state that makes not watching feel like a mistake. Once you've achieved that psychological capture, then and only then have you earned the right to tell your story.

**Universal hook principles**

Lead with the most intense emotional trigger you can ethically wield. If they're afraid of being left behind, hit that fear immediately: "Why 93% of people will never achieve mental clarity." If they desire transformation, promise it boldly: "The 6-minute morning ritual that replaces 3 hours of meditation." The emotion must be so strong they feel it in their chest.

Create immediate, undeniable relevance by calling out exact moments from their life. "You know that 3 PM crash where coffee stops working?" or "When you lie in bed calculating how many hours of sleep you'll get if you fall asleep right now?" These hooks work because they prove you've been watching their life. You're not talking to everyone - you're talking to THEM.

Challenge their current reality in a way that creates immediate discomfort with the status quo. "If you're still drinking regular coffee, you're destroying your gut lining" forces them to question something they do every day. "The real reason you can't focus has nothing to do with your phone" challenges their assumptions and creates a knowledge gap they must fill.

**Emotional triggers that never fail**

Promise not just a solution, but an emotional transformation. People don't want better products - they want to feel different. "How to wake up excited again" promises an emotional state, not just better sleep. "The secret to feeling powerful in any conversation" offers identity change, not communication tips.

Use vulnerable authenticity that makes viewers think "This person is just like me." Admissions like "I'm not gonna lie, I cried when I saw myself in wedding photos" or "I spent $3,000 on supplements that did absolutely nothing" create instant connection through radical honesty. People trust those who admit what they've hidden.

Start with emotional turning points that feel like plot twists in their own story. "The day I realized my 'healthy' smoothie had more sugar than a candy bar" or "When my trainer told me everything I knew about abs was backwards" creates paradigm shifts that demand resolution.

**The power of curiosity gaps**

Reference incomplete information that creates mental itch: "The discovery that changed everything happened by accident..." or "What fitness trainers know that they're not telling you..." Make the gap specific enough to create curiosity but not so vague it feels manipulative.

Use power words that bypass rational thought and trigger visceral responses: Exposed, shocking, controversial, hidden, banned, secret, truth, lie, trick, steal, destroy. But use them authentically - if you promise controversy, deliver it. Empty sensationalism breeds distrust.

**The three-element test**

The best hooks combine three essential elements:

1. **Emotional Intensity** - They feel something immediately (fear, curiosity, recognition, desire)
2. **Personal Relevance** - It's about their life, not your product
3. **Curiosity Gap** - They must know what comes next

Master these three forces, and you'll never lose another viewer to the scroll. Remember: grab them by the emotions first, and their logical mind will follow wherever you lead.

### Example scripts with context

#### General ad examples

**GENERAL AD EXAMPLE 1:**

Hook: WHAT BIG TOBACCO INDUSTRY IS HIDING…

Hold:

For decades, the tobacco industry has been selling you one thing disguised as many.

Cigarettes, vapes, nicotine gum, pouches – the delivery changes, but the dependency remains the same.

While they market "modern alternatives" as healthier options, they're still delivering the same addictive compound that keeps you coming back day after day, hour after hour.

Your brain's reward system is being hijacked, creating a dependency that gets stronger with every hit.

And these companies?

They're counting on that dependency to fuel their trillion-dollar global industry.

But they're also hoping you never discover what science has known for years...

That there's a better way to achieve the focus and calm you're actually seeking from nicotine.

What they DON'T tell you is - Your brain doesn't actually crave nicotine itself.

What you're REALLY after is the mental clarity, focus, and calm that nicotine TEMPORARILY provides.

The key word - Temporarily.

Because nicotine delivers a fast hit followed by an even faster crash... creating the perfect addiction cycle that keeps you reaching for more.

But what if you could get those mental benefits without the dependency?

Scientists have discovered that certain mushrooms, like Lion's Mane and Cordyceps, naturally enhance your brain's focus and clarity – without creating addiction.

There's just one problem.

When you take mushroom supplements orally, your digestive system destroys up to 90% of the beneficial compounds before they ever reach your brain.

That's why we created FLOW POUCHES.

These revolutionary pouches use the same placement as nicotine products – between your cheek and gum – but deliver something entirely different.

The functional mushroom compounds absorb directly through your oral tissues, bypassing your digestive system completely, and entering your bloodstream intact.

The result? Enhanced focus and mental clarity that doesn't fade into cravings.

Instead of the short-lived buzz of nicotine followed by the inevitable crash and craving, you experience sustained cognitive performance that actually builds over time.

Former smokers, vapers, and nicotine users report not just breaking free from dependency, but discovering mental performance they never experienced with nicotine.

INSERT A FEW QUICK 5 SECOND TESTIMONIALS HERE FROM RAINYDAYVIBES, KERBY...

Thousands have already made the switch. The only question is how much longer you'll wait to experience it yourself?

Try Flow Pouches today and see what your brain can do when it's TRULY free.

**CONTEXT FOR GENERAL AD EXAMPLE 1:**

- **Brand:** FLOW Pouches (https://flowpouch.com/)
- **Script Type:** General
- **Format:** Voiceover
- **Why we think it works:** We simply made a "mini-documentary" talking about what the "big tobacco industry" is hiding from people. Since this is a controversial video, it naturally grabs a lot of attention because people feel like they're being let in on some kind of secret information. Once we have the attention of the right audience, we masterfully take them on an emotional journey and get them invested in the video, we slowly build a narrative for them to adopt with the ultimate goal of obviously selling FLOW. This is done very tactically and every sentence in the script has its purpose, nothing is random. We frame the "industry" as a villain in the story but give people hope of escaping through our product. By the time we introduce FLOW, they're so bought in on the story, buying FLOW becomes a logical solution. But to get them to make that logical solution, we first had to get them emotionally invested and get them to believe everything we had to say.

**GENERAL AD EXAMPLE 2:**

Hook: How China's Track Team "LEGALLY Cheated" in 1993

Hold:

September 1993. Beijing, China. The World Track and Field Championships.

In just 15 days, a group of relatively unknown Chinese women runners didn't just win... they obliterated 3 world records.

The 1500 meters. The 3000 meters. The 10,000 meters. Records that had stood for years... GONE

The international running community was in shock. Accusations flew. Steroids? Doping? Drugs?

But every single test came back clean.

Then their coach, Ma Junren, revealed something that changed endurance sports forever.

His athletes weren't using synthetic drugs.

They were consuming something far more ancient... and far more powerful.

Cordyceps.

A rare fungus found only in the high mountains of Tibet.

Here's what they discovered that no one else knew...

Cordyceps increases ATP production - which boosts your energy on a cellular level. It also boosts VO2 max, your body's ability to use oxygen during exercise.

But here's the problem with traditional cordyceps supplements... up to 90% gets destroyed in your digestive system before reaching your bloodstream.

That's not efficient at all.

That's why we created Flow Pouches.

They deliver powerful functional mushrooms like cordyceps and Lion's mane directly through your oral tissues... straight into your bloodstream, activating the benefits almost instantly.

No digestion. No waste. Maximum absorption.

The same compound that helped unknown runners become world champions... now optimized for your performance.

**CONTEXT FOR GENERAL AD EXAMPLE 2:**

- **Brand:** FLOW Pouches (https://flowpouch.com/)
- **Script Type:** General
- **Format:** Voiceover
- **Why we think it works:** This script is a perfectly executed unaware ad. We basically wanted to target runners/athletes and sell them FLOW as a product that will help them perform better when training and improve their overall performance. We start the ad with a super curiosity driven hook of "Here's how China's track team legally cheated in 1993". This is a super super strong hook simply because it opens a loop in viewers minds, and most importantly the *right* viewer's minds (our target audience - runners). Hook also uses super strong words like "LEGALLY CHEATED" which is just interesting by itself and those 2 things usually don't go together. Then we go on and tell a story of how this "regular" China's team broke multiple world records and performed exceptionally well simply because they had this one cheat code, which is the ingredient we use in FLOW. And the fact that these were all just "regular" athletes before and after taking this miracle ingredient (Cordyceps) they became world champions, makes our next claims super believable because if it worked for them and gave them such dramatic results, then viewers think it'll 100% work for them too. So we used the China's track team as an authority to sell FLOW through masterful storytelling.

**GENERAL AD EXAMPLE 3:**

Hook: THE "HEALTHY" NIC RUMOUR IS DESTROYING YOU

Hold:

They told you this was safer than smoking.

They LIED.

Right now, nicotine is spiking your blood pressure to dangerous levels.

Constricting your blood vessels.

Forcing your heart to work overtime.

The very thing you use to calm down is causing panic.

But you keep reaching for another pouch.

Because you're ADDICTED.

And addiction doesn't care if it kills you.

Every single pouch is Russian roulette with your heart.

Every day you wait, the damage more permanent.

Flow Pouches give you a way out.

You can keep your ritual you love, without being destroying your health.

Replace the poison with healing mushrooms, like Lion's Mane and Cordyceps.

Your body can finally START HEALING.

Unlock clean, sustained focus without the risks.

Thousands are making the switch to protect their health.

Try FLOW Pouches today. Quit nic, keep your ritual.

**CONTEXT FOR GENERAL AD EXAMPLE 3:**

- **Brand:** FLOW Pouches (https://flowpouch.com/)
- **Script Type:** General
- **Format:** Text on screen
- **Why we think it works:** This script is targeting problem aware / solution aware market. We're going after people who are struggling with quitting nicotine / want to quit nicotine / are in the process of quitting nicotine. We immediately call out their belief that nicotine is actually healthy in the hook with "HEALTHY NIC RUMOUR". With some previous tests we did, we identified this type of audience is most resonative with negative messaging and "fear mongering" works the best. So when we clearly talk about all the problems they could have because of using nicotine and then present FLOW as a natural solution that basically helps them quit nicotine but keep the addiction (Because FLOW is in the form of pouches, and a lot of people are taking nicotine pouches). Throughout the script we basically dig in the knife with every sentence and make them FEEL all the issues that could be caused if they don't quit, we make them anxious, but then there's a huge payout because we present them the natural solution to fix their problem.

**GENERAL AD EXAMPLE 4:**

Hook: The real reason this "aggressive" shelter dog couldn't find a home will break your heart. This is Denali. He was returned to us by his adopters...

Hold:

The family stated he was "too aggressive" and "impossible to walk"

But we quickly discovered that they were using scary harnesses on him...

He struggled with anxiety and every collar or harness we tried caused him visible discomfort.

He wasn't aggressive - he was just reacting.

That's when we tried using the @dogfriendlyco harness.

The difference was immediate. For the first time, Denali walked without pulling or lunging.

The adjustable straps meant perfect fit for his large size.

No pressure points = no pain response

Just seconds to take on and off, completely stress-free.

After that, we saw his true personality come out almost instantly.

And two weeks later...

Denali found his forever home.

His owners still use his Dog Friendly Co. harness for every walk.

Sometimes the smallest change makes the biggest difference.

**CONTEXT FOR GENERAL AD EXAMPLE 4:**

- **Brand:** Dog Friendly Co. (https://www.dogfriendlyco.com/)
- **Script Type:** General
- **Format:** Text on screen
- **Why we think it works:** This script is a perfectly executed unaware ad. By doing market research, we identified that this type of audience (Dog owners) is really resonative with emotional stories, particularly when it comes to adopting dogs because that's a common thing a lot of dog owners do. So we wanted to find a way to tie our dog harness into that. We then came up with this incredible story about how dog was adopted from shelter but then returned due to bad behavior. We then blame the bad behavior on the collar he was wearing and that's the real reason he was pulling and behaving badly on walks. Then we introduce our product (a harness) that solves all of those problems. Script is executed almost as a combination of general/organic storytelling but we still tell the story as a brand. But the way we talk about the problem and introduce the product and solution is a very very smart way to do so because people most likely can't even notice they're being sold to. One huge reason for this ad doing well is the emotional aspect. We get people emotionally invested in watching the video right from the start with a super strong hook that captures the right audience. We then use their emotions to lead their logical mind to wherever we want.

**GENERAL AD EXAMPLE 5:**

Hook: WHY ARE YOU STILL CHOKING YOUR DOG IN 2025?

If you've ever walked a dog that pulls, you know that feeling – the constant tension, the struggle for control...

Getting choked by their collar isn't just uncomfortable for your dog – it's can lead to serious health issues, such as long-term tracheal damage.

What's worse is that most dogs will actually pull harder when they feel that pressure. It's not stubbornness or bad behaviour like many think – it's a natural physical response known as "the opposition reflex".

When dogs feel pressure on their neck, they instinctively push against it – causing even more throat strain in a continuous cycle.

This is why walking with a traditional collar can be problematic for many dogs, especially strong pullers.

Veterinarians have been researching this issue for years. Studies show that repeated pulling on collars can potentially lead to tracheal damage, increased eye pressure, and even thyroid issues over time.

(VET CLIP HERE)

As you saw, the veterinary community strongly recommends properly fitted harnesses over collars for walks.

And for the strongest of dogs, harnesses with front attachment points are the best way to go.

The science behind this is quite simple.

Front-attachment harnesses work with your dog's natural instincts instead of against them.

When your dog pulls, the harness redirects their forward momentum sideways instead of creating that harmful pressure on their throat.

The Dog Friendly Co harness was created to keep dogs of all sizes happy and safe.

The no-pull d-ring attachment gives you options depending on your dog's training – front attachment for pullers and back attachment for trained walkers.

With five adjustment points, it creates a custom fit for any body shape, eliminating both escape risks and uncomfortable pressure points.

Try Dog Friendly Co walking gear today with our 60-day perfect fit guarantee and lifetime warranty.

Both you and your dog will feel the difference immediately.

**CONTEXT FOR GENERAL AD EXAMPLE 5:**

- **Brand:** Dog Friendly Co. (https://www.dogfriendlyco.com/)
- **Script Type:** General
- **Format:** Voiceover
- **Why we think it works:** This script is a very good unaware/problem aware ad. It very strongly calls out target audience with a controversial hook that almost triggers people because we ask them "WHY ARE YOU STILL CHOKING YOUR DOG IN 2025", and we present the problem as some kind of common knowledge they're missing out on, so they almost get FOMO for not knowing what they're doing wrong and they again get emotionally invested in the ad. Then we masterfully continue talking about daily problems/struggles they face when walking the dog, we talk about it in a way that resonates with most dog owners and most of them can relate. We carefully scripted the entire script to take people through the entire emotional journey of getting introduced to the problem, and we blame it all on the "villain" in the story, which is collar. Because we had them emotionally invested, and a lot of people use collars, they now believe our story to be true. Which perfectly prepared them for our next claims we're about to make about Dog Friendly Co. Harness. From there we simply present the product, talk about all the problems it solves, etc. But that can only be effective because we set up the perfect foundation for it and prepared viewers before introducing the product.

**GENERAL AD EXAMPLE 6:**

Hook: Why some of the most famous dogs in history never wore what 90% of dogs do today.

Hold:

January 20th, 1925. Nome, Alaska.

A diphtheria outbreak was killing children, and the nearest life-saving serum was 674 miles away.

Planes were grounded. Roads were blocked by blizzards.

The only hope was a dog sled relay across some of the most brutal terrain on Earth.

If they failed, an entire town would die.

For six grueling days, teams of dogs battled through -40° temperatures, hurricane-force winds, and complete whiteouts.

Against all odds... the serum arrived just in time to save Nome.

But here's the secret that made their success possible - and why it matters for dog owners today...

Not a single one of those hero dogs - not Balto, not Togo, not any of the 150 dogs on that legendary run - wore a collar.

This wasn't by accident. And it wasn't just about that one rescue mission...

For 9,000 years, when survival literally depended on dogs, indigenous Arctic peoples never used collars.

Because they discovered something that could mean the difference between life and death for working dogs...

Collars put deadly pressure on your dog's throat and trachea.

Harnesses distribute that force safely across their chest and shoulders.

While your dog isn't pulling a sled across Alaska, but every time they pull toward a squirrel or get excited on a walk, that collar is creating the same dangerous pressure on their neck.

Dog Friendly Co.'s premium harnesses have a legacy design with modern features. With easy adjustment points to fit any size of dog, it only takes 2 seconds to slip it on and off.

When the fate of their town was on the line, the Alaskans trusted harnesses.

When your dog's comfort and safety are on the line, shouldn't you?

**CONTEXT FOR GENERAL AD EXAMPLE 6:**

- **Brand:** Dog Friendly Co. (https://www.dogfriendlyco.com/)
- **Script Type:** General
- **Format:** Voiceover
- **Why we think it works:** This script is a very good unaware ad. We found this story about how a group of dogs saved the entire village in 1920s in Alaska and we leveraged that story to make people believe they should get the harness for their dog, instead of a collar. We were able to get the right audience hooked in and watch the video, because every dog owner will want to watch a story about how dogs saved the entire village. Then we simply explain they were able to do it because every sled dog back in the days was actually wearing a harness and this isn't random and we go on to explain why harnesses are better than collars.

#### Organic ad examples

**ORGANIC AD EXAMPLE 1:**

Hook: Parenting must-have: STAINLESS STEEL HUMIDIFIER

Hold:

If you have a humidifier at home, let me show you something that actually blew my mind...

You know when your humidifier starts getting all gross and you can't really clean it properly?

Well...

Someone finally made one out of stainless steel. Like, actual stainless steel.

At first I was like, okay but why though? Then I realized - you can literally sterilize the whole thing. Like, fully clean it.

See how it just comes apart? No weird corners or spots you can't reach.

The craziest part is this was invented by a doctor who got tired of throwing away moldy humidifiers...

And look - This is after using it for a month. Still completely clean.

No more filters to buy either.

This is perfect for my baby girls nursery.

I wish someone told me about this sooner.

**CONTEXT FOR ORGANIC AD EXAMPLE 1:**

- **Brand:** Carepod (https://hellocarepod.com/)
- **Script Type:** Organic
- **Format:** Voiceover
- **Why we think it works:** This script is a problem aware / solution aware ad. We're going after people who either already have a humidifier and they're annoyed with constantly cleaning it OR after people who are thinking of getting a humidifier they're just not sure which one to choose. The script perfectly illustrates why you should get a Carepod humidifier instead of any other. Biggest Carepod's selling point is stainless steel interior. All other humidifiers are made of plastic and produce mold over time because they're so hard to clean, it gets annoying, etc. So we communicate all of this to the audience in a very organic and camouflaged way. We talk about the problem from a perspective of a mom who just happen to be sharing her finding about this thing and she's almost in shock that she discovered this. She's talking about everything super authentically and it just sounds like an organic piece of footage you would find online - but it's actually very tactically and masterfully planned out script. It highlights the problem, the solution, shows off main product benefits in a super organic way and noone can even tell it's an ad.

**ORGANIC AD EXAMPLE 2:**

Hook: Parenting must-have STAINLESS STEEL HUMIDIFIER

Hold:

If you have a humidifier at home...

I know you know that feeling when you look inside and your stomach just... turns?

That black gunk building up in all those impossible-to-reach corners?

I used to spend HOURS trying to scrub mine clean, but those tiny crevices are practically designed to trap mold.

And no matter how much I cleaned, that pink slime just kept coming back.

I can't tell you how many humidifiers I've thrown away because they got too disgusting to use.

And the worst part? I was literally spraying all that bacteria into the air my family was breathing.

Well...

Someone finally made one out of stainless steel.

At first I was like, okay but why though?

Then I realized - you can literally sterilize the whole thing to kill 99.99% of bacteria and mold.

Like, fully deep clean it.

See how it just comes apart? No weird corners or spots you can't reach. You can even boil these parts or put them in the dishwasher!

The craziest part is this was invented by a doctor who got tired of worrying about moldy humidifiers for his own kids...

And look -

This is after using it for a month. Still completely clean.

No more worrying about what's growing inside my humidifier.

No more filters to buy either, so it actually saves money over time.

This is perfect for my baby girl's nursery. Wish someone had told me about this sooner.

**CONTEXT FOR ORGANIC AD EXAMPLE 2:**

- **Brand:** Carepod (https://hellocarepod.com/)
- **Script Type:** Organic
- **Format:** Voiceover
- **Why we think it works:** This script is basically just a longer version of "ORGANIC AD EXAMPLE 1". Sometimes we notice that when we find an ad that does well, and we just expand on it and "sit in the problem longer", it performs even better. So this is exactly what we did with this script. We just expanded on the problem a bit, and made the script a bit longer and we were able to squeeze even more performance out of it. I wanted to include this in here to give you even more context on how we execute these organic scripts.

**ORGANIC AD EXAMPLE 3:**

Hook: Javaphile must-have NO MORE RESIDUAL TASTE

Hold:

You absolutely can NOT say you're a true coffee lover...

if you're still walking around with one of these things...

Like, you spend $5 a cup on your favorite brew and then... Yeah...

That metallic taste. Again.

Or worse - yesterday's coffee lingering no matter how much you scrubbed.

I've got a cupboard full of "solutions" – the vacuum-sealed tumbler, the stainless steel mug, the fancy plastic one with the complicated lid.

Each promised to preserve my coffee experience. None delivered.

Some left a metallic aftertaste. Others trapped flavors from previous drinks.

Most couldn't keep my coffee hot through my long commute.

My barista friend finally showed me the coffee cup she's obsessed with - it has a ceramic interior.

At first I was like, okay, will this really make a difference in how my drinks taste?

So I got around to giving it a try...

It's perfect. Pure, delicious, aromatic, just as it should be.

Not a hint of aftertaste, even hours later.

The craziest part? Even though it's ceramic - it's fully shatterproof.

Check this out...

And look - This is after using it for a month.

No coffee stains, no lingering flavors, nothing. Plus it just looks so... clean. Professional.

I get constant compliments on this thing.

Wish someone had told me about this sooner.

**CONTEXT FOR ORGANIC AD EXAMPLE 3:**

- **Brand:** Sttoke (https://sttoke.com/)
- **Script Type:** Organic
- **Format:** Voiceover
- **Why we think it works:** We're trying to communicate to people who are obsessed with their coffee and drinking coffee. Problem a lot of them have is they want to enjoy quality coffee and they want to preserve the taste but a lot of metallic cups and tumblers ruin the taste and are simply ineffective. Then we present Sttoke as the solution due to ceramic interior.

### Psychological principles reference guide

**Intensification techniques:**

1. Present claims in action, not static description
2. Show multiple satisfactions from different angles
3. Use sensory language to make benefits tangible
4. Create mental movies of transformation
5. Layer emotional benefits onto functional benefits

**Gradualization sequence:**

1. Start with accepted truth or common experience
2. Introduce small, logical extensions
3. Build agreement through "yes ladder"
4. Present larger claims only after preparation
5. Use prospect's own logic patterns

**Identification markers:**

1. Language patterns of target audience
2. Shared experiences and frustrations
3. Aspirational imagery and outcomes
4. Group membership signals
5. Values and belief alignment

**Emotional trigger words:**

- **Fear:** Hidden, exposed, shocking, warning, mistake, wrong
- **Curiosity:** Secret, discover, reveal, truth, actually, real
- **Urgency:** Now, today, limited, before, last, only
- **Belonging:** Us, them, community, together, exclusive
- **Authority:** Proven, scientific, expert, professional, certified

### Final rules for video ad scripts

1. **Emotion First, Logic Second:** Every logical point must be wrapped in emotional relevance
2. **Show Transformation:** Always paint the emotional before/after
3. **Create Urgency Through Loss:** What they'll miss or lose without action
4. **Use Specific Scenarios:** Help them see themselves in exact situations
5. **Layer Benefits:** Functional → Emotional → Social → Identity
6. **Address the Unspoken:** Say what they're thinking but won't admit
7. **Permission to Change:** Give them psychological safety to try something new

### Common emotional objections to overcome

1. **"I've tried everything"** → Show how this is fundamentally different
2. **"It's too good to be true"** → Use mechanism to explain why it works
3. **"People will judge me"** → Reframe as joining an enlightened group
4. **"I can't afford to fail again"** → Focus on small, risk-free first step
5. **"This isn't for people like me"** → Use relatable testimonials and situations

### The copywriter's mindset

Remember Eugene Schwartz's wisdom:

- "Copy is not written, copy is assembled"
- "You're building a city of desire for your prospect to come live in"
- "The copy writer is literally the script writer for your prospect's dreams"

Your job is not to create desire, but to channel existing desires toward your product. You are an archaeologist of human emotion, uncovering what already exists in your prospect's heart and giving it direction, form, and fulfillment through your words.

When writing, ask yourself:

- What does my prospect want to feel?
- What identity do they want to claim?
- What beliefs do they need validated?
- What transformation do they crave?
- What fear keeps them up at night?

Then craft every line to speak directly to these deeper truths.

### Leveraging live research for deeper market intelligence

Throughout the script creation process, don't rely solely on the brand's research files - actively investigate the current market landscape with web search and page fetches (and the scraper from `SETUP.md` if it is set up).

**Reddit deep dives:** Explore the communities where your target audience congregates. Look for:

- Exact phrases people use to describe their struggles
- Common complaints and frustrations
- Success stories and what made the difference
- Questions they ask repeatedly
- Emotional language they use when venting
- Slang, inside jokes, and community-specific terms
- What solutions they've tried and why they failed
- Their biggest fears and desires around the topic

**Broader market research:**

- Search for recent news about your product category
- Look for trending topics or controversies in the space
- Find forums, blogs, and communities beyond Reddit
- Research competitor reviews and customer complaints
- Investigate YouTube comments on related videos
- Check social media discussions about the problem/solution

**When to dig deeper:**

- If you need more specific language patterns from the target audience
- When you're unsure about current market beliefs or objections
- To verify if a hook angle is currently relevant or outdated
- To find fresh stories, examples, or proof points
- To understand competitive positioning in real-time
- To discover emerging trends or concerns in the market

Remember: The best scripts feel like they were written by someone embedded in the target audience's world. Use these tools to become that insider, speaking their language and addressing their exact, current concerns.

### Priority: quality over speed

This is not a race. You are crafting psychological precision instruments, not churning out generic content.

Take the time to:

- Thoroughly research using all available tools
- Consider multiple angle approaches before selecting the best
- Craft each line with deliberate intention
- Review and refine until every word earns its place
- Ensure perfect alignment with target audience psychology

A mediocre script delivered quickly will waste thousands in ad spend. A brilliant script that took extra time to perfect will scale profitably for months or years. Your reputation - and this brand's success - depends on creating scripts that consistently outperform.

Speed comes from preparation and process, not from rushing. Follow the framework, do the research, and trust that excellence takes the time it takes.

---

Close the loop: flag anything clunky, offer to sharpen this skill.
