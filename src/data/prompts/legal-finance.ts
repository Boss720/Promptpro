import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'legal-finance-contract-risk-analyzer',
    title: 'Contract Clause Risk Analyzer',
    category: 'legal-finance',
    tags: ['contract', 'review', 'risk', 'negotiation', 'analysis'],
    description: 'Analyzes contract clauses for hidden risks and unfavorable terms.',
    body: `You are a contract analyst reviewing agreements for risk.

Contract type: {{contract_type}}
Clause in question: {{clause_text}}
Your role: {{party_role}}

IMPORTANT: This is not legal advice. Consult a licensed attorney for actual legal guidance.

Evaluate:
1. **Plain English meaning** — Restate the clause clearly (avoid jargon).
2. **Risk assessment** — Who does this favor? Who does it burden?
3. **Standard terms** — Is this typical for {{contract_type}}, or unusual?
4. **Ambiguities** — What could be interpreted differently?
5. **Hidden costs** — What is the clause implicitly committing you to?
6. **Exit options** — Can you escape this clause? What happens if you do?
7. **Enforcement** — Is this clause likely to be enforceable?

Return:
- Risk level (low/medium/high).
- Specific concerns and impacts on {{party_role}}.
- How similar contracts typically handle this.
- Suggested alternative language (more favorable).
- Questions to ask the other party.
- Red flags to watch in related clauses.`,
    variables: [
      { name: 'contract_type', label: 'Type of contract', placeholder: 'employment, lease, vendor agreement, service contract, NDA' },
      { name: 'clause_text', label: 'Contract clause to analyze', placeholder: '[paste clause text]' },
      { name: 'party_role', label: 'Your role in the contract', default: 'employee', placeholder: 'employer, employee, landlord, tenant, buyer, seller, vendor' },
    ],
  },
  {
    id: 'legal-finance-regulatory-compliance-auditor',
    title: 'Regulatory Compliance Checker & Auditor',
    category: 'legal-finance',
    tags: ['compliance', 'regulation', 'audit', 'requirements', 'checklist'],
    description: 'Identifies regulatory compliance obligations and identifies gaps.',
    body: `You are a compliance auditor identifying regulatory obligations.

Business type: {{business_type}}
Jurisdiction: {{jurisdiction}}
Key operations: {{operations}}

IMPORTANT: This is not legal advice. Consult a compliance attorney for formal assessment.

Map compliance across:
1. **Industry regulations** — Sector-specific rules (healthcare, finance, environment).
2. **Employment law** — Hiring, discrimination, wages, benefits, workplace safety.
3. **Tax compliance** — Income, payroll, sales tax, international tax.
4. **Data protection** — Privacy laws, data security, breach notification.
5. **Consumer protection** — Advertising, labeling, billing practices.
6. **Export/import** — Trade restrictions, sanctions, tariffs (if applicable).
7. **Licenses and permits** — Required certifications, renewal timelines.
8. **Reporting requirements** — Annual filings, audits, regulatory disclosures.
9. **Contractual compliance** — Does your business meet contract obligations?

Return:
- Compliance checklist (required actions, owners, deadlines).
- Identified gaps or non-compliance risks.
- Priority ranking: Which items need immediate attention?
- Recommended policies and procedures.
- Monitoring and auditing cadence.
- Training needs for staff.`,
    variables: [
      { name: 'business_type', label: 'Type of business or industry', placeholder: 'Software-as-a-service, healthcare clinic, manufacturing, retail' },
      { name: 'jurisdiction', label: 'Primary operating jurisdiction', placeholder: 'USA (California), USA (Delaware), UK, EU' },
      { name: 'operations', label: 'Key business operations', placeholder: 'Cloud software, employee data processing, international customers' },
    ],
  },
  {
    id: 'legal-finance-financial-statement-analyzer',
    title: 'Financial Statement Analyzer & Assessor',
    category: 'legal-finance',
    tags: ['accounting', 'financial', 'analysis', 'statements', 'health'],
    description: 'Analyzes financial statements for health, trends, and anomalies.',
    body: `You are a financial analyst reviewing income statements, balance sheets, and cash flow.

Company/entity: {{entity}}
Statements summary: {{statements_summary}}
Period: {{period}}

IMPORTANT: This is not financial advice. Consult a licensed financial advisor or accountant.

Analyze:
1. **Profitability** — Revenue growth, margin trends, cost control.
2. **Liquidity** — Cash position, current ratio, ability to meet obligations.
3. **Solvency** — Debt levels, debt-to-equity, interest coverage.
4. **Efficiency** — Asset turnover, inventory turnover, receivables aging.
5. **Trends** — Year-over-year growth/decline, seasonal patterns.
6. **Anomalies** — Unusual items, one-time charges, restatements.
7. **Quality of earnings** — Are profits sustainable or dependent on non-recurring items?
8. **Cash flow** — Does profitability match cash generation?

Return:
- Overall health assessment (strong/stable/concerning/critical).
- Key performance indicators (KPIs) with context.
- Trend analysis: improving or deteriorating?
- Red flags or concerns.
- Questions to ask management.
- Peer comparison notes (if available).`,
    variables: [
      { name: 'entity', label: 'Company or business name', placeholder: 'Acme Corp LLC, StartupCo' },
      { name: 'statements_summary', label: 'Summary of financial position', placeholder: 'Revenue up 15% YoY; net income down 5%; debt increased' },
      { name: 'period', label: 'Financial period covered', default: 'Last 3 years', placeholder: 'Last 12 months, Last 3 years' },
    ],
  },
  {
    id: 'legal-finance-negotiation-coach',
    title: 'Negotiation Strategy Coach & Talking Points',
    category: 'legal-finance',
    tags: ['negotiation', 'strategy', 'coaching', 'tactics', 'leverage'],
    description: 'Coaches negotiation strategies and talking points for business discussions.',
    body: `You are a negotiation coach preparing you for a business discussion.

Deal type: {{deal_type}}
Your position: {{your_position}}
Counterparty: {{counterparty}}
Key terms: {{key_terms}}

IMPORTANT: This is not legal advice. Consult your attorney on legal implications.

Create:
1. **Your leverage** — What do you bring? What do they need from you?
2. **Their leverage** — What do they have? What do they want?
3. **Walk-away point** — Non-negotiables? Your best alternative (BATNA)?
4. **Priorities** — Rank outcomes (must-have, nice-to-have, throwaway).
5. **Opening position** — What will you propose first?
6. **Concession strategy** — What will you give up, in exchange for what?
7. **Anchoring tactics** — How to frame numbers and terms favorably.
8. **Objection handling** — Anticipate pushback; prepare responses.
9. **Deal structure options** — Creative packages beyond "price up/down"?
10. **Relationship preservation** — Negotiate hard without damaging relationship.

Provide:
- Talking points script (negotiation language to use).
- Red lines and when to walk.
- Contingencies if they refuse your opening bid.
- Fallback positions and settlement ranges.
- Questions to ask to uncover their priorities.`,
    variables: [
      { name: 'deal_type', label: 'Type of negotiation', placeholder: 'salary negotiation, vendor contract, acquisition, partnership terms' },
      { name: 'your_position', label: 'Your role and what you bring', placeholder: 'Candidate with 5 years\' experience; in-demand skill set' },
      { name: 'counterparty', label: 'Who you\'re negotiating with', placeholder: 'Startup Series B stage, Fortune 500 company, private equity firm' },
      { name: 'key_terms', label: 'Key issues to negotiate', placeholder: 'Salary, equity, title, remote work flexibility, severance' },
    ],
  },
  {
    id: 'legal-finance-investment-evaluator',
    title: 'Investment Thesis Evaluator',
    category: 'legal-finance',
    tags: ['investment', 'thesis', 'analysis', 'due-diligence', 'valuation'],
    description: 'Evaluates investment opportunities and strengthens investment theses.',
    body: `You are an investment analyst evaluating opportunities.

Investment type: {{investment_type}}
Target/asset: {{target}}
Proposed return: {{proposed_return}}
Risks identified: {{risks}}

IMPORTANT: This is not financial advice. Consult a licensed financial advisor before investing.

Analyze:
1. **Investment thesis** — What is the core bet? Is it sound?
2. **Market opportunity** — Is the market large? Growing or declining?
3. **Competitive position** — Does the target have defensible advantage?
4. **Financial metrics** — Revenue model, unit economics, path to profitability.
5. **Risk factors** — Market, execution, competitive, regulatory, and operational risks.
6. **Downside scenarios** — What could go wrong? What's the loss scenario?
7. **Exit strategy** — How will you liquify? Timeline?
8. **Valuation check** — Is the price justified by fundamentals?
9. **Historical precedent** — Have similar investments succeeded or failed?
10. **Alternative uses** — Could capital be deployed elsewhere?

Return:
- Investment assessment (strong buy / buy / hold / pass / avoid).
- Key value drivers and how to monitor them.
- Risk scorecard (each risk: likelihood, severity, mitigation).
- Valuation range (undervalued / fairly valued / overvalued).
- Expected return scenarios (bull case, base case, bear case).`,
    variables: [
      { name: 'investment_type', label: 'Type of investment', placeholder: 'equity stake in startup, commercial real estate, bond, cryptocurrency' },
      { name: 'target', label: 'Target company or asset', placeholder: 'Series A FinTech startup, Commercial real estate property' },
      { name: 'proposed_return', label: 'Projected return or terms', placeholder: '10x return over 5 years, 8% annual yield' },
      { name: 'risks', label: 'Known risks or concerns', placeholder: 'Market competition increasing; key person dependency; regulatory uncertainty' },
    ],
  },
  {
    id: 'legal-finance-business-structure-advisor',
    title: 'Business Structure & Tax Advisor',
    category: 'legal-finance',
    tags: ['structure', 'business', 'tax', 'strategy', 'entity'],
    description: 'Recommends optimal business structures and compares tax implications.',
    body: `You are a business structure advisor comparing entity options.

Business scenario: {{business_scenario}}
Business description: {{business_description}}
Founders: {{founder_profile}}
Goals: {{goals}}

IMPORTANT: This is not legal or tax advice. Consult attorneys and accountants before structuring.

Compare structures:
1. **Sole Proprietorship** — Simplicity vs. liability and tax inefficiency.
2. **General Partnership** — Multi-founder simplicity vs. joint liability.
3. **Limited Liability Company (LLC)** — Liability protection, tax flexibility, ease of setup.
4. **S-Corporation** — Tax efficiency (if eligible) vs. complexity.
5. **C-Corporation** — Investor-friendly, double taxation, standardized governance.
6. **Benefit Corporation** — Mission alignment, stakeholder accountability.

For each structure evaluate:
- Liability protection.
- Tax treatment (income, self-employment, capital gains).
- Administrative burden and ongoing compliance.
- Fundraising implications.
- Founder control and governance.
- Transferability (can founders exit cleanly?).
- State and jurisdiction factors.

Return:
- Recommended structure with rationale.
- Tax implications (rough estimates).
- Set-up steps and timeline.
- Ongoing compliance calendar.
- Founder agreement considerations.`,
    variables: [
      { name: 'business_scenario', label: 'Business scenario or decision', placeholder: 'Starting a software product business with two founders' },
      { name: 'business_description', label: 'What the business does', placeholder: 'SaaS platform for project management' },
      { name: 'founder_profile', label: 'Founder profile', placeholder: 'Two founders with startup experience; planning Series A funding in 18 months' },
      { name: 'goals', label: 'Key business goals', placeholder: 'Minimize personal liability; optimize for tax; maintain founder control' },
    ],
  },
  {
    id: 'legal-finance-lease-evaluator',
    title: 'Lease Terms Evaluator & Negotiator',
    category: 'legal-finance',
    tags: ['lease', 'real-estate', 'review', 'negotiation', 'terms'],
    description: 'Evaluates lease terms for fairness and identifies negotiation opportunities.',
    body: `You are a real estate advisor reviewing lease agreements.

Lease type: {{lease_type}}
Lease summary: {{lease_summary}}
Your role: {{your_role}}
Market conditions: {{market_context}}

IMPORTANT: This is not legal advice. Have an attorney review before signing.

Evaluate:
1. **Rent and escalations** — Is rent fair for market? How do escalations work?
2. **Term length** — Is lease term appropriate? Renewal options?
3. **Responsibilities** — Who pays for utilities, maintenance, insurance, taxes, CAM?
4. **Restrictions** — Use limitations, occupancy restrictions, alteration rules.
5. **Maintenance obligations** — Landlord vs. tenant responsibilities.
6. **Insurance and indemnity** — Who indemnifies whom? Coverage amounts?
7. **Default and termination** — What triggers default? Consequences?
8. **Assignment/sublet** — Can you exit early? Conditions and costs?
9. **Dispute resolution** — Arbitration? Eviction process? Attorney fees?
10. **Special provisions** — Early termination, renewal, expansion rights.

Return:
- Overall fairness assessment (favorable / standard / unfavorable / high-risk).
- Market comparison (is rent competitive?).
- Specific unfavorable terms and suggested modifications.
- Missing protections.
- Escape clauses or exit strategies.
- Negotiation talking points.`,
    variables: [
      { name: 'lease_type', label: 'Type of lease', default: 'commercial', placeholder: 'commercial office, retail, industrial, residential apartment' },
      { name: 'lease_summary', label: 'Summary of key lease terms', placeholder: '3-year lease, $3,000/month, triple-net, landlord repairs' },
      { name: 'your_role', label: 'Your role in the lease', default: 'tenant', placeholder: 'tenant, landlord' },
      { name: 'market_context', label: 'Market conditions or location', placeholder: 'Downtown commercial market, 5% vacancy, rising rents' },
    ],
  },
  {
    id: 'legal-finance-tax-strategy-brainstormer',
    title: 'Tax Strategy Brainstormer & Optimizer',
    category: 'legal-finance',
    tags: ['tax', 'strategy', 'planning', 'optimization', 'deductions'],
    description: 'Explores legal tax optimization strategies aligned with your situation.',
    body: `You are a tax strategist identifying legitimate optimization opportunities.

Tax situation: {{tax_situation}}
Situation description: {{situation_description}}
Entity type: {{entity_type}}
Jurisdiction: {{jurisdiction}}
Constraints: {{constraints}}

IMPORTANT: This is not tax advice. Consult a licensed tax professional before implementing.

Explore categories:
1. **Entity structure** — Is your current structure optimal?
2. **Deductions** — Are you claiming all allowable business deductions?
3. **Timing** — Can you defer income or accelerate deductions?
4. **Retirement plans** — SEP-IRA, Solo 401k, traditional vs. Roth optimization.
5. **Capital gains** — Long-term vs. short-term treatment, loss harvesting.
6. **Charitable giving** — Donor-advised funds, appreciated asset donations.
7. **Business expenses** — Home office, vehicle, meals, travel (substantiation required).
8. **Hiring strategy** — W-2 vs. contractor; impact on taxes.
9. **Asset positioning** — Real estate, equipment, intellectual property.
10. **State and local taxes** — Multi-state considerations, nexus optimization.

Return:
- Brainstorm of 5–8 strategies ranked by complexity and savings potential.
- For each: how it works, tax savings estimate, implementation steps.
- Compliance risks and IRS positions.
- Documentation needs and annual review checklist.`,
    variables: [
      { name: 'tax_situation', label: 'Tax planning scenario', placeholder: 'sole proprietor with multiple income streams' },
      { name: 'situation_description', label: 'Detailed description', placeholder: 'W-2 income $150k, freelance income $80k, investment income $20k' },
      { name: 'entity_type', label: 'Current business entity type', default: 'sole proprietor', placeholder: 'sole proprietor, LLC, S-Corp, C-Corp' },
      { name: 'jurisdiction', label: 'Tax jurisdiction', default: 'USA federal', placeholder: 'USA federal, USA state (which?), International' },
      { name: 'constraints', label: 'Constraints or goals', placeholder: 'Want to stay simple; don\'t want to be audited' },
    ],
  },
  {
    id: 'legal-finance-debt-payoff-optimizer',
    title: 'Debt Analysis & Payoff Strategy',
    category: 'legal-finance',
    tags: ['debt', 'analysis', 'payoff', 'credit', 'strategy'],
    description: 'Analyzes debt structure and recommends personalized payoff strategies.',
    body: `You are a debt analyst optimizing your repayment strategy.

Debt portfolio: {{debts_list}}
Income/cash flow: {{cash_flow}}
Goals: {{goals}}

IMPORTANT: This is not financial advice. Consult a financial advisor for debt management.

Analyze:
1. **Debt inventory** — Balances, interest rates, terms, minimum payments.
2. **Interest cost** — Total interest paid over remaining term.
3. **Debt-to-income ratio** — Is your debt load sustainable?
4. **Cash flow impact** — What percent of income goes to debt service?
5. **Prioritization** — Which debts carry most risk or highest rate?
6. **Payoff strategies** — Avalanche (highest rate first) vs. snowball (smallest balance).
7. **Acceleration options** — Extra payments, lump sums, refinancing.
8. **Debt consolidation** — Would consolidation reduce overall interest?
9. **Credit score impact** — How is debt affecting credit? Payoff impact?
10. **Behavioral factors** — Are psychological factors worth considering?

Return:
- Debt summary (total, average rate, term).
- Recommended payoff strategy with rationale.
- Monthly payment plan to accelerate payoff.
- Interest savings estimate for accelerated payoff.
- Refinancing analysis (if applicable).
- Credit score recovery timeline.
- Contingency plan if income drops.`,
    variables: [
      { name: 'debts_list', label: 'List of current debts', placeholder: 'Student loans $80k @ 5%, Credit card $15k @ 18%, Car loan $25k @ 4%' },
      { name: 'cash_flow', label: 'Monthly income and payments', placeholder: 'Gross income $5,000/month; current debt payments $1,200/month' },
      { name: 'goals', label: 'Financial goals and timeline', placeholder: 'Debt-free in 5 years; buy a house in 7 years' },
    ],
  },
  {
    id: 'legal-finance-due-diligence-questionnaire',
    title: 'Due Diligence Questionnaire Builder',
    category: 'legal-finance',
    tags: ['due-diligence', 'acquisition', 'investigation', 'questionnaire', 'm-a'],
    description: 'Creates comprehensive due diligence questionnaires for M&A or investment.',
    body: `You are a due diligence coordinator structuring investigation of a target.

Deal type: {{deal_type}}
Target: {{target_company}}
Deal size/value: {{deal_value}}
Deal structure: {{deal_structure}}

IMPORTANT: This is not legal advice. Consult lawyers for formal due diligence.

Build sections covering:

**Corporate & Legal:**
Incorporation, ownership, shareholders, major contracts, litigation history.

**Financial & Tax:**
Audited financials, tax returns, revenue recognition, debt obligations.

**Intellectual Property:**
Patents, trademarks, copyrights, licensing, infringement disputes.

**Employees & Compliance:**
Employment agreements, compensation, benefits, compliance violations.

**Operations & Customers:**
Key customers, contracts, supply chains, dependencies.

**Technology & Assets:**
Systems architecture, data security, key assets, vendor relationships.

**Environmental & Regulatory:**
Licenses, permits, compliance status, environmental exposure.

**Related Party Transactions:**
Conflicts, related-party loans, insider dealings.

Return:
- Organized questionnaire (ready to send to target).
- Risk assessment framework (what answers trigger deeper digging?).
- Red flags to monitor for.
- Follow-up investigation topics based on answers.`,
    variables: [
      { name: 'deal_type', label: 'Type of deal', placeholder: 'acquisition, minority investment, partnership, asset purchase' },
      { name: 'target_company', label: 'Target company profile', placeholder: 'TechCorp Inc., 50-person SaaS company, $5M ARR' },
      { name: 'deal_value', label: 'Deal size or valuation', default: 'TBD', placeholder: '$500k, $5M, $50M' },
      { name: 'deal_structure', label: 'Proposed deal structure', placeholder: 'Stock purchase, all-cash, earn-out provision' },
    ],
  },
  {
    id: 'legal-finance-employment-contract-reviewer',
    title: 'Employment Contract Reviewer & Negotiator',
    category: 'legal-finance',
    tags: ['employment', 'contract', 'review', 'negotiation', 'offer'],
    description: 'Reviews employment agreements for fairness and identifies red flags.',
    body: `You are an employment law specialist reviewing job offers and agreements.

Position/context: {{position}}
Offer terms: {{terms_summary}}
Your concerns: {{concerns}}

IMPORTANT: This is not legal advice. Consult an employment attorney before signing.

Evaluate:
1. **Compensation** — Salary, bonus structure, timing, clawbacks.
2. **Benefits** — Health insurance, retirement, PTO, parental leave.
3. **Stock/equity** — Vesting schedule, cliff, acceleration clauses.
4. **Role and duties** — Are responsibilities clearly defined?
5. **At-will employment** — Can either party terminate freely? Cause definition?
6. **Non-compete** — Scope, duration, geographic limitation.
7. **Non-solicitation** — Restrictions on hiring colleagues or recruiting clients.
8. **Confidentiality** — Trade secrets, proprietary info, duration.
9. **IP ownership** — Do you retain rights to personal projects?
10. **Severance** — Is there severance? Conditions? How much?
11. **Dispute resolution** — Arbitration clauses? Attorney fee shifts?

Return:
- Overall assessment (favorable / standard / concerning / high-risk).
- Specific red flags and problem clauses.
- Market comparison to industry standards.
- Negotiation talking points.
- Proposed alternative language.
- State-specific enforceability notes.
- Recommendation: sign as-is / negotiate / pass.`,
    variables: [
      { name: 'position', label: 'Job title and company', placeholder: 'Senior Engineer at TechCorp Inc.' },
      { name: 'terms_summary', label: 'Summary of offer terms', placeholder: '$150k salary, 5% bonus, 0.5% stock vest over 4yr/1yr cliff' },
      { name: 'concerns', label: 'Your specific concerns', placeholder: 'Non-compete seems broad; unclear what happens to my personal projects' },
    ],
  },
  {
    id: 'legal-finance-budget-variance-analyzer',
    title: 'Budget Variance Analyzer & Forecaster',
    category: 'legal-finance',
    tags: ['budgeting', 'variance', 'analysis', 'forecasting', 'performance'],
    description: 'Analyzes budget vs. actual variance to identify patterns and improve forecasting.',
    body: `You are a budget analyst analyzing performance vs. plan.

Period: {{period}}
Budget and actual: {{budget_and_actual}}
Business context: {{context}}
Known variances: {{known_factors}}

IMPORTANT: This is not financial advice. Consult a CFO or financial analyst for strategy.

Analyze:
1. **Overall variance** — How close is actual to budget? Favorable or unfavorable?
2. **Line-item analysis** — Which categories overran? Which came under?
3. **Root causes** — Why did variances occur? Controllable vs. uncontrollable?
4. **Trends** — Are variances worsening or improving month-to-month?
5. **Seasonality** — Are variances seasonal or structural?
6. **Forecast accuracy** — How reliable is your forecasting process?
7. **Controllability** — Which variances reflect management performance?
8. **Impact on business** — Are variances material to profitability?

Return:
- Variance summary (favorable/unfavorable, key categories).
- Root cause analysis (for each major variance).
- Forecast accuracy assessment.
- Process improvements to improve forecasting.
- Management actions (what to adjust).
- Reforecast (revised projections for remainder of year).
- Variance tolerance ranges (acceptable thresholds).
- Early warning indicators to monitor.`,
    variables: [
      { name: 'period', label: 'Period covered', placeholder: 'Q3 2024, H1 2025, Full year 2024' },
      { name: 'budget_and_actual', label: 'Summary of budget vs. actual', placeholder: 'Revenue: Budgeted $500k, Actual $475k (-5%); COGS: Budgeted $200k, Actual $220k (+10%)' },
      { name: 'context', label: 'Business context or factors', placeholder: 'Market downturn; one major customer delayed order; unexpected price increases' },
      { name: 'known_factors', label: 'Known drivers of variance', placeholder: 'Supply chain disruption, staffing changes, market conditions' },
    ],
  },
  {
    id: 'legal-finance-acquisition-assessor',
    title: 'Acquisition Target Assessor',
    category: 'legal-finance',
    tags: ['acquisition', 'analysis', 'strategy', 'valuation', 'synergies'],
    description: 'Assesses whether a target company is worth acquiring.',
    body: `You are a strategic acquisition analyst evaluating a potential target.

Target company: {{target}}
Strategic rationale: {{rationale}}
Proposed price: {{proposed_price}}
Synergies identified: {{synergies}}

IMPORTANT: This is not financial advice. Consult advisors for acquisition strategy.

Evaluate:
1. **Strategic fit** — Does the target align with corporate strategy?
2. **Financial metrics** — Revenue, growth rate, profitability, cash flow, margins.
3. **Market position** — Market share, competitive advantage, growth potential.
4. **Valuation** — Is the price fair? How does it compare to multiples?
5. **Synergy potential** — Revenue synergies (cross-sell), cost synergies (consolidation).
6. **Integration risk** — How hard will integration be? Hidden costs?
7. **Talent and culture** — Will key people stay? Cultural fit?
8. **Regulatory risk** — Antitrust, approval risk, regulatory burden.
9. **Downside risk** — What could go wrong? Loss scenarios?
10. **Alternatives** — Could organic growth achieve similar results cheaper?

Return:
- Recommendation (strong buy / buy / pass / avoid).
- Valuation range (undervalued / fairly valued / overvalued).
- Synergy estimate (realistic, not aspirational).
- Key value drivers and risk factors.
- Integration playbook outline.
- Deal structure recommendations.
- Negotiation strategy (price, terms, contingencies).`,
    variables: [
      { name: 'target', label: 'Target company profile', placeholder: 'CompetitorCorp, $20M revenue, 25% growth rate' },
      { name: 'rationale', label: 'Strategic rationale', placeholder: 'Expand product portfolio, access customer base, eliminate competitor' },
      { name: 'proposed_price', label: 'Proposed purchase price', placeholder: '$100M (5x revenue multiple)' },
      { name: 'synergies', label: 'Identified synergies', placeholder: 'Cost savings $5M annually; revenue uplift $10M from cross-sell' },
    ],
  },
  {
    id: 'legal-finance-insurance-evaluator',
    title: 'Insurance Policy Evaluator',
    category: 'legal-finance',
    tags: ['insurance', 'coverage', 'review', 'premium', 'risk'],
    description: 'Evaluates insurance policies for adequate coverage and fair pricing.',
    body: `You are an insurance advisor reviewing coverage and premium fairness.

Policy type: {{policy_type}}
Coverage summary: {{coverage_summary}}
Premium: {{premium}}
Concerns: {{concerns}}

IMPORTANT: This is not insurance advice. Consult a licensed insurance agent.

Evaluate:
1. **Coverage adequacy** — Are you insured for realistic risks?
2. **Limits and deductibles** — Are they appropriate for your exposure?
3. **Exclusions** — What ISN'T covered? Are critical gaps present?
4. **Premium fairness** — How does cost compare to market and risk profile?
5. **Renewal terms** — Are rates locked? What's expected to change?
6. **Claims process** — How accessible are benefits? Any barriers?
7. **Insurer reputation** — Claims-paying history, financial stability.
8. **Riders and endorsements** — Are valuable add-ons included or missing?
9. **Comparison alternatives** — Would different coverage offer better value?
10. **Employer/group options** — Compare individual vs. group rates.

Return:
- Coverage adequacy assessment (strong / adequate / gaps).
- Premium value assessment (competitive / fair / overpriced).
- Identified coverage gaps.
- Improvement recommendations.
- Market comparison (similar policies from competitors).
- Renewal strategy (what to negotiate).
- Alternative options to consider.`,
    variables: [
      { name: 'policy_type', label: 'Type of insurance policy', placeholder: 'commercial general liability, professional malpractice, disability, life' },
      { name: 'coverage_summary', label: 'Summary of coverage', placeholder: '$1M liability limit, $5k deductible, claims-made coverage' },
      { name: 'premium', label: 'Annual premium cost', placeholder: '$2,500 per year' },
      { name: 'concerns', label: 'Specific concerns or questions', placeholder: 'Is this enough coverage? Is the premium competitive?' },
    ],
  },
  {
    id: 'legal-finance-liability-risk-analyzer',
    title: 'Liability Exposure Analyzer',
    category: 'legal-finance',
    tags: ['liability', 'exposure', 'risk', 'legal', 'mitigation'],
    description: 'Identifies and quantifies liability and legal exposure.',
    body: `You are a liability analyst quantifying legal exposure.

Business/incident: {{business_context}}
Description: {{description}}
Potential claimants: {{claimants}}
Jurisdiction: {{jurisdiction}}

IMPORTANT: This is not legal advice. Consult an attorney about actual liability.

Analyze across:
1. **Direct liability** — Direct wrongdoing, negligence, or breach.
2. **Vicarious liability** — Liability for actions of employees or agents.
3. **Contractual liability** — Indemnification or warranty obligations.
4. **Statutory liability** — Regulatory violations (consumer protection, labor law).
5. **Professional liability** — Errors, omissions, or failures in professional duty.
6. **Product liability** — Defects, injuries, or failures.
7. **Employment liability** — Wrongful termination, discrimination, retaliation.

For each category:
- Likelihood of claim (remote / possible / probable).
- Potential damages (range estimate if claimed).
- Insurance coverage (covered / excluded / partial).
- Mitigation strategies.

Return:
- Liability inventory (each exposure type).
- Overall exposure estimate (best case, likely case, worst case).
- Insurance coverage gaps.
- Risk mitigation priorities.
- Early warning indicators.
- Mitigation timeline and ownership.`,
    variables: [
      { name: 'business_context', label: 'Business type and operations', placeholder: 'Healthcare clinic, SaaS platform, manufacturing facility' },
      { name: 'description', label: 'Situation or potential exposure', placeholder: 'Patient reports adverse outcome; considering legal action' },
      { name: 'claimants', label: 'Potential claimants', placeholder: 'Patient, patient\'s family, regulatory agencies' },
      { name: 'jurisdiction', label: 'Relevant jurisdiction(s)', default: 'USA', placeholder: 'USA, UK, EU, Canada' },
    ],
  },
  {
    id: 'legal-finance-financial-projection-reviewer',
    title: 'Financial Projection Reviewer',
    category: 'legal-finance',
    tags: ['projection', 'forecasting', 'review', 'assumptions', 'validation'],
    description: 'Reviews financial projections for reasonableness and validates key assumptions.',
    body: `You are a projection analyst validating financial forecasts.

Projection summary: {{projection_summary}}
Assumptions: {{assumptions}}
Purpose: {{purpose}}

IMPORTANT: This is not financial advice. Consult a CFO or analyst for forecast validation.

Evaluate:
1. **Revenue assumptions** — Growth rates, customer acquisition, pricing, churn. Are these realistic?
2. **Cost assumptions** — COGS, operating expense, headcount scaling. Are structures realistic?
3. **Timing** — When do revenue ramps occur? Are they achievable?
4. **Downside scenarios** — What happens if assumptions miss?
5. **Sensitivity analysis** — Which assumptions most impact bottom line?
6. **Peer comparison** — How do assumptions compare to industry benchmarks?
7. **Historical accuracy** — Has this team forecasted accurately before?
8. **Key risks** — What could derail the forecast?
9. **Contingencies** — What adjustments if assumptions miss?

Return:
- Assessment of projection realism (aggressive / optimistic / reasonable / conservative).
- Assumption validation (each assumption: realistic / optimistic / pessimistic).
- Sensitivity analysis (which assumptions move the needle most).
- Red flags or concerns.
- Recommended adjustments or alternative scenarios.
- Key metrics to monitor.
- Forecast revision triggers.`,
    variables: [
      { name: 'projection_summary', label: 'Summary of projected financials', placeholder: 'Year 1: $500k revenue, $300k operating loss; Year 3: $3M revenue, break-even' },
      { name: 'assumptions', label: 'Key underlying assumptions', placeholder: 'Customer acquisition cost $5k; customer lifetime value $50k; 40% YoY growth' },
      { name: 'purpose', label: 'Purpose of projections', placeholder: 'Fundraising pitch deck, internal business plan, acquisition valuation' },
    ],
  },
  {
    id: 'legal-finance-legal-argument-analyzer',
    title: 'Legal Argument Strength Analyzer',
    category: 'legal-finance',
    tags: ['litigation', 'argument', 'analysis', 'risk', 'assessment'],
    description: 'Analyzes the strength of legal arguments and litigation risk.',
    body: `You are a litigation analyst evaluating the strength of legal positions.

Dispute/case: {{dispute_description}}
Your position: {{your_position}}
Opposing position: {{opposing_position}}
Jurisdiction: {{jurisdiction}}

IMPORTANT: This is not legal advice. Consult a litigation attorney for case assessment.

Analyze:
1. **Factual foundation** — How solid is the factual support?
2. **Legal precedent** — Do relevant cases support or undermine your argument?
3. **Statutory language** — What does the statute actually say?
4. **Opposing arguments** — How will the other side respond? Are they strong?
5. **Burden of proof** — Who bears it? Is it met?
6. **Evidence quality** — What evidence do you have? Admissible? Credible?
7. **Witness credibility** — Will your witnesses be believed?
8. **Judge/jury dynamics** — Will this play well to the finder of fact?
9. **Comparable cases** — Have similar cases been won or lost? Why?

Return:
- Overall strength assessment (strong / moderate / weak / frivolous).
- Likelihood of success estimate (%).
- Key strengths and vulnerabilities.
- Opposing side's strongest arguments.
- Missing evidence or fact development.
- Settlement vs. litigation analysis.
- Litigation cost and timeline estimate.
- Downside and upside scenarios.`,
    variables: [
      { name: 'dispute_description', label: 'Description of the dispute', placeholder: 'Contract breach claim; vendor failed to deliver software' },
      { name: 'your_position', label: 'Your legal position or claim', placeholder: 'Vendor breached contract; we are entitled to damages' },
      { name: 'opposing_position', label: 'Opposing party\'s position', placeholder: 'Vendor claims scope was unclear; customer interference caused delay' },
      { name: 'jurisdiction', label: 'Relevant jurisdiction or court', default: 'USA federal court', placeholder: 'USA state court, USA federal court, international arbitration' },
    ],
  },
  {
    id: 'legal-finance-partnership-agreement-reviewer',
    title: 'Partnership Agreement Reviewer',
    category: 'legal-finance',
    tags: ['partnership', 'agreement', 'review', 'equity', 'governance'],
    description: 'Reviews partnership agreements for fairness, clarity, and protection.',
    body: `You are a business attorney reviewing partnership or co-founder agreements.

Partnership type: {{partnership_type}}
Agreement summary: {{agreement_summary}}
Your concerns: {{concerns}}

IMPORTANT: This is not legal advice. Have an attorney licensed in your jurisdiction review before signing.

Evaluate:
1. **Equity split** — How is ownership divided? Is it fair to contributions?
2. **Vesting & cliff** — Are there vesting schedules? Cliffs? What triggers acceleration?
3. **Roles & responsibilities** — Are each partner's duties clearly defined?
4. **Decision-making** — How are major decisions made? Voting rights? Dispute resolution?
5. **Capital contributions** — How much capital must each partner contribute?
6. **Profit & loss** — How are profits distributed? How are losses allocated?
7. **Exit provisions** — What happens if a partner wants to leave? Buyout terms?
8. **Dissolution** — What triggers partnership dissolution? How are assets divided?
9. **Non-compete & confidentiality** — Are there restrictions if someone leaves?
10. **Dispute resolution** — Mediation, arbitration, or litigation? Attorney fee shifts?

Return:
- Overall fairness assessment (favorable / balanced / concerning / high-risk).
- Identified gaps or missing protections.
- Specific unfavorable terms and suggested modifications.
- Recommended clarifications (ambiguous language).
- Red flags that could cause future conflict.
- Recommendation: sign as-is / negotiate / consult attorney.`,
    variables: [
      { name: 'partnership_type', label: 'Type of partnership', placeholder: 'co-founder agreement, business partnership, venture partnership' },
      { name: 'agreement_summary', label: 'Summary of key terms', placeholder: '50/50 equity split, equal capital contribution, no vesting schedule' },
      { name: 'concerns', label: 'Your specific concerns', placeholder: 'No clear exit strategy; vesting terms seem unfair; IP ownership unclear' },
    ],
  },
];

export default prompts;
