---
name: market-research
description: Generate the comprehensive emotion-based market research document for a brand from its website, the live web, and everything in its research/ folder. Runs standalone, and is also Phase 2 of /new-brand. Use when the user wants to research a brand or types /market-research.
---

# /market-research

Generate the market research document for a brand. This is the foundation of everything - every avatar, desire, concept, and script downstream is built on this document.

## Workflow

1. Read `MANIFESTO.md`. Ask which brand if it is not obvious, then read that brand's `CONTEXT.md` and everything already in its `research/` folder. Do NOT ask the user for the website or product info - it is already in `CONTEXT.md`.
2. Run the full research method below. Mine the real world, not just the files: use web search and page fetches to pull genuine voice-of-customer (review pages, Reddit threads, forums, articles) and link every source. For the platforms search cannot reach - X, TikTok, and Instagram comments - use the Apify scraper if it is set up (see `SETUP.md`); free tier first, pay to win when the research matters. If it is not set up, note in the document which platforms went unmined.
3. Write the document straight to `brands/<slug>/research/market-research.md`. Build it section by section in the file - there are no chat length limits here, so never trim for space. Depth is the requirement.
4. Tell the user it is ready to review, and remind them of the manifesto: actually study it. The understanding has to live in their head, not the model's. Research is where the real work is.

## The method

**IMPORTANT:** This is an in-depth market research task that requires thorough investigation and detailed analysis. Take your time to conduct comprehensive research and produce a highly detailed report (aim for 25+ pages worth of content when formatted in a document). Quality and depth are significantly more important than speed.

You are creating a thorough market research document using an emotion-based approach that will identify scalable advertising opportunities. This document will serve as a marketing north star, providing deep insights into customer desires, problems, and the most powerful ways to position products in the marketplace.

### CRITICAL: SOURCE LINKS REQUIREMENT

**Every piece of information must be linked to its source.** This is non-negotiable and one of the most important aspects of this research.

Throughout this entire document, provide specific links to all sources of information. This includes but is not limited to:

- Direct links to competitor websites (not just homepage, but specific relevant pages)
- Direct links to specific Amazon product listings and reviews quoted
- Direct links to exact Reddit threads and comments referenced
- Direct links to social media posts, videos, and trends mentioned
- Direct links to articles, studies, or other relevant content cited

For each quote, statistic, claim, or insight, include the specific URL where the information was found. If you are unable to provide a direct link for any reason, clearly state this and explain why.

Format all links as proper clickable markdown hyperlinks: `[Descriptive text](URL)`

### STEP 1: BRAND & PRODUCT ANALYSIS

Thoroughly analyze the brand's website and available information to understand:

- What specific desire or problem does this product address? (Be precise and detailed)
- Is this a superior product, or is it using identity marketing?
- For superior products: What specific mechanisms make it better than alternatives? (Document at least 3-5 key mechanisms)
- For identity products: What specific community or identity is it targeting? (Provide detailed identity markers)
- How does the product position itself against both direct and indirect competitors? (Cite specific positioning statements)
- What mechanisms does the product use to deliver results? (Technical and emotional mechanisms)
- What is the price point relative to alternatives? (Include exact pricing when available)
- What is the brand's voice and tone? (Include at least 10 examples of specific language used)

As you analyze, make detailed notes on:

- The specific language used to describe benefits and problems (collect at least 20 key phrases)
- Whether the product is positioned as a new mechanism or a better version of an existing one
- How the product addresses failures of previous solutions (specific claims)
- Visual identity elements that communicate the brand's positioning
- Customer journey from awareness to purchase
- Guarantee or risk-reversal elements

This section should provide a comprehensive understanding of how the brand positions itself in the marketplace, with extensive examples and evidence.

### STEP 2: DESIRE AND PROBLEM MAPPING

Now that you're familiar with the brand and its products, conduct in-depth research to identify the core desires and problems in the marketplace:

