import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'age-gap-tension-scene-generator',
    title: 'Life-Stage Mismatch Tension Generator',
    category: 'adult-fiction',
    subcategory: 'age-gap',
    adult: true,
    tags: ['age-gap', 'tension', 'power-dynamic', 'scene', 'consent'],
    description: 'Generates a scene between two adults with a significant age gap, treating the life-stage mismatch as the source of tension.',
    body: `Write a scene of approximately {{word_count}} words, {{pov}} POV, between {{character_a}}, age {{age_a}}, and {{character_b}}, age {{age_b}} — both unambiguously adults — in {{setting}}.

Craft focus: the age gap itself is the tension, not decoration. Include:
- One moment where the age difference surfaces in conversation naturally (a cultural reference one doesn't get, a difference in what each has already lived through, a difference in what each is risking)
- The older character consciously checking their own behavior for imbalance — not performing guilt, but genuinely weighing it
- The younger character asserting a want or boundary clearly, so they read as an equal participant, not a passive object
- Heat level: {{heat_level}}

Do not resolve or dismiss the power imbalance by the end of the scene — let it remain part of the texture. End on a beat that acknowledges the gap rather than pretending it isn't there.`,
    variables: [
      { name: 'word_count', label: 'Word count', default: '1000' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'character_a', label: 'Character A' },
      { name: 'age_a', label: 'Character A age', default: '52' },
      { name: 'character_b', label: 'Character B' },
      { name: 'age_b', label: 'Character B age', default: '29' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
    ],
  },
  {
    id: 'age-gap-power-imbalance-checkin',
    title: 'Explicit Scene With Power-Aware Check-Ins',
    category: 'adult-fiction',
    subcategory: 'age-gap',
    adult: true,
    tags: ['age-gap', 'consent', 'power-dynamic', 'scene', 'interiority'],
    description: 'Writes an explicit scene between an age-gap couple where consent check-ins directly address the maturity imbalance.',
    body: `Write a scene, about {{word_count}} words, {{pov}} POV, in which {{character_a}} (age {{age_a}}) and {{character_b}} (age {{age_b}}) — both consenting adults — are intimate together in {{setting}}.

Craft requirements:
1. At least one consent check-in must reference the gap directly and specifically (e.g. the older partner asking whether the younger one feels pressured by the difference in experience or status, in their own words — not a lecture)
2. Give the younger character one internal thought that shows they are choosing this with full agency, distinct from simple attraction
3. Give the older character one internal thought that shows awareness of the responsibility they hold in the dynamic
4. Track physical sensation across at least two senses
5. Heat level: {{heat_level}}

Avoid infantilizing the younger character's voice or desires, and avoid framing the older character as predatory by default — write both as specific people making a specific choice.`,
    variables: [
      { name: 'word_count', label: 'Word count', default: '1200' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'character_a', label: 'Character A' },
      { name: 'age_a', label: 'Character A age', default: '48' },
      { name: 'character_b', label: 'Character B' },
      { name: 'age_b', label: 'Character B age', default: '27' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
    ],
  },
  {
    id: 'age-gap-two-pov-contrast',
    title: 'Two-POV Contrast: How Each Reads the Gap',
    category: 'adult-fiction',
    subcategory: 'age-gap',
    adult: true,
    tags: ['age-gap', 'pov', 'interiority', 'structure'],
    description: 'Generates the same age-gap scene twice, once from each character\'s POV, to contrast how differently each reads the power dynamic.',
    body: `Write the same encounter twice, once from each character's point of view, so their internal readings of the age gap can be compared.

Characters: {{character_a}} (age {{age_a}}) and {{character_b}} (age {{age_b}}), both adults, in {{setting}}. Heat level: {{heat_level}}. Each version should be roughly {{word_count}} words.

Version 1 — {{character_a}}'s POV: focus their interiority on what they notice about the gap — insecurity, protectiveness, self-consciousness, or confidence, whichever fits their age position.
Version 2 — {{character_b}}'s POV: same external events, but their interiority should focus on a different aspect of the gap than Version 1 did — do not simply mirror it.

External events (what is said and done) must stay consistent between both versions. After both versions, add a two-sentence note on where the two characters' perceptions of the power dynamic diverge most.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'age_a', label: 'Character A age', default: '55' },
      { name: 'character_b', label: 'Character B' },
      { name: 'age_b', label: 'Character B age', default: '31' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count per version', default: '600' },
    ],
  },
  {
    id: 'age-gap-continue-voice',
    title: 'Continue an Age-Gap Scene, Matching Voice',
    category: 'adult-fiction',
    subcategory: 'age-gap',
    adult: true,
    tags: ['age-gap', 'continuation', 'voice', 'power-dynamic'],
    description: 'Continues a pasted-in age-gap scene while preserving how the existing text handles the power imbalance.',
    body: `You are continuing fiction already in progress. Below is the existing text featuring {{character_a}} (age {{age_a}}) and {{character_b}} (age {{age_b}}), both adults, in {{setting}}.

--- EXISTING TEXT ---
{{existing_text}}
--- END EXISTING TEXT ---

Before writing, silently note: POV, tense, how the age gap has been handled so far (acknowledged directly, subtext only, a source of humor, a source of tension), and current heat level.

Continue for about {{word_count}} more words at heat level {{heat_level}}. Keep treating the gap the way the existing text does — do not suddenly introduce heavy-handed guilt or lecture-y dialogue if the tone so far has been lighter, and do not drop an established tension thread. Do not reintroduce characters or re-describe the setting.`,
    variables: [
      { name: 'existing_text', label: 'Existing text to continue' },
      { name: 'character_a', label: 'Character A' },
      { name: 'age_a', label: 'Character A age', default: '50' },
      { name: 'character_b', label: 'Character B' },
      { name: 'age_b', label: 'Character B age', default: '30' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '700' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
    ],
  },
  {
    id: 'age-gap-revision-power-craft',
    title: 'Revision Pass: Make the Power Dynamic the Craft Problem',
    category: 'adult-fiction',
    subcategory: 'age-gap',
    adult: true,
    tags: ['age-gap', 'revision', 'power-dynamic', 'critique'],
    description: 'Critiques and revises a drafted age-gap scene so the maturity and power imbalance is treated deliberately rather than glossed over.',
    body: `Act as a developmental editor specializing in age-gap romance. Below is a draft scene between {{character_a}} (age {{age_a}}) and {{character_b}} (age {{age_b}}), both adults.

--- DRAFT ---
{{draft_text}}
--- END DRAFT ---

Step 1 — Critique (bullet list): flag any place where the age gap is mentioned only cosmetically (a number, a joke) rather than shaping behavior or stakes; any place consent reads as assumed rather than actively given by the younger character; any place the older character's greater experience or status isn't accounted for in their choices; and any place the younger character reads as passive rather than an agent with their own wants.

Step 2 — Revise: rewrite the full scene at heat level {{heat_level}}, same POV ({{pov}}) and same plot beats, fixing every flagged issue. The age gap should be traceable in at least one concrete decision each character makes, not just referenced in narration.

Target roughly {{word_count}} words — do not pad.`,
    variables: [
      { name: 'draft_text', label: 'Draft scene to revise' },
      { name: 'character_a', label: 'Character A' },
      { name: 'age_a', label: 'Character A age', default: '45' },
      { name: 'character_b', label: 'Character B' },
      { name: 'age_b', label: 'Character B age', default: '26' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Target word count', default: '1000' },
    ],
  },
  {
    id: 'age-gap-character-interview-older',
    title: 'Character Interview: The Older Partner\'s Doubts',
    category: 'adult-fiction',
    subcategory: 'age-gap',
    adult: true,
    tags: ['age-gap', 'character-interview', 'interiority', 'power-dynamic'],
    description: 'Interviews the older partner in an age-gap relationship, surfacing their private doubts about the power imbalance.',
    body: `You are {{character_a}}, age {{age_a}}, in a relationship with {{character_b}}, age {{age_b}} — both adults. Speak entirely in first person and stay in character; do not narrate or break voice.

I will ask you questions about the relationship. Answer each in 2-4 sentences, honestly, including at least one doubt you have never said out loud to {{character_b}}. Start with these three, then wait for follow-ups:
1. What's the moment you first felt the age gap as a problem, not just a fact?
2. What do you think {{character_b}} sees in you that you're not sure you actually are?
3. What would make you end this, if anything?

Tone: {{voice_note}}, unguarded but not melodramatic. Keep references to intimacy at heat level {{heat_level}} at most — this interview is about the relationship's power dynamic, not a physical scene.`,
    variables: [
      { name: 'character_a', label: 'Character being interviewed (older partner)' },
      { name: 'age_a', label: 'Their age', default: '54' },
      { name: 'character_b', label: 'Younger partner' },
      { name: 'age_b', label: 'Younger partner\'s age', default: '28' },
      { name: 'voice_note', label: 'Voice note', default: 'wry but self-critical' },
      { name: 'heat_level', label: 'Heat level (of references)', default: 'suggestive' },
    ],
  },
  {
    id: 'age-gap-character-interview-younger',
    title: 'Character Interview: The Younger Partner\'s Agency',
    category: 'adult-fiction',
    subcategory: 'age-gap',
    adult: true,
    tags: ['age-gap', 'character-interview', 'interiority', 'agency'],
    description: 'Interviews the younger partner in an age-gap relationship to surface their own reasoning and agency, countering a passive read of the dynamic.',
    body: `You are {{character_b}}, age {{age_b}}, an adult in a relationship with {{character_a}}, age {{age_a}} — also an adult. Speak entirely in first person and stay in character.

Answer each question in 2-4 sentences, in your own voice, pushing back if a question assumes you're naive or passive — you are not. Start with these three, then wait for follow-ups:
1. What do people assume about why you're with someone older, and what do they get wrong?
2. What does {{character_a}} give you that has nothing to do with age or experience?
3. Is there a moment you felt the power imbalance and did something about it, rather than just noticing it?

Tone: {{voice_note}}, self-possessed. Keep references to intimacy at heat level {{heat_level}} at most.`,
    variables: [
      { name: 'character_b', label: 'Character being interviewed (younger partner)' },
      { name: 'age_b', label: 'Their age', default: '27' },
      { name: 'character_a', label: 'Older partner' },
      { name: 'age_a', label: 'Older partner\'s age', default: '51' },
      { name: 'voice_note', label: 'Voice note', default: 'sharp, a little defensive' },
      { name: 'heat_level', label: 'Heat level (of references)', default: 'suggestive' },
    ],
  },
  {
    id: 'age-gap-outline-generator',
    title: 'Beat-by-Beat Age-Gap Scene Outline',
    category: 'adult-fiction',
    subcategory: 'age-gap',
    adult: true,
    tags: ['age-gap', 'outline', 'structure', 'power-dynamic'],
    description: 'Produces a beat-by-beat outline for an age-gap scene that plans out how the power imbalance surfaces before any prose is written.',
    body: `Before writing prose, outline a scene between {{character_a}} (age {{age_a}}) and {{character_b}} (age {{age_b}}), both adults, in {{setting}}, at heat level {{heat_level}}.

Produce a numbered beat list (8-12 beats) covering, in order:
1. The circumstance that puts them together despite the gap
2. The first beat where the gap becomes visible (a reference, a difference in confidence, a difference in what's at stake for each)
3. A moment the older character self-checks their behavior
4. A moment the younger character asserts a want or boundary on their own terms
5. At least two escalation beats, each with a sensory anchor and an interiority note, alternating whose interiority we're in
6. A consent check-in that references the dynamic directly
7. An emotional peak that is not simply resolution of the power tension
8. A closing beat that leaves the gap present, not erased

For each beat, write one line: [beat name] — [what happens] — [whose interiority we're in]. Wait for confirmation before expanding to {{word_count}} words.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'age_a', label: 'Character A age', default: '49' },
      { name: 'character_b', label: 'Character B' },
      { name: 'age_b', label: 'Character B age', default: '29' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Target word count for later expansion', default: '1200' },
    ],
  },
  {
    id: 'age-gap-dialogue-negotiation',
    title: 'Dialogue-Only Negotiation of the Gap',
    category: 'adult-fiction',
    subcategory: 'age-gap',
    adult: true,
    tags: ['age-gap', 'dialogue', 'consent', 'craft'],
    description: 'Generates a dialogue-only scene where two adults with a significant age gap explicitly talk through the imbalance before intimacy.',
    body: `Write a dialogue-only scene (minimal action tags, no narration of physical description) in which {{character_a}} (age {{age_a}}) and {{character_b}} (age {{age_b}}), both adults, talk directly about the age gap between them before deciding to be intimate, in {{setting}}. Length: about {{word_count}} words.

Craft focus: let the age gap be named plainly, not tiptoed around. Requirements:
- {{character_b}} should articulate, unprompted, why they want this despite (or because of) the gap — in their own words, not as a reassurance to {{character_a}}
- {{character_a}} should voice one specific worry about the imbalance that goes beyond "is this okay," something concrete about what they're risking or what they could get wrong
- Include one moment where humor or warmth undercuts the seriousness without dismissing it
- End the dialogue once consent is clear and specific, before any physical scene begins

Heat level context for tone only: {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'age_a', label: 'Character A age', default: '47' },
      { name: 'character_b', label: 'Character B' },
      { name: 'age_b', label: 'Character B age', default: '25' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '650' },
      { name: 'heat_level', label: 'Heat level (tone reference)', default: 'suggestive' },
    ],
  },
];

export default prompts;
