import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'business-decision-memo-writer',
    title: 'Decision Memo & Options Generator',
    category: 'business',
    tags: ['memo', 'decision', 'generator'],
    description: 'Generates a structured decision memo with options, trade-offs, and a clear recommendation.',
    body: `You are writing a decision memo for leadership.

Decision to make: {{decision}}
Context/problem: {{context}}
Stakeholders: {{stakeholders}}

Generate a structured memo with these sections:

1. Executive summary (2–3 sentences):
   - What is the decision? Why is it urgent?

2. Problem statement:
   - Current situation and why change is needed.
   - Business impact if we do nothing.

3. Options (list 2–3):
   - Option A: {description} → Pros → Cons → Estimated cost/time.
   - Option B: {description} → Pros → Cons → Estimated cost/time.
   - Option C: {description} → Pros → Cons → Estimated cost/time.

4. Stakeholder impact:
   - How does each option affect {{stakeholders}}?
   - Risk assessment per option.

5. Financial/operational trade-offs:
   - Cost, timeline, resource requirements for each.
   - ROI or value delivered.

6. Recommendation:
   - Recommend one option with reasoning.
   - Why this beats alternatives.
   - Success metrics to track after decision.

7. Next steps:
   - Immediate actions if approved.
   - Timeline and dependencies.

Format as a 1–2 page memo (400–600 words). Use clear headings and bullet points.`,
    variables: [
      { name: 'decision', label: 'The decision to be made', placeholder: 'Build in-house vs. buy SaaS, expand to new market, reorganize engineering' },
      { name: 'context', label: 'Business context/problem', placeholder: 'Current tool is outdated, competitor gaining market share, team scaling' },
      { name: 'stakeholders', label: 'Key stakeholders affected', placeholder: 'Engineering, Product, Finance, Sales' },
    ],
  },
  {
    id: 'business-okr-reviewer',
    title: 'OKR Reviewer & Feedback Generator',
    category: 'business',
    tags: ['okr', 'goals', 'review'],
    description: 'Reviews OKRs for clarity, achievability, and alignment with business strategy.',
    body: `You are reviewing OKRs (Objectives & Key Results) for a team.

OKRs to review:
{{okrs}}

Company strategy: {{strategy}}
Team: {{team}}

Provide structured feedback:

1. Clarity assessment:
   - Is each Objective inspiring and clear?
   - Are Key Results measurable and specific (e.g., "increase revenue" → "increase revenue from $2M to $3M")?
   - Can someone outside the team understand the intent?

2. Achievability review:
   - Are the Key Results ambitious but realistic (60–70% confidence to achieve)?
   - Any Key Results that are definitely unachievable or too easy?
   - What assumptions underlie each KR?

3. Alignment with strategy:
   - Does each OKR ladder up to {{strategy}}?
   - Any strategic gaps (things that should be OKRs but aren't)?
   - Conflicts between team OKRs and other teams?

4. Time-boxing & dependencies:
   - Clear timeline (quarterly, annual)?
   - Any external dependencies that could derail progress?

5. Specific feedback:
   - [STRONG] {OKR} because {reason}.
   - [NEEDS REVISION] {OKR} → {specific suggestion}.
   - [MISSING] {topic} should be an OKR.

6. Revised versions:
   - Provide 1–2 rewritten OKRs if they need improvement.
   - Show how they map to company strategy.

7. Success plan:
   - Rough roadmap: milestones to hit the Key Results.
   - Leading indicators (measure progress toward KRs monthly).

Return feedback as a structured document: Objective | Current KRs | Feedback | Proposed Revision.`,
    variables: [
      { name: 'okrs', label: 'OKRs to review', placeholder: 'Paste the team\'s draft OKRs' },
      { name: 'strategy', label: 'Company strategy/priorities', placeholder: 'Expand international market, improve customer retention, reduce technical debt' },
      { name: 'team', label: 'Team name', placeholder: 'Engineering, Product, Marketing, Sales' },
    ],
  },
  {
    id: 'business-market-analysis-framework',
    title: 'Market Analysis Framework Guide',
    category: 'business',
    tags: ['market-analysis', 'strategy', 'guide'],
    description: 'Provides a step-by-step framework for conducting market analysis and competitive positioning.',
    body: `You are conducting a market analysis.

Market/product: {{market}}
Geography: {{geography}}
Time horizon: {{horizon}}

Provide a structured market analysis framework:

1. Market size assessment:
   - Total Addressable Market (TAM): entire market opportunity.
   - Serviceable Available Market (SAM): realistic subset you can serve.
   - Serviceable Obtainable Market (SOM): realistic 3–5 year target.
   - Data sources: analyst reports, surveys, customer interviews.

2. Market growth trends:
   - Historical growth rate (last 3–5 years).
   - Projected growth rate (next 3–5 years).
   - Growth drivers (technology, regulation, consumer behavior).
   - Risk factors (market saturation, disruption).

3. Customer segmentation:
   - Who are the key customer segments?
   - Segment size, growth rate, and profitability.
   - Unmet needs or pain points per segment.

4. Competitive landscape:
   - Direct competitors (vs. your offering).
   - Indirect competitors (alternative solutions).
   - Each competitor: market share, positioning, pricing, strengths/weaknesses.

5. Barriers to entry:
   - What makes this market hard to enter? (capital, technology, network effects, regulation).
   - Can these be overcome?

6. Key success factors:
   - What determines winners in this market?
   - Cost leadership, differentiation, or niche positioning?
   - How do you compete?

7. Market dynamics:
   - Consolidation trends (M&A activity).
   - Emerging threats (new technologies, startups).
   - Regulatory changes.

8. Go-to-market opportunity:
   - Where do you have competitive advantage?
   - Recommend positioning and strategy.
   - Estimated market share realistic in 3 years?

Provide output as: Market analysis report with data, visualizations, and strategic recommendations.`,
    variables: [
      { name: 'market', label: 'Market/product to analyze', placeholder: 'AI productivity tools, cloud storage, e-commerce logistics' },
      { name: 'geography', label: 'Geographic focus', default: 'United States', placeholder: 'United States, Europe, Global, Emerging markets' },
      { name: 'horizon', label: 'Analysis time horizon', default: '3-5 years', placeholder: '1 year, 3-5 years, 10 years' },
    ],
  },
  {
    id: 'business-budget-allocation-interviewer',
    title: 'Budget Allocation Interviewer',
    category: 'business',
    tags: ['budgeting', 'allocation', 'decision'],
    description: 'Asks clarifying questions to help you allocate limited budget across competing priorities.',
    body: `You are helping allocate a limited budget across initiatives.

Your task: Ask 5–6 clarifying questions to understand priorities, trade-offs, and constraints, then provide a budget allocation recommendation.

Ask in this order:
1. Total budget available and timeline (annual, quarterly)?
2. Strategic priorities: what does the company want to achieve this period?
3. Committed vs. discretionary: how much budget is already locked in?
4. Competing initiatives: list all projects/teams requesting budget.
5. Success metrics: how will you measure ROI of each investment?
6. Risk tolerance: what happens if funding is cut 10%, 25%, 50%?

After they respond, provide:
- Recommended budget allocation table (initiative | allocation | % of total | rationale).
- Prioritization justification (why this allocation maximizes business value).
- Trade-offs made (what's underfunded? Why?).
- Contingency plan (if budget is cut, what gets protected?).
- Monitoring plan (track ROI and rebalance quarterly if needed).

Be collaborative; this is about finding the best allocation given constraints.`,
    variables: [],
  },
  {
    id: 'business-competitive-analysis-generator',
    title: 'Competitive Analysis Generator',
    category: 'business',
    tags: ['competitive-analysis', 'strategy', 'generator'],
    description: 'Generates a comprehensive competitive analysis with positioning matrix and strategic implications.',
    body: `You are building a competitive analysis.

Your product/service: {{product}}
Key competitors: {{competitors}}
Time period: {{period}}

Generate a comprehensive competitive analysis:

1. Competitive positioning matrix:
   - Dimensions (2–3 key differentiators): price, speed, quality, ease-of-use, etc.
   - Plot: your company vs. each competitor on these dimensions.
   - Visual: 2x2 or bubble chart (size = market share).

2. Detailed competitor profiles (per competitor):
   - Company background, market position, revenue estimates.
   - Product offering, pricing model, target customers.
   - Strengths (vs. you): what do they do better?
   - Weaknesses (vs. you): what's your advantage?
   - Recent moves (product launches, partnerships, funding).

3. Comparative feature matrix:
   - Key features | Your product | Competitor A | Competitor B.
   - Highlight where you lead, lag, or tie.

4. Go-to-market comparison:
   - Sales model (direct, partner, self-serve).
   - Customer acquisition cost (if known).
   - Customer retention/churn rates.
   - Marketing positioning and messaging.

5. Strategic threats & opportunities:
   - What are competitors doing that you should worry about?
   - Where do you have competitive advantage?
   - Unmet market needs that competitors aren't addressing.

6. Differentiation strategy:
   - How should you position against {{competitors}}?
   - What's your defensible advantage?
   - Which competitor is the biggest threat? Why?

7. Pricing analysis:
   - Pricing model for each competitor (per-user, per-transaction, etc.).
   - Price point comparison (chart or table).
   - Price elasticity and customer willingness to pay.

Provide output as a visual-first analysis with charts, matrices, and strategic recommendations.`,
    variables: [
      { name: 'product', label: 'Your product/service', placeholder: 'Project management tool, analytics platform, AI assistant' },
      { name: 'competitors', label: 'Key competitors to analyze', placeholder: 'Asana, Monday.com, Jira' },
      { name: 'period', label: 'Analysis period', default: 'last 12 months', placeholder: 'last 6 months, last 12 months, last 2 years' },
    ],
  },
  {
    id: 'business-process-improvement-coach',
    title: 'Business Process Improvement Coach',
    category: 'business',
    tags: ['process', 'improvement', 'coach'],
    description: 'Guides you through identifying, analyzing, and implementing process improvements with step-by-step coaching.',
    body: `You are coaching someone through process improvement.

Your task: Ask 4–5 clarifying questions about the process, then provide step-by-step improvement guidance.

Ask in this order:
1. What process are you improving? How many people does it affect?
2. What's broken? (slowness, errors, high cost, customer complaints).
3. Have you measured the current state? (time, cost, quality metrics).
4. What constraints exist? (budget, technology, people, timeline).
5. What's your improvement goal? (reduce time, errors, cost, or improve customer satisfaction).

After they respond, provide:
- Current state analysis: document the process as-is (workflow diagram or steps).
- Root cause analysis: why are the problems happening? Ask probing questions.
- Improvement opportunities: identify 3–5 specific changes.
- Improvement options: show 2–3 improvement scenarios (quick win vs. major redesign).
- Implementation roadmap: prioritized steps, timeline, resources needed.
- Success metrics: how to measure improvement (cost/time savings, error reduction).
- Change management: how to get buy-in and manage the transition.

Be conversational and iterative; engage them in problem-solving.`,
    variables: [],
  },
  {
    id: 'business-stakeholder-communication-guide',
    title: 'Stakeholder Communication Strategy Guide',
    category: 'business',
    tags: ['communication', 'stakeholder-management', 'guide'],
    description: 'Develops a stakeholder communication plan with messaging, channels, and cadence.',
    body: `You are developing a stakeholder communication strategy.

Initiative/project: {{initiative}}
Key stakeholders: {{stakeholders}}
Timeline: {{timeline}}

Develop a comprehensive communication strategy:

1. Stakeholder mapping:
   - List each stakeholder group.
   - Interest level (high/medium/low).
   - Influence level (high/medium/low).
   - Concerns/incentives for each group.

2. Communication objectives:
   - What do you want stakeholders to know/believe?
   - What actions do you want them to take?
   - By when?

3. Key messages (tailor per stakeholder group):
   - Executives: what's the business case and risk?
   - Customers: what's the benefit and timeline?
   - Employees: what's the impact and support?
   - Partners: what's changing and required from them?

4. Communication channels & cadence:
   - Email: frequency, recipient list, format.
   - Meetings: one-on-ones, town halls, working groups.
   - Dashboard/status page: real-time visibility.
   - Town hall cadence: weekly, bi-weekly, monthly.

5. Communication plan (timeline):
   - Week 1: announcement (who tells whom, order of communication).
   - Week 2–4: ongoing updates and Q&A.
   - Launch: go-live communication and support.
   - Post-launch: feedback loops and adjustments.

6. FAQ & objection handling:
   - Likely concerns and prepared responses.
   - Escalation path if issues aren't resolved.

7. Success metrics:
   - Stakeholder awareness (survey).
   - Adoption or compliance rates.
   - Sentiment (positive, neutral, negative feedback).

Provide output as a communication calendar and messaging templates.`,
    variables: [
      { name: 'initiative', label: 'Initiative or project', placeholder: 'Organizational reorganization, product launch, system migration' },
      { name: 'stakeholders', label: 'Key stakeholder groups', placeholder: 'Engineering, Product, Marketing, Finance, Sales, Customers' },
      { name: 'timeline', label: 'Initiative timeline', placeholder: '3 months, 6 months, 1 year' },
    ],
  },
  {
    id: 'business-roadmap-prioritization-reviewer',
    title: 'Roadmap Prioritization Reviewer',
    category: 'business',
    tags: ['roadmap', 'prioritization', 'review'],
    description: 'Reviews a product/project roadmap for prioritization logic, strategic alignment, and balance.',
    body: `You are reviewing a roadmap's prioritization.

Roadmap to review:
{{roadmap}}

Strategy: {{strategy}}
Team capacity: {{capacity}}
Time horizon: {{horizon}}

Provide structured feedback:

1. Strategic alignment:
   - Does each item ladder up to {{strategy}}?
   - Any strategic gaps (important things missing)?
   - Any items that are off-strategy?

2. Prioritization logic review:
   - Is the current order justified by impact and effort?
   - Are high-impact, low-effort items early enough?
   - Are risky or foundational items properly sequenced?

3. Balance assessment:
   - % allocation: new features vs. technical debt vs. customer requests vs. operational work.
   - Is the mix healthy? (recommendation: 50% new features, 30% debt, 20% operational).
   - Any imbalances that create risk?

4. Dependency analysis:
   - Are items properly sequenced (dependencies respected)?
   - Any blocker items that should move earlier?
   - External dependencies (vendor, partner, customer)?

5. Capacity reality check:
   - Given {{capacity}}, can the roadmap be delivered?
   - Are timelines realistic?
   - Buffer for incidents/pivots?

6. Customer/business feedback:
   - Are customer requests prioritized?
   - Is there customer validation for high-effort items?
   - Revenue/retention impact per item?

7. Specific feedback:
   - [STRONG] {item} is properly positioned because {reason}.
   - [RECONSIDER] {item} should move {{up/down}} because {reason}.
   - [ADD] {{topic}} is missing and should be a roadmap item because {reason}.

8. Revised prioritization:
   - Suggest a reordered roadmap with rationale for top 3 moves.

Return feedback as: Item | Current Position | Feedback | Recommended Position.`,
    variables: [
      { name: 'roadmap', label: 'Roadmap to review', placeholder: 'Paste your roadmap items (features, projects, initiatives)' },
      { name: 'strategy', label: 'Company strategy/goals', placeholder: 'Acquire enterprise customers, improve retention, expand into Asia' },
      { name: 'capacity', label: 'Team capacity', placeholder: '10 engineers, 5 FTE available this quarter' },
      { name: 'horizon', label: 'Roadmap horizon', default: '12 months', placeholder: '3 months, 6 months, 12 months' },
    ],
  },
  {
    id: 'business-risk-assessment-framework',
    title: 'Risk Assessment & Mitigation Framework',
    category: 'business',
    tags: ['risk-management', 'strategy', 'framework'],
    description: 'Develops a risk assessment and mitigation plan for a business initiative or decision.',
    body: `You are building a risk assessment for a project/decision.

Project/initiative: {{project}}
Scope/investment: {{scope}}
Timeline: {{timeline}}

Develop a comprehensive risk framework:

1. Risk identification:
   - Brainstorm 10–15 potential risks (technical, market, operational, financial, regulatory).
   - Categorize: {{project}} risks, team/people risks, external risks.
   - Examples: key person departure, market conditions change, technology doesn't scale.

2. Risk scoring matrix (for each risk):
   - Likelihood (1–5): how likely is this to happen?
   - Impact (1–5): business impact if it happens (revenue, timeline, reputation).
   - Risk score = Likelihood × Impact.
   - Prioritize by risk score (focus on high-score risks).

3. Risk mitigation strategies (for top 5 risks):
   - Risk 1 (HIGH): {description} → Mitigation strategy.
   - Prevent: reduce likelihood (e.g., hire expertise, conduct market test).
   - Mitigate: reduce impact (e.g., staged rollout, backup plan).
   - Accept: acknowledge and live with risk (low priority).

4. Contingency planning:
   - If {{high-priority risk}} happens, what's the fallback plan?
   - Trigger: at what point do you activate the contingency?
   - Owner: who activates it?

5. Monitoring & early warnings:
   - How will you detect risks early?
   - Metrics/signals to watch.
   - Weekly review cadence during project.

6. Decision gates:
   - Milestones where you reassess risk and decide: proceed, pivot, or stop.
   - Example gates: prototype validation, pilot customer feedback, market data.

7. Risk ownership:
   - Who owns each risk? (track in RACI).
   - Who escalates if risk materializes?

Provide output as: Risk Register table (ID | Risk | Likelihood | Impact | Score | Mitigation | Owner) + contingency plans.`,
    variables: [
      { name: 'project', label: 'Project or initiative', placeholder: 'New product launch, market expansion, company acquisition' },
      { name: 'scope', label: 'Scope or investment', placeholder: '$500K, 6-month project, 5 engineers' },
      { name: 'timeline', label: 'Project timeline', placeholder: '3 months, 6 months, 12 months' },
    ],
  },
  {
    id: 'business-vendor-evaluation-framework',
    title: 'Vendor Evaluation & Selection Framework',
    category: 'business',
    tags: ['procurement', 'vendor-management', 'selection'],
    description: 'Provides a structured vendor evaluation framework with scoring and comparison.',
    body: `You are evaluating vendors for a solution.

Need: {{need}}
Shortlist: {{vendors}}
Budget: {{budget}}

Develop a vendor evaluation framework:

1. Requirements gathering:
   - Must-have requirements (non-negotiable).
   - Nice-to-have requirements (ranked by priority).
   - Performance/scale requirements (throughput, SLA, uptime).
   - Integration & support requirements (API, documentation, customer success).

2. Evaluation criteria (with weights):
   - Functionality: does it meet requirements? (weight: 30%).
   - Price/TCO: total cost of ownership (license, implementation, training, support). (weight: 25%).
   - Scalability: can it grow with your needs? (weight: 15%).
   - Support & stability: vendor track record, financial health, support response time. (weight: 15%).
   - Integration: existing tool compatibility, API, migration path. (weight: 15%).

3. Scoring matrix:
   - For each vendor, score on each criterion (1–5 scale).
   - Weighted score = Σ(criterion score × weight).
   - Rank vendors by weighted score.

4. Detailed vendor profiles (for shortlist):
   - Company background, market position, customer base.
   - Pricing model (seats, transaction, usage-based).
   - Contract terms (commitment period, termination clauses, discounts).
   - Implementation timeline and effort.
   - References: speak with 2–3 existing customers.

5. Reference calls:
   - Prepare reference questions: implementation experience, support quality, ROI, regrets.
   - Summarize findings (align references or red flags).

6. Proof of concept (POC):
   - Should you run a trial? (for high-stakes decisions, yes).
   - POC scope and success criteria (30–60 day trial).

7. Negotiation strategy:
   - Negotiable terms: price, implementation support, SLA, contract length.
   - Walk-away point (cost or functionality threshold).

8. Final recommendation:
   - Recommend winner with rationale.
   - Address risks or concerns.
   - Rollback plan if vendor doesn't deliver.

Provide output as: Evaluation scorecard, vendor comparison table, final recommendation memo.`,
    variables: [
      { name: 'need', label: 'Vendor/solution needed', placeholder: 'CRM system, analytics platform, cloud hosting provider' },
      { name: 'vendors', label: 'Vendors being considered', placeholder: 'Salesforce, HubSpot, Pipedrive' },
      { name: 'budget', label: 'Budget/constraint', placeholder: '$50K/year, enterprise only' },
    ],
  },
  {
    id: 'business-pricing-strategy-advisor',
    title: 'Pricing Strategy Advisor',
    category: 'business',
    tags: ['pricing', 'strategy', 'economics'],
    description: 'Helps develop or refine a pricing strategy based on costs, value, and market positioning.',
    body: `You are developing a pricing strategy.

Product/service: {{product}}
Current pricing (if any): {{current}}
Target market: {{market}}

Develop a pricing strategy:

1. Cost structure analysis:
   - Variable costs (per unit/customer).
   - Fixed costs (divided across units).
   - Gross margin target (typical: 50–80% for SaaS, 30–50% for physical products).
   - Break-even analysis: units needed to cover fixed costs.

2. Value-based pricing:
   - What value does the product create for customers?
   - Quantify: revenue uplift, cost savings, time saved per customer.
   - Willingness to pay: estimate how much customers would pay for value delivered.
   - Pricing should capture 30–50% of value created (leave some for customer).

3. Market/competitive analysis:
   - What do competitors charge?
   - Positioning: premium, mid-market, budget.
   - Pricing model options (per-seat, per-transaction, per-usage, subscription, freemium, etc.).
   - Market size by price point: higher price → smaller addressable market.

4. Pricing model recommendation:
   - Recommend: SaaS (subscription) vs. perpetual license vs. pay-per-use.
   - Rationale based on customer preference and company revenue predictability.

5. Tier structure (if applicable):
   - Basic tier: minimal features, target segment.
   - Professional tier: core features, target customer.
   - Enterprise tier: premium features, support, custom integrations.
   - Example: Basic $99/mo, Pro $299/mo, Enterprise custom.
   - Ensure each tier captures incrementally more value.

6. Go-to-market pricing:
   - Launch price vs. long-term price (consider strategy: penetration vs. skimming).
   - Discounts strategy (volume, commitment, partner discounts).
   - Free trial or freemium to acquire customers?

7. Financial impact:
   - Revenue projections: units × price under different scenarios.
   - Customer acquisition cost (CAC) vs. lifetime value (LTV).
   - LTV/CAC ratio should be 3:1 or higher for sustainability.

8. Optimization & monitoring:
   - Metrics to track: revenue per customer, conversion rate by tier, churn rate.
   - How to adjust pricing based on market feedback?

Provide: pricing model, tier structure with prices, financial projections, implementation plan.`,
    variables: [
      { name: 'product', label: 'Product/service', placeholder: 'SaaS project management tool, consulting services, physical product' },
      { name: 'current', label: 'Current pricing (if any)', placeholder: '$99/month, free trial, no pricing set yet' },
      { name: 'market', label: 'Target market segment', placeholder: 'SMBs, enterprise, developers, non-profit' },
    ],
  },
  {
    id: 'business-go-to-market-plan-generator',
    title: 'Go-to-Market Plan Generator',
    category: 'business',
    tags: ['go-to-market', 'launch', 'strategy'],
    description: 'Generates a comprehensive go-to-market plan with launch timeline, channels, and success metrics.',
    body: `You are building a go-to-market (GTM) plan.

Product/service: {{product}}
Target customer: {{customer}}
Timeline to launch: {{timeline}}

Generate a comprehensive GTM plan:

1. Market positioning & messaging:
   - Problem solved (customer pain point).
   - Solution (how your product solves it).
   - Differentiation (why you vs. competitors).
   - Elevator pitch (1-sentence value proposition).

2. Target customer profile:
   - Persona: job title, industry, company size, budget, priorities.
   - Buying committee: who decides, who influences, who implements?
   - Typical sales cycle length.

3. Go-to-market channels:
   - Direct sales (if enterprise) → sales team hiring, training, tools.
   - Self-serve/freemium (if SMB) → product virality, referrals.
   - Partnerships → API integrations, channel partners, referrals.
   - Content/inbound → blog, webinars, community, SEO.
   - Paid advertising → Google Ads, social media.
   - PR/launch hype → media coverage, analyst recognition.
   - Which channels are primary vs. secondary?

4. Sales & marketing strategy:
   - Lead generation: how will you acquire leads? (CAC target per channel).
   - Sales process: qualification, demo, trial, close.
   - Customer success: onboarding, adoption, retention, expansion.

5. Launch timeline & milestones:
   - Pre-launch (4 weeks): teaser, beta access, influencer outreach.
   - Launch week: announcement, press release, webinar, social media blitz.
   - Post-launch (4–8 weeks): customer interviews, iterate, scale marketing.
   - Milestone metrics per phase.

6. Pricing & packaging:
   - Pricing model (see pricing strategy).
   - Packaging for target customer.
   - Discount strategy for early adopters.

7. First-customer success:
   - Identify 5–10 "launch customers" (references).
   - How will you support them to ensure success?
   - Testimonials and case studies.

8. Success metrics:
   - Launch: revenue, customers acquired, activation rate.
   - 30 days: monthly recurring revenue (MRR), churn, customer acquisition cost (CAC).
   - 90 days: product-market fit signals, retention rate, NPS.

9. Resource plan:
   - Team needs (sales, marketing, success, engineering).
   - Budget allocation across channels.
   - Timeline for hiring.

Provide: 1-page GTM summary, detailed timeline, channel breakdown, KPI dashboard.`,
    variables: [
      { name: 'product', label: 'Product/service to launch', placeholder: 'AI writing assistant, time-tracking software, B2B marketplace' },
      { name: 'customer', label: 'Target customer profile', placeholder: 'CFOs at mid-market companies, freelancers, startups' },
      { name: 'timeline', label: 'Launch timeline', default: '3 months', placeholder: '1 month, 3 months, 6 months' },
    ],
  },
  {
    id: 'business-board-memo-writer',
    title: 'Board Memo & Investor Update Writer',
    category: 'business',
    tags: ['board-memo', 'investor-relations', 'communication'],
    description: 'Writes a clear, concise board memo or investor update highlighting progress, risks, and ask.',
    body: `You are writing a board memo or investor update.

Period: {{period}}
Key developments: {{highlights}}
Challenges: {{challenges}}
Ask (if any): {{ask}}

Write a board memo with these sections:

1. Executive summary (1 paragraph):
   - Key metric: MRR, revenue, growth rate.
   - Sentiment: on-track, concerns, wins.

2. Financial performance:
   - Revenue (MoM, YoY growth), MRR, ARR.
   - Burn rate, runway, path to profitability.
   - Unit economics (CAC, LTV, payback period).
   - Variance vs. plan (beating or missing targets?).

3. Key developments & wins:
   - From {{highlights}}: 2–3 major wins or milestones.
   - Customer growth, product launches, partnerships, team hires.
   - Quantify impact where possible.

4. Challenges & concerns:
   - From {{challenges}}: 1–2 key risks or headwinds.
   - Market conditions, competitive pressure, churn increase.
   - Mitigation plan for each.

5. Operational updates:
   - Team: headcount, key hires, attrition.
   - Product: features shipped, technical debt addressed.
   - Customers: retention rate, NPS, churn analysis.

6. Next quarter priorities:
   - Top 3 objectives for next quarter (link to OKRs if applicable).
   - How will success be measured?

7. Ask (if fundraising):
   - Funding amount and use of proceeds.
   - Timeline and next steps.
   - Investor scorecard: how to evaluate progress vs. plan.

Format: 1–2 pages, bullet points, visual charts where helpful. Professional tone (not overly casual).`,
    variables: [
      { name: 'period', label: 'Reporting period', placeholder: 'Q3 2024, January 2024, YTD 2024' },
      { name: 'highlights', label: 'Key wins or developments', placeholder: 'Revenue reached $500K MRR, launched AI feature, expanded to EMEA' },
      { name: 'challenges', label: 'Challenges or concerns', placeholder: 'Customer churn up 2%, competitive pressure from new entrant' },
      { name: 'ask', label: 'Funding ask (if applicable)', placeholder: 'Raising $2M Series A, no ask this update' },
    ],
  },
  {
    id: 'business-performance-review-guide',
    title: 'Performance Review & 1:1 Guide',
    category: 'business',
    tags: ['performance-management', 'feedback', 'guide'],
    description: 'Guides managers through conducting effective performance reviews and 1:1 conversations.',
    body: `You are conducting a performance review or 1:1 with a direct report.

Employee: {{employee}}
Role: {{role}}
Review period: {{period}}
Performance level: {{level}}

Guide for effective review conversation:

1. Preparation (before the meeting):
   - Reflect on: specific achievements, growth areas, impact on team/company.
   - Gather feedback: from peers, manager, customer interactions.
   - Note: concrete examples (not generalizations). "You missed the deadline" → "The Q3 report was 3 days late, impacting stakeholder decisions."

2. Opening (set a collaborative tone):
   - "This conversation is about reflecting on your impact and discussing growth."
   - Invite self-reflection: "How do you feel your quarter went?"
   - Listen first; don't lead.

3. Feedback conversation:
   - Strengths first: "Here's what I've seen you do well: [specific examples]."
   - Impact: "This matters because [business context]."
   - Growth areas: "Here are some areas to develop: [specific, behavioral]."
   - Avoid: "You need to be more proactive." Instead: "I've noticed you wait for direction before starting. I'd like to see you identify 2–3 priorities and propose solutions."

4. Calibration (for {{level}} performer):
   - Exceeds expectations: top performer, growth trajectory, leadership potential.
   - Meets expectations: solid performer, core competencies present, some growth areas.
   - Below expectations: performance concerns, specific improvement plan needed.
   - Explain: what would it take to reach the next level?

5. Compensation/promotion discussion (if applicable):
   - Market data: role-appropriate salary range.
   - Performance-based adjustment: tie to accomplishments.
   - Promotion readiness: skills/experience needed.
   - Timeline for next review or conversation.

6. Development plan (going forward):
   - 1–3 development goals for next quarter.
   - How will you support them? (training, stretch project, mentorship).
   - Check-in frequency (monthly 1:1s, quarterly reviews).

7. Closing:
   - Summarize key points (achievements, development areas, next steps).
   - "I value your contribution. Let's stay aligned through regular check-ins."
   - Document: send email summary of discussion, goals, next steps.

Be specific, fair, and focused on behavior/impact (not personality).`,
    variables: [
      { name: 'employee', label: 'Employee name', placeholder: 'John, Sarah' },
      { name: 'role', label: 'Role/title', placeholder: 'Software engineer, product manager, sales rep' },
      { name: 'period', label: 'Review period', placeholder: 'Q4 2024, 2024 annual' },
      { name: 'level', label: 'Expected performance level', default: 'meets expectations', placeholder: 'exceeds expectations, meets expectations, below expectations' },
    ],
  },
  {
    id: 'business-negotiation-prep-coach',
    title: 'Negotiation Preparation & Strategy Coach',
    category: 'business',
    tags: ['negotiation', 'strategy', 'coaching'],
    description: 'Coaches you through negotiation preparation, strategy, and walk-away points.',
    body: `You are preparing for an important negotiation.

Negotiation: {{negotiation}}
Other party: {{party}}
Timeline: {{timeline}}

Coach you through preparation:

1. Goal clarity:
   - What is your ideal outcome? (not your opening ask).
   - What is acceptable? (minimum threshold).
   - What is a walk-away point? (below which you don't deal).
   - Difference between ideal and walk-away = your negotiating range.

2. Other party analysis:
   - What are their goals and constraints?
   - What matters most to them (price, terms, relationship)?
   - BATNA (best alternative to negotiated agreement): what do they do if you don't reach agreement?
   - Leverage: what do you have that they want? What do they have that you need?

3. Opening strategy:
   - Should you anchor first (aggressive opening) or let them (understand their position)?
   - If you anchor: start high, give room for concessions.
   - If they anchor: understand their reasoning before reacting.

4. Negotiation tactics:
   - Concession strategy: what will you give up, in what order, with what trades?
   - Never give something for nothing: "If you move on price, I can move on timeline."
   - Silence: don't fill pauses; give them time to reconsider.
   - Reframe: "That's a good point. Can we explore..." (cooperative vs. adversarial).

5. Preparation:
   - Talking points: 3–5 key arguments for your position.
   - Counter-arguments: how will you respond if they push back?
   - Trade-offs: what will you offer if they won't budge on your main ask?

6. Team alignment:
   - If negotiating as a team: who speaks to what? Who's the decision-maker?
   - Are all team members aligned on walk-away and ideal outcomes?

7. Documentation:
   - After negotiation, document agreed terms in writing (email or formal agreement).
   - Confirm understanding: "So we agreed on X, Y, Z. Is that correct?"

8. Debrief (after):
   - Did you meet your goal? What surprised you?
   - Lessons for next negotiation?

Be strategic but authentic; rushing or being overly aggressive often backfires.`,
    variables: [
      { name: 'negotiation', label: 'Negotiation topic', placeholder: 'Salary negotiation, contract renewal, vendor pricing' },
      { name: 'party', label: 'Other party', placeholder: 'Employer, vendor, customer, partner' },
      { name: 'timeline', label: 'Negotiation timeline', placeholder: 'This week, by end of month' },
    ],
  },
  {
    id: 'business-partnership-opportunity-analyzer',
    title: 'Partnership & Strategic Alliance Analyzer',
    category: 'business',
    tags: ['partnerships', 'strategy', 'analysis'],
    description: 'Analyzes partnership opportunities, evaluates strategic fit, and recommends go/no-go decisions.',
    body: `You are evaluating a potential partnership or strategic alliance.

Potential partner: {{partner}}
Opportunity type: {{type}}
Strategic context: {{context}}

Analyze and recommend:

1. Strategic fit assessment:
   - Does this partnership advance {{context}} goals?
   - Complementary strengths: what does each party bring?
   - Customer overlap: shared customers, or new market expansion?
   - Risk of conflict: does this compete with existing partnerships?

2. Partner evaluation:
   - Track record: past partnerships, reputation, financial health.
   - Capability: can they deliver on promises?
   - Alignment: do their values/culture align with yours?
   - Size/maturity: are you on equal footing, or is there an imbalance?

3. Value exchange:
   - What do you gain? (revenue, customers, capabilities, market access).
   - What do they gain?
   - Is the value exchange balanced and clear?

4. Deal structure options:
   - Option A: {structure} → benefits → risks → revenue split.
   - Option B: {structure} → benefits → risks → revenue split.
   - Recommend best structure with rationale.

5. Terms & contract:
   - Revenue sharing (commission %, markup, flat fee).
   - Term length (1 year, 3 years, evergreen).
   - Exclusivity (can they partner with competitors?).
   - Performance requirements (minimum commitments).
   - Termination clause (exit strategy).

6. Execution & integration:
   - How will the partnership operate day-to-day?
   - Integration points (product, sales, customer success).
   - Communication and escalation.
   - Success metrics (revenue, customer acquisition, NPS).

7. Risk assessment:
   - Downside risks (reputation, customer confusion, resource drain).
   - Mitigation strategies.
   - Financial exposure (how much are you betting?).

8. Go/no-go recommendation:
   - Recommend: proceed, negotiate modified terms, or pass.
   - Conditions for partnership (what needs to be true?).
   - Contingency (how to exit if partnership underperforms).

Provide: partnership analysis memo, deal structure recommendation, success metrics.`,
    variables: [
      { name: 'partner', label: 'Potential partner company', placeholder: 'Slack, Salesforce, industry competitor, technology provider' },
      { name: 'type', label: 'Partnership type', placeholder: 'API integration, white-label, channel partnership, joint venture' },
      { name: 'context', label: 'Strategic context', placeholder: 'Expanding product ecosystem, entering new market, building competitive advantage' },
    ],
  },
  {
    id: 'business-product-launch-checklist',
    title: 'Product Launch Readiness Checklist',
    category: 'business',
    tags: ['launch', 'product', 'checklist'],
    description: 'Creates a comprehensive product launch checklist covering product, marketing, operations, and go-to-market.',
    body: `You are preparing for a product launch.

Product/feature: {{product}}
Launch date: {{launch_date}}
Launch type: {{type}}

Generate a comprehensive launch checklist:

1. Product readiness (2–4 weeks before):
   - Feature complete and tested (UAT sign-off).
   - Performance validated (load testing, latency acceptable).
   - Security reviewed (no known vulnerabilities).
   - Documentation (user guide, API docs, FAQs).
   - Known limitations documented (what's not included, why).

2. Go-to-market readiness:
   - Messaging finalized (positioning, value prop, use cases).
   - Sales enablement (sales deck, talking points, competitive positioning).
   - Marketing assets (landing page, blog post, webinar, social media calendar).
   - Press release drafted (for {{type}} launch).

3. Customer communication:
   - Announcement email drafted and scheduled.
   - In-app notification or banner (if applicable).
   - Customer success team briefed on key features and benefits.
   - Support team trained (FAQ, common issues, how to escalate).

4. Sales & support readiness:
   - Sales team trained (feature walkthrough, demo, ROI positioning).
   - Sales collateral ready (one-sheets, case studies, testimonials).
   - Support team prepared (hotline staffed, escalation plan).
   - Customer success check-ins scheduled (post-launch).

5. Infrastructure & operations:
   - Deployment plan (staging → production, rollback plan).
   - Monitoring dashboard active (track errors, performance, adoption).
   - On-call schedule (who's monitoring first 24–48 hours?).
   - Database capacity verified.

6. Launch day operations:
   - Communications: who announces, in what order ({{type}} launch sequence).
   - Marketing push: emails sent, social posts scheduled, webinar live.
   - Support staffing: full team, extended hours if needed.
   - Escalation: if issues arise, who escalates to engineering?

7. Post-launch (first week):
   - Monitor adoption metrics (% users trying feature).
   - Bug fixes (critical bugs only; defer other changes 1 week).
   - Customer feedback loops (gather reactions, early wins).
   - Success metrics dashboard (revenue impact, NPS shift).

8. Success metrics & holdover criteria:
   - Key metrics to track post-launch.
   - Go/no-go criteria (when do you declare launch successful vs. rollback?).
   - Cadence: daily standup first 48 hours, then daily for 1 week, then regular.

Format as a checklist with owners and due dates.`,
    variables: [
      { name: 'product', label: 'Product or feature launching', placeholder: 'New AI feature, mobile app, enterprise tier' },
      { name: 'launch_date', label: 'Target launch date', placeholder: '2024-06-15' },
      { name: 'type', label: 'Launch type', default: 'soft launch', placeholder: 'soft launch, beta, public launch, major release' },
    ],
  },
  {
    id: 'business-customer-feedback-analyzer',
    title: 'Customer Feedback Analysis & Action Generator',
    category: 'business',
    tags: ['customer-feedback', 'analysis', 'insights'],
    description: 'Analyzes customer feedback to identify themes, sentiment, and actionable recommendations.',
    body: `You are analyzing customer feedback.

Feedback source: {{source}}
Feedback data: {{feedback}}
Analysis scope: {{scope}}

Analyze and report:

1. Sentiment analysis:
   - % Positive, % Neutral, % Negative feedback.
   - NPS or satisfaction score trends (if available).
   - Tone: excited, satisfied, frustrated, angry?

2. Theme identification:
   - Top 5–7 themes across feedback.
   - Theme 1: {name} → # of mentions → % of feedback.
   - Examples: "ease of use", "pricing", "customer support", "feature gap".
   - Sentiment per theme (is pricing positive or negative overall?).

3. Feature requests & gaps:
   - Most-requested features (with frequency).
   - Features customers love (mention in positive feedback).
   - Friction points (why do customers struggle?).

4. Customer segment insights:
   - Do feedback themes vary by customer segment (SMB vs. enterprise, new vs. churned)?
   - Segment 1: common complaints.
   - Segment 2: common praise.

5. Competitive context:
   - How do customers compare you to competitors (if mentioned)?
   - What are you winning on? What are you losing on?

6. Actionable recommendations:
   - Quick wins (easy to implement, high impact).
   - Medium-term improvements (roadmap items).
   - Long-term strategic shifts.
   - Example: "Feature request [X] mentioned by 10 customers; prioritize in Q3 roadmap."

7. Communication plan:
   - How will you close the loop with customers?
   - Themes to address in next customer communication.
   - What will you tell them you're doing about their feedback?

8. Ongoing monitoring:
   - Set up dashboard to track feedback themes over time.
   - Monthly review cadence.

Return: sentiment summary, theme breakdown with frequency, top 3 recommendations, customer communication template.`,
    variables: [
      { name: 'source', label: 'Feedback source', placeholder: 'Support tickets, NPS survey, customer interviews, Slack community' },
      { name: 'feedback', label: 'Customer feedback data', placeholder: 'Paste feedback excerpts or data summary' },
      { name: 'scope', label: 'Analysis scope', default: 'last 30 days', placeholder: 'last 30 days, last quarter, last 12 months' },
    ],
  },
];

export default prompts;
