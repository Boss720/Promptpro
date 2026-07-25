import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'marketing-sales-hook-sharpener',
    title: 'Sales Copy & Value Hook Generator',
    category: 'marketing',
    tags: ['copywriting', 'sales', 'value-prop'],
    description: 'Creates magnetic headlines and opening hooks that make {{product}} irresistible to {{audience}}.',
    body: `You are a high-conversion copywriter. A marketer has a product:

**Product:** {{product}}
**Target audience:** {{audience}}
**Key benefit:** {{primary_benefit}}

Generate 5 lead sentences (10–20 words each) that could start an ad, landing page, or email. Each should:
- Open with a clear benefit or curiosity gap (not a feature).
- Use active voice and specific language (not "amazing" or "great").
- Speak directly to your audience's desire or pain point.

**Formats to try:**
1. **Promise + timeframe** — "Finish {{primary_benefit}} in {{time}} without {{obstacle}}."
2. **Forbidden secret** — "{{Audience}} won't tell you {{surprising_fact}} about {{product_category}}."
3. **Status quo flip** — "Everyone thinks {{common_belief}} about {{product_type}}. They're wrong."
4. **Specificity hook** — {{specific_number}}% of {{audience}} never discover {{benefit}}. Here's why."
5. **Reverse psychology** — "This {{product}} is definitely not for {{wrong_audience}}. It's for {{right_audience}}."

**Evaluation:** Which feels most magnetic to you? Which best captures the difference between this product and competitors?

**Output:** Your top 3 hooks ranked by conversion potential, plus one-line reasoning for each.`,
    variables: [
      { name: 'product', label: 'What you\'re selling', placeholder: 'Productivity software, online course, fitness app' },
      { name: 'audience', label: 'Who you\'re selling to', placeholder: 'Busy executives, creative professionals, college students' },
      { name: 'primary_benefit', label: 'Core transformation', placeholder: 'save 5 hours per week, finally learn guitar, eliminate procrastination' },
    ],
  },
  {
    id: 'marketing-landing-page-structure',
    title: 'High-Converting Landing Page Blueprint',
    category: 'marketing',
    tags: ['landing-page', 'conversion', 'design'],
    description: 'Outlines a battle-tested landing page structure with copy for each section.',
    body: `You are a conversion-rate expert. A marketer is building a landing page for {{offer}}.

**The high-conversion framework:**

1. **Hero section** (headline + subheadline + CTA)
   - Headline: State the transformation, not the tool. (Not "Project management software" → "Ship projects 40% faster")
   - Subheadline: Elaborate on WHO it's for and the key benefit.
   - CTA: One action. (Sign up, book a demo, start free trial)

2. **Social proof** (3–5 items, max 50 words each)
   - Quote from a real customer (specific result, name, title)
   - Stat (X% saw Y improvement)
   - Press mention or logo partner
   - Case study thumbnail or testimonial video

3. **The problem** (2–3 sentences + painful image/video)
   - Name the status quo pain your audience tolerates.
   - Show, don't tell: use relatable scenario or visual.

4. **The solution** (3–4 key features as benefits, not feature lists)
   - Benefit-driven: "Never write a report again" not "Automated reporting."
   - Speak to outcomes: time saved, confidence gained, stress eliminated.

5. **Social proof 2** (customer logos or "trusted by")

6. **FAQ section** (4–6 common objections as Q&A)
   - Use actual support tickets or chat transcripts as inspiration.

7. **Strong CTA** (same call-to-action as hero, or urgency layer)
   - Add scarcity or edge: "Limited spots for free consulting call."

**Output:** Write the exact copy for each section (headline, subheadline, 3 customer quotes, 3 feature benefits, 3 FAQ answers, closing CTA).`,
    variables: [
      { name: 'offer', label: 'What\'s being promoted', placeholder: 'SaaS tool, online course, service, free trial' },
    ],
  },
  {
    id: 'marketing-email-sequence-planner',
    title: 'Email Sequence & Nurture Campaign Architect',
    category: 'marketing',
    tags: ['email', 'automation', 'nurture'],
    description: 'Maps a multi-email sequence that educates, builds trust, and moves {{audience}} to {{cta}}.',
    body: `You are an email strategist. A marketer wants to nurture {{audience}} toward {{desired_action}} through email.

**The proven sequence structure:**

**Email 1 (Welcome)** — Sent immediately after signup
- Goal: Set expectations and deliver promised value.
- Hook: Reference what they signed up for.
- Content: 1 quick win (resource, tip, checklist).
- CTA: Soft (read a guide, watch a video).

**Email 2 (Story/Problem, Day 2–3)**
- Goal: Build connection; deepen their problem awareness.
- Hook: Personal story or surprising stat.
- Content: Explain the core problem your solution solves.
- CTA: Mild interest test (reply with your biggest challenge).

**Email 3 (Solution Introduction, Day 5–7)**
- Goal: Introduce your offer without hard sell.
- Hook: Case study or customer win.
- Content: How customers solved the problem; what changed for them.
- CTA: Soft (learn more, request a demo).

**Email 4 (Objection Handling, Day 10–12)**
- Goal: Address hesitation (cost, complexity, time investment).
- Hook: "Common concern from customers..."
- Content: FAQ or objection reversal (why the barrier is actually a filter for serious people).
- CTA: Invitation to ask questions.

**Email 5 (Urgency + Close, Day 14–16)**
- Goal: Move undecided prospects to decision.
- Hook: Scarcity or limited-time bonus.
- Content: Last success story; urgency layer (offer expires, spots filling).
- CTA: Strong (claim the offer).

**Segmentation:** Should any emails branch based on user behavior (clicks, opens, reply)?

**Output:** Full email copy for all 5 emails, including subject lines.`,
    variables: [
      { name: 'audience', label: 'Who receives these emails', placeholder: 'E-commerce store owners, solopreneurs, HR managers' },
      { name: 'desired_action', label: 'The goal conversion', placeholder: 'book a consultation, purchase the course, sign a contract' },
    ],
  },
  {
    id: 'marketing-ad-copy-generator',
    title: 'Performance Ad Copy Multivariate Generator',
    category: 'marketing',
    tags: ['ads', 'ppc', 'social-ads'],
    description: 'Generates multiple ad angles and headlines for A/B testing on {{platform}}.',
    body: `You are a performance marketer. You need {{ad_count}} variations of ad copy for {{platform}} promoting {{offer}}.

Each ad should have a different angle—don't reword the same selling point five times. Each angle speaks to a different buyer motivation.

**Ad angles to rotate:**
1. **Speed/efficiency** — "Get {{outcome}} in {{timeframe}}, not months."
2. **Certainty/guarantee** — "If you don't see {{specific_result}}, we refund you."
3. **Exclusivity/scarcity** — "Only {{number}} spots left for the {{offer}}."
4. **Social proof/FOMO** — "{{number}}% of {{audience}} tried it. You're next?"
5. **Education/curiosity** — "The {{surprising_fact}} most {{audience}} don't know about {{category}}."

**For each ad, include:**
- **Headline 1 & 2** (35–40 chars each on most platforms)
- **Description** (80–90 chars)
- **Display URL** (the visible link)
- **CTA button** (if platform supports it)

**Platform considerations:**
- Google Ads: Follow character limits; be specific.
- Facebook: Conversational tone; storytelling angle.
- LinkedIn: Professional benefit; career/business outcome.

**A/B test hypothesis:** Which angle do you predict will win? Why?

**Output:** {{ad_count}} complete ads with clear angle labels, plus predicted winner.`,
    variables: [
      { name: 'ad_count', label: 'Number of variations', default: '5', placeholder: '3, 5, 8' },
      { name: 'platform', label: 'Ad platform', placeholder: 'Google Ads, Facebook, LinkedIn, Instagram' },
      { name: 'offer', label: 'What you\'re advertising', placeholder: 'E-book, SaaS trial, coaching call, product discount' },
    ],
  },
  {
    id: 'marketing-audience-research-interviewer',
    title: 'Customer Research Question Framework & Insights Extractor',
    category: 'marketing',
    tags: ['research', 'audience', 'insight'],
    description: 'Generates deep customer research questions that uncover buyer psychology and messaging triggers.',
    body: `You are a market researcher. Before writing copy, you need to understand {{audience}} deeply.

Generate 12–15 customer research questions for interviews or surveys. These should dig into:

**Segment 1: Problem & pain (4–5 Qs)**
- What's the biggest frustration {{audience}} faces in {{category}}?
- When does this problem cost them the most (time, money, confidence)?
- What have they already tried? What failed?
- What outcome would change their life or business?

**Segment 2: Language & beliefs (4–5 Qs)**
- How would a customer DESCRIBE their problem in their own words? (Use their terminology in copy.)
- What do they believe is the cause? (Even if wrong, mirror this belief early, then correct it.)
- What's the biggest misconception they have? (Clarify this in your copy.)
- What success looks like to them? (Use their definition, not yours.)

**Segment 3: Buying behavior (3–4 Qs)**
- What makes them trust a brand or solution in this space?
- Who influences their decision? (Colleague, manager, spouse?)
- What objections would stop them from buying? (Price, complexity, time to implement?)
- What would make them feel like they made the right choice?

**After interviewing 5–10 customers:**
- Extract the 3–5 most compelling phrases they used.
- Identify the single biggest objection or fear.
- Note unexpected findings (surprises often become great copy angles).

**Output:** All 15 questions, plus space for customer quotes/themes post-interview.`,
    variables: [
      { name: 'audience', label: 'Target customer', placeholder: 'Solo freelancers, enterprise IT directors, fitness enthusiasts' },
    ],
  },
  {
    id: 'marketing-positioning-statement-writer',
    title: 'Brand Positioning & Competitive Differentiation Mapper',
    category: 'marketing',
    tags: ['positioning', 'strategy', 'branding'],
    description: 'Crafts a clear positioning statement that distinguishes {{brand}} from competitors in {{market}}.',
    body: `You are a brand strategist. Before writing any copy, establish a rock-solid positioning statement.

**Positioning formula:**

For **{{target_audience}}**
Who want **{{core_need}}**,
**{{brand}}** is the **{{category}}**
That **{{key_differentiator}}**
Unlike **{{competitor_positioning}}** which **{{competitor_weakness}}**.

**Your task:**

1. **Fill the formula** with specificity (not generic).
   - Don't say "best" or "only"—say why. Examples: "fastest setup," "most affordable," "designed for {{specific_need}}."

2. **Competitive audit** — List your top 3 competitors and their positioning.
   - How are they positioned? (Low-cost? Premium? Easy? Powerful?)
   - What gap exists that you can own?

3. **Test your positioning:**
   - Can you explain it in one sentence?
   - Does it appeal to a specific audience (not everyone)?
   - Is it defensible? (Can a competitor claim the same thing?)
   - Does it guide your product roadmap and marketing?

4. **Brand archetype** — Which archetype aligns with your positioning?
   - Hero (challenger, disruptor), Mentor (trusted advisor), Everyman (accessible, relatable), Innovator (cutting-edge), Caregiver (service-focused)?
   - This archetype should color your tone, messaging, and visual identity.

5. **Messaging pillars** — From your positioning, extract 3 core messages you'll repeat across all marketing.

**Output:** Your positioning statement + 3 messaging pillars + predicted competitor response.`,
    variables: [
      { name: 'target_audience', label: 'Ideal customer', placeholder: 'Mid-market SaaS companies, college-bound students' },
      { name: 'core_need', label: 'Primary customer need', placeholder: 'manage their workload, reduce hiring time' },
      { name: 'brand', label: 'Your company/product name', placeholder: 'Acme Corp' },
      { name: 'category', label: 'What category you compete in', placeholder: 'project management tool, tutoring platform' },
      { name: 'key_differentiator', label: 'What makes you different', placeholder: 'solves this in 50% less time' },
      { name: 'market', label: 'Market you\'re competing in', placeholder: 'productivity software, ed-tech' },
    ],
  },
  {
    id: 'marketing-case-study-architect',
    title: 'Case Study Outline & Success Story Script',
    category: 'marketing',
    tags: ['case-study', 'proof', 'storytelling'],
    description: 'Structures a persuasive case study that highlights {{customer_type}} achieving {{key_result}}.',
    body: `You are a case-study strategist. Case studies are one of the highest-converting content assets. Structure matters.

**The winning case study framework:**

1. **Opening hook** (2–3 sentences)
   - Introduce the customer and their problem in human terms.
   - Example: "{{customer_name}}, a {{role}} at {{company}}, was drowning in {{specific_problem}}."

2. **The challenge** (150–200 words)
   - What was the status quo? (How were they solving this before? What was broken?)
   - What metrics/KPIs were failing? (Be specific: conversion dropped 23%, team spent 15 hours/week on X)
   - Why was this a crisis? (Business impact: lost revenue, wasted time, team morale)
   - Why didn't they solve it themselves? (Lacked expertise, time, budget)

3. **Why they chose you** (75–100 words)
   - What made your solution different?
   - Did they try competitors? Why did you win?
   - Was there skepticism? How did you overcome it?

4. **The implementation** (100–150 words)
   - Walk through the process (not generic; specific steps they took with you).
   - Timeline: How long did it take to see results?
   - Any surprises or pivots?

5. **The results** (Quantified, specific)
   - Primary metric achieved. (Not "improved," but "increased X by {{number}}%")
   - Secondary wins. (Time savings, staff morale, new capabilities)
   - Business impact. (Revenue, cost savings, new opportunities)
   - Quote: A pull quote from the customer on results and ROI.

6. **The outcome** (50–75 words)
   - What changed for them today?
   - What's next for them?
   - Testimonial: "We'd recommend… because…"

**Delivery:** Write the full case study (800–1000 words) + pull-quote candidates + metrics graphic suggestion.`,
    variables: [
      { name: 'customer_type', label: 'Customer industry/role', placeholder: 'mid-market e-commerce, freelance designers' },
      { name: 'key_result', label: 'Primary transformation', placeholder: 'cut campaign time by 60%, grew revenue 3x' },
    ],
  },
  {
    id: 'marketing-social-media-post-batches',
    title: 'Social Media Content Calendar & Post Formulas',
    category: 'marketing',
    tags: ['social-media', 'content', 'engagement'],
    description: 'Generates a variety of {{quantity}} social posts for {{platform}} aligned with {{brand_voice}}.',
    body: `You are a social media strategist. Generate {{quantity}} unique social posts for {{platform}} over {{time_period}}.

**Rotate across these post types (don't repeat format):**
1. **Educational/tip** — A simple, actionable takeaway. Format: problem → solution → result. (Most shareable)
2. **Behind-the-scenes** — Show work, personality, team culture. Build connection and relatability.
3. **Customer story** — Brief win or testimonial. Make it about THEM, not your product.
4. **Question/engagement** — Ask something that prompts replies (polls, "what's your..." questions).
5. **Content link** — Promote a guide, blog, webinar. Hook them with benefit, not just "read this."
6. **Trend/newsjack** — Tie current events to your message. (Only if authentic; don't force it.)
7. **Announcement** — Feature launch, milestone, event. Make it celebratory and inclusive.

**For each post, include:**
- **Copy** (tailored to {{platform}}'s character limits; {{platform}} specific voice)
- **Hashtag strategy** (2–5 relevant, mix popular + niche)
- **CTA** (reply, visit link, save post, share)
- **Visual description** (photo, video, carousel, graphic type)
- **Posting time** (optimal day/time for {{platform}})

**Tone:** Your posts should reflect {{brand_voice}} throughout.

**Output:** {{quantity}} complete posts (with copy, hashtags, CTA, visual type, post time) + simple content calendar showing spread across {{time_period}}.`,
    variables: [
      { name: 'quantity', label: 'Number of posts to create', default: '10', placeholder: '5, 10, 20' },
      { name: 'platform', label: 'Social platform', placeholder: 'Twitter/X, LinkedIn, Instagram, TikTok' },
      { name: 'time_period', label: 'Posting schedule', default: 'two weeks', placeholder: 'one week, one month' },
      { name: 'brand_voice', label: 'Brand tone', placeholder: 'playful and irreverent, professional and insightful, warm and funny' },
    ],
  },
  {
    id: 'marketing-cta-button-optimizer',
    title: 'Call-to-Action (CTA) Button Tester',
    category: 'marketing',
    tags: ['cta', 'conversion', 'optimization'],
    description: 'Generates multiple CTA copy variations to test against your current button and predicts winner.',
    body: `You are a conversion optimizer. A small change to a CTA button can lift conversions 10–30%.

**Current CTA:** {{current_cta}}

Generate 8 alternative CTA options. Each should:
- Be action-oriented (start with a verb when possible).
- Create urgency or clarity about what happens next.
- Remove friction (not "submit form" but "get your free guide").
- Vary in approach (don't reword the same idea).

**CTA approaches to test:**
1. **Benefit-driven** — "Unlock {{benefit}}" or "Start saving time"
2. **Action-specific** — "Claim my {{offer}}" or "Schedule a demo"
3. **Curiosity** — "See how it works" or "Show me the results"
4. **Urgency/scarcity** — "Reserve my spot" or "Grab the discount now"
5. **Social proof direction** — "Join {{number}} users" or "See what others built"
6. **Question format** — "Ready to {{outcome}}?" (Less common; tests well sometimes)
7. **Personal pronoun** — "My {{outcome}}" or "Get my {{deliverable}}"
8. **Reverse psychology** — "Not sure? See if it's right for you" (softens for skeptical audiences)

**For each CTA:**
- **Copy** (2–5 words)
- **Psychological hook** (why this angle might work)
- **Ideal audience** (who this resonates with most)
- **Risk** (any downsides to this wording?)

**A/B test recommendation:** Which 2–3 CTAs would you test against {{current_cta}}? Rank them by predicted lift.`,
    variables: [
      { name: 'current_cta', label: 'Your current button text', placeholder: 'Sign Up Now, Learn More, Submit' },
    ],
  },
  {
    id: 'marketing-product-launch-campaign',
    title: 'Product Launch Campaign Timeline & Messaging',
    category: 'marketing',
    tags: ['launch', 'campaign', 'strategy'],
    description: 'Maps a {{launch_duration}} launch campaign with messaging, channels, and activation milestones.',
    body: `You are a launch strategist. A product is launching in {{launch_duration}} and needs a coordinated campaign.

**Pre-launch phase (6–8 weeks out)**
- Goal: Build awareness and anticipation.
- Channels: Email (to existing audience), social teasers, blog, partner mentions.
- Messaging: "Something's coming. Here's why it matters." Curiosity, not reveal.
- Tactic examples: Countdown posts, sneak-peek videos, waitlist with early-access incentive.
- Content: Problem statement (market education), not product features.

**Launch week**
- Goal: Maximum visibility and conversions.
- Channels: Email (2–3 messages), social (daily content), PR/press release, ads (if budget allows), launch event/webinar.
- Messaging: "Here it is. Here's what it does. Here's why you need it."
- Tactic: Product demo, customer testimonials, limited-time launch offer (discount, bonus).
- Content: Features + benefits, use cases, FAQ.

**Post-launch (2–4 weeks)**
- Goal: Convert interest into customers; surface objections and counter them.
- Channels: Retargeting ads, email nurture, content (blog deep-dives), customer stories.
- Messaging: Address hesitation. "Common questions," "Is it right for you?" guides.
- Content: Detailed tutorials, case studies, comparison guides, community spotlights.

**Ongoing**
- Goal: Build word-of-mouth and feedback loops.
- Channels: Community (Slack, Discord, forum), referral program, user-generated content.
- Messaging: "Join us. Help shape the future."

**Deliverables:**
1. **Week-by-week content calendar** with specific posts/emails for {{launch_duration}}.
2. **5 launch messages** (one for each phase/channel mix).
3. **3 success metrics** (what signals a successful launch?).
4. **Contingency plan** (if key partner drops out, if buzz is low, if technical issues delay launch).`,
    variables: [
      { name: 'launch_duration', label: 'Launch timeline', placeholder: '6 weeks, 8 weeks, 12 weeks' },
    ],
  },
  {
    id: 'marketing-competitive-analysis-framework',
    title: 'Competitive Landscape Audit & Positioning Gaps',
    category: 'marketing',
    tags: ['competitor-analysis', 'strategy', 'research'],
    description: 'Maps competitor positioning, messaging, and pricing to identify undefended market opportunities.',
    body: `You are a competitive strategist. Map the competitive landscape for {{product_category}}.

**Identify top 3–5 direct competitors** (solve the same problem for the same audience).

**For each competitor, audit:**

1. **Positioning** — How do they describe what they do? (Target audience, value prop, category.)
2. **Messaging pillars** — What do they emphasize across ads, website, socials? (Speed? Cost? Ease? Power?)
3. **Pricing model** — What are they charging? (Freemium? Subscription? One-time? Per-user? Per-feature?)
4. **Channels** — Where are they active? (Ads, SEO, content, partnerships, sales team?)
5. **Audience perception** — What do customers love? What do reviews complain about?

**Create a 2×2 matrix:**
- X-axis: **Price** (budget-friendly ← → premium)
- Y-axis: **Positioning** (simple/ease ← → powerful/advanced)
- Plot each competitor on this grid.

**Gaps to hunt for:**
- Is there an undefended quadrant? (E.g., affordable + powerful?)
- Do all competitors speak the same language? (Opportunity to differentiate via tone.)
- Is there an objection no one is addressing? (Cost, learning curve, integration, customer support?)
- Do they overlook a specific use case or audience segment?

**Your recommendation:**
- Which gap is most defensible for your product?
- What positioning would you own that competitors can't easily copy?
- What single message could you own that no competitor uses?

**Output:** Competitive grid (visual or table) + 3 identified gaps + your recommended positioning angle.`,
    variables: [
      { name: 'product_category', label: 'Market you\'re in', placeholder: 'project management, email marketing, HR software' },
    ],
  },
  {
    id: 'marketing-customer-testimonial-extractor',
    title: 'Customer Testimonial & Success Metric Collector',
    category: 'marketing',
    tags: ['testimonials', 'proof', 'collection'],
    description: 'Generates interview questions to extract powerful testimonials and quantified customer wins.',
    body: `You are a testimonial specialist. Generic testimonials don't convert. Specific wins do.

**Generate interview questions to ask satisfied customers.** Ask open-ended questions; let them speak; extract pull quotes later.

**Section 1: The problem they had** (what was broken)
- "Walk me through the situation before you found us. What was the pain?"
- "How was it affecting your {{area: business/team/personal life}}?"
- "What did you try before us? Why didn't it work?"

**Section 2: The decision** (why they chose you)
- "What made you decide to try {{product}}?"
- "Were you skeptical? What convinced you?"
- "How quickly did you see a difference?"

**Section 3: The results** (specific, quantified)
- "What's changed since {{timeframe}}?"
- "Can you put a number on it? (time saved, revenue gained, cost reduced, efficiency lift?)"
- "What's one thing you'd tell someone considering {{product}}?"
- "What would you be doing without {{product}} today?"

**Section 4: The hidden win** (emotional/qualitative)
- "Beyond the numbers, how has this changed things for you?"
- "What's the biggest relief or breakthrough you've felt?"
- "How do you talk about this internally? What do colleagues say?"

**Pull-quote targets:**
- Extract 2–3 quotes per interview (one benefit-focused, one specific result, one emotional)
- Keep them under 30 words each.
- Include their name, title, company, and industry.

**Output:** Interview guide + 3 sample customer quotes + video description (if customer agrees to on-camera testimonial).`,
  },
  {
    id: 'marketing-faq-objection-handler',
    title: 'FAQ & Objection Handling Content Creator',
    category: 'marketing',
    tags: ['faq', 'objections', 'conversion'],
    description: 'Turns common customer objections into FAQ content that removes friction from the buying journey.',
    body: `You are an objection-handling specialist. Unaddressed objections kill conversions.

**Objections to surface** (from customer interviews, support tickets, sales calls):
{{objections_list}}

For EACH objection, write:

1. **The FAQ question** (as a customer would ask it, casual language)
   - Example: "Is this actually going to save me time, or is it just hype?"

2. **The empathetic opening** (acknowledge the concern; don't dismiss it)
   - Example: "Great question. We hear this a lot, and here's why it matters."

3. **The answer** (address the objection directly)
   - Provide evidence (stat, study, customer quote, case study reference).
   - Acknowledge edge cases. (Not one-size-fits-all? Say so.)
   - Reverse the objection if possible. ("Cost sounds high—here's ROI.")

4. **The proof** (social proof, specific example, guarantee)
   - Example: "Here's a customer story that shows the math."

5. **The micro-CTA** (small next step)
   - Example: "Want to see a live demo? Book 15 minutes."

**Additional FAQ angles:**
- "How is this different from {{competitor}}?"
- "Will I need training or technical skills?"
- "What if I'm not satisfied? Do you offer a refund?"
- "What does success look like with this?"

**Output:** 5–8 FAQ entries (full formatted text), ordered by frequency/severity of objection. Recommendation for where to place this FAQ (landing page, email, post-purchase).`,
    variables: [
      { name: 'objections_list', label: 'List of customer objections', placeholder: '"Too expensive", "Will it work for our use case?", "Complicated to set up?"' },
    ],
  },
  {
    id: 'marketing-referral-program-designer',
    title: 'Referral Program Incentive & Messaging Designer',
    category: 'marketing',
    tags: ['referral', 'growth', 'incentives'],
    description: 'Designs a referral program structure and messaging that motivates {{audience}} to spread the word.',
    body: `You are a growth marketer. Word-of-mouth is the highest-converting channel. Design a referral program that makes {{audience}} WANT to share.

**Program structure decisions:**

1. **Incentive model** — What do you offer?
   - **Both-side reward:** Referrer gets $X credit or discount; referee gets same.
   - **Tiered:** First referral = $10, third referral = $25.
   - **Milestone:** 5 successful referrals = $100 bonus.
   - **Non-monetary:** Free premium features, exclusive access, recognition.
   - **Hybrid:** Combination (discount + badge + contest entry).

2. **Ease of participation** — How simple is it?
   - One-click shareable link? Email template? Social pre-written posts?
   - Tracking method: unique code, tracked link, email address?

3. **Referral tracking & payout**
   - When does referrer get rewarded? (Signup? Paid conversion? After 30 days of use?)
   - How do they claim it? (Automatic credit? Manual request? Verified through link?)

4. **Messaging & channels**
   - Where do you promote the referral offer? (In-app, email, social, checkout page)
   - What's the hook? (Make {{audience}} feel like they're doing a friend a favor, not pushing a sale.)

5. **Barrier removal**
   - What might stop someone from referring? (Complexity, feeling salesy, low reward)
   - How do you remove each barrier?

**Messaging guidance:**
- **For referrer:** "Share the love. Get {{reward}}."
- **For referee:** "Friend {{name}} recommends us. Claim your {{incentive}}."

**Deliverables:**
1. **Referral program structure** (incentive, method, payout timeline).
2. **3 referral messaging variants** (email, in-app banner, social post).
3. **Sharing templates** (pre-written email/post for referrers to send).
4. **Success metrics** (what makes this program win?).`,
    variables: [
      { name: 'audience', label: 'Who will refer', placeholder: 'existing customers, free trial users, newsletter subscribers' },
    ],
  },
  {
    id: 'marketing-conversion-rate-optimization-plan',
    title: 'Conversion Rate Optimization (CRO) Audit & Testing Roadmap',
    category: 'marketing',
    tags: ['cro', 'optimization', 'testing'],
    description: 'Identifies high-impact conversion bottlenecks and maps a prioritized testing plan.',
    body: `You are a CRO specialist. Small improvements to conversion rates compound into massive revenue gains.

**Current state baseline:**
- URL: {{page_url}}
- Current conversion rate: {{current_rate}}% ({{conversions}} conversions from {{traffic}} visitors)
- Key bottleneck (where do you lose people?): {{bottleneck}}

**Audit:**

1. **Identify drop-off points**
   - Where do visitors abandon? (Exit rate by section?)
   - Which steps in your funnel leak the most? (Awareness → consideration → decision?)
   - Where's the biggest conversion rate dip?

2. **High-impact hypotheses** (not obvious tweaks; meaningful changes)
   - Test 1: {{hypothesis_1}} (predicted lift: {{predicted_lift_1}}%)
   - Test 2: {{hypothesis_2}} (predicted lift: {{predicted_lift_2}}%)
   - Test 3: {{hypothesis_3}} (predicted lift: {{predicted_lift_3}}%)

3. **Design the tests**
   - What changes? (Headline? CTA color? Form length? Social proof placement?)
   - Control version (current) vs. variation (proposed change).
   - Sample size needed (power analysis: confidence 95%, detect {{lift}}% lift).
   - Test duration (typically 1–4 weeks, depending on traffic).

4. **Prioritize tests by expected impact**
   - Which test is most likely to move the needle?
   - Which is easiest to implement?
   - Which is backed by strongest hypothesis (data, user research, best practices)?

**Test roadmap:**
- Month 1: Test 1 (control vs. variation A)
- Month 2: Test 2 (based on Month 1 learnings)
- Month 3: Test 3 + iterative refinements

**Success criteria:**
- Statistically significant lift ({{minimum_lift}}% increase)
- Sustained improvement over time (no regression)
- Secondary metrics hold (don't optimize conversion at cost of cart value or LTV)

**Output:** 3 high-impact test hypotheses, 4-week testing roadmap, success metrics.`,
    variables: [
      { name: 'page_url', label: 'Page being optimized', placeholder: 'Your landing page, checkout page, signup form' },
      { name: 'current_rate', label: 'Current conversion %', placeholder: '2.5' },
      { name: 'conversions', label: 'Current conversions', placeholder: '50' },
      { name: 'traffic', label: 'Current monthly visitors', placeholder: '2000' },
      { name: 'bottleneck', label: 'Biggest drop-off', placeholder: 'pricing section, checkout process' },
      { name: 'hypothesis_1', label: 'Test 1 hypothesis', placeholder: 'Shorter form increases signups by 15%' },
      { name: 'predicted_lift_1', label: 'Test 1 predicted lift %', default: '15', placeholder: '10, 15, 20' },
      { name: 'hypothesis_2', label: 'Test 2 hypothesis', placeholder: 'Social proof above the fold increases trust' },
      { name: 'predicted_lift_2', label: 'Test 2 predicted lift %', default: '12', placeholder: '8, 12, 18' },
      { name: 'hypothesis_3', label: 'Test 3 hypothesis', placeholder: 'Video testimonial > text testimonial' },
      { name: 'predicted_lift_3', label: 'Test 3 predicted lift %', default: '8', placeholder: '5, 8, 10' },
      { name: 'lift', label: 'Minimum detectable lift %', default: '10' },
      { name: 'minimum_lift', label: 'Minimum lift to implement', default: '10' },
    ],
  },
  {
    id: 'marketing-brand-voice-guidelines',
    title: 'Brand Voice & Tone Guidelines Creator',
    category: 'marketing',
    tags: ['brand', 'voice', 'guidelines'],
    description: 'Defines {{brand}} voice and creates usage guidelines to ensure consistency across all channels.',
    body: `You are a brand strategist. Consistency builds recognition and trust. Define your brand voice.

**Brand voice fundamentals:**

1. **Personality archetype** — Which best fits {{brand_name}}?
   - The Hero (bold, confident, action-oriented)
   - The Mentor (wise, educational, guiding)
   - The Everyman (relatable, approachable, down-to-earth)
   - The Innovator (cutting-edge, visionary, forward-thinking)
   - The Caregiver (empathetic, supportive, service-focused)

2. **Core characteristics** (3–5)
   - Example: Friendly, direct, playful, authoritative, witty
   - For each: What does it sound like in practice? Give an example.

3. **Tone modulation** — Your voice is consistent, but tone shifts with context.
   - Tone for **marketing copy** (persuasive, exciting)
   - Tone for **customer support** (empathetic, helpful)
   - Tone for **product education** (clear, patient)
   - Tone for **internal comms** (collaborative, transparent)

4. **Language do's and don'ts**
   - Words/phrases you USE (reflect your personality)
   - Words/phrases you AVOID (feel off-brand)
   - Grammar preferences (contractions? exclamation points? Sentence fragments?)
   - Metaphors or stylistic tics that are uniquely yours

5. **Examples in practice**
   - How would {{brand}} describe {{product}}? Write a sample sentence.
   - How would {{brand}} respond to a common customer complaint? Write a sample response.
   - How would {{brand}} announce a product update? Write a sample post.

**Format your guidelines as:**
- Brand voice one-liner (who you sound like)
- 4–5 core characteristics with examples
- Do's and don'ts list
- Tone modulation matrix
- 5 example uses (email, social, support, ad copy, internal)

**Output:** A 1-page brand voice guide that any team member could read and apply immediately.`,
    variables: [
      { name: 'brand_name', label: 'Your brand/company name', placeholder: 'Acme Corp, TechStart, etc.' },
    ],
  },
  {
    id: 'marketing-webinar-promotion-sequence',
    title: 'Webinar Promotion & Registration Campaign',
    category: 'marketing',
    tags: ['webinar', 'promotion', 'registration'],
    description: 'Creates a multi-channel promotion sequence to drive registrations for {{webinar_topic}}.',
    body: `You are a webinar marketer. A webinar is happening on {{webinar_date}}, and you need a promotional sequence to fill it.

**Promotion phases:**

**Phase 1: Awareness (4–5 weeks before)**
- Goal: Introduce the webinar to your audience.
- Channels: Email (1–2), social (2–3 posts), blog mention.
- Message: "We're hosting X. Here's why you should care."
- Content focus: Problem statement, why this topic matters, speaker credibility.

**Phase 2: FOMO/reminder (2–3 weeks before)**
- Goal: Move interested people to register.
- Channels: Email (2 reminder emails), social (2–3 posts), retargeting ads.
- Message: "Spots are filling. Here's who's attending. You'll regret missing it."
- Content focus: Benefits of attending, customer testimonials, key takeaways.

**Phase 3: Last-call (3–5 days before)**
- Goal: Capture final registrations.
- Channels: Email (2 emails: 3 days out, 1 day out), social (daily mentions), SMS (if you have numbers).
- Message: "This is happening soon. One click to register."
- Content focus: Urgency, final benefit reminder, easy registration link.

**Phase 4: Pre-webinar (1–2 days before)**
- Goal: Ensure registered attendees actually show up.
- Channels: Email (day-before reminder, 1-hour-before reminder), SMS.
- Message: "Tomorrow at X time. Here's how to join."
- Content focus: Zoom link, time zone clarification, what to bring (notepad).

**Content templates:**
- Email subject lines (3 options for each phase)
- Email body (opening hook, benefit, CTA, signature)
- Social post copy (3 variations per phase)
- Retargeting ad copy (for people who visited but didn't register)

**Deliverables:**
1. **Promotion calendar** (which channel, which message, which date)
2. **Email templates** (all 7+ emails for the sequence)
3. **Social content** (6–8 posts across phases)
4. **Expected registrations** (estimate based on audience size and historical conversion rates)`,
    variables: [
      { name: 'webinar_topic', label: 'Webinar title/topic', placeholder: '"How to Scale Your E-commerce Store"' },
      { name: 'webinar_date', label: 'Webinar date', placeholder: 'July 30, 2024 at 2pm EST' },
    ],
  },
  {
    id: 'marketing-retention-messaging',
    title: 'Customer Retention & Churn Prevention Messaging',
    category: 'marketing',
    tags: ['retention', 'churn', 'lifecycle'],
    description: 'Designs messaging to keep existing customers engaged and prevent {{audience}} from churning.',
    body: `You are a customer retention specialist. Retaining customers costs 5–25% of acquiring new ones. Design messaging to reduce churn.

**Customer segments at risk:**

1. **The Inactive** (hasn't engaged in 30+ days)
   - Message strategy: "We miss you. Here's what's new."
   - Content: Feature updates, success stories from similar users, ROI reminder.
   - Tactic: Re-engagement email with incentive (free upgrade month, exclusive discount).

2. **The Feature-limited** (using only basic features)
   - Message strategy: "Unlock the next level."
   - Content: Case study showing power user results, how-to guides for advanced features, value unlock.
   - Tactic: In-app onboarding for dormant features, educational email series.

3. **The Price-sensitive** (on cheapest tier or trialing)
   - Message strategy: "Here's the value you're missing."
   - Content: Pricing transparency, ROI calculator, proof of value (metrics from users at higher tier).
   - Tactic: Special pricing offer if they upgrade; show savings potential.

4. **The at-risk churner** (support ticket mentioning cancel/competitor)
   - Message strategy: "Let's fix this."
   - Content: Empathy first, then solution (faster support, custom features, pricing negotiation).
   - Tactic: Personalized outreach from CEO or account manager; win-back offer.

**Messaging frameworks:**

- **Win-back email** (for users who let trial lapse): Subject line should evoke positive memory, offer incentive.
- **Value reminder** (monthly/quarterly): Celebrate user wins, show unused features or new capabilities.
- **Churn prevention** (when cancel is initiated): Offer alternative (pause subscription, downgrade, ask for feedback).

**Retention metrics to track:**
- Monthly/annual churn rate (baseline).
- Engagement (feature usage, logins, interactions).
- NPS (Net Promoter Score) or satisfaction trends.
- Predicted churn (customer segments most likely to leave).

**Output:** 5 retention messaging templates (re-engagement, value unlock, churn prevention, win-back, upgrade incentive) + churn prediction segmentation guide + 3 metrics to monitor.`,
    variables: [
      { name: 'audience', label: 'Customer type', placeholder: 'SaaS users, subscription service members, app users' },
    ],
  },
];

export default prompts;
