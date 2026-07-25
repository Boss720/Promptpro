import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'forbidden-affair-first-crossing-generator',
    title: 'The First Crossing',
    category: 'adult-fiction',
    subcategory: 'forbidden-affair',
    adult: true,
    tags: ['forbidden-affair', 'generator', 'tension', 'pov', 'first-time'],
    description: 'Generates the scene where two characters cross a line they both know they should not.',
    body: `You are writing adult fiction. Write the scene where {{character_a}} and {{character_b}} cross from tension into the first physical act of an affair they both understand is forbidden, set in {{setting}}.

Technique: escalation through small, deniable touches before the line breaks — let the reader feel each one land before the next, so the eventual crossing feels inevitable rather than sudden.

Requirements:
- POV: {{pov}}. Stay locked to that character's sensory and interior experience.
- Heat level: {{heat_level}}.
- Do not narrate guilt yet — this scene is the crossing itself; consequence comes later. Show the characters' awareness of the risk through behavior (checking a door, lowering a voice), not through moralizing narration.
- Include one line of spoken, explicit consent or enthusiastic invitation from each character before anything escalates past the deniable stage — make it unambiguous within the fiction.
- End the scene on the moment of crossing, not the aftermath.
- Length: approximately {{word_count}} words.

Do not write either character as a minor, and do not imply either is anything other than a consenting adult.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Mara, 34, married' },
      { name: 'character_b', label: 'Character B', placeholder: 'Theo, 37, her husband\'s best friend' },
      { name: 'setting', label: 'Setting', placeholder: 'a lake house, the night everyone else leaves' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '900', placeholder: '600-1200' },
    ],
  },
  {
    id: 'forbidden-affair-rationalization-interior',
    title: 'The Rationalization Spiral',
    category: 'adult-fiction',
    subcategory: 'forbidden-affair',
    adult: true,
    tags: ['forbidden-affair', 'interiority', 'guilt', 'pov', 'craft'],
    description: 'Writes an interior passage where a character talks themselves into continuing the affair.',
    body: `Write a close-interior passage from {{character_a}}'s POV, set just after a stolen encounter with {{character_b}} in {{setting}}, in which {{character_a}} rationalizes continuing the affair.

Technique: rationalization as a private argument the character is losing on purpose. Give them a real, specific justification (not a generic "I deserve this"), let a counter-thought surface and get argued down, and end with the rationalization winning — but let the reader see the seam where it doesn't quite hold.

Requirements:
- POV: {{pov}}, strictly interior — minimal action, this is thought and self-talk.
- Heat level: {{heat_level}} — reference the physical encounter only as memory, no new explicit content in this passage.
- Do not resolve the guilt; the point is the character managing it, not escaping it.
- Include at least one concrete detail of what continuing the affair will require logistically (a lie already told, a plan already half-made) so the rationalization has teeth.
- Length: approximately {{word_count}} words.

Both characters are consenting adults; do not soften that into ambiguity.`,
    variables: [
      { name: 'character_a', label: 'Character A (POV)', placeholder: 'Daniel, 41' },
      { name: 'character_b', label: 'Character B', placeholder: 'Priya, 29, his wife\'s sister' },
      { name: 'setting', label: 'Setting', placeholder: 'a hotel bar after a funeral' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '500', placeholder: '350-700' },
    ],
  },
  {
    id: 'forbidden-affair-logistics-of-hiding',
    title: 'Covering the Tracks',
    category: 'adult-fiction',
    subcategory: 'forbidden-affair',
    adult: true,
    tags: ['forbidden-affair', 'plotting', 'tension', 'stakes', 'generator'],
    description: 'Generates a scene built entirely around the mundane, tense logistics of hiding an affair.',
    body: `Write a scene of {{character_a}} managing the practical logistics of hiding their affair with {{character_b}} — a deleted message, a fabricated errand, a near-miss with someone who almost saw, timed against a real deadline — in {{setting}}.

Technique: secrecy as plot engine. The scene's tension comes from mechanics and clock, not from sex — treat it like a small heist. Give the reader a concrete stake (who could find out, what happens if they do) established in the first three sentences.

Requirements:
- POV: {{pov}}.
- Heat level: {{heat_level}} — this scene may reference the affair but should not depict explicit content; the tension is procedural.
- Include exactly one near-discovery beat that raises the stakes without resolving them.
- End on an unresolved risk, not a clean escape.
- Length: approximately {{word_count}} words.

