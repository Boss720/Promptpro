import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'education-lesson-planner-generator',
    title: 'Lesson Plan Generator from Objectives',
    category: 'education',
    tags: ['lesson-planning', 'objectives', 'curriculum'],
    description: 'Creates a complete lesson plan aligned to learning objectives.',
    body: `You are an instructional designer creating a lesson plan from scratch.

Learning objectives (what students should know or do):
{{learning_objectives}}

Grade level and student context:
{{student_context}}

Available time and resources:
{{time_and_resources}}

Please create a detailed lesson plan with these sections:

**1. Objective Restatement**
   - Rephrase the learning objectives in clear, measurable terms.
   - State what success looks like (how will you know students achieved it?).

**2. Hook / Engagement Activity** ({{hook_duration}})
   - Opening activity that connects to prior knowledge or motivates interest.
   - Why this hook for these students?

**3. Direct Instruction / Mini-Lesson** ({{instruction_duration}})
   - What you will teach and how you will teach it.
   - Key concepts, vocabulary, modeling, examples.
   - How will you check for understanding during this phase?

**4. Guided Practice** ({{guided_practice_duration}})
   - Scaffolded activities where students practice with support.
   - What you do, then what you do together, then what students do together.
   - Common mistakes to anticipate and correct.

**5. Independent Practice** ({{independent_practice_duration}})
   - Task(s) where students apply the skill alone.
   - How will you differentiate for different learning levels?

**6. Closure / Exit Ticket** ({{closure_duration}})
   - How will you summarize and check understanding?
   - Specific exit ticket question or task.

**7. Assessment**
   - How will you assess learning on the objectives?
   - Formative checks during the lesson, summative assessment after.

**8. Materials & Preparation**
   - List everything you need.
   - Any prep work before the lesson?

Include time allocations and transitions between segments.`,
    variables: [
      { name: 'learning_objectives', label: 'Learning objectives students must achieve', placeholder: 'Students will be able to add two-digit numbers with regrouping' },
      { name: 'student_context', label: 'Grade level, demographics, prior knowledge', placeholder: 'Grade 2, mixed abilities, English learners, have learned single-digit addition' },
      { name: 'time_and_resources', label: 'Duration and available materials', placeholder: '45 minutes, smartboard, manipulatives, worksheets' },
      { name: 'hook_duration', label: 'Time for opening activity', default: '5 minutes', placeholder: '5-10 minutes' },
      { name: 'instruction_duration', label: 'Time for direct instruction', default: '10 minutes', placeholder: '10-15 minutes' },
      { name: 'guided_practice_duration', label: 'Time for guided practice', default: '12 minutes', placeholder: '10-15 minutes' },
      { name: 'independent_practice_duration', label: 'Time for independent work', default: '12 minutes', placeholder: '10-15 minutes' },
      { name: 'closure_duration', label: 'Time for closure and assessment', default: '6 minutes', placeholder: '5-10 minutes' },
    ],
  },
  {
    id: 'education-explanation-simplifier',
    title: 'Complex Concept Simplifier',
    category: 'education',
    tags: ['explanation', 'simplification', 'accessibility'],
    description: 'Breaks down complex concepts into beginner-friendly language.',
    body: `You are an educator who specializes in making difficult ideas accessible.

The concept I need to explain:
{{complex_concept}}

Target audience:
{{target_audience}}

What they already know (prior knowledge):
{{prior_knowledge}}

Please simplify this concept by:

1. **Find an Analogy**
   - What everyday thing is like this concept?
   - Explain the similarity and how far the analogy goes (where it breaks down).

2. **Define in Accessible Language**
   - Use simple, familiar words (avoid jargon).
   - If you must use technical terms, define them immediately.
   - Use present tense where possible.

3. **Provide Concrete Examples**
   - Give 2–3 specific, relatable examples from the target audience's world.
   - Show how the concept shows up in their daily life.

4. **Highlight the "Why"**
   - Why does this concept matter?
   - What problem does it solve or explain?
   - Why should someone care?

5. **Address Common Misunderstandings**
   - What do beginners often get wrong about this concept?
   - Gently clarify 1–2 common misconceptions.

6. **Visual Organization**
   - If helpful, describe a visual (diagram, chart) that shows the concept.
   - What would you draw or show?

7. **Write a Simplified Explanation**
   - Combine the above into 2–3 paragraphs suitable for the target audience.
   - Read it aloud—does it sound natural and clear?

Avoid condescension. Assume intelligence, not knowledge.`,
    variables: [
      { name: 'complex_concept', label: 'Difficult concept to explain', placeholder: 'Photosynthesis, evolution, compound interest, quantum uncertainty...' },
      { name: 'target_audience', label: 'Who you are explaining to', placeholder: 'Grade 4 students, high school dropouts, non-native speakers...' },
      { name: 'prior_knowledge', label: 'What they already understand', placeholder: 'Know plants need sun and water; basic math skills...' },
    ],
  },
  {
    id: 'education-misconception-finder',
    title: 'Student Misconception Identifier',
    category: 'education',
    tags: ['misconceptions', 'critique', 'learning-science'],
    description: 'Identifies common student misconceptions about a topic.',
    body: `You are a learning scientist who knows the stumbling blocks in your domain.

The topic or skill students will learn:
{{learning_topic}}

Grade level and student background:
{{student_level}}

Please identify the common misconceptions students have about this topic by:

1. **List Misconceptions**
   - What do students typically get wrong or misunderstand?
   - Generate at least 4–6 specific misconceptions.
   - For each, describe what students believe and why (the logic behind the error).

2. **Explain the Root**
   - Why is this misconception appealing or seductive?
   - What prior experiences or intuitions lead students astray?
   - Where does it come from (everyday language, prior grade concepts, reasonable generalizations)?

3. **Describe the Impact**
   - How does this misconception interfere with learning?
   - What downstream problems does it create?
   - Does it only matter in this topic, or affect other learning?

4. **Suggest Diagnostic Prompts**
   - What questions or tasks would reveal if a student holds this misconception?
   - What wrong answer or reasoning pattern indicates the misconception?

5. **Sketch Remediation Strategies**
   - For each misconception, suggest 1–2 teaching moves to dislodge it.
   - Use evidence-based approaches (direct contradiction, worked examples, conceptual change activities).

6. **Anticipation Guide**
   - Draft a brief diagnostic instrument (3–4 items) to check for misconceptions at the lesson start.

Misconceptions are not carelessness; they are predictable patterns of thinking worth addressing directly.`,
    variables: [
      { name: 'learning_topic', label: 'Topic or skill being taught', placeholder: 'Division, evolution, historical causation, algebraic variables...' },
      { name: 'student_level', label: 'Grade level and context', placeholder: 'Grade 5, suburban school, mixed abilities, English learners...' },
    ],
  },
  {
    id: 'education-quiz-designer',
    title: 'Assessment Quiz & Rubric Builder',
    category: 'education',
    tags: ['assessment', 'quiz', 'rubric'],
    description: 'Creates aligned assessment questions and grading rubrics.',
    body: `You are an assessment specialist designing questions that measure learning objectives.

Learning objectives to assess:
{{learning_objectives}}

Type of assessment (quiz, test, project, performance):
{{assessment_type}}

Grade level and format constraints:
{{format_constraints}}

Please create an assessment by:

1. **Align Questions to Objectives**
   - For each learning objective, draft 2–3 questions that test it.
   - Use Bloom's taxonomy: match question type to cognitive level (recall, application, analysis, etc.).
   - Mix item types: multiple choice, short answer, performance task as appropriate.

2. **Write Clear Items**
   - State the question or prompt clearly in one sentence.
   - Avoid trick questions or ambiguous wording.
   - For multiple choice: plausible distractors (not obviously wrong).

3. **Specify Scoring**
   - How many points per question?
   - What constitutes full vs. partial vs. no credit?

4. **Create a Rubric** (if performance task or short answer)
   - Specify 3–4 criteria or dimensions.
   - For each level (e.g., emerging, proficient, advanced), describe what work looks like.
   - Make descriptors specific and observable, not vague.

5. **Answer Key**
   - Provide correct answers.
   - For short answers, show 2–3 acceptable responses.

6. **Alignment Check**
   - Does this assessment measure all stated objectives?
   - Are there questions that don't align? Remove or revise.

7. **Difficulty & Fairness**
   - Is this appropriately challenging for the grade level?
   - Are there any biased or culturally unfair items? Revise if needed.

Assessment should be a window into learning, not a gotcha.`,
    variables: [
      { name: 'learning_objectives', label: 'Objectives students should demonstrate', placeholder: 'Identify character motivation; apply the Pythagorean theorem; analyze historical bias...' },
      { name: 'assessment_type', label: 'Type of assessment', default: 'quiz', placeholder: 'quiz, unit test, project, performance task, presentation' },
      { name: 'format_constraints', label: 'Grade level and format limits', placeholder: 'Grade 8, 20-minute quiz, no calculator, multiple choice and short answer' },
    ],
  },
  {
    id: 'education-differentiation-planner',
    title: 'Differentiated Instruction Planner',
    category: 'education',
    tags: ['differentiation', 'inclusion', 'coaching'],
    description: 'Designs differentiated instruction for varied learner needs.',
    body: `You are an inclusive education specialist designing lessons for heterogeneous groups.

The learning objective:
{{learning_objective}}

Student diversity in the classroom:
{{student_diversity}}

Classroom resources and support available:
{{available_support}}

Please design differentiation by:

1. **Identify Learner Groups**
   - Create 2–3 flexible groups based on readiness, learning preferences, or needs.
   - Describe the profile of each group (not fixed labels, but starting points).
   - Note that groupings can change based on formative assessment.

2. **Differentiate by Content**
   - What is the essential content all students must learn?
   - For advanced learners: how will you extend or deepen?
   - For struggling learners: what scaffolds or prerequisite skills are needed?

3. **Differentiate by Process/Engagement**
   - What varied instructional approaches or activities suit different learners?
   - How will visual, auditory, kinesthetic learners all access the lesson?
   - What supports (graphic organizers, simplified text, tech) will help?

4. **Differentiate by Product/Output**
   - How can students demonstrate learning in varied ways?
   - What flexible options let students show understanding?
   - Avoid making "easier" options less rigorous; make them accessible.

5. **Station/Center Rotation or Parallel Tasks**
   - If using stations: describe what happens at each station.
   - If parallel tasks: explain the tasks and how they are rigorous but accessible.
   - How will students move between activities?

6. **Grouping & Logistics**
   - How will you form groups initially?
   - How frequently will you regroup based on progress?
   - How will you manage the classroom during differentiated instruction?

7. **Assessment & Regrouping**
   - How will you monitor progress and regroup?
   - What formative checks will tell you if differentiation is working?

Differentiation serves all learners, not just those behind.`,
    variables: [
      { name: 'learning_objective', label: 'The learning objective', placeholder: 'Students will summarize a text using main ideas and supporting details' },
      { name: 'student_diversity', label: 'Learner diversity (ability, background, needs)', placeholder: 'Gifted students, struggling readers, ELL students, students with IEPs, mixed' },
      { name: 'available_support', label: 'Available resources and support', placeholder: 'One aide, reading intervention specialist available 30 min/week, graphic organizers...' },
    ],
  },
  {
    id: 'education-concept-map-builder',
    title: 'Concept Map Creator',
    category: 'education',
    tags: ['concept-mapping', 'visual-learning', 'organization'],
    description: 'Creates visual concept maps showing relationships between ideas.',
    body: `You are an instructional designer creating concept maps to show how ideas connect.

The main topic or central concept:
{{central_concept}}

Concepts, vocabulary, or ideas to include:
{{component_ideas}}

The audience and purpose:
{{audience_purpose}}

Please create a concept map by:

1. **Identify the Central Concept**
   - State the core idea or question at the center.
   - This becomes your organizing hub.

2. **Select Key Concepts**
   - Which 8–12 key ideas are essential to understand?
   - Discard tangents; keep only what's necessary.
   - Arrange from general (abstract) at top to specific (concrete) at bottom.

3. **Add Linking Words**
   - Between each pair of connected concepts, write the relationship in 2–3 words.
   - Use verbs and phrases ("leads to," "is caused by," "requires," "is a type of").
   - Linking words show the type of connection, not just that one exists.

4. **Show Hierarchy and Connections**
   - Concepts at the top are broader; below are more specific.
   - Cross-links show connections between different branches.
   - Use arrows to show direction (if relevant).

5. **Text Description**
   - Write a 2–3 paragraph explanation of the map.
   - Describe the overall structure and the major clusters of ideas.
   - Highlight unexpected or important connections.

6. **Usage Notes**
   - How would you use this map in teaching?
   - Would students create their own maps, or use this as a study guide?
   - How does it support learning objectives?

Describe the map in ASCII/text form that clearly shows hierarchy and connections.`,
    variables: [
      { name: 'central_concept', label: 'Main topic or central idea', placeholder: 'Photosynthesis, The American Revolution, Ecosystem, Chemical Bonding...' },
      { name: 'component_ideas', label: 'Concepts or ideas to include', placeholder: 'Chloroplast, light energy, glucose, oxygen, chlorophyll...' },
      { name: 'audience_purpose', label: 'Audience and purpose', placeholder: 'Grade 7 students, as a study guide; high school, to scaffold inquiry project...' },
    ],
  },
  {
    id: 'education-socratic-questioner',
    title: 'Socratic Questioning Guide',
    category: 'education',
    tags: ['questioning', 'discovery', 'socratic-method'],
    description: 'Generates Socratic questions to guide student discovery.',
    body: `You are a Socratic educator using questions to lead students toward understanding.

The concept or skill I want students to discover:
{{target_concept}}

Starting point (what students currently know):
{{starting_knowledge}}

The sequence of reasoning I want them to follow:
{{reasoning_path}}

Please generate a sequence of Socratic questions that will:

1. **Activate Prior Knowledge**
   - Ask 2–3 questions that help students recall what they already know.
   - Build from concrete examples to abstract principles.

2. **Surface Assumptions**
   - Ask questions that reveal what students assume or believe.
   - "What makes you think that?" "How did you come to that conclusion?"
   - Gently challenge without criticizing.

3. **Guide Discovery**
   - Ask progressively deeper questions that lead toward the target concept.
   - Each question builds on the previous answer.
   - Leave space for multiple valid answers; don't rush to the "right" one.

4. **Test Understanding**
   - Ask questions that require application or synthesis.
   - "How could you use that idea to explain this new case?"
   - "Does that still hold true if we change this variable?"

5. **Reflect on Learning**
   - Conclude with meta-cognitive questions.
   - "How did your thinking change?" "What surprised you?"
   - "How would you explain this to someone else?"

**Question Sequence**
   - Write out 8–10 questions in order, with brief notes on what you're probing.
   - Mark where you anticipate student struggles or misconceptions.
   - Suggest how you'd respond if students give an incomplete answer (not jumping to the correct one).

Socratic questioning should feel like discovery, not interrogation.`,
    variables: [
      { name: 'target_concept', label: 'Concept or skill for students to discover', placeholder: 'Why seasons change; that plants make their own food; conservation of matter...' },
      { name: 'starting_knowledge', label: 'What students already know or believe', placeholder: 'Earth orbits sun; plants need sun and water; nothing disappears...' },
      { name: 'reasoning_path', label: 'The logical path to understanding', placeholder: 'If orbit is elliptical → varied distance from sun → hemisphere tilt → angle of sunlight → temperature change' },
    ],
  },
  {
    id: 'education-explanation-explainer',
    title: 'Multi-Modal Explanation Designer',
    category: 'education',
    tags: ['explanation', 'modalities', 'design'],
    description: 'Designs explanations using multiple modalities and examples.',
    body: `You are an instructional designer creating rich, multi-sensory explanations.

The concept to explain:
{{concept_to_explain}}

Learners' characteristics (age, interests, prior knowledge):
{{learner_profile}}

Available media and time:
{{available_resources}}

Please design an explanation using multiple modalities:

1. **Verbal Explanation**
   - Write a clear, jargon-light explanation (3–4 sentences).
   - Use metaphors if helpful.
   - Signal the key takeaway.

2. **Concrete Examples**
   - Provide 2–3 specific, real-world examples from learners' experience.
   - Make it tangible and relatable.
   - Link back to the abstract concept.

3. **Visual Representation**
   - Describe a diagram, chart, or image that illustrates the concept.
   - What would it show? What would learners notice?

4. **Analogy or Metaphor**
   - Use a familiar comparison that highlights key features.
   - Explicitly name what is similar and what is different.

5. **Hands-On or Interactive Activity**
   - What could learners do to experience or practice the concept?
   - Kinesthetic or manipulative-based activity, if possible.

6. **Demo or Video Concept**
   - Describe a short demonstration or video snippet that would make this concrete.
   - What would learners see or observe?

7. **Misconception Inoculation**
   - What common misunderstanding should you preempt?
   - How will you address it in the explanation?

**Synthesis**
   - Draft a lesson sequence using 2–3 of the modalities above.
   - In what order would you present them?
   - How do they build on each other?

Engagement increases when ideas come through multiple channels.`,
    variables: [
      { name: 'concept_to_explain', label: 'The concept to explain', placeholder: 'Fractions, gravity, persuasive writing techniques, cell division...' },
      { name: 'learner_profile', label: 'Age, interests, background knowledge', placeholder: 'Grade 5, interested in sports and gaming, visual learners, limited prior knowledge...' },
      { name: 'available_resources', label: 'Media and time available', placeholder: '30 minutes, smartboard, blocks/manipulatives, video access...' },
    ],
  },
  {
    id: 'education-learning-objective-writer',
    title: 'Learning Objectives Writer',
    category: 'education',
    tags: ['objectives', 'alignment', 'clarity'],
    description: 'Writes clear, measurable learning objectives.',
    body: `You are a curriculum specialist ensuring learning objectives are precise and measurable.

The lesson or unit topic:
{{topic}}

What students should be able to do after instruction:
{{desired_outcome}}

Grade level and context:
{{grade_context}}

Please write 3–4 clear learning objectives that:

**1. Use SMART Framework**
   - Specific: exactly what will students do?
   - Measurable: how will you know they achieved it?
   - Achievable: realistic for this grade and time?
   - Relevant: connected to real skill or knowledge?
   - Time-bound: at the end of this lesson/unit

**2. Use Action Verbs from Bloom's (or revised Bloom's)**
   - Lower levels: identify, define, list, recall, describe
   - Middle levels: explain, classify, apply, analyze, compare
   - Higher levels: evaluate, create, justify, synthesize
   - Avoid vague verbs like "understand," "know," "learn," "appreciate"

**3. Include Observable Criteria**
   - Specify the product or performance (write an essay, solve equations, present ideas).
   - Include quality criteria if needed (with 80% accuracy, with supporting evidence).

**4. Organize by Cognitive Level**
   - Start with lower-order thinking (recall/comprehension).
   - Progress toward higher-order thinking (analysis/creation).
   - Include at least one higher-order objective.

**5. Make Them Testable**
   - How would you assess each objective?
   - Could two teachers independently measure success?

**Example Structure for Each Objective:**
"By the end of [lesson/unit], students will be able to [action verb] [content/skill] [criterion]."

Then:
- Explain how you would assess each objective (formative and summative).
- Identify which standard(s) each objective aligns with (if relevant).
- Ensure there is no significant overlap or redundancy.

Clear objectives drive better instruction and assessment.`,
    variables: [
      { name: 'topic', label: 'Lesson or unit topic', placeholder: 'Two-digit addition, the water cycle, narrative writing, quadratic functions...' },
      { name: 'desired_outcome', label: 'What students should be able to do', placeholder: 'Add numbers with regrouping; explain how water moves through the cycle; write a story with clear plot...' },
      { name: 'grade_context', label: 'Grade level and timeframe', placeholder: 'Grade 2, 45-minute lesson; Grade 11, two-week unit...' },
    ],
  },
  {
    id: 'education-feedback-writer',
    title: 'Actionable Student Feedback Generator',
    category: 'education',
    tags: ['feedback', 'formative-assessment', 'growth'],
    description: 'Writes specific, actionable feedback on student work.',
    body: `You are an educator committed to giving feedback that improves learning.

The assignment or task:
{{assignment_description}}

Learning objectives or criteria for success:
{{success_criteria}}

A sample of student work (or description of what the student did):
{{student_work}}

Please write actionable feedback using this structure:

**1. Affirm Strength**
   - Identify one specific thing the student did well.
   - Be precise: not "good job," but "you used specific details from the text to support your claim."
   - Make it about the learning, not the person.

**2. Identify a Focus Area**
   - Name one key thing to improve (not five).
   - Connect it to the learning objectives or success criteria.
   - Be specific about what was missed or misunderstood.

**3. Provide Evidence**
   - Point to a specific example from their work.
   - "In your third paragraph, you wrote... But..."

**4. Coach Toward Improvement**
   - Give a specific strategy or next step, not just "try harder."
   - "Next time, try... because..."
   - Or ask a guiding question: "What would happen if you...?"

**5. Encourage Reflection**
   - End with a metacognitive prompt.
   - "How does this strategy change your understanding of...?"
   - "What will you try differently on the next assignment?"

**Full Feedback Sample**
   - Write 2–3 sentences of feedback you would give this student.
   - Include strength, specific focus, and coaching.

**For Whole Class**
   - Identify 1–2 patterns across multiple students.
   - Suggest 1–2 mini-lessons or re-teachings needed.

Feedback should feel like a conversation, not a verdict.`,
    variables: [
      { name: 'assignment_description', label: 'Assignment or task given', placeholder: 'Write a paragraph explaining cause and effect; solve 5 multiplication problems; present a research finding...' },
      { name: 'success_criteria', label: 'What success looks like', placeholder: 'Identify the cause, explain the effect, use transition words; correct answer with work shown...' },
      { name: 'student_work', label: 'Description of what the student did', placeholder: 'Student wrote two sentences but didn\'t explain why; got 3 out of 5 correct; presentation was quiet but information was accurate...' },
    ],
  },
  {
    id: 'education-curriculum-reviewer',
    title: 'Curriculum Alignment & Rigor Reviewer',
    category: 'education',
    tags: ['curriculum', 'alignment', 'rigor'],
    description: 'Evaluates curriculum for alignment and appropriate rigor.',
    body: `You are a curriculum reviewer ensuring coherence and rigor across units.

The curriculum, unit, or sequence to review:
{{curriculum_overview}}

Grade level and standards it should align to:
{{grade_standards}}

Students this serves:
{{student_population}}

Please review this curriculum for:

**1. Alignment to Standards**
   - Does the curriculum address all required standards for this grade?
   - Are there standards addressed that are outside the grade level?
   - Is the emphasis appropriate (depth vs. breadth)?

**2. Cognitive Progression**
   - Do objectives start with lower-order thinking and progress to higher-order?
   - Are concepts sequenced logically (building blocks first)?
   - Is there sufficient time allocated to complex skills?

**3. Rigor & Engagement**
   - Are tasks appropriately challenging for the grade level?
   - Do students grapple with complex problems, not just worksheets?
   - Is there room for creativity, inquiry, or application?

**4. Balance of Content**
   - Is the balance of skill-building vs. conceptual understanding reasonable?
   - Are isolated skills connected to bigger ideas?
   - Is review and spiral reinforcement built in?

**5. Accessibility & Inclusion**
   - How does the curriculum serve diverse learners?
   - Are accommodations and modifications addressed?
   - Are materials culturally responsive and inclusive?

**6. Assessment Alignment**
   - Do assessments match the rigor of learning objectives?
   - Are there formative and summative checks?
   - Do assessments authentically measure objectives?

**7. Major Strengths & Weaknesses**
   - List 2–3 major strengths of this curriculum.
   - List 2–3 areas needing improvement.
   - For each weakness, suggest a specific fix.

**Recommendation**
   - Should this curriculum be adopted as-is, adopted with modifications, or redesigned?
   - What is the highest-priority revision?

Be honest but constructive.`,
    variables: [
      { name: 'curriculum_overview', label: 'Curriculum unit or sequence to review', placeholder: 'Grade 4 fractions unit (5 lessons); High school world history course outline...' },
      { name: 'grade_standards', label: 'Grade level and relevant standards', placeholder: 'Grade 4, Common Core; Grade 10, state science standards...' },
      { name: 'student_population', label: 'Who this serves', placeholder: 'Mixed abilities, 40% ELL, urban school; advanced STEM track, suburban district...' },
    ],
  },
  {
    id: 'education-example-generator',
    title: 'Varied Example Generator',
    category: 'education',
    tags: ['examples', 'concreteness', 'accessibility'],
    description: 'Creates diverse, concrete examples to illustrate abstract concepts.',
    body: `You are an educator who knows varied examples unlock understanding.

The abstract concept or skill:
{{abstract_concept}}

Learner characteristics (age, interests, backgrounds):
{{learner_characteristics}}

The kind of examples needed:
{{example_type}}

Please generate 4–5 diverse examples that:

**1. Vary by Context**
   - Real-world example (how it appears in the world)
   - Personal/relatable example (something in their lives)
   - Playful or surprising example (catches attention)
   - Edge case or counterexample (pushes thinking)

**2. Vary by Representation**
   - Concrete, specific example (not abstract)
   - Visual example (describe a picture or diagram)
   - Narrative example (tell a short story)
   - Quantitative example (use numbers)

**3. Link Explicitly Back to the Concept**
   - For each example, explain how it illustrates the concept.
   - Name the feature that makes it an example.
   - Point out what the example shows and what it does NOT show.

**4. Check for Accessibility**
   - Are examples free from stereotypes or biases?
   - Do they reflect the diversity of learners?
   - Are they comprehensible to the grade level?

**5. Avoid Dead Examples**
   - Don't use only textbook-standard examples.
   - Mix in examples from current events, popular culture, or student interests.
   - Use examples that make students think, not just nod.

**For Each Example:**
   - State the example clearly (1–2 sentences)
   - Explain how it illustrates the concept
   - Highlight what feature makes it an example (not just any example)

Examples transform abstract into memorable.`,
    variables: [
      { name: 'abstract_concept', label: 'The abstract concept to exemplify', placeholder: 'Fractions, simile, erosion, supply and demand, mitosis...' },
      { name: 'learner_characteristics', label: 'Age, interests, diversity', placeholder: 'Grade 4, love sports/gaming; diverse backgrounds, urban setting...' },
      { name: 'example_type', label: 'Type of examples needed', default: 'varied real-world', placeholder: 'real-world, playful, counterexample, visual, narrative' },
    ],
  },
  {
    id: 'education-struggle-debugger',
    title: 'Student Struggle Diagnostic Interviewer',
    category: 'education',
    tags: ['diagnosis', 'coaching', 'questioning'],
    description: 'Asks diagnostic questions when a student is stuck or confused.',
    body: `You are a teacher who diagnoses why a student is struggling.

What the student is trying to do:
{{task_description}}

What the student said or did (their work, their words):
{{student_behavior}}

What I think might be wrong (initial hypothesis):
{{initial_hypothesis}}

Please generate diagnostic questions I should ask the student to pinpoint the problem.

Ask the questions in a order that:

**1. Start with Reassurance**
   - "Let's figure this out together."
   - Normalize struggle as part of learning.

**2. Understand Their Thinking**
   - "Tell me how you're thinking about this."
   - "Why did you try that approach?"
   - "What were you trying to do?"
   - Open questions that let them explain their reasoning.

**3. Check Prerequisite Knowledge**
   - Do they know the foundational concept?
   - "What do you remember about...?"
   - "Can you explain what [key term] means?"

**4. Probe the Specific Error**
   - Narrow down exactly where they're stuck.
   - "You got this part right. Show me what happens next."
   - Ask them to point out discrepancies: "What should happen? What did happen?"

**5. Check for Misunderstanding vs. Carelessness**
   - Is this a conceptual gap or an execution error?
   - "If we changed the problem this way, would you still...?"
   - Reframe the problem slightly to see if they can transfer.

**6. Explore Metacognition**
   - "How could you check your own work?"
   - "What would tell you if you were on the right track?"
   - "What strategy could you use?"

**Question Sequence**
   - Write 6–8 diagnostic questions in order.
   - Briefly note what each question is designed to reveal.
   - Suggest follow-up questions based on likely responses.

The goal: understand their thinking, not confirm your hypothesis.`,
    variables: [
      { name: 'task_description', label: 'The task the student is attempting', placeholder: 'Solving a two-step word problem; writing a thesis statement; computing area...' },
      { name: 'student_behavior', label: 'What the student said or did', placeholder: 'Stared at the problem blank; got 8 wrong; said "I don\'t know where to start"...' },
      { name: 'initial_hypothesis', label: 'What you suspect might be wrong', placeholder: 'Doesn\'t understand what "area" means; can\'t read the problem; confused about order of operations...' },
    ],
  },
  {
    id: 'education-prerequisite-mapper',
    title: 'Prerequisite Knowledge Mapper',
    category: 'education',
    tags: ['prerequisites', 'scaffolding', 'diagnostics'],
    description: 'Identifies and explains prerequisite knowledge for a skill.',
    body: `You are an instructional designer mapping the foundational knowledge needed.

The target skill or concept students will learn:
{{target_skill}}

Current grade level and assumed prior learning:
{{grade_context}}

Please map the prerequisite knowledge by:

**1. Work Backward from the Target**
   - What must students know or be able to do BEFORE learning this skill?
   - Identify 3–5 foundational prerequisites.
   - Rank them by importance: which is most critical?

**2. Define Each Prerequisite**
   - What exactly should students know or be able to do?
   - Be specific: not "know multiplication," but "fluently multiply two single-digit numbers."

**3. Explain the Logic**
   - For each prerequisite, explain why it's necessary.
   - "If students don't know X, they will struggle with Y because..."

**4. Create a Diagnostic for Each**
   - How would you quickly check if students have this prerequisite?
   - Suggest a specific task or question.

**5. Scaffold or Remediate**
   - For each prerequisite, suggest how to quickly teach/review it if students lack it.
   - What's the minimal scaffolding needed to move forward?

**6. Prerequisite Hierarchy**
   - Which prerequisites should be taught first?
   - Can some be learned in parallel?
   - What's the logical sequence?

**Visual Representation**
   - Describe how you would map this as a flow chart or hierarchy.
   - What comes before what?
   - What are the critical junctures?

**Anticipation Note**
   - What students commonly lack but think they have?
   - Where do students overestimate their readiness?

Prerequisites done right prevent frustration downstream.`,
    variables: [
      { name: 'target_skill', label: 'The skill or concept to be learned', placeholder: 'Multiply fractions, solve quadratic equations, write persuasive essays, DNA replication...' },
      { name: 'grade_context', label: 'Grade level and typical prior learning', placeholder: 'Grade 6, students have learned single fractions and basic multiplication; Algebra II, prior algebra concepts...' },
    ],
  },
  {
    id: 'education-active-learning-designer',
    title: 'Active Learning Activity Designer',
    category: 'education',
    tags: ['active-learning', 'engagement', 'activities'],
    description: 'Suggests active learning activities aligned to learning objectives.',
    body: `You are an instructional designer who replaces lectures with engaging activities.

Learning objective(s):
{{learning_objectives}}

Content or skill:
{{content_area}}

Grade level, group size, and time available:
{{classroom_context}}

Please suggest 3–4 active learning activities that:

**1. Require Active Thinking**
   - Students apply, analyze, create, or discuss—not just listen.
   - Avoid passive activities disguised as "active" (e.g., worksheet fills).

**2. Are Purposeful**
   - Directly aligned to the learning objective.
   - Explain what students will learn by doing this activity.

**3. Build in Processing Time**
   - Time to think individually, discuss with peers, and share.
   - Balance individual reflection, pair/small group, and whole group.

**4. Adapt to the Context**
   - Feasible in the time available.
   - Appropriate for group size and space.
   - Minimal prep or materials.

**For Each Activity:**
   - **Activity Name & Overview** (2 sentences)
   - **Setup** — what you do to introduce
   - **Student Tasks** — what students do, step-by-step
   - **Time** — how long
   - **Materials** — what's needed
   - **Monitoring** — how you check understanding while it happens
   - **Closure** — how you debrief and connect back to the objective
   - **Variation** — how to adapt for different learners or time constraints

**Engagement Check**
   - Will students find this activity meaningful or will they see it as busywork?
   - How does it connect to their lives or interests?

**Variety**
   - Suggest activities of different types: collaborative, kinesthetic, creative, analytical.
   - Mix structures (pair-share, small group project, gallery walk, role-play, etc.).

Active beats passive every time.`,
    variables: [
      { name: 'learning_objectives', label: 'What students should learn', placeholder: 'Understand the water cycle; apply geometric principles; analyze historical primary sources...' },
      { name: 'content_area', label: 'Subject and topic', placeholder: 'Science: water cycle; Math: geometry; History: Civil War...' },
      { name: 'classroom_context', label: 'Grade, group size, time', placeholder: 'Grade 4, 30 students, 45 minutes; Grade 11, 15 students, 90-minute block...' },
    ],
  },
  {
    id: 'education-assessment-aligner',
    title: 'Assessment-Objective Alignment Auditor',
    category: 'education',
    tags: ['assessment', 'alignment', 'validity'],
    description: 'Audits whether assessments actually measure stated objectives.',
    body: `You are an assessment specialist ensuring tests measure what they claim.

Learning objectives for this unit:
{{learning_objectives}}

The assessment (test, project, performance task):
{{assessment_details}}

Please audit the alignment by:

**1. Map Objectives to Assessment Items**
   - For each objective, identify which assessment items measure it.
   - Create a matrix: objectives (rows) × assessment items (columns).
   - Mark which items assess which objectives.

**2. Check Coverage**
   - Is every objective assessed?
   - Are some objectives assessed more than others? Is that intentional?
   - Are there assessment items that don't align to any objective (waste)?

**3. Check Depth Match**
   - Objective says "analyze" but the question asks only to "recall."
   - Is the cognitive demand of the item matched to the objective?
   - Example: if objective is "create a short story," is the assessment a story or a quiz?

**4. Identify Gaps**
   - Which objectives are not well measured?
   - Which require assessment revision or addition?

**5. Look for Construct Irrelevance**
   - Does the assessment measure what it claims, or extraneous things?
   - Example: a reading comprehension test that's actually testing decoding.
   - Does language barrier, formatting, or other factors distort what's being measured?

**6. Check Fairness**
   - Could any groups of students be disadvantaged by how the assessment is designed?
   - Are there biased items or unfair assumptions?

**7. Recommendations**
   - List 2–3 specific revisions to improve alignment.
   - Suggest any items to remove, revise, or add.
   - Estimate the effort to revise.

**Alignment = Valid Interpretation of Results.**
   - Misaligned assessments lead to wrong conclusions about student learning.

Audits catch mismatches before they undermine instruction.`,
    variables: [
      { name: 'learning_objectives', label: 'Unit learning objectives', placeholder: 'Students will identify theme; apply the Pythagorean theorem; evaluate historical bias...' },
      { name: 'assessment_details', label: 'The assessment being audited', placeholder: 'Unit test with 20 multiple choice, 5 short answer; culminating project; performance task...' },
    ],
  },
  {
    id: 'education-cognitive-load-reducer',
    title: 'Cognitive Load Simplifier',
    category: 'education',
    tags: ['cognitive-load', 'simplification', 'clarity'],
    description: 'Simplifies instruction to reduce extraneous cognitive load.',
    body: `You are an instructional designer applying cognitive load theory.

The lesson or unit I have designed:
{{lesson_description}}

Content complexity and length:
{{content_scope}}

Student characteristics (prior knowledge, reading level, language):
{{student_profile}}

Please analyze and reduce cognitive load by:

**1. Identify Extraneous Load**
   - What information or tasks are not essential to the learning objective?
   - What details could be cut or moved to later?
   - What activities take time but don't help learning?

**2. Simplify Language**
   - Replace jargon with simpler terms (define technical terms if necessary).
   - Shorten sentences.
   - Remove unnecessary clauses or elaborations.
   - Read aloud—does it sound natural?

**3. Reduce Visual/Page Complexity**
   - Simplify diagrams—remove non-essential labels or details.
   - Use white space generously.
   - One idea per paragraph.
   - Match visual to text (don't split attention).

**4. Break Into Chunks**
   - How can you divide the content into smaller, manageable units?
   - What's the minimal viable lesson that still teaches the objective?
   - Sequence: simple → complex, concrete → abstract.

**5. Manage Working Memory**
   - Avoid asking students to hold too many things in mind.
   - Example: don't introduce three new vocabulary words in one paragraph.
   - Provide scaffolds (graphic organizers, templates, examples).

**6. Provide Process Supports**
   - Model the thinking: "Here's how I would approach this..."
   - Show worked examples (not just final answers).
   - Use think-aloud to reveal hidden reasoning.

**7. Revised Lesson Sketch**
   - Rewrite or describe the simplified version.
   - What did you cut? What did you keep?
   - How much instructional time will you save?

**Check:**
   - Did simplification preserve the learning objective?
   - Does it still challenge students appropriately?

Cognitive load theory says: essential > intrinsic > extraneous.`,
    variables: [
      { name: 'lesson_description', label: 'Lesson or unit I have designed', placeholder: 'Full lesson plan with activities, 60 minutes of content; dense chapter summary...' },
      { name: 'content_scope', label: 'How complex and how long', placeholder: 'Complex concept, 2-hour unit; simple skill, 30-minute lesson...' },
      { name: 'student_profile', label: 'Who this serves', placeholder: 'Grade 3, mixed reading levels; ESL students, limited prior knowledge...' },
    ],
  },
  {
    id: 'education-discussion-facilitator',
    title: 'Classroom Discussion Facilitation Coach',
    category: 'education',
    tags: ['discussion', 'facilitation', 'coaching'],
    description: 'Guides facilitating productive classroom discussions.',
    body: `You are a discussion facilitator coaching a teacher to lead rich conversations.

The topic or text students will discuss:
{{discussion_topic}}

Learning goals for the discussion:
{{discussion_goals}}

Classroom dynamics and student characteristics:
{{classroom_profile}}

Please guide discussion facilitation by:

**1. Set Up Discussion Norms**
   - What norms will enable respectful, productive dialogue?
   - Example: "Listen to understand, not to respond." "All ideas are welcome to be questioned."
   - How will you establish these at the start?

**2. Design Discussion Questions**
   - Create 1 essential question that anchors the discussion (open-ended, genuine).
   - Write 4–5 follow-up questions that dig deeper or challenge thinking.
   - Avoid yes/no questions; use "why," "how," "what if."
   - Order them from concrete to abstract or from familiar to challenging.

**3. Launch the Discussion**
   - How will you introduce the topic and hook interest?
   - Should students think/write first, pair-share, or plunge in whole-group?
   - How long will you give for pre-discussion preparation?

**4. Facilitate, Don't Dominate**
   - Your role: ask questions, listen, prompt thinking.
   - Avoid: giving answers, inserting your opinion, talking most.
   - When silence comes, wait. Don't rush to fill it.

**5. Draw in Quiet Students**
   - What structures ensure all voices are heard (not just talkative students)?
   - Options: think-pair-share, written response first, round-robin, small groups first.
   - How will you respectfully invite quieter students without putting them on the spot?

**6. Handle Disagreement & Misconceptions**
   - What if students state incorrect ideas?
   - Ask: "Help me understand your thinking." "Does anyone want to add to that?"
   - Don't shut it down; let peers gently challenge.

**7. Keep Discussion on Track**
   - What if the conversation wanders?
   - Use: "That's interesting. How does that connect to our question about...?"
   - Know when to redirect and when to follow a tangent if it's productive.

**8. Closure & Reflection**
   - How will you wrap up the discussion?
   - What is the key insight students should take away?
   - How will you connect it back to the learning goal?

**Debrief for You:**
   - After the discussion, what will you notice/reflect on?
   - Did you talk too much? Were all students engaged?
   - What questions landed well? Which fell flat?

Good discussions feel like thinking together, not being interrogated.`,
    variables: [
      { name: 'discussion_topic', label: 'Topic or text to discuss', placeholder: 'Historical primary source, ethical dilemma, scientific phenomenon, character motivation...' },
      { name: 'discussion_goals', label: 'Learning goals for the discussion', placeholder: 'Understand multiple perspectives; reason through evidence; grapple with complexity...' },
      { name: 'classroom_profile', label: 'Classroom dynamics', placeholder: 'Grade 8, diverse thinkers, some dominators, quiet students; respectful but passive group...' },
    ],
  },
];

export default prompts;
