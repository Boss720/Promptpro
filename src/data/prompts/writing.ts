import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'writing-story-arc-builder',
    title: 'Story Arc Structure Planner',
    category: 'writing',
    tags: ['structure', 'planning', 'narrative'],
    description: 'Maps a full story arc with clear escalation points and emotional beats.',
    body: `You are a master narrative architect. A writer is building a {{story_type}} about {{premise}}.

Map the complete story arc in this structure:
1. **Inciting Incident** — What disrupts the protagonist's status quo? Why can't they ignore it?
2. **Rising Action** (3–4 key events) — Each escalates stakes or reveals character. List what's at risk.
3. **Midpoint** — The moment of false victory or devastating reversal. How does it flip expectations?
4. **Falling Action** (2–3 events) — Chase the reversal to its logical conclusion.
5. **Climax** — The do-or-die confrontation. What does the protagonist sacrifice or gain?
6. **Resolution** — State the new equilibrium. What changed, and for whom?

For each beat, note the emotional temperature (rising tension, shock, relief, dread) and what the audience learns about stakes.`,
    variables: [
      { name: 'story_type', label: 'Genre or format', placeholder: 'thriller, romance, heist, character study' },
      { name: 'premise', label: 'One-line hook', placeholder: 'A surgeon discovers their patient is their estranged sibling' },
    ],
  },
  {
    id: 'writing-dialogue-audition',
    title: 'Dialogue & Character Voice Tester',
    category: 'writing',
    tags: ['dialogue', 'character', 'voice'],
    description: 'Evaluates dialogue authenticity and identifies what each character reveals about themselves.',
    body: `You are a dialogue specialist and character coach. Below is a scene of dialogue from a {{tone}} story:

{{dialogue_sample}}

Evaluate this dialogue by answering:
1. **Voice clarity** — Can you identify each character by their speech alone? What makes them distinct? (word choice, pacing, filler words, sophistication level, humor)
2. **Information handling** — Does dialogue deliver exposition naturally, or does it feel like the author explaining? Cite one line that works and one that strains.
3. **Subtext** — What does each character want that they're NOT saying aloud? Does tension simmer beneath surface banter?
4. **Authenticity** — Which lines sound like how humans actually talk, and which are too polished or explanatory?
5. **Pacing** — Is there rhythm (short quips, long confessions, interruptions)? Does it vary or drone?

End with one specific rewrite suggestion for the weakest line.`,
    variables: [
      { name: 'tone', label: 'Story tone', placeholder: 'noir detective, cozy mystery, high fantasy, sci-fi' },
      { name: 'dialogue_sample', label: 'Dialogue passage', placeholder: '"I never knew you felt this way." "Well, I do."' },
    ],
  },
  {
    id: 'writing-sensory-detail-spotter',
    title: 'Sensory Writing Intensifier',
    category: 'writing',
    tags: ['sensory', 'description', 'craft'],
    description: 'Enriches flat description by mapping specific sensory layers and emotional resonance.',
    body: `You are a sensory writing specialist. A writer has this bland passage:

{{passage}}

Your task is to rebuild it using ALL FIVE senses plus one non-obvious sensory detail. Output:

**Original breakdown:** List what senses are missing or underdeveloped.

**Rewritten version:** A 2–3 sentence replacement that includes:
- **Sight** — color, light, movement, visual hierarchy
- **Sound** — ambient noise, unexpected sounds, silence as contrast
- **Touch** — texture, temperature, air pressure, physical sensation
- **Smell** — specific scents (not generic "nice" or "bad")
- **Taste** — if relevant; otherwise skip
- **The overlooked sense** — proprioception, balance, time-perception, or emotional vertigo

**Technique note:** Explain which sense was most underused and why adding it matters for {{story_moment}}.`,
    variables: [
      { name: 'passage', label: 'Flat description to enhance', placeholder: 'She walked into the old house. It was dusty and quiet.' },
      { name: 'story_moment', label: 'Context (scary, intimate, joyful, etc.)', placeholder: 'a haunting revelation' },
    ],
  },
  {
    id: 'writing-pov-perspective-shift',
    title: 'POV Experimenter & Impact Analyzer',
    category: 'writing',
    tags: ['perspective', 'pov', 'rewriting'],
    description: 'Rewrites a scene in alternate POVs and analyzes what information and tension each reveals or hides.',
    body: `You are a perspective specialist. A writer has a scene in {{current_pov}}:

{{scene_text}}

Rewrite this scene THREE times:
1. **Opposite POV** — If currently first-person protagonist, rewrite as antagonist observing the protagonist. If third-person omniscient, rewrite as tight third-person from the least privileged character.
2. **Second-person "you"** — Rewrite as direct address to make the reader complicit.
3. **Unreliable observer** — Rewrite from a character who is lying or mistaken about what's happening.

**Analysis:**
- What can the original POV see that the others cannot?
- Which version creates the most uncertainty or dread?
- Does one version flatten the drama? How?
- When would the author choose each version?

End with a recommendation for which POV serves your story's mystery or revelation best.`,
    variables: [
      { name: 'current_pov', label: 'Current perspective', placeholder: 'first-person protagonist, third-person omniscient' },
      { name: 'scene_text', label: 'Scene to rewrite', placeholder: 'A meeting scene, confrontation, or discovery moment' },
    ],
  },
  {
    id: 'writing-backstory-interrogator',
    title: 'Character Backstory Deep Dive',
    category: 'writing',
    tags: ['character', 'backstory', 'motivation'],
    description: 'Extracts and questions a character\'s history to find buried motivation and contradiction.',
    body: `You are a ruthless character interrogator. The writer has described a character:

{{character_description}}

Ask probing questions to unearth their true biography. Do NOT accept surface answers. Press into contradiction, shame, and want.

**Interrogation framework:**
1. **Childhood wound** — What happened before age 12 that still controls them? (Not trauma-shopping; find the formative scarcity or humiliation.)
2. **First failure** — When did they fail at something they cared about? Did they hide it or weaponize it?
3. **Forbidden desire** — What do they want but believe they don't deserve? Why?
4. **The lie they tell themselves** — What false belief keeps them safe but caged?
5. **Who knows the truth?** — Whom have they confessed to? Whom do they hide from?
6. **The crack in their armor** — What triggers them? What makes them lose their composure?

End with: **What one scene from their past, if the reader witnessed it, would reframe everything about them today?**`,
    variables: [
      { name: 'character_description', label: 'Character summary', placeholder: 'A disgraced lawyer rebuilding in a small town' },
    ],
  },
  {
    id: 'writing-tension-escalation-mapper',
    title: 'Tension & Stakes Escalator',
    category: 'writing',
    tags: ['tension', 'stakes', 'pacing'],
    description: 'Maps rising tension beat-by-beat and identifies flat or unearned escalations.',
    body: `You are a pacing specialist hunting for tension leaks. A writer has this sequence of events:

{{scene_sequence}}

For each event, rate the tension on a scale of 1–10 and evaluate:
1. **What's at stake?** (personal, relational, physical, moral)
2. **Does it escalate from the last beat?** (not just different, but WORSE or HIGHER-STAKES)
3. **What does the protagonist risk losing if they fail?**
4. **Where do readers breathe?** (Safe moments? Strategic release?)

**Then provide:**
- **Flat spots** — Events that don't escalate. How to deepen them?
- **Unearned jumps** — Tension spikes that feel artificial. What's missing to earn it?
- **The turning point** — Where does the story cross from "can they?" to "will they survive?"
- **Pacing prescription** — Recommend a beat-by-beat order with specific reversals or surprises.

End with the single change that would amplify overall tension the most.`,
    variables: [
      { name: 'scene_sequence', label: 'List of plot events', placeholder: 'Event 1 → Event 2 → Event 3...' },
    ],
  },
  {
    id: 'writing-beta-reader-coach',
    title: 'Reader Feedback Interpreter & Revision Guide',
    category: 'writing',
    tags: ['revision', 'feedback', 'editing'],
    description: 'Decodes vague beta reader feedback into specific revision actions and priorities.',
    body: `You are a feedback translator. A writer received these beta reader comments:

{{feedback_comments}}

Beta readers often sense problems without naming them clearly. Translate each comment into:
1. **What the reader ACTUALLY felt** — Boredom, confusion, disbelief, emotional distance?
2. **The probable root cause** — Pacing, character motivation, exposition, dialogue, stakes?
3. **Specific revision action** — Not "fix it," but "cut scenes X and Y, combine them into one confrontation that reveals both character arcs."
4. **Severity** — Does this break story logic, or is it a voice preference?

**Prioritization:**
- Rank feedback by how many readers flagged the same issue (consensus).
- Separate structural problems from style preferences.
- Identify which feedback contradicts other feedback (a sign of unclear writing, not reader error).

**End with a 3-step revision plan** targeting the top-priority issues, in order. Include page counts or scene estimates.`,
    variables: [
      { name: 'feedback_comments', label: 'Beta reader feedback', placeholder: '"I got lost in chapter 3" or "I didn\'t care about this character"' },
    ],
  },
  {
    id: 'writing-genre-conventions-checker',
    title: 'Genre Expectation Auditor',
    category: 'writing',
    tags: ['genre', 'conventions', 'tropes'],
    description: 'Maps expected vs. actual genre beats and identifies where your story surprises or fails genre promises.',
    body: `You are a genre specialist. A writer is working in {{genre}} with this premise:

{{premise}}

**Part 1: Genre contract**
List the TOP 5 expectations readers of {{genre}} bring to the table. (For romance: meet-cute, obstacles, HEA. For heist: setup, plan, twist. For gothic: atmosphere, mystery, family curse.)

**Part 2: Your story's delivery**
For each expectation, answer: Does your story deliver it, subvert it, or ignore it? If ignored, is that a strength or a betrayal?

**Part 3: Novelty**
- Which genre trope does your story lean HARDEST into?
- Which genre trope do you explicitly reject or twist?
- What's the most unusual choice you make within {{genre}}?

**Part 4: Risk assessment**
- Which readers will feel delighted by your choices?
- Which readers will feel cheated? Why?
- Can you signal your twist early enough to reset expectations, or will it feel like broken promises?

End with: **Should you lean more into genre expectations or commit harder to your unique angle?**`,
    variables: [
      { name: 'genre', label: 'Primary genre', placeholder: 'romance, thriller, fantasy, literary fiction' },
      { name: 'premise', label: 'Your story premise', placeholder: 'A love story across enemy lines' },
    ],
  },
  {
    id: 'writing-ending-satisfaction-auditor',
    title: 'Ending Payoff & Resolution Tester',
    category: 'writing',
    tags: ['endings', 'resolution', 'payoff'],
    description: 'Evaluates whether an ending delivers on setup, resolves subplots, and satisfies emotional promises.',
    body: `You are an ending specialist. A writer has drafted an ending for their {{story_type}} story:

{{ending_text}}

Evaluate it against these standards:

**1. Promise & Payoff**
- List the 3–5 central questions the story posed. Does the ending answer them all? Which are left hanging—intentionally or by accident?
- Does the climax resolve the core conflict, or does the ending feel like a separate episode?

**2. Character Arcs**
- Has the protagonist visibly changed from their opening self? What did they learn? What did they lose?
- Do secondary characters exit the story with resolve (even if tragic), or do they vanish?

**3. Emotional Truth**
- What emotional beat does this ending land? (triumph, bittersweet, devastation, peace, ambiguity)
- Does that match the tone established in Act 1?
- If the ending is meant to surprise or upset readers, have you earned it?

**4. Loose threads**
- Catalog every subplot introduced. Which are resolved? Which are abandoned? Which are intentionally open?
- Does ambiguity here serve mystery, or does it feel like a cop-out?

**5. The final image**
- What's the last concrete image or moment? Does it crystallize the story's meaning?

**Verdict:** Does this ending feel inevitable in hindsight, or does it feel arbitrary? What would make it more earned?`,
    variables: [
      { name: 'story_type', label: 'Genre/type', placeholder: 'literary romance, noir mystery' },
      { name: 'ending_text', label: 'Final scene(s)', placeholder: 'The last chapter or epilogue text' },
    ],
  },
  {
    id: 'writing-show-dont-tell-converter',
    title: 'Show-Don\'t-Tell Scene Rewriter',
    category: 'writing',
    tags: ['showing', 'craft', 'revision'],
    description: 'Converts expository summary into visceral scene with action, dialogue, and sensory detail.',
    body: `You are a "show not tell" specialist. A writer has told us:

{{summary}}

Now dramatize it. Rewrite this as a SCENE (dialogue, action, internal thought) where the reader discovers what's happening through observation, not narration.

**Rules:**
- Write 300–400 words.
- NO narrative summary ("She was angry" → show the clenched jaw, the thrown dish, the silence).
- Include at least two pieces of dialogue.
- Let sensory detail carry emotion: cold air, flickering light, trembling hands.
- Use a specific moment in time (not a montage or overview).

**Technique note:** Explain what you chose to show (action, dialogue, expression) instead of telling, and why those details reveal {{character_reveal}} better than summary would.

**Final check:** If you removed all narration, would a reader still understand what happened and why it matters?`,
    variables: [
      { name: 'summary', label: 'Expository summary', placeholder: 'She was heartbroken after he left her.' },
      { name: 'character_reveal', label: 'What the scene reveals', placeholder: 'her emotional state' },
    ],
  },
  {
    id: 'writing-narrator-voice-developer',
    title: 'Narrative Voice & Prose Style Auditor',
    category: 'writing',
    tags: ['voice', 'prose', 'style'],
    description: 'Analyzes and strengthens the distinctive voice of your narrator through syntax and word choice.',
    body: `You are a prose-style specialist. Here is a passage from a {{pov}} narrator:

{{prose_sample}}

**Voice audit:**

1. **Vocabulary fingerprint** — List 5 words or phrases unique to this narrator. Are they repeated? (If yes, is it style or accident?) What do these word choices reveal about their education, class, psychology?

2. **Syntax rhythm** — Describe the sentence structure: short staccato? Long flowing? Mixed? Does it match your narrator's mental state or personality?

3. **What they notice** — If your narrator describes a room, do they focus on people, objects, power dynamics, or aesthetics? This reveals character.

4. **Formality gradient** — Does the narrator shift between formal and casual speech? When and why?

5. **Distinctive tics** — Metaphors, humor style, obsessions, false starts, or qualifications (too many "kind ofs"?) that mark this voice.

**Rewrite one paragraph** using voice strengthening: amplify their unique vocabulary, lean into their sensory priorities, and make their syntax unmistakable.

**Question:** If you read this passage without attribution, how quickly would a reader know it's THIS narrator?`,
    variables: [
      { name: 'pov', label: 'Narrator type', placeholder: 'unreliable teenager, world-weary detective, Victorian governess' },
      { name: 'prose_sample', label: 'Sample passage', placeholder: 'A paragraph of your narrative prose' },
    ],
  },
  {
    id: 'writing-conflict-engine-designer',
    title: 'Internal & External Conflict Multiplier',
    category: 'writing',
    tags: ['conflict', 'character', 'stakes'],
    description: 'Deepens conflict by mapping external obstacles against character\'s internal resistance.',
    body: `You are a conflict architect. A writer has this setup:

**External conflict:** {{external_obstacle}}
**Character goal:** {{character_goal}}
**Character wound/flaw:** {{internal_barrier}}

The best stories LAYER these: the protagonist chases the external goal, but their internal damage sabotages them. Every win costs them something.

**Your task:**

1. **Rewrite the external conflict** to directly trigger the character's internal wound. (Not coincidence; make it cut.)
   - Example: A perfectionist lawyer must defend someone guilty (external) when her own moral compromise haunts her (internal).

2. **Identify the irony** — What does this character need to become to solve the external problem? Why is that growth terrifying for them?

3. **Escalate the stakes** — What happens if they DON'T grow? List consequences.

4. **Create a dilemma scene** — Outline one scene where the character must choose between:
   - Solving the external problem while staying emotionally safe, OR
   - Solving it authentically, which requires facing their wound.

5. **Forecast the cost** — If they win externally but stay emotionally trapped, what have they actually lost?

End with: **How does this character's growth become inseparable from the plot resolution?**`,
    variables: [
      { name: 'external_obstacle', label: 'The plot obstacle', placeholder: 'A time-limited competition, a rival, a mystery to solve' },
      { name: 'character_goal', label: 'What they want to achieve', placeholder: 'Win the competition' },
      { name: 'internal_barrier', label: 'Their emotional wound', placeholder: 'Fear of failure and abandonment' },
    ],
  },
  {
    id: 'writing-opening-hook-sharpener',
    title: 'Opening Line & Hook Optimizer',
    category: 'writing',
    tags: ['openings', 'hooks', 'first-page'],
    description: 'Generates multiple opening strategies and evaluates which creates the strongest immediate grip.',
    body: `You are an opening specialist. A writer wants to start their {{story_type}} with this hook:

{{current_opening}}

Great openings do ONE of these things: pose a question, upset equilibrium, or reveal voice so strong readers lean in.

**Generate 5 alternative openings:**
1. **With dialogue** — Start mid-conversation. What does the exchange reveal about character and stakes?
2. **With action** — Begin in physical motion/danger/urgency. Skip exposition.
3. **With voice** — A narrator so distinctive they grab attention through personality alone.
4. **With image** — A single specific detail (sensory, concrete) that hints at the story's essence.
5. **With question** — Either posed to reader, or burning in protagonist's mind.

**Evaluation matrix:**
For each opening:
- Does it raise a question the reader MUST have answered?
- What does it reveal about tone, setting, or stakes?
- How quickly does it signal the story's genre?
- What protagonist problem does it introduce?

**Recommendation:** Which opening would make a reader turn the page even if they were going to skip this book? Why? (Not prettiest—MOST GRIPPING.)

Include your final opening (revised version of your strongest option) as the deliverable.`,
    variables: [
      { name: 'story_type', label: 'Story genre/type', placeholder: 'noir thriller, cozy mystery, epic fantasy' },
      { name: 'current_opening', label: 'Your opening line or paragraph', placeholder: 'She was born on a Tuesday in March.' },
    ],
  },
  {
    id: 'writing-description-pruner',
    title: 'Description Weight & Necessity Auditor',
    category: 'writing',
    tags: ['description', 'editing', 'efficiency'],
    description: 'Identifies bloated descriptions and preserves only details that advance story or character.',
    body: `You are a prose efficiency editor. A writer has this descriptive passage:

{{description_passage}}

Long description can bog down momentum. Your job is surgical preservation, not demolition.

**For each descriptive sentence:**
1. **What does this detail do?** (a) Establish atmosphere, (b) reveal character taste/bias, (c) ground the reader in a specific place, (d) foreshadow danger, (e) waste space?

2. **Is it necessary?** Does the story stop here to admire the view, or does description EARN its space by revealing something about the POV character or advancing mood?

3. **Can it be tightened?** "A vast, manicured garden with rows of white roses in full bloom" → "white roses, ranked like soldiers."

4. **One-touch rule:** Does every detail appear only here, or is the location/object revisited? (If revisited, defer some detail to the second pass.)

**Deliverables:**
- **Pared-down version** — Remove every word that doesn't pull double duty.
- **What we kept and why** — The 3–4 details that define {{location_purpose}}.
- **Pacing verdict** — Does the passage now accelerate the narrative, or does it still dead-weight the story?`,
    variables: [
      { name: 'description_passage', label: 'Passage to trim', placeholder: 'A full descriptive paragraph' },
      { name: 'location_purpose', label: 'Why this place matters', placeholder: 'to show the villain\'s wealth and power' },
    ],
  },
  {
    id: 'writing-emotional-arc-tracer',
    title: 'Character Emotional Arc Mapper',
    category: 'writing',
    tags: ['character', 'emotion', 'arc'],
    description: 'Tracks the emotional journey of a character across the story and identifies growth moments.',
    body: `You are an emotional-arc specialist. A writer has a character with this trajectory:

**Starting emotional state:** {{starting_state}}
**Ending emotional state:** {{ending_state}}
**Key turning points:** {{turning_points}}

Map the emotional temperature (hot/cold, open/guarded, hopeful/desperate) at each major story beat. Ask:

1. **The setup** — What emotional wound or need defines your character at the start? What are they protecting or chasing?

2. **Escalation** — Does emotional temperature rise steadily, or are there plateaus and reversals? (Reversals are more realistic.)

3. **The breaking point** — Where does the character's old coping strategy finally fail? What forces them to feel something they've been numb to?

4. **The moment of change** — Is it gradual or sudden? Do they choose growth, or does it happen to them? (Choice reads as more earned.)

5. **Relapse** — Do they backslide? If not, the arc may feel unearned. Show them fighting the change before accepting it.

6. **Integration** — At the end, are they fundamentally different, or just wiser? Can they return to their old life, or is the door closed?

**Output:** A beat-by-beat emotional timeline. Identify the SINGLE moment that shifts everything, and explain why that moment worked.`,
    variables: [
      { name: 'starting_state', label: 'Initial emotional state', placeholder: 'Numb, rage-filled, anxiously seeking approval' },
      { name: 'ending_state', label: 'Final emotional state', placeholder: 'Grounded, grieving, at peace' },
      { name: 'turning_points', label: 'Major story beats', placeholder: 'Act break events, major revelations' },
    ],
  },
  {
    id: 'writing-subtext-decoder',
    title: 'Subtext Mining & Tension Builder',
    category: 'writing',
    tags: ['subtext', 'tension', 'dialogue'],
    description: 'Extracts unsaid meaning from dialogue and action, then amplifies what\'s unsaid.',
    body: `You are a subtext specialist. A writer has this scene:

{{scene_text}}

Subtext is what characters DON'T SAY. The gap between words and truth creates tension and intrigue.

**Analysis:**

1. **What's the lie?** — What are characters pretending? (that they don't care, don't know, aren't afraid?)

2. **What's the truth underneath?** — What do they actually feel?

3. **Where's the pressure point?** — Which topic makes them shift, hesitate, or change subject? That's where subtext SCREAMS.

4. **Behavioral tells** — Does the character fidget, avoid eye contact, laugh too hard, or pause mid-sentence? These reveal the lie.

5. **What the audience knows that the characters don't** — Does the reader see the subtext while characters are still lying to each other?

**Rewrite one exchange** to amplify subtext:
- Reduce on-the-nose dialogue ("I'm angry at you" → silence + turned back).
- Add physical contradiction (saying "I'm fine" while gripping the chair).
- Layer in a revelation the POV character misses but the reader catches.

**End with:** How does this subtext serve the larger story? Is there a secret that needs to stay buried, or is this moment building toward a revelation?`,
    variables: [
      { name: 'scene_text', label: 'Scene with dialogue', placeholder: 'A conversation or confrontation scene' },
    ],
  },
  {
    id: 'writing-pacing-tempo-auditor',
    title: 'Scene Pacing & Narrative Tempo Calibrator',
    category: 'writing',
    tags: ['pacing', 'rhythm', 'editing'],
    description: 'Analyzes sentence structure and scene rhythm to identify pace problems and fix them.',
    body: `You are a pacing specialist. A writer has submitted a {{story_phase}} section:

{{story_section}}

Pacing isn't just about plot—it's about sentence length, paragraph rhythm, white space, and how long readers linger in a moment.

**Tempo audit:**

1. **Sentence length gradient** — Measure the average word count per sentence. Are they consistent (monotonous) or varied?
   - Short sentences = urgency, shock, impact.
   - Long sentences = reflection, complexity, overwhelm.

2. **Paragraph shape** — Are paragraphs dense walls of text (slows reading) or varied in length?

3. **White space strategy** — Short lines and line breaks accelerate; thick blocks decelerate. Is white space used intentionally?

4. **Action density** — In action scenes, does sentence length match speed? (Fast scenes need short, punchy sentences. Slow scenes tolerate longer exploration.)

5. **Emotional pacing** — Are high-stakes moments undercut by slow prose, or are they punched up by sentence variety?

**Rewrite one paragraph** to match your intended {{desired_tempo}}. Show how syntax accelerates or decelerates the reader's experience.

**Deliverable:** Annotated version with notes on every tempo choice, plus a before/after comparison.`,
    variables: [
      { name: 'story_phase', label: 'Story phase', placeholder: 'opening, climax, quiet moment, chase scene' },
      { name: 'story_section', label: 'Passage to analyze', placeholder: 'A full paragraph or scene' },
      { name: 'desired_tempo', label: 'Intended pacing', placeholder: 'urgent and breathless, contemplative and slow' },
    ],
  },
  {
    id: 'writing-thematic-thread-checker',
    title: 'Theme & Thematic Resonance Auditor',
    category: 'writing',
    tags: ['theme', 'meaning', 'structure'],
    description: 'Identifies thematic threads and ensures they are woven consistently without heavy-handedness.',
    body: `You are a thematic architect. A writer believes their story explores {{stated_theme}}.

List the major plot events and character decisions. For EACH, answer:
1. **How does this scene embody the theme?** (or challenge it, or complicate it?)
2. **Is it earned or didactic?** (Does the theme emerge from character action and consequence, or does the author explain it?)
3. **How does the character's choice here reflect their understanding of the theme?** (At the start: shallow or wrong. By the end: evolved.)

**Then map the theme's evolution:**
- **Act 1:** How does the protagonist misunderstand or avoid the theme?
- **Act 2:** What experiences force them to reckon with it?
- **Act 3:** What does the ending suggest about the theme? Is it resolved, or left complex?

**Test for heavy-handedness:**
- Identify dialogue where characters EXPLAIN the theme. (Flag every instance.)
- Does any scene exist only to prove a thematic point? (It probably should go.)
- Can you state the theme without spoilers? If it's unclear, the weaving is too subtle. If it's obvious from page 5, it's too blunt.

**Verdict:** Is your theme discovered by readers, or lectured to them? What's one scene you could cut or rewrite to let the theme breathe?`,
    variables: [
      { name: 'stated_theme', label: 'Your story\'s theme', placeholder: 'ambition corrupts, forgiveness requires vulnerability' },
    ],
  },
  {
    id: 'writing-revision-priority-sequencer',
    title: 'Multi-Pass Revision Roadmap Maker',
    category: 'writing',
    tags: ['revision', 'editing', 'workflow'],
    description: 'Organizes revisions from structural to line-level, ensuring high-impact changes happen first.',
    body: `You are a revision strategist. A writer completed a draft and received feedback. Before diving in randomly, map the revision sequence.

**Revision pyramid (top to bottom):**
1. **Structural** — Plot holes, pacing problems, missing scenes, character arcs that don't resolve.
2. **Scene-level** — Reordering chapters, cutting redundant scenes, deepening character motivations.
3. **Line-level** — Prose style, dialogue clarity, description, voice consistency.
4. **Copy-level** — Spelling, grammar, word choice, repetition.

**Your task:**
1. **List all known problems** (from feedback, your gut, beta readers).
2. **Sort by level** — Which are structural, which are scene-level, etc.?
3. **Estimate impact** — If you fix problem X, how many downstream problems disappear? (High-impact first.)
4. **Write a revision schedule** — Pass 1: Structural. Pass 2: Scenes. Pass 3: Prose. Etc.
5. **Identify the bottleneck** — What ONE structural issue, if solved, would clarify everything else?

**Output:** A numbered, prioritized revision list with estimated time per pass. Should take 2–4 weeks to get from rough draft to polished? Map it out. (Not every pass; just the major ones.)`,
  },
  {
    id: 'writing-reader-emotional-impact-optimizer',
    title: 'Reader Emotional Response & Impact Predictor',
    category: 'writing',
    tags: ['emotion', 'reader', 'impact'],
    description: 'Forecasts how readers will emotionally respond to key moments and calibrates intensity.',
    body: `You are an emotional-impact specialist. A writer has a crucial scene they want to {{emotional_target}}:

{{scene_text}}

Readers don't have access to your intention—only to what's on the page. Map the emotional trajectory a reader will actually experience:

**Emotional response audit:**
1. **Entry emotion** — What is the reader feeling when this scene starts? (Worried? Angry? Curious? Hopeful?)
2. **Emotional beats** — Mark each moment where the reader's feeling shifts. What caused it?
3. **Peak emotion** — Where is the scene's emotional crescendo? Does it arrive too early or too late?
4. **Catharsis moment** — Is there release, or does tension just… dissolve? (One is earned; one is unsatisfying.)
5. **Exit emotion** — What feeling does the reader carry into the next scene?

**Calibration:**
- Is the emotion you landed {{emotional_target}}, or did it drift?
- What one line or moment would intensify the intended emotion?
- What line undercuts it (unintentional lightness, deflation, explanation)?
- Does the scene assume the reader knows something they don't, creating confusion instead of emotion?

**Rewrite the moment you identified as underperforming**, with explicit focus on {{emotional_target}}.

**Gut check:** If a reader loves your story, which moment from this scene will they remember? Is that the moment you designed them to remember?`,
    variables: [
      { name: 'emotional_target', label: 'Intended emotion', placeholder: 'gut-wrenching grief, triumph, betrayal, relief' },
      { name: 'scene_text', label: 'Key scene', placeholder: 'A climactic or pivotal moment' },
    ],
  },
];

export default prompts;
