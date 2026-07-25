import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'research-lit-review-mapper',
    title: 'Literature Review Structure Builder',
    category: 'research',
    tags: ['literature-review', 'structure', 'synthesis'],
    description: 'Organizes a reading list into a coherent lit-review structure by theme.',
    body: `You are a research synthesist helping organize a literature review.

I have read the following papers and sources:
{{reading_list}}

My research focuses on: {{research_focus}}

Please:
1. Group these sources into 4–6 thematic clusters that build logically toward my research question.
2. For each cluster, provide a 2–3 sentence overview explaining how it contributes.
3. Identify the key debates, disagreements, or gaps between clusters.
4. Suggest a narrative arc for the lit review that would position my research as a response to these gaps.

Output as:
- Thematic clusters (labeled, with sources listed)
- Brief overview per cluster
- Synthesis showing connections and tensions
- Proposed lit-review narrative arc

Do not simply list papers in order of publication.`,
    variables: [
      { name: 'reading_list', label: 'Papers and sources', placeholder: 'Smith 2020, "Title"; Jones et al. 2019, "Title"; ...' },
      { name: 'research_focus', label: 'Your research question or focus', placeholder: 'How does X affect Y in Z contexts?' },
    ],
  },
  {
    id: 'research-gap-identifier',
    title: 'Research Gap Locator',
    category: 'research',
    tags: ['gap-analysis', 'literature', 'positioning'],
    description: 'Identifies gaps between existing literature and your proposed research.',
    body: `You are a research gap analyst. Your task is to spot the spaces where new research is needed.

Current literature covers:
{{current_coverage}}

My proposed research would study:
{{proposed_research}}

Existing methodologies used:
{{existing_methods}}

Please identify:
1. Empirical gaps — questions that have not been empirically tested.
2. Methodological gaps — important questions tackled only with outdated or limited methods.
3. Conceptual gaps — theoretical frameworks that have not been applied to this context.
4. Demographic/context gaps — populations or settings underrepresented in prior research.
5. Integration gaps — areas where findings are fragmented or contradictory.

For each gap, explain:
- Why it matters (significance for theory or practice)
- Why it hasn't been filled (barriers, assumptions in the field)
- How your proposed research addresses it

Format as a numbered list with one paragraph per gap.`,
    variables: [
      { name: 'current_coverage', label: 'What literature currently covers', placeholder: 'Studies of X in developed countries, mostly survey-based...' },
      { name: 'proposed_research', label: 'What you propose to study', placeholder: 'X in emerging markets using longitudinal methods...' },
      { name: 'existing_methods', label: 'How prior research approached this', placeholder: 'Cross-sectional surveys, experimental designs, case studies...' },
    ],
  },
  {
    id: 'research-methodology-reviewer',
    title: 'Methodology Soundness Reviewer',
    category: 'research',
    tags: ['methodology', 'review', 'validity'],
    description: 'Evaluates research methodology for internal validity and soundness.',
    body: `You are a research methodology expert conducting a structured review.

The research design is:
{{research_design}}

Sample/participants:
{{sample_details}}

Data collection:
{{data_collection}}

Analysis approach:
{{analysis_approach}}

Provide a structured review covering:

1. **Internal Validity** — Can you draw causal or strong inferential claims?
   - Potential confounds or alternative explanations
   - Strengths in the design that protect against these

2. **Measurement Validity** — Do your measures actually capture what you claim?
   - Construct validity, reliability, potential biases
   - Recommendations if weak

3. **Statistical Power** — Are you likely to detect effects if they exist?
   - Sample size relative to effect size and design
   - Risks of Type I or Type II error

4. **Generalizability Limits** — To whom and under what conditions can findings apply?
   - Population, setting, temporal constraints

5. **Major Vulnerabilities** — List 2–3 biggest methodological risks and how to mitigate them.

Be direct and specific. Do not assume best practices were followed.`,
    variables: [
      { name: 'research_design', label: 'Research design and logic', placeholder: 'Quasi-experimental with treatment and control groups...' },
      { name: 'sample_details', label: 'Sample size, demographics, recruitment', placeholder: 'N=150, undergrads, recruited via SONA...' },
      { name: 'data_collection', label: 'Data collection procedures', placeholder: 'Pre/post questionnaire, behavioral observation...' },
      { name: 'analysis_approach', label: 'Statistical or qualitative analysis plan', placeholder: 'ANCOVA, thematic coding, regression...' },
    ],
  },
  {
    id: 'research-hypothesis-sharpener',
    title: 'Hypothesis Refinement Tool',
    category: 'research',
    tags: ['hypothesis', 'testability', 'clarity'],
    description: 'Sharpens vague research hypotheses into precise, testable predictions.',
    body: `You are a research design expert who specializes in converting fuzzy ideas into testable hypotheses.

My current hypothesis or research question:
{{current_hypothesis}}

Background theory or logic:
{{theoretical_basis}}

Proposed measurement or operationalization:
{{proposed_measurement}}

Please refine this into 2–3 precise, testable hypotheses. For each:

1. State the hypothesis in a single clear sentence using conditional logic (If X, then Y).
2. Define each variable operationally — exactly how will you measure or manipulate it?
3. Specify directionality — do you predict increase, decrease, relationship, or difference?
4. Identify the statistical test that would evaluate this hypothesis.
5. List at least one alternative hypothesis that predicts a different outcome.

Then:
- Explain which hypothesis is strongest theoretically and why.
- Highlight any vagueness or unmeasurable terms still lurking in your language.
- Suggest a single primary hypothesis if multiple are plausible.

Avoid qualitative language like "significantly" or "substantially" unless paired with a measurable threshold.`,
    variables: [
      { name: 'current_hypothesis', label: 'Your current hypothesis or question', placeholder: 'Does stress reduce motivation?' },
      { name: 'theoretical_basis', label: 'Theory backing this prediction', placeholder: 'Ego depletion theory suggests...' },
      { name: 'proposed_measurement', label: 'How you plan to measure variables', placeholder: 'Stress measured via cortisol levels...' },
    ],
  },
  {
    id: 'research-evidence-extractor',
    title: 'Evidence & Findings Extractor',
    category: 'research',
    tags: ['extraction', 'data-synthesis', 'table'],
    description: 'Extracts and organizes key findings, effect sizes, and citations into a table.',
    body: `You are a research data curator. Extract the key findings from provided research summaries or papers and organize them into a structured table.

Papers or summaries to extract from:
{{source_materials}}

Focus on:
{{extraction_focus}}

Please create a table with the following columns:
1. **Study** (Author, Year)
2. **Sample** (N, population, context)
3. **Design** (methodology type)
4. **Key Finding** (main result, max 20 words)
5. **Effect Size** (Cohen's d, correlation, OR, or description)
6. **Confidence/Certainty** (high, moderate, low based on method and sample)
7. **Relevance to my focus** (high/medium/low)

Then:
- Summarize effect sizes across studies — do they cluster or diverge?
- Note any contradictions between studies and possible explanations.
- Highlight studies most relevant to your focus.
- Flag any studies with particularly weak methodology.

Format the table in markdown. Prioritize precision over completeness.`,
    variables: [
      { name: 'source_materials', label: 'Papers or summaries to extract from', placeholder: 'Study A abstract and methods...' },
      { name: 'extraction_focus', label: 'What you want to extract (effects, populations, methods)', placeholder: 'Effect sizes of intervention on math scores across grade levels' },
    ],
  },
  {
    id: 'research-bias-detector',
    title: 'Research Design Bias Checker',
    category: 'research',
    tags: ['bias', 'validity', 'critique'],
    description: 'Identifies potential biases and confounds in a research proposal.',
    body: `You are a critical methodologist trained to spot bias and confounds.

Research proposal summary:
{{research_proposal}}

Participant recruitment and assignment:
{{recruitment_details}}

Researcher involvement:
{{researcher_role}}

Outcome measurement:
{{measurement_method}}

Analyze for the following biases:

1. **Selection Bias** — Are participants representative or systematically different?
   - Self-selection, attrition, differential recruitment

2. **Measurement Bias** — Can the measurement itself influence results?
   - Social desirability, experimenter expectancy, observer bias

3. **Procedural Bias** — Does the procedure favor one outcome?
   - Timing, context, wording, differential treatment

4. **Confounding Variables** — What unmeasured factors could explain results?
   - Demographics, motivation, prior experience, environmental factors

5. **Analyst Bias** — Could your own beliefs influence analysis or interpretation?
   - Selective reporting, HARKing, p-hacking risk

For each bias type:
- Explain if and how it threatens your design
- Propose a specific mitigation (design change, control, or analysis)
- Rate severity: high, moderate, or low

Conclude with the single biggest bias risk you identify.`,
    variables: [
      { name: 'research_proposal', label: 'Summary of your study', placeholder: 'Randomized trial of cognitive training on memory in older adults...' },
      { name: 'recruitment_details', label: 'How participants are recruited and assigned', placeholder: 'Online ads, self-selected, block randomization...' },
      { name: 'researcher_role', label: 'Who administers the study', placeholder: 'Principal investigator administers intervention and measures outcomes...' },
      { name: 'measurement_method', label: 'How outcomes are measured', placeholder: 'Self-reported memory survey, timed task...' },
    ],
  },
  {
    id: 'research-abstract-condenser',
    title: 'Academic Abstract Writer',
    category: 'research',
    tags: ['abstract', 'writing', 'condensing'],
    description: 'Condenses a full paper into a tight, journal-ready abstract.',
    body: `You are an expert academic editor specializing in abstracts. Your task is to distill a full paper into a 250-word maximum abstract that hooks readers and conveys essential information.

Full paper or lengthy summary:
{{paper_content}}

Target journal or audience:
{{target_context}}

Key message (what readers should take away):
{{main_finding}}

Please write a structured abstract with these elements in order:
1. **Background/Problem** (1–2 sentences) — Why does this matter?
2. **Objective/Gap** (1–2 sentences) — What specifically did you address?
3. **Methods** (2–3 sentences) — Study design, sample, key procedures. Be concrete.
4. **Results** (2–3 sentences) — Main findings with effect sizes if available.
5. **Conclusions** (1–2 sentences) — What does this mean? Limitations?

Constraints:
- 250 words maximum (count and report the total)
- Active voice, past tense for methods and results
- No citations, no figures
- Avoid jargon; define essential technical terms once
- Make the first sentence compelling

After the abstract, list 4–6 keywords that would help someone find this work.

Ensure the abstract stands alone — a reader should understand the study without the paper.`,
    variables: [
      { name: 'paper_content', label: 'Full paper or detailed summary', placeholder: 'Introduction paragraphs, methods, results section...' },
      { name: 'target_context', label: 'Target journal or audience', placeholder: 'Psychology Today, Nature Climate Change, peer-reviewed psychology journal...' },
      { name: 'main_finding', label: 'The key takeaway or main finding', placeholder: 'Early intervention X significantly reduces Y by Z%' },
    ],
  },
  {
    id: 'research-citation-formatter',
    title: 'Citation & Bibliography Manager',
    category: 'research',
    tags: ['citations', 'bibliography', 'formatting'],
    description: 'Formats references in a specified style and catches missing bibliographic data.',
    body: `You are a research librarian who ensures citations are complete and correctly formatted.

My unformatted references:
{{raw_references}}

Desired citation style:
{{citation_style}}

Please:
1. Format each reference in the specified style.
2. Check for completeness — flag any missing author names, publication years, page numbers, or DOIs.
3. Alphabetize by author last name.
4. Create a properly formatted bibliography section.
5. Provide in-text citation examples for 2–3 of the references (e.g., how to cite them parenthetically or as footnotes).

For any reference missing critical information:
- Suggest standard abbreviations (e.g., "n.d." for no date)
- Note what additional information would strengthen the citation

Output:
- Formatted bibliography (numbered or alphabetized as per style)
- Any completeness notes or flags
- In-text citation examples

If you cannot parse a reference due to unclear formatting, ask clarifying questions.`,
    variables: [
      { name: 'raw_references', label: 'Unformatted references or note-taking style', placeholder: 'Smith, John. Blah blah 2020. Found on...; Jones et al studying...' },
      { name: 'citation_style', label: 'Citation style (APA, MLA, Chicago, etc.)', default: 'APA', placeholder: 'APA 7th edition, MLA 9th, Chicago 17th, Harvard' },
    ],
  },
  {
    id: 'research-research-question-coach',
    title: 'Research Question Development Coach',
    category: 'research',
    tags: ['coaching', 'research-question', 'discovery'],
    description: 'Guides development of a focused research question through structured questioning.',
    body: `You are a research advisor who helps scholars sharpen their research question through dialogue.

My research interest or topic area:
{{topic_area}}

What I already know or have observed:
{{initial_observations}}

Constraints or context:
{{constraints}}

Through a series of focused questions, help me develop a clear, answerable research question. Ask me one or two questions at a time to:

1. Identify the specific phenomenon or relationship I want to study (not just a broad topic).
2. Determine what variables or factors are most important.
3. Clarify my research objectives (understanding, prediction, intervention testing, exploration).
4. Explore what would count as an answer or finding.
5. Reality-check feasibility given my constraints.

After each response I give, synthesize what you've learned and ask the next clarifying question. Once you have a clear picture, draft a refined research question in 1–2 sentences and check if it fits these criteria:
- Specific enough that a study design follows clearly from it
- Answerable with available methods and resources
- Relevant to the field and stakeholders
- Original (not obviously answered already)

Iterate until we land on a tight question.`,
    variables: [
      { name: 'topic_area', label: 'Your general research topic', placeholder: 'Student motivation in online learning' },
      { name: 'initial_observations', label: 'What you have noticed or what prompted this', placeholder: 'Some students drop out early, others thrive. I wonder why...' },
      { name: 'constraints', label: 'Limitations (time, budget, access, population)', placeholder: 'I have 6 months, access to one university, undergrad sample' },
    ],
  },
  {
    id: 'research-data-interpretation-guide',
    title: 'Statistical Results Interpretation Guide',
    category: 'research',
    tags: ['statistics', 'interpretation', 'coaching'],
    description: 'Walks through interpreting statistical results in plain language.',
    body: `You are a research statistician who helps scholars understand what their data means.

Statistical test(s) I ran:
{{statistical_test}}

My results (statistics, p-values, effect sizes):
{{results}}

My sample size and design:
{{sample_design}}

Please walk me through interpretation in this order:

1. **Significance & Confidence**
   - Is the p-value below 0.05? What does that mean in plain language?
   - What is the 95% confidence interval for my estimate? What does it tell me?
   - Distinguish between statistical significance and practical significance.

2. **Effect Size**
   - What is the effect size (Cohen's d, correlation, etc.)?
   - Is this effect small, medium, or large in your field?
   - What does this size mean for real-world impact?

3. **Confidence in Results**
   - Given my sample size, how confident should I be?
   - What assumptions does this test rely on? Did I meet them?
   - Are there alternative explanations I should consider?

4. **What I Can Claim**
   - Write 2–3 claims I can support with these results
   - Write 2–3 claims I cannot make (even if they seem plausible)

5. **Limitations & Caveats**
   - Any patterns in the data that concern you?
   - Should I worry about multiple comparisons, attrition, or other artifacts?

Explain in language I can use in a research paper.`,
    variables: [
      { name: 'statistical_test', label: 'What test you performed', placeholder: 't-test, ANOVA, chi-square, linear regression...' },
      { name: 'results', label: 'Your actual results and statistics', placeholder: 't(98) = 2.45, p = .016, d = 0.49; 95% CI [0.1, 0.88]' },
      { name: 'sample_design', label: 'Sample size and study design', placeholder: 'N=100, two independent groups, between-subjects design' },
    ],
  },
  {
    id: 'research-peer-review-simulator',
    title: 'Peer Review Simulator',
    category: 'research',
    tags: ['peer-review', 'critique', 'feedback'],
    description: 'Provides a structured peer review of your manuscript or proposal.',
    body: `You are a peer reviewer for a reputable journal. Provide constructive feedback that is fair, specific, and actionable.

Manuscript, abstract, or proposal to review:
{{submission}}

Target journal or venue:
{{publication_venue}}

Please provide a structured review covering:

**1. Significance & Novelty** (1–2 paragraphs)
   - Does this advance the field? Is it original?
   - Who would care about this work?
   - Is it a natural next step given prior literature, or an unexpected angle?

**2. Methodology & Design** (2–3 paragraphs)
   - Are the methods sound and appropriate for the research question?
   - Are there major threats to validity?
   - Is the sample adequate? Design robust?

**3. Clarity & Presentation** (1 paragraph)
   - Can I follow the logic and argument?
   - Are methods, results, and conclusions clearly stated?
   - Any sections that need reorganization?

**4. Strength of Evidence** (1–2 paragraphs)
   - Do the results support the conclusions?
   - Are limitations acknowledged?
   - What alternative interpretations might exist?

**5. Major Revisions Needed** (bulleted list)
   - 2–3 critical issues that must be addressed

**6. Minor Revisions** (bulleted list)
   - 3–5 smaller improvements (wording, citations, details)

**7. Overall Recommendation**
   - Accept, accept with minor revisions, major revisions, or reject
   - Justify in one sentence

Be thorough but fair.`,
    variables: [
      { name: 'submission', label: 'Paper, abstract, or proposal', placeholder: 'Full text, abstract, or detailed summary...' },
      { name: 'publication_venue', label: 'Target journal or conference', placeholder: 'Journal of Applied Psychology, CHI 2024, domain-specific conference' },
    ],
  },
  {
    id: 'research-argument-strengthener',
    title: 'Argument & Evidence Strengthener',
    category: 'research',
    tags: ['argumentation', 'evidence', 'rewriting'],
    description: 'Strengthens weak arguments by identifying missing evidence and logic gaps.',
    body: `You are a research logician who helps authors build bulletproof arguments.

My argument or claim:
{{claim}}

Supporting evidence I have so far:
{{current_evidence}}

Audience and context:
{{audience_context}}

Please help me strengthen this argument by:

1. **Map the Logic**
   - State the claim clearly in one sentence.
   - List the logical steps needed to support it.
   - Identify which steps are supported by evidence and which are assumptions.

2. **Identify Weak Points**
   - Where is the evidence thin or missing?
   - What assumptions am I making that could be questioned?
   - What counterarguments is someone likely to raise?

3. **Suggest Evidence to Add**
   - What types of evidence would most strengthen each logical step?
   - Are there existing studies, data, or examples I could cite?
   - What could I empirically test if needed?

4. **Anticipate Objections**
   - Write 2–3 strong counterarguments to my claim.
   - For each, suggest how I might address it.

5. **Rewrite the Argument**
   - Provide a revised paragraph that incorporates stronger evidence.
   - Highlight the added or restructured elements.

Do not simply add more citations; focus on logical coherence and completeness.`,
    variables: [
      { name: 'claim', label: 'Your main argument or claim', placeholder: 'Early intervention X improves long-term outcomes for Y population' },
      { name: 'current_evidence', label: 'Evidence you currently have', placeholder: 'Study A showed short-term gains; theory B predicts mechanism...' },
      { name: 'audience_context', label: 'Who you are convincing and why', placeholder: 'Policy makers deciding on funding; skeptical peer reviewers...' },
    ],
  },
  {
    id: 'research-scope-definer',
    title: 'Research Scope & Boundaries Definer',
    category: 'research',
    tags: ['scope', 'boundaries', 'definition'],
    description: 'Defines the precise scope and boundaries of a research study.',
    body: `You are a research scoping expert who helps scholars set appropriate boundaries on a project.

My research topic:
{{research_topic}}

What I want to include in scope:
{{in_scope}}

What I want to exclude or leave for future work:
{{out_of_scope}}

Practical constraints:
{{constraints}}

Please define the scope of this research by specifying:

**1. Population Scope**
   - Exactly which populations, groups, or contexts will I study?
   - Why these and not others?
   - Are there meaningful sub-groups I should explicitly include or exclude?

**2. Conceptual Scope**
   - What are the core constructs I am studying?
   - What related constructs am I deliberately not addressing?
   - Why is this boundary meaningful (theoretical, practical)?

**3. Methodological Scope**
   - What types of evidence or data will I collect (e.g., quantitative, qualitative, mixed)?
   - What methods will I use? Why these over alternatives?
   - Are there methodologies I could use but am excluding? Why?

**4. Temporal Scope**
   - How long is the study (cross-sectional, longitudinal, durational)?
   - If historical: what time period does this cover?
   - Why is this timeframe appropriate?

**5. Geographic/Contextual Scope**
   - Where will this research occur? One setting or multiple?
   - How does context shape your scope?

**6. Articulate Boundaries**
   - Write 2–3 sentences explaining what this research is and is not.
   - State what you're leaving for future research.

This clarity prevents scope creep and false promises.`,
    variables: [
      { name: 'research_topic', label: 'Your research topic', placeholder: 'Impact of social media on adolescent mental health' },
      { name: 'in_scope', label: 'What you plan to study', placeholder: 'Depression and anxiety symptoms in ages 13-18 in North America...' },
      { name: 'out_of_scope', label: 'What you are excluding', placeholder: 'Sleep issues, other age groups, non-English speakers, institutional contexts...' },
      { name: 'constraints', label: 'Time, budget, or access limitations', placeholder: '12-month timeline, limited to one school district, small team...' },
    ],
  },
  {
    id: 'research-literature-synthesis',
    title: 'Cross-Study Literature Synthesizer',
    category: 'research',
    tags: ['synthesis', 'integration', 'literature'],
    description: 'Synthesizes findings across multiple studies into a coherent narrative.',
    body: `You are a research synthesizer who integrates disparate findings into a unified story.

Studies or findings to synthesize:
{{source_studies}}

The research question or theme connecting them:
{{connecting_theme}}

Please synthesize these findings by:

1. **Identify Patterns**
   - What do most studies agree on?
   - Where is there disagreement or contradiction?
   - Are there trends over time (e.g., methodological evolution, shifting findings)?

2. **Explain Variation**
   - When findings differ, why might that be?
   - Do sample differences, methodological choices, or contextual factors explain the variation?
   - Are some findings more credible than others? Why?

3. **Build a Narrative**
   - Write a 3–4 paragraph synthesis that:
     - Introduces the common question across studies
     - Describes the consensus or core findings
     - Explains the tensions or contradictions
     - Points toward implications or next steps
   - Make the narrative flow logically, not as a list of studies.

4. **Identify Gaps and Limitations**
   - What remains uncertain across all these studies?
   - What populations, contexts, or methods are underrepresented?
   - What should future research address?

5. **State the "Bottom Line"**
   - In one clear sentence, what do we now know that we didn't before?

Avoid saying "Study A found X and Study B found Y"; instead, weave them together into an integrated story.`,
    variables: [
      { name: 'source_studies', label: 'Studies or findings to synthesize', placeholder: 'Study A (2015): X correlates with Y; Study B (2019): experimental evidence for mechanism...' },
      { name: 'connecting_theme', label: 'The research question connecting them', placeholder: 'How does X affect Y? What is the mechanism?' },
    ],
  },
  {
    id: 'research-methodology-designer',
    title: 'Research Methodology Coach',
    category: 'research',
    tags: ['methodology', 'design', 'coaching'],
    description: 'Guides step-by-step design of a research methodology.',
    body: `You are a research methods coach who helps scholars design sound studies.

My research question:
{{research_question}}

What I want to learn (hypothesis or area of exploration):
{{learning_goal}}

My available resources:
{{resources}}

Let's design the methodology for this study together. Walk me through the following, asking clarifying questions as needed:

**1. Study Design Type**
   - What are the pros and cons of experimental, quasi-experimental, correlational, and qualitative designs for your question?
   - Which are feasible given your constraints?
   - Which would best answer your specific question?

**2. Participants and Sampling**
   - Who should you study?
   - How will you recruit or access participants?
   - What sample size or depth (for qualitative) is realistic and sufficient?
   - Any inclusion/exclusion criteria?

**3. Variables and Measurement**
   - What exactly are you measuring (operationalization)?
   - How will you measure each variable (instruments, procedures)?
   - Are these measures valid and reliable?

**4. Procedures and Timeline**
   - Step-by-step: what happens in your study?
   - What is the timeline?
   - Where are there risks of bias or confounds?

**5. Analysis and Interpretation**
   - How will you analyze the data (statistical test, coding scheme, analysis framework)?
   - How will you draw conclusions?

**6. Feasibility Check**
   - Is this study realistic within your time, budget, and ethical constraints?
   - What is your biggest risk factor?

Ask me questions one section at a time. After each answer, refine my design or probe deeper.`,
    variables: [
      { name: 'research_question', label: 'Your research question', placeholder: 'Does X training improve performance on Y task?' },
      { name: 'learning_goal', label: 'What you want to know', placeholder: 'Whether the effect is causal, who benefits most, how long it lasts...' },
      { name: 'resources', label: 'Available time, budget, access, and population', placeholder: '6 months, $5000, access to 100 university students...' },
    ],
  },
  {
    id: 'research-result-contextualize',
    title: 'Research Findings Contextualizer',
    category: 'research',
    tags: ['interpretation', 'contextualization', 'implications'],
    description: 'Contextualizes research findings within the broader field and practice.',
    body: `You are a research interpreter who helps scholars place findings in context.

Your main findings:
{{main_findings}}

Prior literature or conventional wisdom:
{{prior_knowledge}}

The field or practice you are studying:
{{field_context}}

Please contextualize your findings by:

1. **Confirm or Challenge?**
   - Do your results align with prior research or do they contradict it?
   - If aligned, how do they strengthen or extend prior findings?
   - If different, why? (Methodology, sample, changing landscape, etc.)

2. **Magnitude & Significance**
   - How large or important are your findings in real-world terms?
   - For practitioners or policymakers, what does this mean?
   - Compare effect size to other known effects in the field.

3. **Mechanism & Theory**
   - How do your findings advance theoretical understanding?
   - Do results support, contradict, or refine existing theories?
   - What mechanisms explain your findings?

4. **Boundary Conditions**
   - For whom, in what contexts, or under what conditions do these findings hold?
   - Where might they NOT apply?
   - What moderating factors matter?

5. **Implications**
   - For future research: what should be studied next?
   - For practice/policy: what decisions might change based on this work?
   - For theory: how should frameworks evolve?

6. **Write a Contextualized Finding**
   - Draft one paragraph explaining your result in terms of the broader field.
   - Use language accessible to practitioners, not just researchers.

Make clear how this work matters beyond the study itself.`,
    variables: [
      { name: 'main_findings', label: 'Your study results', placeholder: 'X training increased performance by 25%, effect size d = 0.8...' },
      { name: 'prior_knowledge', label: 'What was previously known', placeholder: 'Prior studies showed 10% gains; theory predicts X is ineffective...' },
      { name: 'field_context', label: 'The field or practice domain', placeholder: 'K-12 education, clinical psychology, organizational management...' },
    ],
  },
  {
    id: 'research-data-quality-checker',
    title: 'Data Quality & Source Evaluator',
    category: 'research',
    tags: ['data-quality', 'sources', 'evaluation'],
    description: 'Evaluates the quality and credibility of data sources.',
    body: `You are a data quality auditor who assesses the reliability and trustworthiness of data and sources.

Data or sources I am considering:
{{data_sources}}

How I plan to use this data:
{{intended_use}}

My ability to verify or audit:
{{verification_capacity}}

Please evaluate data quality across these dimensions:

1. **Source Credibility**
   - Who collected or published this data? How reputable?
   - Is there potential bias in collection or reporting?
   - Are methods and limitations transparently described?

2. **Completeness & Coverage**
   - Does the data cover the population/time period I need?
   - Are there missing values or excluded groups?
   - How would gaps affect my analysis?

3. **Accuracy & Validity**
   - How was data collected (and could that introduce error)?
   - Are there documented error rates or quality checks?
   - Can results be reproduced or verified?

4. **Recency & Relevance**
   - When was this data collected?
   - Has the landscape changed since then?
   - Is it relevant to my specific research question?

5. **Methodological Rigor**
   - What standards or protocols were used?
   - Were best practices followed?
   - What assumptions underlie this data?

6. **Risk Assessment**
   - What is the biggest quality risk if I use this data?
   - How would poor data quality affect my conclusions?
   - Can I mitigate the risk (e.g., sensitivity analysis, triangulation)?

7. **Recommendation**
   - Should you use this data? At what confidence level?
   - Are there better alternatives?

Be honest about limitations. Flawed data can still be useful if limitations are clear.`,
    variables: [
      { name: 'data_sources', label: 'Data or sources you are considering', placeholder: 'Published survey dataset, internal company database, web scraping...' },
      { name: 'intended_use', label: 'How you plan to use this data', placeholder: 'Test hypothesis about population trends, inform policy decision...' },
      { name: 'verification_capacity', label: 'Your ability to verify or audit', placeholder: 'Can contact data provider, can re-collect validation sample...' },
    ],
  },
  {
    id: 'research-thesis-structure-planner',
    title: 'Thesis Structure & Outline Planner',
    category: 'research',
    tags: ['thesis', 'structure', 'outlining'],
    description: 'Creates a detailed outline and chapter structure for a thesis or dissertation.',
    body: `You are a research writing mentor who helps scholars structure a coherent thesis.

My research topic and key findings:
{{research_overview}}

Intended audience and venue:
{{thesis_context}}

Major sections or chapters I need to cover:
{{required_sections}}

Please help me create a thesis structure by:

1. **Map the Narrative Arc**
   - What is the story this thesis tells from beginning to end?
   - What question is posed in the introduction and answered in the conclusion?
   - How do chapters build toward a climax or key insight?

2. **Design Chapter Structure**
   - Suggest 4–6 main chapters with one-line descriptions.
   - For each chapter, outline 3–5 major subsections.
   - Explain how each chapter advances the overall argument.

3. **Specify Content for Each Chapter**
   - Introduction: background, gaps, research question
   - Literature review: thematic organization and synthesis
   - Methods: design, procedures, measurement
   - Results: organized by research question or finding
   - Discussion: interpretation, limitations, implications
   - Conclusion: synthesis and future directions

4. **Create Section Headings**
   - Draft a full outline with main headings and subheadings (2–3 levels).
   - Use parallel structure and clear hierarchy.

5. **Identify Transitions**
   - How will each chapter lead to the next?
   - What key ideas must carry through multiple chapters?
   - Where might readers get lost?

6. **Word Count Planning**
   - Estimate realistic word counts per chapter.
   - Allocate space based on importance and complexity.

This outline becomes your roadmap during writing.`,
    variables: [
      { name: 'research_overview', label: 'Your topic and main findings', placeholder: 'Study of X intervention on Y outcomes; key finding: effect is context-dependent...' },
      { name: 'thesis_context', label: 'Type of thesis and venue', placeholder: 'PhD dissertation in Psychology; Masters thesis in Education...' },
      { name: 'required_sections', label: 'Required or expected chapters', placeholder: 'Introduction, lit review, methods, results, discussion, conclusion...' },
    ],
  },
];

export default prompts;
