import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'sensory-craft-one-dominant-sense',
    title: 'One Dominant Sense Per Beat',
    category: 'adult-fiction',
    subcategory: 'sensory-craft',
    adult: true,
    tags: ['sensory', 'technique', 'craft-drill', 'adult-fiction'],
    description: 'Generates a scene that anchors each beat in a single dominant sense instead of stacking all five at once.',
    body: `Write a scene of about {{word_count}} words between adult characters {{character_a}} and {{character_b}} in {{setting}}, heat level {{heat_level}}, POV {{pov}}.

Craft constraint: break the scene into 4-6 beats. Each beat must be anchored in exactly ONE dominant sense — touch, scent, temperature, sound, or taste — chosen deliberately, not sight (sight may appear only in passing, never as the anchor). No two consecutive beats may share the same dominant sense. Within each beat, get specific: not "he smelled good" but the actual note (cedar, sweat, the ozone smell of rain on skin); not "it was warm" but where the heat sits and what it does (a flush climbing a throat, breath gone humid against a collarbone).

After the scene, list the sense-per-beat sequence you used in one line (e.g., "touch → sound → temperature → scent → touch → taste") so the pattern is visible.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Word count', default: '700' },
    ],
  },
  {
    id: 'sensory-craft-register-choice',
    title: 'Pick a Register and Hold It',
    category: 'adult-fiction',
    subcategory: 'sensory-craft',
    adult: true,
    tags: ['sensory', 'register', 'vocabulary', 'adult-fiction'],
    description: 'Writes a scene at a single, deliberately chosen vocabulary register from clinical to crude, without drift.',
    body: `Write a scene of about {{word_count}} words between adult characters {{character_a}} and {{character_b}} in {{setting}}, heat level {{heat_level}}, POV {{pov}}, entirely at {{register}} register.

Before writing, in one line, define what that register means for body-language vocabulary specifically (clinical: anatomical terms, no metaphor; literary: sensory metaphor, restraint; blunt/crude: plain Anglo-Saxon words, no euphemism, no flowery softening). Then hold that register for the whole scene — no drifting into a softer or more explicit register mid-scene, and no mixing registers within the same sentence (e.g., a clinical noun paired with a euphemistic verb).