- What are the primary desires that drive this market? (e.g., weight loss, more money, confidence, status)
- How urgent are these desires? (Scale of 1-10 with detailed explanation)
- What problems prevent people from achieving these desires?
- How many solutions have people typically tried before seeking new options?
- What is the emotional state of people in this market? (Desperate, curious, skeptical, hopeful)

For each desire and problem identified:

- Document at least 5-7 examples of the exact language customers use to describe it (use direct quotes with source links)
- Rate the intensity and urgency (1-10 with explanation)
- Analyze whether the desire is becoming stronger or weaker in the marketplace (with evidence)
- Identify emotional triggers associated with each desire/problem
- Note cyclical or seasonal patterns in these desires (if applicable)

This section should be highly detailed with numerous examples and should map the complete emotional landscape of the market.

### STEP 3: COMPETITOR & MARKET RESEARCH

Identify and analyze both direct and indirect competitors in extensive detail:

For direct competitors (similar products solving the same problem):

- List at least 10-15 key direct competitors with their websites (more if market is fragmented)
- Analyze their hooks and headlines - what desires do they appeal to? (Include direct quotes)
- Document the visual elements they use in ads (environments, actors, product demonstrations)
- Note their positioning strategies and key messaging (with specific examples)
- Identify which ads have been running the longest (likely the most successful)
- Compare pricing strategies and value propositions
- Analyze website structure and sales approach
- Evaluate credibility markers and trust signals used
- Document key claims and how they're substantiated
- Identify flagship products and product line structure

For indirect competitors (alternative solutions to the same desire):

- Identify at least 7-10 different categories of alternative solutions
- Analyze how these alternatives satisfy the same desire differently
- Examine the advantages and disadvantages compared to our product
- Document the language used to describe how they fulfill the desire
- Analyze price points and value propositions
- Identify which alternatives are gaining or losing market share
- Map the emotional connection between these alternatives and the target audience

For both types of competitors, document:

- Ad creative approaches that appear consistently
- Key marketing channels used
- Target audience segments
- Common objections addressed in marketing
- Guarantee structures and risk reversal tactics
- Customer success stories and how they're leveraged
- Seasonal or cyclical marketing patterns

This section should provide a comprehensive landscape analysis with detailed examples of competitor positioning and messaging.

### STEP 4: IDENTITY MARKERS RESEARCH

If the product uses identity marketing, conduct deep research on the identity group:

- What are the common values of this identity group? (Document at least 10 with examples)
- What visual markers identify members of this group? (Clothing, accessories, aesthetics, etc.)
- What language patterns are specific to this group? (Collect at least 20 phrases or terms)
- Who are the influencers and authorities this group respects? (List at least 15-20)
- What other brands successfully market to this identity? (Analyze at least 10)
- What common experiences unite this identity group? (Document at least 5-7)
- What media (podcasts, YouTube channels, publications) does this group consume?
- What are the aspirations and fears specific to this identity?
- How does this group signal belonging to others within the group?
- What opposing identities exist that this group defines itself against?
- How has this identity evolved over the past 5 years?

This research should be extensively documented with specific examples, quotes, and visual evidence to create a comprehensive identity profile.

### STEP 5: AMAZON RESEARCH

Conduct exhaustive analysis of relevant product listings and reviews on Amazon to discover:

- Customer language when describing problems and desires (include at least 30 direct quotes with links)
- What products have they tried before? What disappointed them? (Document patterns)
- What "a-ha moments" do customers describe when a product works? (Collect at least 15 examples)
- What visual proof do customers look for to believe a product works? (Identify patterns)
- What objections cause hesitation before purchasing? (Document at least 15)
- How do customers describe their decision-making process? (Collect specific quotes)
- What time frames do customers mention for seeing results? (Document expectations)
- How do customers describe the emotional impact of successful products?
- What specific feature comparisons do customers make between products?
- What price sensitivity factors are mentioned in reviews?
- What secondary benefits do customers discover that weren't originally sought?

