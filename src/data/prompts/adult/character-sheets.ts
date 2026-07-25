import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'character-sheets-desire-profile',
    title: 'Desire Profile Generator',
    category: 'adult-fiction',
    subcategory: 'character-sheets',
    adult: true,
    tags: ['character', 'desire', 'structured-output', 'craft'],
    description: 'Builds a structured desire profile for a character covering what draws them in and what they avoid.',
    body: `You are a character-development assistant building a desire profile for {{character_a}}, an adult character, to keep attraction consistent and specific across a longer work.

Context: {{setting}}.

Output a table with these rows, one clear entry per row (not vague adjectives — specific, scene-usable detail):
| Category | Detail |
| Draws them in immediately | |
| Draws them in slowly, once trust is built | |
| Actively turns them off | |
| A tell they don't know they have (visible to others, not to them) | |
| What they perform vs. what they actually want | |
| A past experience shaping the above | |

After the table, write two sentences on how this profile should visibly show up on the page — not stated outright, but through action or dialogue choices a writer can use.`,
    variables: [
      { name: 'character_a', label: 'Character' },
      { name: 'setting', label: 'Story context / setting' },
    ],
  },
  {
    id: 'character-sheets-want-vs-need',
    title: 'Want vs. Need Split',
    category: 'adult-fiction',
    subcategory: 'character-sheets',
    adult: true,
    tags: ['character', 'motivation', 'structured-output', 'chemistry'],
    description: 'Separates what each character consciously wants from what they actually need, to build friction.',
    body: `You are building the motivational engine for a romantic/sexual pairing between {{character_a}} and {{character_b}} in {{setting}}.

For each character, produce:
1. **Want** — what they consciously believe they want from this relationship or encounter (stated in their own voice, one sentence).
2. **Need** — what would actually satisfy them emotionally, which they may not recognize or may actively resist (one sentence, written from an omniscient/craft perspective, not theirs).
3. **The gap** — one sentence naming the specific behavior this mismatch produces (what they do instead of asking for what they need).

Then, in a final section titled "Where they collide," identify the single scene-shape where {{character_a}}'s want/need gap and {{character_b}}'s want/need gap would create the most friction if these two were in a scene together — describe the mechanism, not a full scene.

Keep the whole output under 350 words.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Story context / setting' },
    ],
  },
  {
    id: 'character-sheets-communication-styles',
    title: 'Conflicting Communication Styles Sheet',
    category: 'adult-fiction',
    subcategory: 'character-sheets',
    adult: true,
    tags: ['character', 'dialogue', 'structured-output', 'chemistry'],
    description: 'Defines how each character communicates desire, discomfort, and conflict, and where the styles clash.',
    body: `You are mapping how {{character_a}} and {{character_b}} communicate — specifically the mismatches that create realistic friction and misread signals, useful for both dialogue and tension-building.

For each character, fill in:
- How they signal interest when confident (direct statement, action, deflection-that-means-yes, etc.)
- How they signal interest when unsure of themselves (differs from the above — name the difference)
- How they express discomfort or a boundary (do they say it plainly, go quiet, joke it off, change the subject?)
- Their default conflict mode (confront directly, withdraw, over-explain, get sharp/sarcastic)
- One phrase or verbal tic that is distinctly theirs

Then: identify the single most likely miscommunication between these two specifically — a moment where {{character_a}}'s style would cause {{character_b}} to misread something, or vice versa — and name what each of them would privately conclude from it (and why it would be wrong).

Output as two character blocks followed by the miscommunication analysis.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
    ],
  },
  {
    id: 'character-sheets-physical-verbal-tells',
    title: 'Physical & Verbal Tells Sheet',
    category: 'adult-fiction',
    subcategory: 'character-sheets',
    adult: true,
    tags: ['character', 'body-language', 'structured-output', 'craft'],
    description: 'Catalogs distinct physical and verbal tells for a character so attraction reads as specific, not generic.',
    body: `You are cataloging {{character_a}}'s physical and verbal "tells" — small, specific, repeatable signals a writer can plant across a manuscript so attraction and emotional state read on the page without being stated outright.

Produce a table:
| State | Physical tell | Verbal tell |
| Attracted but composed | | |
| Attracted and losing composure | | |
| Nervous or uncertain | | |
| Annoyed but hiding it | | |
| Genuinely at ease / off guard | | |

Rules: every tell must be specific to this character (not "blushes" or "heart races" — generic tells any character could have). Ground each in something particular to {{character_a}}'s established personality, habits, or history if given; invent plausible specific habits if not, and flag which ones you invented.

After the table, give one example line of narration using a tell from the "losing composure" row, so the writer sees it in context.`,
    variables: [
      { name: 'character_a', label: 'Character' },
    ],
  },
  {
    id: 'character-sheets-boundaries-limits',
    title: 'Boundaries & Limits Sheet',
    category: 'adult-fiction',
    subcategory: 'character-sheets',
    adult: true,
    tags: ['character', 'consent', 'structured-output', 'boundaries'],
    description: 'Produces a structured boundaries-and-limits reference for a character to keep consent consistent across scenes.',
    body: `You are building a reference sheet of boundaries and limits for {{character_a}}, an adult character, to keep their consent and comfort consistent across every scene they appear in.

Produce three columns in a table:
| Comfortable / enjoys | Needs negotiation or context first | Hard limit — never |

Populate each column with specific, concrete items (not vague categories) appropriate to {{character_a}}'s established personality and history. If little characterization is given, invent plausible entries consistent with {{setting}} and flag which ones are invented.

After the table:
- Note how {{character_a}} typically communicates when something crosses into the middle or right-hand column — do they say so immediately, or is there a delay a scene partner should watch for?
- Note one thing a well-meaning partner could plausibly get wrong about this character's limits, to use as a source of negotiated conflict rather than actual harm.

This sheet exists to keep scenes consistent and consensual, not to be quoted verbatim in prose.`,
    variables: [
      { name: 'character_a', label: 'Character' },
      { name: 'setting', label: 'Story context / setting' },
    ],
  },
  {
    id: 'character-sheets-compatibility-interview',
    title: 'Compatibility Interview',
    category: 'adult-fiction',
    subcategory: 'character-sheets',
    adult: true,
    tags: ['character', 'interviewer', 'chemistry', 'planning'],
    description: 'Asks the user a structured set of questions about a pairing before producing a compatibility analysis.',
    body: `You are a character-chemistry consultant. I want an analysis of the compatibility between {{character_a}} and {{character_b}}, but you don't have enough information yet.

Step 1: Ask me up to six targeted questions before producing anything. Cover at minimum: what each character wants from relationships in general, one thing each finds attractive that the other might not obviously have, how each handles vulnerability, and any existing history between them (strangers, exes, coworkers, etc.). Do not ask questions answerable from context I've already given.

Step 2: Once I answer (or say "use reasonable assumptions"), produce a compatibility analysis with these sections:
- Where they naturally align (2-3 points)
- Where they'll create productive friction rather than just conflict (2-3 points)
- One likely early obstacle to them getting together
- One scene idea (one sentence, not a full outline) that would put their compatibility and friction on display simultaneously

Do not write any prose scene — analysis only, until I ask for one.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
    ],
  },
  {
    id: 'character-sheets-attraction-legibility-critic',
    title: 'Attraction Legibility Critic',
    category: 'adult-fiction',
    subcategory: 'character-sheets',
    adult: true,
    tags: ['critique', 'chemistry', 'diagnosis', 'craft'],
    description: 'Reviews a draft passage to check whether attraction between two characters is legible on the page.',
    body: `You are a craft critic checking whether attraction between {{character_a}} and {{character_b}} is legible to a reader in the text below, versus only existing in the writer's head.

--- EXISTING TEXT ---
{{existing_text}}
--- END EXISTING TEXT ---

Step 1: List every concrete signal of attraction present in the text (a specific action, line of dialogue, or described physical response) — quote each briefly. If there are none, say so.

Step 2: Rate the overall legibility as Clear / Partial / Invisible, with one sentence of reasoning.

Step 3: If Partial or Invisible, identify the two best insertion points in the existing text where a small, specific signal (not a paragraph of internal monologue) could be added, and draft that one line for each point.

Step 4: Flag anything currently doing the opposite job — a moment that reads as neutral or hostile when the surrounding context implies attraction was intended.

Keep the critique itself under 250 words; the two drafted lines don't count toward that limit.`,
    variables: [
      { name: 'existing_text', label: 'Draft passage to review' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
    ],
  },
  {
    id: 'character-sheets-voice-contrast-rewriter',
    title: 'Voice-Contrast Line Rewriter',
    category: 'adult-fiction',
    subcategory: 'character-sheets',
    adult: true,
    tags: ['voice', 'dialogue', 'rewriter', 'characterization'],
    description: 'Rewrites a shared line of dialogue in each character\'s distinct voice to sharpen contrast.',
    body: `You are sharpening voice distinction between {{character_a}} and {{character_b}} so their dialogue doesn't read interchangeably.

Here is a single beat both characters might plausibly say something in response to: {{scenario}}.

Step 1: Write one line each character would say in this moment, in a plain/neutral register, to establish the baseline content.

Step 2: Rewrite {{character_a}}'s line three ways, each using a different voice lever: (a) sentence length/rhythm distinct to them, (b) a word or phrase they'd reach for that {{character_b}} wouldn't, (c) what they leave unsaid or deflect instead of saying directly.

Step 3: Do the same three-way rewrite for {{character_b}}.

Step 4: In one sentence per character, name the throughline — what makes all three of their versions still recognizably the same person.

Output as clearly labeled sections per step. This is a voice-calibration exercise, not a scene.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'scenario', label: 'Shared beat/moment', placeholder: 'e.g. one of them is late and the other has been waiting' },
    ],
  },
  {
    id: 'character-sheets-heat-level-calibration',
    title: 'Heat-Level Calibration Sheet',
    category: 'adult-fiction',
    subcategory: 'character-sheets',
    adult: true,
    tags: ['heat-level', 'structured-output', 'craft', 'planning'],
    description: 'Defines how a character behaves differently at each heat level so escalation stays character-consistent.',
    body: `You are building a reference for how {{character_a}} behaves differently as physical/emotional intensity rises, so scenes at different heat levels stay recognizably the same character rather than generic escalation.

Produce a table with rows for each stage and columns for [Body language, Dialogue register, Internal focus]:
| Guarded / pre-attraction |
| Flirtation / low heat |
| Suggestive |
| Explicit — building |
| Explicit — peak |
| Aftermath |

Every cell must be specific to {{character_a}} as established (or, if underspecified, invented consistent with {{setting}} and flagged as invented) — avoid generic entries like "gets nervous" or "breathes heavier" that could apply to any character.

After the table, write one short paragraph (60-90 words) demonstrating the character at the "Explicit — building" stage, at heat level {{heat_level}}, using at least two specifics from that row.`,
    variables: [
      { name: 'character_a', label: 'Character' },
      { name: 'setting', label: 'Story context / setting' },
      { name: 'heat_level', label: 'Heat level for demo paragraph', default: 'explicit' },
    ],
  },
];

export default prompts;
