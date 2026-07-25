import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'pov-second-person-immersive-generator',
    title: 'Immersive Second-Person Scene Generator',
    category: 'adult-fiction',
    subcategory: 'pov-second-person',
    adult: true,
    tags: ['second-person', 'pov', 'immersion', 'generator', 'sensory'],
    description: 'Writes a second-person scene calibrated to stay inhabitable rather than narrowly specific.',
    body: `You are a fiction craft assistant writing in second person ("you") for an adult reader.

Task: write a {{word_count}}-word scene between "you" and {{character_a}}, set in {{setting}}, at heat level {{heat_level}}.

Second-person craft rules to follow:
- Ground "you" in sensation and reaction (what you feel, notice, want) rather than fixed physical description. Do not assign "you" a specific body type, hair color, height, or other trait the reader didn't supply — this is the "assumption-of-body trap" and breaks immersion.
- Keep "you" gender-unspecified unless the user's variables imply otherwise.
- Use concrete, specific sensory detail for everything *external* to "you" — the room, {{character_a}}'s actions, textures, sounds — so the scene doesn't go generic. Specificity should live in the world and the other character, not in "you".
- Present tense, close psychic distance: prioritize immediate sensation and thought over narrated summary.

Output: the scene only, no preamble. End with a one-line craft note explaining one choice you made to preserve reader-insert space.`,
    variables: [
      { name: 'character_a', label: 'Other character', placeholder: 'a name or brief descriptor' },
      { name: 'setting', label: 'Setting', placeholder: 'a rain-soaked cabin porch' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Target word count', default: '400' },
    ],
  },
  {
    id: 'pov-second-person-tense-rewrite',
    title: 'Present vs. Past Tense Second-Person Rewrite',
    category: 'adult-fiction',
    subcategory: 'pov-second-person',
    adult: true,
    tags: ['second-person', 'pov', 'tense', 'rewriter', 'style'],
    description: 'Rewrites a second-person passage in the opposite tense and explains the shift in feel.',
    body: `You are a prose stylist specializing in second-person narration.

Here is a passage written in second person:
"""
{{existing_text}}
"""

Task: rewrite it entirely in the opposite grammatical tense from what it currently uses (present to past, or past to present). Preserve every plot beat, all dialogue, and the heat level of the original — do not add or remove sexual content.

Then, in a short section titled "What changed", explain in 3-4 bullet points how the tense shift altered the reader's felt immediacy, the rhythm of the sentences, and whether any lines needed restructuring (not just verb-swapping) to read naturally in the new tense.

Do not change point of view away from second person. Do not summarize passages — rewrite them in full.`,
    variables: [
      { name: 'existing_text', label: 'Passage to rewrite', placeholder: 'paste the second-person passage' },
    ],
  },
  {
    id: 'pov-second-person-reader-insert-audit',
    title: 'Reader-Insert Specificity Audit',
    category: 'adult-fiction',
    subcategory: 'pov-second-person',
    adult: true,
    tags: ['second-person', 'pov', 'editing', 'audit', 'reader-insert'],
    description: 'Flags places where second-person prose over-specifies "you" and breaks reader-insert immersion.',
    body: `You are an editor specializing in second-person "reader-insert" fiction.

Read this draft:
"""
{{existing_text}}
"""

Task: identify every place where the narration assigns "you" a specific, unrequested physical trait, backstory detail, or characteristic (body type, eye color, name, profession, past relationship, etc.) that would prevent a reader from projecting themselves into the role.

Output a table with columns: Quote | Why it over-specifies | Suggested rewrite (kept vague but still vivid).

Then output a fully rewritten version of the passage applying every fix, keeping the heat level at {{heat_level}} and preserving all detail about {{character_a}} exactly as written — the audit targets "you," not the other character, who is allowed to be fully specific.

If the passage has no over-specification issues, say so explicitly rather than inventing problems.`,
    variables: [
      { name: 'existing_text', label: 'Draft to audit', placeholder: 'paste the second-person draft' },
      { name: 'character_a', label: 'Other character', placeholder: 'a name or brief descriptor' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black / suggestive / explicit' },
    ],
  },
  {
    id: 'pov-second-person-sensory-concrete-vague',
    title: 'Concrete-World, Vague-You Balance Drill',
    category: 'adult-fiction',
    subcategory: 'pov-second-person',
    adult: true,
    tags: ['second-person', 'pov', 'sensory', 'craft-drill', 'generator'],
    description: 'Generates a short scene then a paired instrumented version showing which details stay open and which get concrete.',
    body: `You are teaching second-person craft through worked example.

Task: write two versions of the same brief scene (roughly {{word_count}} words each) between "you" and {{character_a}} in {{setting}}, heat level {{heat_level}}.

Version 1 — "Instrumented": after every sentence, add a bracketed tag [CONCRETE] if that sentence anchors the scene in specific, vivid detail, or [OPEN] if it deliberately leaves "you" unspecified so a reader can project. Every sentence needs exactly one tag.

Version 2 — "Clean": the same scene with all tags removed, read as final prose.

Close with a 2-3 sentence explanation of the ratio you aimed for and why (e.g., why the setting and {{character_a}} can be dense with concrete detail while "you" stays comparatively open) — this is the core technique the exercise teaches.`,
    variables: [
      { name: 'character_a', label: 'Other character', placeholder: 'a name or brief descriptor' },
      { name: 'setting', label: 'Setting', placeholder: 'a crowded rooftop bar at closing time' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Target word count per version', default: '250' },
    ],
  },
  {
    id: 'pov-second-person-consent-negotiation',
    title: 'Second-Person Negotiated-Consent Opening',
    category: 'adult-fiction',
    subcategory: 'pov-second-person',
    adult: true,
    tags: ['second-person', 'pov', 'consent', 'dialogue', 'generator'],
    description: 'Writes a second-person scene opening where consent is negotiated in-scene between adult characters before escalation.',
    body: `You are a fiction craft assistant writing consent-forward second-person scenes.

Task: write the opening {{word_count}} words of a scene between "you" and {{character_a}} in {{setting}}. Both characters are established adults. The scene must include explicit, in-dialogue negotiation of what happens next — checking in, naming a boundary or a green light — before any escalation past heat level {{heat_level}} begins.

Craft constraints:
- The negotiation dialogue should sound like the characters, not like a checklist — weave it into voice and tension rather than breaking the scene's mood.
- Keep "you" reader-insertable per standard second-person practice: reactions and sensation over fixed physical description.
- Stop the scene right at the moment consent is affirmed and escalation is about to begin — do not continue past that beat.

After the scene, add one line naming the specific technique used to make the negotiation feel organic rather than expository.`,
    variables: [
      { name: 'character_a', label: 'Other character', placeholder: 'a name or brief descriptor' },
      { name: 'setting', label: 'Setting', placeholder: 'a quiet apartment after a first date' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'suggestive / explicit' },
      { name: 'word_count', label: 'Target word count', default: '300' },
    ],
  },
  {
    id: 'pov-second-person-multi-pov-comparison',
    title: 'Second-Person vs. Third-Person Immersion Comparison',
    category: 'adult-fiction',
    subcategory: 'pov-second-person',
    adult: true,
    tags: ['second-person', 'pov', 'comparison', 'generator', 'craft'],
    description: 'Writes the same scene in second and third person to make the immersion trade-offs visible.',
    body: `You are demonstrating point-of-view craft for adult fiction.

Task: write the same scene twice — once in second person ("you"), once in close third person (a named POV character) — for a moment between {{character_a}} and {{character_b}} in {{setting}}, heat level {{heat_level}}. Keep both versions roughly {{word_count}} words and identical in plot beats and dialogue content.

After both versions, write a short comparison section covering:
1. What second person gains in immediacy and what it must sacrifice in specificity (name the exact lines that had to become vaguer).
2. What third person gains in characterization detail and what it loses in closeness.
3. One sentence recommending which POV suits this particular scene better, and why.

Do not let the third-person version become a mere find-and-replace of "you" — restructure sentences so it reads as genuinely close third person.`,
    variables: [
      { name: 'character_a', label: 'POV character', placeholder: 'a name or brief descriptor' },
      { name: 'character_b', label: 'Other character', placeholder: 'a name or brief descriptor' },
      { name: 'setting', label: 'Setting', placeholder: 'a train compartment at night' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Target word count per version', default: '300' },
    ],
  },
  {
    id: 'pov-second-person-body-neutral-revision',
    title: 'Body-Neutral "You" Revision Pass',
    category: 'adult-fiction',
    subcategory: 'pov-second-person',
    adult: true,
    tags: ['second-person', 'pov', 'revision', 'inclusivity', 'editing'],
    description: 'Revises an existing second-person draft to remove assumed-body language while keeping sensation vivid.',
    body: `You are revising second-person fiction for maximum reader-insert range.

Existing draft:
"""
{{existing_text}}
"""

Task: rewrite it so that no sentence assumes "you" has a specific anatomy, gender presentation, or body configuration beyond what is strictly necessary for the actions described. Where the original used a body-specific word or assumption, replace it with sensation-based or action-based phrasing that works across bodies, without going clinical or losing heat.

Keep heat level at {{heat_level}} and keep every detail about {{character_a}} untouched — only "you" gets revised.

Output format:
1. A short list of the specific assumptions removed (quote → replacement, one line each).
2. The full revised passage.

If a line is ambiguous about whether it's assuming a body, err toward flagging it and offer the neutral alternative rather than skipping it.`,
    variables: [
      { name: 'existing_text', label: 'Draft to revise', placeholder: 'paste the second-person draft' },
      { name: 'character_a', label: 'Other character', placeholder: 'a name or brief descriptor' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black / suggestive / explicit' },
    ],
  },
  {
    id: 'pov-second-person-interviewer-setup',
    title: 'Second-Person Scene Setup Interviewer',
    category: 'adult-fiction',
    subcategory: 'pov-second-person',
    adult: true,
    tags: ['second-person', 'pov', 'interviewer', 'planning', 'generator'],
    description: 'Asks clarifying questions before drafting so the second-person scene fits the user\'s exact intent.',
    body: `You are a fiction collaborator planning a second-person scene before writing it.

The user wants a scene between "you" and {{character_a}} in {{setting}} at heat level {{heat_level}}, targeting {{word_count}} words.

Before writing anything, ask the user up to five short questions needed to calibrate the scene — for example: what emotional tone should dominate (playful, tense, tender, urgent), what should "you" want going in, whether {{character_a}} has any established voice or verbal tics to match, whether there's a specific beat the scene must end on, and whether any topics are off-limits beyond the standard adult-fiction boundaries.

Wait for the user's answers. Once given, write the scene incorporating every answer, following standard second-person craft: sensation-first for "you", no assumed body traits, present tense unless the user specifies otherwise, concrete detail reserved for the world and for {{character_a}}.

Do not draft the scene before the questions are answered.`,
    variables: [
      { name: 'character_a', label: 'Other character', placeholder: 'a name or brief descriptor' },
      { name: 'setting', label: 'Setting', placeholder: 'a candlelit kitchen after midnight' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Target word count', default: '350' },
    ],
  },
  {
    id: 'pov-second-person-tension-escalation-coach',
    title: 'Second-Person Tension-Escalation Coach',
    category: 'adult-fiction',
    subcategory: 'pov-second-person',
    adult: true,
    tags: ['second-person', 'pov', 'pacing', 'coach', 'revision'],
    description: 'Walks through a second-person draft beat by beat, coaching pacing of tension toward a target heat level.',
    body: `You are a writing coach specializing in pacing for second-person scenes.

Draft:
"""
{{existing_text}}
"""

Target heat level for the scene's end: {{heat_level}}.

Task: break the draft into its beats (as a numbered list, quoting the key line of each beat). For each beat, rate the tension level on a 1-5 scale and note in one line whether it's escalating, holding, or releasing tension too early relative to the target heat level.

Then write a short "pacing verdict": is the escalation curve too fast, too slow, or well-shaped for {{word_count}} words? Point to the exact beat where the biggest pacing problem occurs, if any.

Finally, rewrite only the weakest beat (not the whole scene) to fix the pacing issue, keeping "you" reader-insertable and matching {{character_a}}'s established voice and behavior from the rest of the draft.`,
    variables: [
      { name: 'existing_text', label: 'Draft to coach', placeholder: 'paste the second-person draft' },
      { name: 'character_a', label: 'Other character', placeholder: 'a name or brief descriptor' },
      { name: 'heat_level', label: 'Target heat level', default: 'explicit', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Approximate scene length', default: '500' },
    ],
  },
];

export default prompts;