Both characters are adults; the scene must not read as instructions for real-world deception, only as fiction.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Ines, 38' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus, 45, her business partner' },
      { name: 'setting', label: 'Setting', placeholder: 'a shared office, ten minutes before a board call' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '600', placeholder: '400-900' },
    ],
  },
  {
    id: 'forbidden-affair-desire-sharpened-by-risk',
    title: 'Wanting It Because It\'s Forbidden',
    category: 'adult-fiction',
    subcategory: 'forbidden-affair',
    adult: true,
    tags: ['forbidden-affair', 'desire', 'craft', 'generator', 'explicit'],
    description: 'Generates an explicit scene where prohibition itself is written as the source of heightened desire.',
    body: `Write an explicit scene between {{character_a}} and {{character_b}} in {{setting}}, in which the forbidden nature of the encounter is written as actively sharpening their desire rather than diminishing it.

Technique: prohibition as accelerant. Use specific sensory and interior cues — awareness of time running out, of a door that isn't locked, of a name that must not be said aloud — to show desire intensified by risk, not risk minimized by desire. Avoid generic "wrongness" language; ground it in this scene's particular danger.

Requirements:
- POV: {{pov}}.
- Heat level: {{heat_level}} (default explicit — write to the level requested, no further).
- Open with one line of clear, enthusiastic verbal consent between the characters before the scene escalates, framed naturally in dialogue.
- Keep both characters fully aware adults acting with full agency; no confusion, no incapacitation, no power imposed against stated will.
- Length: approximately {{word_count}} words.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Sofia, 32' },
      { name: 'character_b', label: 'Character B', placeholder: 'Adrian, 40, her sister\'s fiancé' },
      { name: 'setting', label: 'Setting', placeholder: 'a coat closet during an engagement party' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '900', placeholder: '600-1400' },
    ],
  },
  {
    id: 'forbidden-affair-surfacing-consequence',
    title: 'When It Surfaces',
    category: 'adult-fiction',
    subcategory: 'forbidden-affair',
    adult: true,
    tags: ['forbidden-affair', 'stakes-escalation', 'consequence', 'planner'],
    description: 'Plans a multi-beat sequence covering the discovery of the affair and its immediate fallout.',
    body: `Act as a story planner. Outline a 5-beat sequence covering the moment {{character_a}} and {{character_b}}'s affair surfaces — who finds out, how, and the immediate fallout — set around {{setting}}.

For each beat, give:
1. A one-line summary of what happens.
2. Who is on-page and whose POV it would use if written ({{pov}} for at least one beat).
3. What is lost or changed for {{character_a}} and {{character_b}} respectively — be concrete (a relationship, a job, custody, standing), not vague ("things get hard").
4. The emotional register (shame, relief, defiance, grief — name it, don't default to shame every time).

Requirements:
- Beat 3 must be the discovery itself; beats 4-5 are immediate fallout, not long-term resolution.
- Do not let either character escape consequence entirely — this is a cost-of-surfacing outline, not a rescue fantasy.
- Note where {{heat_level}} content, if any, would appear in a written version (likely none in this fallout arc) and flag it as optional.
- Output as a numbered list, beat then sub-points.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Renata, 36' },
      { name: 'character_b', label: 'Character B', placeholder: 'Josh, 39, her best friend\'s husband' },
      { name: 'setting', label: 'Setting', placeholder: 'a family Thanksgiving' },
      { name: 'pov', label: 'POV to use for at least one beat', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'heat_level', label: 'Heat level (context only)', default: 'fade-to-black', placeholder: 'fade-to-black / sensual / explicit' },
    ],
  },
  {
    id: 'forbidden-affair-continuation-from-fragment',
    title: 'Continue the Almost-Caught Moment',
    category: 'adult-fiction',
    subcategory: 'forbidden-affair',
    adult: true,
    tags: ['forbidden-affair', 'continuation', 'tension', 'pov'],
    description: 'Continues a user-supplied fragment through the moment an affair is almost discovered.',
    body: `Continue the fragment below. {{character_a}} and {{character_b}} are mid-affair in {{setting}}; a third party is about to almost catch them.

--- FRAGMENT START ---
{{fragment}}
--- FRAGMENT END ---

Technique: near-miss suspense. Write the next 300-500 words carrying the fragment through a genuine near-discovery — the third party must come close enough that the outcome feels uncertain — without resolving whether they were caught by the end of your continuation.

Requirements:
- Match the POV and tense already established in the fragment ({{pov}} if the fragment doesn't make it obvious).
- Heat level: {{heat_level}} — if the fragment is already explicit, do not escalate further; if it is not, do not introduce new explicit content, this continuation is about tension, not heat.
- Preserve established character voice and any details (names, physical descriptions, setting specifics) already present in the fragment.
- Length: approximately {{word_count}} words.`,
    variables: [
      { name: 'fragment', label: 'Fragment to continue', placeholder: 'Paste the existing scene text here' },
      { name: 'character_a', label: 'Character A', placeholder: 'Lena' },
      { name: 'character_b', label: 'Character B', placeholder: 'Victor' },
      { name: 'setting', label: 'Setting', placeholder: 'a shared apartment stairwell' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'word_count', label: 'Word count', default: '400', placeholder: '300-500' },
    ],
  },
  {
    id: 'forbidden-affair-dialogue-negotiating-terms',
    title: 'Negotiating the Terms',
    category: 'adult-fiction',
    subcategory: 'forbidden-affair',
    adult: true,
    tags: ['forbidden-affair', 'dialogue', 'negotiation', 'exercise'],
    description: 'A dialogue-only exercise where the characters explicitly negotiate the boundaries of the affair.',
    body: `Write a dialogue-only scene (minimal action beats, no narration of internal thought) between {{character_a}} and {{character_b}} in {{setting}}, in which they explicitly negotiate the terms of continuing their affair: what's allowed, what isn't, how they'll communicate, what happens if it ends.

Technique: negotiation as characterization. Each character's boundaries and phrasing should reveal what they're actually afraid of — being caught, being hurt, being changed — without either of them stating it directly. Let subtext carry the fear; the text carries only the logistics of the negotiation.

Requirements:
- Format as a script-style dialogue exchange (Name: line) or prose dialogue — your choice, but stay consistent.
- Both characters must state at least one explicit boundary and have it acknowledged, not overridden, by the other.
- Heat level: {{heat_level}} — this is a talking scene; keep physical content minimal regardless of the level chosen.
- POV note: if writing in prose form, use {{pov}}.
- Length: approximately {{word_count}} words.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Yusuf, 44' },
      { name: 'character_b', label: 'Character B', placeholder: 'Clare, 33, his brother\'s girlfriend' },
      { name: 'setting', label: 'Setting', placeholder: 'a parked car outside a grocery store' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV (if prose)', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '500', placeholder: '350-700' },
    ],
  },
  {
    id: 'forbidden-affair-revision-cut-the-melodrama',
    title: 'Revise: Cut the Melodrama, Keep the Guilt',
    category: 'adult-fiction',
    subcategory: 'forbidden-affair',
    adult: true,
    tags: ['forbidden-affair', 'revision', 'critique', 'guilt'],
    description: 'Critiques and revises a draft affair scene to replace melodramatic guilt with earned, specific guilt.',
    body: `You are a developmental editor specializing in adult fiction. Revise the draft scene below, which involves {{character_a}} and {{character_b}} in {{setting}}.

--- DRAFT START ---
{{draft}}
--- DRAFT END ---

Technique: earned guilt over performed guilt. Replace generic guilt markers (crying, "how could I do this", excessive self-flagellation) with guilt expressed through specific, character-true behavior — a habit interrupted, a lie rehearsed too smoothly, an avoided reflection.

Return, in this order:
1. A short critique (3-5 bullets) identifying where the draft's guilt or tension reads as generic or told-not-shown.
2. The revised scene in full, same approximate length as the original, preserving the draft's plot beats and {{pov}}.
3. A one-line note on what changed and why, per major edit.

Heat level: {{heat_level}} — do not increase explicitness beyond what the draft already contains. If the draft is ambiguous about either character's age or consent, flag it explicitly instead of revising around the ambiguity.`,
    variables: [
      { name: 'draft', label: 'Draft scene to revise', placeholder: 'Paste the draft text here' },
      { name: 'character_a', label: 'Character A', placeholder: 'Grace' },
      { name: 'character_b', label: 'Character B', placeholder: 'Owen' },
      { name: 'setting', label: 'Setting', placeholder: 'a shared cab home' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person / third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black / sensual / explicit' },
    ],
  },
  {
    id: 'forbidden-affair-stakes-escalation-planner',
    title: 'Escalation Ladder: Deniable to Undeniable',
    category: 'adult-fiction',
    subcategory: 'forbidden-affair',
    adult: true,
    tags: ['forbidden-affair', 'stakes-escalation', 'planner', 'structure'],
    description: 'Plans a five-stage escalation ladder from first suspicion to full affair, with a stake attached to each rung.',
    body: `Act as a story planner. Build a 5-stage escalation ladder charting {{character_a}} and {{character_b}}'s relationship from first mutual suspicion of attraction to a fully established affair, set across {{setting}}.

For each stage, provide:
1. Stage name and one-line description.
2. The specific deniable-to-undeniable shift that occurs (what could no longer be explained away after this stage).
3. A concrete external stake raised at this stage (someone closer to noticing, a shared circumstance forcing proximity, a decision point where one of them could have stopped and didn't).
4. Suggested heat level for a scene at this stage, calibrated to escalate — start below {{heat_level}} and reach it by the final stage.

Requirements:
- Stage 1 must contain no physical contact — suspicion and interiority only.
- Stage 5 must be the point where the affair is fully underway, not yet discovered.
- Note {{pov}} as the suggested viewpoint character per stage, alternating if it serves the tension.
- Output as a numbered list, one block per stage.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Naomi, 35' },
      { name: 'character_b', label: 'Character B', placeholder: 'Felix, 42, her college roommate\'s husband' },
      { name: 'setting', label: 'Setting', placeholder: 'a shared summer of adjoining lake cabins' },
      { name: 'heat_level', label: 'Target heat level by stage 5', default: 'explicit', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
    ],
  },
];

export default prompts;