List at least 40 direct quotes from reviews that provide insight into customer language, including both positive and negative experiences. Always include links to the specific Amazon product pages and reviews you referenced.

For related products, analyze:

- Question sections for common concerns
- Review distributions (star ratings) and what drives 1-star vs 5-star reviews
- Top-selling related products and their unique selling propositions
- Review velocity and trends over time

This section should provide an extensive library of authentic customer language organized by key themes.

### STEP 6: REDDIT RESEARCH

Conduct comprehensive research across relevant subreddits to understand authentic customer language and concerns:

- Identify at least 10-15 most relevant subreddits where this product category is discussed
- Document how people describe their desires (collect at least 30 direct quotes)
- Capture authentic language about failed attempts to satisfy the desire (at least 20 examples)
- Note recurring themes in success and failure stories (identify at least 10 patterns)
- Identify content that triggers strong emotional responses (both positive and negative)
- Analyze how people describe their decision-making process
- Document comparisons between alternative solutions
- Identify DIY approaches people take before purchasing products
- Note terminology differences between novices and experienced users
- Capture descriptions of ideal solutions (even if not currently available)
- Document price sensitivity discussions and value assessments

Provide at least 50 direct quotes showing how real users talk about:

- Their desires and what satisfying them would mean emotionally
- Their experiences with similar products
- Questions they have before purchasing
- Objections or hesitations they express
- Success stories and positive outcomes
- Disappointments and frustrations
- "Holy grail" product descriptions

For all Reddit content, include direct links to the specific threads where you found the information, formatted as proper hyperlinks.

This section should provide a rich understanding of authentic user language and concerns, organized by key themes and subreddits.

### STEP 7: SOCIAL MEDIA RESEARCH

Examine trending content across platforms like TikTok, Instagram, and Facebook Ads to identify:

#### Hook Analysis

- Analyze 20-25 of the most successful hooks used in viral videos
- Identify which hook patterns are most effective:
  - Measuring the size of the claim (e.g., "Make an extra $10,000 a month")
  - Measuring the speed of the claim (e.g., "How to double your results overnight")
  - Using authority figures (e.g., "Leading expert reveals...")
  - Before and after scenarios (e.g., "Before this, I was stuck...")
  - Comparing to rivals (e.g., "3x faster than traditional methods")
  - Removing limitations (e.g., "Even if you have no experience")
  - Question-based hooks (e.g., "Who else wants to achieve X without Y?")
  - Information-offering hooks (e.g., "How to do X in 2024")
  - Newness emphasis (e.g., "NEW strategy doubles results")
  - Exclusivity emphasis (e.g., "The only solution that actually works")
  - Belief-challenging (e.g., "I thought X was impossible until...")
  - Direct call-outs (e.g., "To the person who has tried everything...")
- Document which hooks appear to be running longest (indicating success)
- Analyze hook variations for the same product/brand
- Identify seasonal or timely hook patterns

#### Visual Analysis

