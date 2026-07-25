import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'workplace-authority-crossing-the-line-generator',
    title: 'After the Door Closes',
    category: 'adult-fiction',
    subcategory: 'workplace-authority',
    adult: true,
    tags: ['workplace-authority', 'generator', 'power-dynamics', 'consent', 'pov'],
    description: 'Generates a scene where two colleagues with a rank difference cross into a physical encounter.',
    body: `You are writing adult fiction. Write the scene where {{character_a}} and {{character_b}} — who have a professional rank difference — move from workplace tension into a physical encounter, set in {{setting}}.

Technique: negotiated desire despite power difference. The rank gap must be named and addressed by the characters themselves, in dialogue, before anything escalates — the junior party initiates or explicitly and enthusiastically consents on the page, in words, not just body language. Do not let the power difference operate as unspoken leverage.

Requirements:
- POV: {{pov}}.
- Heat level: {{heat_level}}.
- Include one explicit spoken exchange where both characters acknowledge the rank difference and agree, in clear terms, that this is something they both want.
- The higher-rank character must not use professional consequences (reviews, promotions, job security) as leverage, implied or stated, at any point.
- Length: approximately {{word_count}} words.

Both characters are consenting adults with no reporting relationship that would make refusal materially costly, or if one exists, it must be explicitly discussed and neutralized on the page (e.g., recusal, HR disclosure already made).`,
    variables: [
      { name: 'character_a', label: 'Character A (senior)', placeholder: 'Elena, 46, managing partner' },
      { name: 'character_b', label: 'Character B (junior)', placeholder: 'Sam, 29, associate' },
      { name: 'setting', label: 'Setting', placeholder: 'the office after a late closing' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '900', placeholder: '600-1200' },
    ],
  },
  {
    id: 'workplace-authority-facade-cracking-interior',
    title: 'The Facade Cracks',
    category: 'adult-fiction',
    subcategory: 'workplace-authority',
    adult: true,
    tags: ['workplace-authority', 'interiority', 'craft', 'pov'],
    description: 'Writes an interior passage where a character\'s professional composure breaks under private attraction.',
    body: `Write a close-interior passage from {{character_a}}'s POV, set during an ordinary professional interaction with {{character_b}} in {{setting}}, in which {{character_a}}'s carefully maintained professional facade cracks under the weight of private attraction.

Technique: the gap between performed competence and private want. Show {{character_a}} executing their professional role correctly on the surface (giving instructions, reviewing work, running a meeting) while the interior narration reveals the effort it costs to keep desire out of their voice and posture.

Requirements:
- POV: {{pov}}, strictly interior during a scene that reads as mundane on the surface.
- Heat level: {{heat_level}} — this passage should stay well below the ceiling; it's about restraint, not release.
- Make the rank dynamic between them explicit in the narration (who has authority over whom, and why that makes the attraction complicated).
- Do not have {{character_a}} act on the attraction in this passage — end on the facade holding, barely.
- Length: approximately {{word_count}} words.`,
    variables: [
      { name: 'character_a', label: 'Character A (POV)', placeholder: 'Marcus, 39, department head' },
      { name: 'character_b', label: 'Character B', placeholder: 'Aiko, 31, senior analyst who reports to him' },
      { name: 'setting', label: 'Setting', placeholder: 'a quarterly review meeting' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '500', placeholder: '350-700' },
    ],
  },
  {
    id: 'workplace-authority-explicit-negotiation-dialogue',
    title: 'Naming the Power Difference',
    category: 'adult-fiction',
    subcategory: 'workplace-authority',
    adult: true,
    tags: ['workplace-authority', 'dialogue', 'negotiation', 'consent', 'exercise'],
    description: 'A dialogue exercise where characters explicitly negotiate consent given their difference in rank.',
    body: `Write a dialogue-driven scene between {{character_a}} and {{character_b}} in {{setting}}, in which they explicitly negotiate whether and how to pursue a relationship given the rank difference between them.

Technique: consent as the plot, not a preamble to it. The scene's tension comes from the negotiation itself — one or both characters raising the power imbalance unprompted, proposing safeguards (recusal from each other's evaluations, disclosure to HR, a boundary on workplace behavior), and reaching an explicit, mutual yes.

Requirements:
- Format as dialogue-forward prose or script-style exchange, your choice.
- The junior-rank character must be the one who raises at least one condition, demonstrating agency rather than passive acceptance.
- Heat level: {{heat_level}} — keep physical content minimal; this is a negotiation scene.
- POV: {{pov}} if written in prose.
- Length: approximately {{word_count}} words.`,
    variables: [
      { name: 'character_a', label: 'Character A (senior)', placeholder: 'Diane, 50, CEO' },
      { name: 'character_b', label: 'Character B (junior)', placeholder: 'Ravi, 34, VP reporting two levels down' },
      { name: 'setting', label: 'Setting', placeholder: 'a hotel bar during an offsite' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV (if prose)', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '600', placeholder: '400-800' },
    ],
  },
  {
    id: 'workplace-authority-consequences-planner',
    title: 'What It Costs at Work',
    category: 'adult-fiction',
    subcategory: 'workplace-authority',
    adult: true,
    tags: ['workplace-authority', 'stakes-escalation', 'planner', 'consequence'],
    description: 'Plans a sequence of real professional consequences once a workplace relationship becomes known.',
    body: `Act as a story planner. Outline a 5-beat sequence covering what happens once {{character_a}} and {{character_b}}'s relationship becomes known at work, set around {{setting}}.

For each beat, give:
1. A one-line summary of what happens.
2. Who initiates it (HR, a colleague, {{character_a}}, {{character_b}}, or circumstance).
3. The concrete professional cost to each character — be specific (a transfer, a passed-over promotion, a resignation, a formal review) and realistic to the power dynamic between them; the senior party should bear real cost too, not just the junior one.
4. Whether the relationship survives this beat, and what it requires of both characters if it does.

Requirements:
- Beat 1 must be the disclosure or discovery itself.
- At least one beat must involve an HR or organizational process, handled plausibly rather than skipped.
- Do not let the senior-rank character escape all professional consequence — that would understate the real dynamics of workplace power.
- Note {{pov}} as a suggested viewpoint for at least one beat.
- Output as a numbered list, beat then sub-points.`,
    variables: [
      { name: 'character_a', label: 'Character A (senior)', placeholder: 'Harold, 52, regional director' },
      { name: 'character_b', label: 'Character B (junior)', placeholder: 'Priti, 27, store manager' },
      { name: 'setting', label: 'Setting', placeholder: 'a mid-size retail company' },
      { name: 'pov', label: 'POV for at least one beat', default: 'third limited', placeholder: 'first person / third limited' },
    ],
  },
  {
    id: 'workplace-authority-explicit-scene-generator',
    title: 'The Negotiated Encounter',
    category: 'adult-fiction',
    subcategory: 'workplace-authority',
    adult: true,
    tags: ['workplace-authority', 'generator', 'explicit', 'consent'],
    description: 'Generates an explicit scene structured around ongoing, enthusiastic verbal consent between ranked colleagues.',
    body: `Write an explicit scene between {{character_a}} and {{character_b}} in {{setting}}, structured so that consent is checked in and reaffirmed verbally at least twice as the scene progresses, given the rank difference between them.

Technique: consent as rhythm, not a one-time gate. Build the scene so each escalation is preceded or accompanied by a specific spoken check-in and an enthusiastic answer — vary the phrasing so it reads as natural desire, not a checklist.

Requirements:
- POV: {{pov}}.
- Heat level: {{heat_level}}.
- The junior-rank character's enthusiasm and initiation must be as clearly on the page as the senior-rank character's — neither is passive.
- No reference to professional leverage, implicit or explicit, anywhere in the scene.
- Length: approximately {{word_count}} words.

Both characters are adults acting with full agency; do not write hesitation that reads as anything other than genuine, freely given desire.`,
    variables: [
      { name: 'character_a', label: 'Character A (senior)', placeholder: 'Camille, 41, head chef' },
      { name: 'character_b', label: 'Character B (junior)', placeholder: 'Theo, 30, sous chef' },
      { name: 'setting', label: 'Setting', placeholder: 'the restaurant kitchen after closing' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '900', placeholder: '600-1300' },
    ],
  },
  {
    id: 'workplace-authority-continuation-tension-fragment',
    title: 'Continue: The Meeting That Runs Long',
    category: 'adult-fiction',
    subcategory: 'workplace-authority',
    adult: true,
    tags: ['workplace-authority', 'continuation', 'tension', 'pov'],
    description: 'Continues a user-supplied fragment through rising tension between colleagues of different rank.',
    body: `Continue the fragment below. {{character_a}} and {{character_b}} have a rank difference and are alone together in {{setting}}, with tension building.

--- FRAGMENT START ---
{{fragment}}
--- FRAGMENT END ---

Technique: professional pretext under pressure. Write the next 300-500 words carrying the scene forward using ordinary work tasks (finishing a document, packing up, walking to a car) as the surface action, while the subtext of attraction builds underneath — do not let the pretext collapse into physical contact within this continuation.

Requirements:
- Match the POV and tense already established in the fragment ({{pov}} if unclear).
- Heat level: {{heat_level}} — this continuation should stay below the ceiling; it's build, not release.
- If either character acknowledges the rank difference, have them name it directly rather than letting it stay subtext only.
- Length: approximately {{word_count}} words.`,
    variables: [
      { name: 'fragment', label: 'Fragment to continue', placeholder: 'Paste the existing scene text here' },
      { name: 'character_a', label: 'Character A (senior)', placeholder: 'Victoria' },
      { name: 'character_b', label: 'Character B (junior)', placeholder: 'Noah' },
      { name: 'setting', label: 'Setting', placeholder: 'an empty conference room after 9pm' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'word_count', label: 'Word count', default: '400', placeholder: '300-500' },
    ],
  },
  {
    id: 'workplace-authority-revision-remove-implied-leverage',
    title: 'Revise: Remove the Implied Leverage',
    category: 'adult-fiction',
    subcategory: 'workplace-authority',
    adult: true,
    tags: ['workplace-authority', 'revision', 'critique', 'consent'],
    description: 'Critiques and revises a draft to strip out any implication that rank pressured consent, replacing it with explicit negotiated desire.',
    body: `You are a developmental editor specializing in adult fiction with power-difference dynamics. Revise the draft scene below, involving {{character_a}} (senior) and {{character_b}} (junior) in {{setting}}.

--- DRAFT START ---
{{draft}}
--- DRAFT END ---

Technique: auditing for implied coercion. Find every place the draft lets rank do unspoken work — a line that reads as pressure, a beat where the junior character's hesitation is overridden rather than addressed, any hint that saying no would cost something professionally — and rewrite it so consent is explicit, verbal, and enthusiastic on both sides.

Return, in this order:
1. A short critique (3-5 bullets) flagging exactly where the draft implies coercion or unaddressed power leverage, quoting the problem phrase.
2. The revised scene in full, same approximate length as the original, preserving plot beats and {{pov}}, with the flagged issues fixed.
3. A one-line note per major edit explaining what changed and why.

Heat level: {{heat_level}} — do not increase explicitness beyond what the draft already contains. If the draft cannot be fixed without changing its premise (e.g., genuine non-consent baked into the setup), say so plainly instead of papering over it.`,
    variables: [
      { name: 'draft', label: 'Draft scene to revise', placeholder: 'Paste the draft text here' },
      { name: 'character_a', label: 'Character A (senior)', placeholder: 'Isabelle' },
      { name: 'character_b', label: 'Character B (junior)', placeholder: 'Ben' },
      { name: 'setting', label: 'Setting', placeholder: 'her office during a performance review' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black / sensual / explicit' },
    ],
  },
  {
    id: 'workplace-authority-role-reversal-exercise',
    title: 'Role Reversal: Rewrite With Ranks Swapped',
    category: 'adult-fiction',
    subcategory: 'workplace-authority',
    adult: true,
    tags: ['workplace-authority', 'exercise', 'craft', 'power-dynamics'],
    description: 'A craft exercise: rewrites a scene with the senior and junior roles swapped to test whether the dynamic still reads as consensual.',
    body: `Take the scene concept below between {{character_a}} (currently senior) and {{character_b}} (currently junior) in {{setting}}, and write it twice: once as originally cast, once with the rank roles fully swapped ({{character_b}} now senior, {{character_a}} now junior).

Technique: reversal as a consent check. If a scene only "works" with one particular character holding power, that's worth seeing plainly. Keep the emotional beats, dialogue structure, and level of explicit consent identical across both versions — only the rank assignment changes.

Requirements:
- POV: {{pov}} for both versions, adjusted to the correct character.
- Heat level: {{heat_level}} for both versions.
- Both versions must include the same explicit verbal consent beat, unaltered in substance.
- After both versions, add a short craft note (3-4 sentences) on what, if anything, felt different about the reversed version and why — this is the point of the exercise.
- Length: approximately {{word_count}} words per version.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Grace, 44' },
      { name: 'character_b', label: 'Character B', placeholder: 'Malik, 29' },
      { name: 'setting', label: 'Setting', placeholder: 'a law firm during a merger deadline' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Word count', default: '400', placeholder: '300-600' },
    ],
  },
  {
    id: 'workplace-authority-stakes-escalation-ladder',
    title: 'Escalation Ladder: Professional to Personal',
    category: 'adult-fiction',
    subcategory: 'workplace-authority',
    adult: true,
    tags: ['workplace-authority', 'stakes-escalation', 'planner', 'structure'],
    description: 'Plans a five-stage ladder from strictly professional interaction to a fully negotiated relationship.',
    body: `Act as a story planner. Build a 5-stage escalation ladder charting {{character_a}} (senior) and {{character_b}} (junior) moving from strictly professional interaction to a fully negotiated relationship, set across {{setting}}.

For each stage, provide:
1. Stage name and one-line description.
2. The specific shift from professional to personal that occurs at this stage.
3. A concrete safeguard or boundary discussion that must happen at or before this stage for the relationship to proceed ethically within the fiction (disclosure, recusal, a witnessed conversation, a cooling-off period).
4. Suggested heat level for a scene at this stage, escalating toward {{heat_level}} by the final stage.

Requirements:
- Stage 1 must be entirely professional, no romantic or physical subtext on the page yet, only in narration if any.
- The safeguard/boundary requirement in each stage must be concrete enough to actually write as a scene beat, not a vague gesture at "they talked about it."
- Stage 5 must show the relationship as consensually established, with the earlier safeguards holding.
- Note {{pov}} as the suggested viewpoint character per stage.
- Output as a numbered list, one block per stage.`,
    variables: [
      { name: 'character_a', label: 'Character A (senior)', placeholder: 'Anton, 47, surgeon' },
      { name: 'character_b', label: 'Character B (junior)', placeholder: 'Layla, 32, resident' },
      { name: 'setting', label: 'Setting', placeholder: 'a hospital during a demanding rotation' },
      { name: 'heat_level', label: 'Target heat level by stage 5', default: 'explicit', placeholder: 'fade-to-black / sensual / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
    ],
  },
];

export default prompts;