Track touch, sound, and at least one of scent or temperature throughout, using vocabulary consistent with the chosen register the whole way. After the scene, name one sentence that would have broken register if you'd been careless, and explain why it was rewritten.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'register', label: 'Vocabulary register', default: 'plain', placeholder: 'clinical, literary, plain, blunt/crude' },
      { name: 'word_count', label: 'Word count', default: '700' },
    ],
  },
  {
    id: 'sensory-craft-interiority-braid',
    title: 'Braiding Interiority With Physical Sensation',
    category: 'adult-fiction',
    subcategory: 'sensory-craft',
    adult: true,
    tags: ['sensory', 'interiority', 'pov', 'adult-fiction'],
    description: 'Generates a scene where a character\'s inner thought and physical sensation are woven sentence by sentence rather than blocked apart.',
    body: `Write a scene of about {{word_count}} words, POV {{pov}} limited to {{character_a}}, with {{character_b}} present, in {{setting}}, heat level {{heat_level}}.

Craft focus: braid interiority and physical sensation at the sentence level rather than in separate paragraphs. Every 2-3 sentences of physical description (what {{character_a}} feels, hears, tastes, or smells) should be immediately followed by a half-beat of thought that the sensation itself provokes — a memory it surfaces, a fear it stirs, a decision it forces — and then return to sensation. Do not let interiority run more than two sentences before grounding back in the body; do not let physical description run more than three sentences without interiority interrupting it.

The effect should be that thought and sensation feel inseparable — {{character_a}} cannot feel without thinking, and cannot think without feeling. Avoid stating emotions abstractly ("she felt vulnerable"); let the physical sensation carry the emotional weight instead.`,
    variables: [
      { name: 'character_a', label: 'POV Character' },
      { name: 'character_b', label: 'Other character' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'POV', default: 'first' },
      { name: 'word_count', label: 'Word count', default: '650' },
    ],
  },
  {
    id: 'sensory-craft-diagnose-purple-prose',
    title: 'Diagnose Purple Prose and Overwriting',
    category: 'adult-fiction',
    subcategory: 'sensory-craft',
    adult: true,
    tags: ['sensory', 'critique', 'revision', 'purple-prose'],
    description: 'Diagnoses overwrought, over-adjectived sensory writing in a draft scene and rewrites the worst passage tighter.',
    body: `You are a developmental editor specializing in sensory prose for adult fiction. Below is a draft scene.

--- DRAFT ---
{{existing_text}}
--- END DRAFT ---

Step 1 — Purple-prose audit (bullet list, 5-8 points): flag stacked adjectives and adverbs doing the same job twice, mixed or clashing metaphors, sensations described in the abstract instead of the specific (e.g., "waves of pleasure" with nothing underneath it), and any sentence where removing half the modifiers would lose nothing. Quote each offending line.

Step 2 — Euphemism-inventory check: identify any passage that reaches for a string of synonyms or vague euphemisms in place of one precise, committed word or image. Name the underlying vagueness being papered over.

Step 3 — Rewrite the single worst 100-150 word passage, at heat level {{heat_level}}, cutting at least 30% of the word count while keeping the same information, by choosing one precise sensory anchor per sentence instead of piling several on.

Step 4 — One sentence: what register ({{register}}) would suit this scene best going forward, and why.`,
    variables: [
      { name: 'existing_text', label: 'Draft scene to critique' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'register', label: 'Target register', default: 'plain', placeholder: 'clinical, literary, plain, blunt/crude' },
    ],
  },
  {
    id: 'sensory-craft-temperature-as-tension',
    title: 'Temperature as the Tension Mechanism',
    category: 'adult-fiction',
    subcategory: 'sensory-craft',
    adult: true,
    tags: ['sensory', 'temperature', 'tension', 'adult-fiction'],
    description: 'Writes a scene that tracks temperature — ambient and skin — as its primary escalation device.',
    body: `Write a scene of about {{word_count}} words between adult characters {{character_a}} and {{character_b}} in {{setting}}, heat level {{heat_level}}, POV {{pov}}, using temperature as the primary vehicle for escalation.

Craft focus: establish a concrete ambient temperature at the scene's opening (a cold room, summer heat, the specific chill of skin just out of water) and track how it changes — or how the characters' perception of it changes — as the scene escalates. Use temperature contrast deliberately: a cool hand on overheated skin, breath warming a cold neck, the shock of air after being covered. At least one moment should use temperature to signal a shift in emotional register (a sudden chill at a vulnerable admission, a flush that isn't only physical).

Do not let temperature become the only sense in play — it should be dominant, with touch and sound in a supporting role, not sight-heavy description. End on a temperature-based image rather than a visual one.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Word count', default: '650' },
    ],
  },
  {
    id: 'sensory-craft-sound-only-drill',
    title: 'Constrained Drill: Sound Only, Eyes Closed',
    category: 'adult-fiction',
    subcategory: 'sensory-craft',
    adult: true,
    tags: ['sensory', 'sound', 'constrained-exercise', 'craft-drill'],
    description: 'A constrained exercise writing an intimate scene through sound alone, as if the POV character\'s eyes are closed throughout.',
    body: `Craft drill: write a scene of about {{word_count}} words between adult characters {{character_a}} and {{character_b}} in {{setting}}, heat level {{heat_level}}, POV {{pov}} strictly limited to {{character_a}}, whose eyes are closed for the entire scene (in the dark, blindfolded, or simply shut in the moment — establish which in one opening clause and don't revisit it).

Hard constraint: zero visual description of anything. No color, no facial expression, no "watching," no light description beyond what's felt as warmth or heard as a source. Everything must be conveyed through sound (breath, voice, the specific sound of movement against different surfaces, wordless noise) plus touch, scent, and taste as secondary channels. Distinguish {{character_b}}'s presence entirely through sound and touch cues, not description of appearance.

This is a discipline exercise — after the scene, note in one or two sentences what the constraint forced you to notice about sound-writing that visual shorthand usually lets a writer skip.`,
    variables: [
      { name: 'character_a', label: 'POV Character' },
      { name: 'character_b', label: 'Other character' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'POV', default: 'first' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'sensory-craft-taste-and-proximity',
    title: 'Taste as the Closing Distance',
    category: 'adult-fiction',
    subcategory: 'sensory-craft',
    adult: true,
    tags: ['sensory', 'taste', 'proximity', 'adult-fiction'],
    description: 'Generates a scene using taste — an underused sense in most drafts — as the marker of closing physical distance.',
    body: `Write a scene of about {{word_count}} words between adult characters {{character_a}} and {{character_b}} in {{setting}}, heat level {{heat_level}}, POV {{pov}}, in which taste is used deliberately as the sense that marks the closing of physical distance — the sense that only becomes available once space between two people has fully closed.

Craft focus: withhold taste as a sensory channel until proximity earns it (early in the scene, rely on sight, sound, scent, temperature — anything but taste), then let its first appearance mark a clear threshold crossed (a first kiss, a taste of skin, salt, sweetness from a shared drink). Be specific about what is actually tasted — not "he tasted amazing" but the actual note (mint gone stale with wine, salt at a collarbone, the particular sweet-bitter of a mouth that's been drinking coffee). Use at least two distinct taste images across the scene, not just one moment.

Avoid taste-as-metaphor-only ("she was intoxicating") — ground every taste beat in something physically specific.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'sensory-craft-continue-matching-sensory-density',
    title: 'Continue, Matching Existing Sensory Density',
    category: 'adult-fiction',
    subcategory: 'sensory-craft',
    adult: true,
    tags: ['sensory', 'continuation', 'craft', 'adult-fiction'],
    description: 'Continues a pasted scene while matching its established sensory vocabulary, density, and register exactly.',
    body: `Below is an existing scene between adult characters {{character_a}} and {{character_b}} in {{setting}}.

--- EXISTING TEXT ---
{{existing_text}}
--- END EXISTING TEXT ---

Before writing, silently identify: which senses the existing text relies on most (and least), its vocabulary register ({{register}} or otherwise — name what you actually find), and the ratio of sensory description to dialogue and interiority.

Continue for approximately {{word_count}} more words at heat level {{heat_level}}, POV {{pov}}, matching that sensory profile exactly — if the original leans on touch and sound and barely uses scent, don't suddenly introduce heavy scent description; if it's spare and clinical, don't turn ornate. Do not introduce a new dominant sense unless the existing text has already set up its arrival (e.g., moving somewhere with a distinct smell). Advance the scene's physical and emotional stakes rather than repeating established sensory beats.`,
    variables: [
      { name: 'existing_text', label: 'Existing text to continue' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'register', label: 'Register (if known)', default: '', placeholder: 'clinical, literary, plain, blunt/crude' },
      { name: 'word_count', label: 'Additional word count', default: '500' },
    ],
  },
  {
    id: 'sensory-craft-euphemism-audit-rewrite',
    title: 'Euphemism-Inventory Audit and Rewrite',
    category: 'adult-fiction',
    subcategory: 'sensory-craft',
    adult: true,
    tags: ['sensory', 'euphemism', 'revision', 'vocabulary'],
    description: 'Flags every stock euphemism or vague sensory placeholder in a draft and replaces each with one specific, committed choice.',
    body: `You are editing for sensory precision. Below is a draft scene between adult characters.

--- DRAFT ---
{{existing_text}}
--- END DRAFT ---

Step 1 — Euphemism inventory: list every phrase that reaches for a stock stand-in instead of a specific sensory detail (vague heat/fire/melting language, unnamed "sensitive places," strings of near-synonyms used because none alone felt sufficient, anatomical avoidance). Quote each.

Step 2 — For each flagged phrase, propose ONE specific, committed replacement at {{register}} register — not a longer list of alternatives, a single choice, with one clause on why it's more precise than the euphemism it replaces.

Step 3 — Rewrite one full paragraph (the one with the highest euphemism density) using your replacements, at heat level {{heat_level}}, and confirm it still reads as prose, not a checklist of corrected words — vary sentence rhythm so the fixes don't feel mechanical.

Step 4 — One closing note: is this draft under-specific everywhere, or only in this one paragraph? Say which, and why it matters for revising the rest.`,
    variables: [
      { name: 'existing_text', label: 'Draft scene to audit' },
      { name: 'register', label: 'Target register', default: 'plain', placeholder: 'clinical, literary, plain, blunt/crude' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
    ],
  },
];

export default prompts;