- Identify which ads use these visual approaches:
  - Picture of the benefit (showing the desired outcome)
  - Picture of the problem (showing what's being solved)
  - Picture of the product (focusing on the item itself)
  - Picture of the product in action (demonstrating use)
- Note the environments where products are shown (luxury settings, everyday homes, etc.)
- Document the types of people shown in ads (demographics, styles, personas)
- Analyze what visuals provide "belief" in the product's effectiveness
- Identify visual patterns in high-performing ads
- Document production quality trends (professional vs. authentic)
- Analyze color schemes and visual identity elements
- Note visual transitions and pacing in video content
- Identify text overlay patterns and styles
- Document camera angles and perspective choices

#### Comment Section Deep Dive

- Analyze at least 100 comments across viral posts to identify patterns
- Group comments by themes (questions, objections, enthusiasm, testimonials, etc.)
- Note specific language patterns in how people express interest or skepticism
- Identify what aspects of products/content generate the most emotional responses
- Document "wish I had known" or "I need this because" comments that reveal pain points
- Analyze what people are tagging friends in and why
- Identify sentiment patterns in comments (excited, skeptical, hopeful, frustrated, etc.)

#### Influencer and Trend Analysis

- Identify 5-10 key influencers in the niche and analyze their content strategies
- Document trending hashtags and content themes in the niche
- Note emerging visual styles or content formats gaining traction
- Identify seasonal or cyclical trends in content performance
- Analyze crossover trends from adjacent niches that might apply

#### Content Structure Analysis

- Identify which content follows these structures:
  - Symptom → Problem → Solution → Product → Offer
  - Problem → Solution → Product → Offer
  - Solution → Product → Offer
  - Product → Offer
  - Offer only
- Document the balance between emotional appeals and logical explanations
- Note how long successful ads tend to be (short vs. comprehensive)
- Identify seasonal or urgency elements in successful content
- Analyze how objections are addressed within content
- Document credibility-building elements
- Identify storytelling patterns and narrative structures
- Note how offers are presented and framed
- Analyze call-to-action approaches and placement

For each platform, provide platform-specific insights about:

- Content duration trends
- Engagement patterns
- Music and sound design elements
- Caption and hashtag strategies
- Collaboration and UGC approaches

Provide examples of:

- 20-25 viral hooks with links to the original content
- 20-30 representative comments showing customer language patterns
- 15-20 representative visual approaches with examples
- 7-10 content structure patterns that seem most effective
- 10-15 examples of successful calls-to-action
- 5-7 trending visual styles with examples
- 3-5 trending hashtags relevant to the product category

Include links to specific posts, videos, or accounts whenever possible, formatted as proper hyperlinks.

This section should provide a comprehensive analysis of what's working in social media for this market, with extensive examples and pattern recognition.

### STEP 8: MARKET SOPHISTICATION ANALYSIS

Based on market sophistication levels:

1. Determine the market's sophistication level (1-5) with detailed evidence:
   - Level 1: New product with little competition
   - Level 2: Competition exists, claiming similar benefits
   - Level 3: Market saturated with similar claims
   - Level 4: Market disillusioned with previous claims
   - Level 5: Market highly educated and skeptical
2. Identify the appropriate positioning strategy based on sophistication:
   - New mechanism in the marketplace (explain in detail)
   - Superior product with better results (specify key differentiators)
   - Identity marketing to a specific group (detail identity markers)
   - Depositioning competitors (identify weaknesses to target)
   - Repositioning for a different desire (identify alternative desires)

For each potential positioning strategy:

- Provide specific examples of how it could be implemented
- Identify risks and challenges
- Document examples of successful implementation in similar markets
- Analyze required proof elements for each approach

This section should provide a strategic framework for positioning based on market conditions, with detailed examples and rationale.

### STEP 9: AD STYLE ANALYSIS

Analyze which types of ads are most effective in this market with extensive examples:

- Professional vs. user-generated content (provide at least 10 examples of each)
- Emotional vs. logical appeals (document patterns with examples)
- Bright side (benefits) vs. dark side (problems) focus (analyze which performs better)
- Simple vs. complex explanations (document preferences with examples)
- Short-form vs. long-form content (analyze performance patterns)
- Serious vs. humorous tone (document which resonates more)
- Seasonal vs. evergreen approaches (identify patterns)
- Male vs. female presenters/voices (if relevant)
- Solo presenters vs. group settings
- Studio vs. real-world environments
- Text-heavy vs. image-focused approaches
- Technical vs. lifestyle framing

For each style element:

- Provide specific examples from the market
- Analyze why certain approaches might work better
- Document any pattern changes over time
- Identify outliers that succeed despite bucking trends

This section should provide detailed guidance on creative approach based on what's working in the market, with numerous examples and rationale.

### THROUGHOUT ALL RESEARCH, DOCUMENT:

- Top 30 desire statements ranked by frequency and emotional intensity (with examples and sources)
- Top 30 problem statements ranked by urgency and pain (with examples and sources)
- Top 20 hooks that could be adapted for this product (with examples of successful use)
- 15-20 common objections and detailed explanations of how to address them (with evidence)
- Market sophistication level (1-5) with extensive explanation and evidence
- Customer awareness level (1-5) with detailed analysis of awareness stages
- Top 10 visual proof elements that build belief in this market (with examples)
- Top 10 mechanisms that drive belief in product efficacy (with examples)
- Social proof elements that matter most to this audience (with examples)
- 20+ buzz words and phrases ranked by frequency and impact (with sources)
- 15+ customer success story patterns (with examples)

For all information gathered, include links to source material whenever possible to verify claims and allow for further exploration.

### THE FINAL DOCUMENT WILL ANSWER THESE QUESTIONS:

#### ABOUT THE DESIRE & PRODUCT:

- What is the primary desire this product fulfills? (Provide detailed analysis)
- How urgent is this desire in the marketplace? (Include evidence and examples)
- What specific emotional states drive purchases in this market? (Document with examples)
- What have people tried before to satisfy this desire? (List at least 10 alternatives)
- Why have previous solutions failed them? (Document specific failure patterns)
- What unique mechanism does this product use to satisfy the desire? (Detailed explanation)
- What "proof" do customers need to believe this product will work for them? (List at least 10 proof elements)
- How can we visually demonstrate this proof in advertising? (Specific visual strategies)
- What is the right positioning strategy for this market's sophistication level? (Detailed recommendation)
- What language patterns resonate most strongly with this desire? (At least 20 examples)
- How EASY is it to USE this product and get results? (e.g., effort, sacrifice, cost - detailed analysis)
- How FAST can someone expect to see results from this product? (Timeline expectations with evidence)
- What is the best way to "SHOW, NOT JUST TELL" for this particular product? (Visual strategy)
- What are the most effective credibility markers for this market? (List and explain at least 10)

#### ABOUT THE AUDIENCE:

- What is the product aimed at? (Age, gender, location, problem, income, etc. - create detailed personas)
- What is the market AWARENESS level of this audience? (Detailed analysis with examples)
- What is the market SOPHISTICATION level of this audience? (Detailed analysis with examples)
- What is their PAIN POINT? (Comprehensive documentation with examples)
- What are SYMPTOMS of their pain point? (List at least 15 with examples)
- What is the UNIQUE MECHANISM behind their pain point? (WHY they're struggling with this problem)
- What are they AFRAID of? (Document at least 10 specific fears with examples)
- What are they ANGRY about? Who are they angry at for their problems? (Detail with examples)
- What are their top daily FRUSTRATIONS? (List at least 15 with examples)
- What are they EMBARRASSED about? (Document social anxieties with examples)
- If they were to describe their problems and frustrations TO A FRIEND over dinner, what would they say? (Create 5+ detailed conversational examples)
- What is keeping them from solving their problems NOW? (Document at least 10 barriers with examples)
- What would their ideal day look like if this problem were solved? (Create detailed scenario)
- How do they measure success in this area? (Document success metrics)

#### BELIEFS AND BUYING BEHAVIOR:

- Which PERSONALITIES and CELEBRITIES who use this product do our audience look up to? (List at least 15-20)
- What brands in the industry do they respect, and why? (Document at least 10 with explanations)
- What do they currently believe is true about themselves and the problems they face? (Document belief systems)
- What are some BUZZ phrases that each avatar resonates with? (List at least 30 with sources)
- Is there a belief that the market's pain points used to NOT exist, or USED TO NOT BE SO BAD? (Historical analysis)
- Do they blame anyone or any outside forces for their current problems and frustrations? If so, who and why? (Document attribution patterns)
- What is the audience already using as solutions to their problems? (Comprehensive mapping of alternatives)
- What does the audience LIKE about existing solutions? (Document positive aspects)
- What do they DISLIKE about existing solutions? Any "horror stories" about existing solutions? (Document negative aspects)
- How do they evaluate and decide if a solution is going to work or not? (Document decision criteria)
- What character traits do they VALUE in themselves and others? (List at least 15 with examples)
- What character traits do they DESPISE in themselves and others? (List at least 15 with examples)
- What market TRENDS are they aware of? What do they think about these trends? (Document trend awareness)
- What "TRIBES" do they belong to? How do they signal and gain STATUS within these tribes? (Identity analysis)
- Who actually buys the product? (if not the same as the described target audience - detailed analysis)
- What are the purchasing triggers that finally push them to buy? (Document at least 10)
- Who are the best buyers - the ones who spend the most/pay the most upfront or come back over and over again? (Value analysis)
- What do buyers say they love about the product? (Document top benefits cited)
- What do buyers complain about the product? (Document top complaints)
- What does the ideal customer journey look like? (Map awareness to conversion)

### AD CONCEPT RECOMMENDATIONS

Based on all research conducted, develop at least 5 advertising concepts specifically designed to attract NEW CUSTOMERS. Remember that these potential customers have never heard of the brand and do not care about the brand itself - they only care about their own problems, desires, and needs.

For each ad concept, provide:

**Concept Name:** A descriptive title for the ad concept

**Positioning Strategy:**
- New mechanism in the marketplace
- Superior product in the marketplace
- Identity marketing to a specific group

**Ad Format:** Specify if this would work best as a static image ad, video ad, carousel ad, or UGC concept

**Primary Avatar:** Which specific customer persona this ad targets

**Key Desire/Pain Point:** The primary emotional driver for this concept

**Hook/Headline:** Create 5-7 hook variations using effective hook patterns

**Visual Concept:** Detailed description of what the ad should show visually, using one of the four approaches:
- Picture of the benefit
- Picture of the problem
- Picture of the product
- Picture of the product in action

**Ad Structure:** Specify which structure to follow:
- Symptom → Problem → Solution → Product → Offer
- Problem → Solution → Product → Offer
- Solution → Product → Offer
- Product → Offer
- Offer only

**Script Draft:** A detailed script that follows the selected structure

**Visual Proof Elements:** The specific visuals that will build belief in the product

**Call to Action:** The specific next step you want the viewer to take

**Urgency Element:** How to create a sense of time sensitivity (if appropriate)

**Objection Handling:** How the ad addresses the top 2-3 objections

**Why This Will Work:** Detailed explanation of why this concept will resonate with new customers, citing specific research findings

These ad concepts should:

- Show potential customers that we understand their desires and problems
- Present the product as a solution using the appropriate positioning strategy
- Use language patterns discovered in your research
- Address common objections preemptively
- Leverage visual styles that have proven effective in the niche
- Stand out from competitor advertising approaches
- Use hooks that have been proven to work in this niche
- Create belief through visual proof
- Focus on one desire or problem per ad

### FINAL ANALYSIS

Conclude with a comprehensive strategic analysis that includes:

1. Market Opportunity Assessment:
   - Market size and growth potential
   - Competitive landscape analysis
   - Key market trends affecting the product
   - Barriers to entry and growth
2. Positioning Recommendation:
   - Optimal positioning strategy with rationale
   - Key differentiators to emphasize
   - Potential repositioning opportunities
3. Message Strategy:
   - Core value proposition
   - Key messaging hierarchy
   - Message adaptation for different customer segments
   - Objection handling framework
4. Channel Strategy:
   - Recommended marketing channels based on audience behavior
   - Content format recommendations by channel
   - Suggested testing approach for scaling
5. Strategic Roadmap:
   - Short-term (1-3 months) marketing priorities
   - Medium-term (3-6 months) scaling opportunities
   - Long-term (6-12 months) market expansion possibilities

Remember, this is a comprehensive research task that requires depth and detail. Take adequate time to produce a thorough analysis rather than rushing through the process. The goal is to create an exceptionally valuable market research document that serves as a foundation for all marketing activities.

---

Close the loop: if anything was clunky or a section underperformed, say so and offer to sharpen this skill.
