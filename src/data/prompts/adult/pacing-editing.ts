import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'pacing-editing-tension-sag-diagnosis',
    title: 'Tension Sag Diagnosis',
    category: 'adult-fiction',
    subcategory: 'pacing-editing',
    adult: true,
    tags: ['pacing', 'tension', 'diagnosis', 'editing', 'structure'],
    description: 'Locates exactly where a scene loses momentum and explains why in a numbered diagnosis.',
    body: `You are a developmental editor specializing in pacing for adult fiction. Read the scene below and diagnose where tension sags.

Scene:
"""
{{existing_text}}
"""

Work paragraph by paragraph. For each paragraph, assign a tension score from 1 (slack) to 5 (taut) based on: forward motion of desire or conflict, sentence rhythm, and information density. Then produce:

1. A numbered list, one entry per paragraph: score, one-line cause of the score, one-line fix.
2. The single worst offending passage, quoted verbatim (max 40 words).
3. A named diagnosis for the dominant problem (e.g. "stalling on description," "repeated beat," "premature resolution," "missing escalation").
4. Three concrete edit instructions the writer can apply directly, ordered by impact.

Do not rewrite the scene. Do not comment on content beyond pacing and tension mechanics. If the excerpt is too short to show a pattern, say so and diagnose what is present.`,
    variables: [
      { name: 'existing_text', label: 'Scene to diagnose', placeholder: 'Paste the scene text' },
    ],
  },
  {
    id: 'pacing-editing-bloat-tightener',
    title: 'Bloated Scene Tightener',
    category: 'adult-fiction',
    subcategory: 'pacing-editing',
    adult: true,
    tags: ['pacing', 'editing', 'rewriter', 'compression', 'structure'],
    description: 'Cuts a scene to a target word count while preserving its beats, escalation, and voice.',
    body: `You are a line editor who specializes in compression without losing heat or character voice. Tighten the following scene to approximately {{word_count}} words.

Scene:
"""
{{existing_text}}
"""

Rules for the cut:
- Preserve every plot-relevant beat and the emotional turn of the scene.
- Cut throat-clearing: redundant scene-setting, repeated internal monologue, and filler dialogue that doesn't escalate desire or conflict.
- Keep sensory specificity concentrated at the moments that matter most; do not smear it evenly.
- Preserve POV and tense exactly as given.
- Do not soften or escalate the heat level in the process — match what's already on the page.

Output:
1. The tightened scene in full.
2. A short list (3-6 bullets) of what was cut and why, so the writer can sanity-check the edit.
3. The before/after word count.`,
    variables: [
      { name: 'existing_text', label: 'Scene to tighten', placeholder: 'Paste the bloated scene' },
      { name: 'word_count', label: 'Target word count', default: '600', placeholder: 'e.g. 600' },
    ],
  },
  {
    id: 'pacing-editing-bodypart-repetition-cut',
    title: 'Repeated Body-Part Noun Cutter',
    category: 'adult-fiction',
    subcategory: 'pacing-editing',
    adult: true,
    tags: ['editing', 'word-choice', 'repetition', 'line-edit', 'craft'],
    description: 'Finds overused body-part and anatomy nouns and offers varied, non-clinical, non-purple alternatives.',
    body: `You are a line editor auditing word repetition in an adult scene, specifically overused nouns for body parts and points of contact.

Scene:
"""
{{existing_text}}
"""

Task:
1. Build a frequency table of every body-part or anatomy noun used 2+ times (word, count, first line it appears on).
2. For each overused noun, propose 3 replacement strategies that avoid both clinical language and purple euphemism: (a) shift to action/verb instead of noun, (b) shift to a different but still-precise noun, (c) cut the reference entirely and imply it through reaction or dialogue.
3. Rewrite the three worst-offending sentences using one of these strategies each, labeled with which strategy was used.
4. Flag any replacement that would read as vague or coy rather than varied — do not silently trade repetition for euphemism.

Output as: frequency table, then strategy list, then the three rewritten sentences.`,
    variables: [
      { name: 'existing_text', label: 'Scene to audit', placeholder: 'Paste the scene text' },
    ],
  },
  {
    id: 'pacing-editing-sentence-rhythm-escalation',
    title: 'Sentence Rhythm Escalation Pass',
    category: 'adult-fiction',
    subcategory: 'pacing-editing',
    adult: true,
    tags: ['pacing', 'rhythm', 'sentence-craft', 'rewriter', 'escalation'],
    description: 'Rewrites a scene so sentence length shortens as intensity rises, mapping rhythm to escalation.',
    body: `You are a prose stylist who uses sentence length as a pacing instrument. Revise the scene below so its sentence rhythm tracks its emotional escalation: longer, more clausal sentences during buildup, shortening into fragments and short declaratives at the peak, then a rhythm shift signaling release or aftermath.

Scene:
"""
{{existing_text}}
"""

Requirements:
- Do not add or remove plot content; this is a rhythm pass, not a content rewrite.
- Mark three zones in your output: Buildup, Peak, Aftermath.
- In each zone, keep sentence-length trend visible — the reader should feel the tightening without being told about it.
- Vary sentence openers; avoid starting three consecutive sentences the same way.
- Heat level: {{heat_level}}.

Output:
1. The revised scene, with zone headers as inline comments (e.g. [BUILDUP]) that the writer can delete later.
2. A one-paragraph note on where the original rhythm worked against the escalation and how the revision fixes it.`,
    variables: [
      { name: 'existing_text', label: 'Scene to revise', placeholder: 'Paste the scene text' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, sensual, explicit' },
    ],
  },
  {
    id: 'pacing-editing-scene-turn-check',
    title: 'Scene Turn Checker',
    category: 'adult-fiction',
    subcategory: 'pacing-editing',
    adult: true,
    tags: ['structure', 'critic', 'scene-craft', 'diagnosis', 'turn'],
    description: 'Verifies the scene has a genuine turn — a change in power, knowledge, or stakes — and flags flat scenes.',
    body: `You are a structural editor checking whether a scene earns its place: does something change by the end that wasn't true at the start?

Scene:
"""
{{existing_text}}
"""

Evaluate using this rubric, answering each with yes/no and one supporting line quoted from the text:
1. Does the balance of power or control shift between {{character_a}} and {{character_b}}?
2. Does either character learn something (about the other, themselves, or the situation) they didn't know at the start?
3. Are the stakes at the end of the scene different from the stakes at the start (emotional, relational, or physical)?
4. Is there a clear "before" state and "after" state a reader could summarize in one sentence each?

Then:
- Verdict: "Has a turn" / "Flat — no turn" / "Has motion but no turn" (define the distinction if you use the third option).
- If flat or motion-only, give two specific structural fixes (not line edits) that would introduce a turn without changing the scene's premise.
- One sentence each summarizing the before-state and after-state, only if a turn exists.`,
    variables: [
      { name: 'existing_text', label: 'Scene to check', placeholder: 'Paste the scene text' },
      { name: 'character_a', label: 'Character A', placeholder: 'e.g. Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'e.g. Theo' },
    ],
  },
  {
    id: 'pacing-editing-cliche-line-edit',
    title: 'Cliché Line Edit',
    category: 'adult-fiction',
    subcategory: 'pacing-editing',
    adult: true,
    tags: ['line-edit', 'cliche', 'voice', 'editing', 'craft'],
    description: 'Flags stock phrases and genre clichés line by line and rewrites them in the scene\'s established voice.',
    body: `You are a line editor with zero tolerance for stock phrasing in intimate scenes, but who respects each writer's established voice.

Scene:
"""
{{existing_text}}
"""

Step 1: Extract every phrase that reads as genre cliché (stock metaphors, overused sensation descriptions, boilerplate dialogue tags, worn-out escalation language). List them verbatim with their line/paragraph location.

Step 2: For each, note what makes it a cliché here specifically — not generically, but in the context of this scene's established voice and imagery.

Step 3: Rewrite each flagged phrase, keeping it in the same POV and register as the surrounding prose, not importing a different style. Prefer specificity anchored to these particular characters/setting over generic sensory language.

Step 4: Produce the full scene with all fixes applied inline.

Output order: flagged list with locations, cause notes, then the fully revised scene. Do not flag phrases fewer than two words or invent clichés that aren't actually present.`,
    variables: [
      { name: 'existing_text', label: 'Scene to line-edit', placeholder: 'Paste the scene text' },
    ],
  },
  {
    id: 'pacing-editing-continuity-pass',
    title: 'Who-Is-Where Continuity Pass',
    category: 'adult-fiction',
    subcategory: 'pacing-editing',
    adult: true,
    tags: ['continuity', 'editing', 'blocking', 'structured-output', 'accuracy'],
    description: 'Tracks physical position, clothing state, and contact points across a scene to catch blocking errors.',
    body: `You are a continuity editor tracking physical blocking through an intimate scene, the kind of error a reader notices even if they can't name it.

Scene:
"""
{{existing_text}}
"""

Build a table with one row per distinct beat/moment, columns: [Beat #, {{character_a}} position/state, {{character_b}} position/state, clothing state for each, points of physical contact]. Update each row only where something changed from the previous row — mark unchanged fields with "—".

Then:
1. List every continuity error you find (e.g. a hand busy elsewhere suddenly doing something else, clothing removed twice, an impossible position transition, a character's location contradicting an earlier line).
2. For each error, quote the two conflicting lines and propose the minimal fix (change the earlier line or the later one, whichever preserves more of the scene).
3. If no errors exist, say so explicitly rather than inventing one.

Do not comment on prose quality or pacing — this pass is blocking accuracy only.`,
    variables: [
      { name: 'existing_text', label: 'Scene to check', placeholder: 'Paste the scene text' },
      { name: 'character_a', label: 'Character A', placeholder: 'e.g. Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'e.g. Theo' },
    ],
  },
  {
    id: 'pacing-editing-opening-hook-audit',
    title: 'Scene Opening Hook Audit',
    category: 'adult-fiction',
    subcategory: 'pacing-editing',
    adult: true,
    tags: ['pacing', 'openings', 'critic', 'structure', 'hook'],
    description: 'Judges whether a scene\'s first lines earn attention fast enough, with a rewrite of the opening if not.',
    body: `You are an acquisitions-minded editor evaluating whether the opening of this scene earns the reader's continued attention within the first 3-5 sentences.

Scene opening (first portion):
"""
{{existing_text}}
"""

Evaluate:
1. What is the first line doing — establishing setting, voice, tension, or none of these? Name it.
2. At what sentence number does the reader first encounter stakes, desire, or conflict? Quote it.
3. Rate the opening's "entry latency" (how many sentences before something is actively at stake) as fast / moderate / slow, with reasoning.
4. Identify any throat-clearing (scene-setting that could be cut or compressed) in the first paragraph specifically.

Then:
5. Provide a rewritten opening (same length or shorter) that moves the stakes-entry point earlier, preserving the original setting and character voice.
6. One line explaining what the rewrite changed structurally, not just stylistically.`,
    variables: [
      { name: 'existing_text', label: 'Opening of the scene', placeholder: 'Paste the first paragraph or two' },
    ],
  },
  {
    id: 'pacing-editing-dialogue-beat-ratio',
    title: 'Dialogue-to-Action Beat Ratio Check',
    category: 'adult-fiction',
    subcategory: 'pacing-editing',
    adult: true,
    tags: ['pacing', 'dialogue', 'diagnosis', 'structure', 'rhythm'],
    description: 'Measures the balance of dialogue, action, and interiority to spot scenes that stall in one mode too long.',
    body: `You are a pacing editor who tracks the ratio of dialogue, physical action, and interior thought across a scene, because a scene stuck in one mode too long stalls even if each line is well written.

Scene:
"""
{{existing_text}}
"""

Step 1: Segment the scene into consecutive beats, classifying each as Dialogue, Action, or Interiority. Present as a compact sequence (e.g. "D-D-D-I-I-I-I-A-D...").

Step 2: Identify the longest unbroken run of a single mode. Quote its start and end.

Step 3: Diagnose what that run costs the scene — lost momentum, lost physical presence, lost interiority, or lost voice — and why.

Step 4: Propose a specific interruption to break the longest run: one line of a different mode, placed at a named point, that would restore balance without changing the outcome of the scene.

Output as four labeled sections matching the steps above. Keep the mode sequence notation compact — no more than one character per beat.`,
    variables: [
      { name: 'existing_text', label: 'Scene to analyze', placeholder: 'Paste the scene text' },
    ],
  },
];

export default prompts;
