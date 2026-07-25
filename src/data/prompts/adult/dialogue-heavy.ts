import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'dialogue-heavy-voice-differentiation',
    title: 'Two Voices, No Tags',
    category: 'adult-fiction',
    subcategory: 'dialogue-heavy',
    adult: true,
    tags: ['dialogue', 'voice', 'characterization', 'adult-fiction'],
    description: 'Generates a scene where two characters stay distinguishable through word choice and rhythm alone, without dialogue tags.',
    body: `You are a fiction craft instructor demonstrating voice differentiation. Write a scene between adult characters {{character_a}} and {{character_b}} in {{setting}}, heat level {{heat_level}}, POV {{pov}}, approximately {{word_count}} words.

Constraints:
- Do not use any dialogue tags ("she said", "he asked") anywhere in the scene. The reader must identify the speaker purely from diction, sentence length, rhythm, and what each character notices or avoids saying.
- Give {{character_a}} and {{character_b}} distinct speech habits established in the first three exchanges: sentence length, contraction use, directness vs. deflection, a verbal tic that never becomes a catchphrase.
- Physical action beats may replace tags, but use them sparingly — no more than one per exchange.
- Tension or attraction should build through what's said and left unsaid, not through narration explaining feelings.

After the scene, add a short "Voice key" section listing 3 concrete markers per character that a reader could use to tell them apart blind.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name, one trait' },
      { name: 'character_b', label: 'Character B', placeholder: 'name, one trait' },
      { name: 'setting', label: 'Setting', placeholder: 'a rented cabin mid-storm' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first / third limited / third alternating' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'dialogue-heavy-subtext-under-small-talk',
    title: 'Subtext Under Small Talk',
    category: 'adult-fiction',
    subcategory: 'dialogue-heavy',
    adult: true,
    tags: ['dialogue', 'subtext', 'tension', 'adult-fiction'],
    description: 'Generates an ordinary conversation between two characters that carries a charged undercurrent neither states directly.',
    body: `Write a scene, POV {{pov}}, between adult characters {{character_a}} and {{character_b}} in {{setting}}. The surface topic of the dialogue must be mundane — logistics, weather, a task, a shared errand — but every line should carry a second layer: unresolved attraction, a held-back confession, or a negotiation neither will name outright. Heat level {{heat_level}}. Target {{word_count}} words.

Technique requirements:
- Neither character says what they actually want until at most one line near the end, and even then it should be oblique, not a declaration.
- Use at least two moments where a character deliberately changes the subject away from where the conversation was heading — show the swerve, don't explain it.
- Physical proximity or small gestures (a held door, a refilled glass, a pause too long) should carry as much charge as the words.
- No internal monologue translating the subtext for the reader. Trust the dialogue and beats.

End with a two-sentence editor's note naming exactly where the subtext lives in three specific lines, quoting them.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name, relationship to B' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting', placeholder: 'kitchen after a dinner party has cleared out' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Word count', default: '500' },
    ],
  },
  {
    id: 'dialogue-heavy-consent-negotiation-scene',
    title: 'Negotiation as Natural Dialogue',
    category: 'adult-fiction',
    subcategory: 'dialogue-heavy',
    adult: true,
    tags: ['dialogue', 'consent', 'negotiation', 'adult-fiction'],
    description: 'Writes a check-in and negotiation exchange between partners that reads as natural speech rather than a checklist.',
    body: `Write a dialogue scene between consenting adult characters {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, heat level {{heat_level}}, about {{word_count}} words. The scene should dramatize the two of them talking through what they want and don't want before or during intimacy — but it must read as two specific people talking, not a form.

Craft requirements:
- No clinical checklist phrasing ("What are your hard limits?" delivered flatly). Route the same information through character-specific voice — humor, nervousness, bluntness, teasing — so the negotiation feels alive.
- Include at least one moment of a character checking in mid-scene ("still good?" in their own words) and one moment where a boundary or preference is stated plainly and respected without argument.
- Let a silence or a pause do work at least once — a beat where nobody speaks and the scene tells us what that silence means.
- Both characters should get to want something specific, not just one character requesting and the other assenting.

This is fiction between adult, consenting, fictional characters. Make the consent explicit and enthusiastic within the dialogue itself, not narrated around it.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting', placeholder: 'first night together, her apartment' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'POV', default: 'first' },
      { name: 'word_count', label: 'Word count', default: '650' },
    ],
  },
  {
    id: 'dialogue-heavy-interruption-as-beat',
    title: 'Interruption as a Beat',
    category: 'adult-fiction',
    subcategory: 'dialogue-heavy',
    adult: true,
    tags: ['dialogue', 'pacing', 'interruption', 'adult-fiction'],
    description: 'Generates a scene that uses interrupted, overlapping, and cut-off speech to build urgency between two characters.',
    body: `Write a scene between adult characters {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, heat level {{heat_level}}, roughly {{word_count}} words, where escalating want is dramatized through the mechanics of the dialogue itself: interruptions, trailing off, talking over each other, one character finishing the other's sentence.

Technique requirements:
- Use an em dash for at least three genuine interruptions (one character's line is cut off by the other's action or speech) — not stylistic dashes standing in for pauses.
- Show at least one instance of a sentence deliberately left unfinished because a character loses their nerve or is distracted by touch — trail with an ellipsis and follow it with an action beat, not an explanation.
- Vary the rhythm: at least one exchange should be short, clipped one-word or two-word lines; at least one should have a longer, unbroken run from one character that the other lets stand.
- The reader should feel pacing accelerate as the scene moves toward its peak, purely through sentence and line length, not through adverbs telling us it's intense.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting', placeholder: 'backstage, five minutes before curtain' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Word count', default: '550' },
    ],
  },
  {
    id: 'dialogue-heavy-continuation-from-fragment',
    title: 'Continue From a Dialogue Fragment',
    category: 'adult-fiction',
    subcategory: 'dialogue-heavy',
    adult: true,
    tags: ['dialogue', 'continuation', 'voice-matching', 'adult-fiction'],
    description: 'Continues an existing dialogue-driven scene while matching the established voices and unresolved tension.',
    body: `Below is an unfinished dialogue-driven scene between adult characters {{character_a}} and {{character_b}}. Continue it for {{word_count}} more words, POV {{pov}}, heat level {{heat_level}}.

Existing text:
"""
{{existing_text}}
"""

Requirements before you write:
- Identify each character's established voice markers (sentence length, formality, verbal habits) from the fragment and state them in one line each before continuing.
- Do not reset or restart the scene — pick up mid-beat, matching whatever tension, location, and physical positioning is implied by the last lines.
- Keep the same ratio of dialogue to action beat that the original fragment uses; if it's 90% dialogue, stay there.
- Advance the scene's central unresolved question (name it in one line) rather than stalling with new small talk.

Output: the voice-marker notes, then the continuation as clean prose.`,
    variables: [
      { name: 'existing_text', label: 'Existing scene fragment to continue', placeholder: 'paste the unfinished dialogue scene' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count to add', default: '400' },
    ],
  },
  {
    id: 'dialogue-heavy-critique-flat-dialogue',
    title: 'Diagnose Flat or On-the-Nose Dialogue',
    category: 'adult-fiction',
    subcategory: 'dialogue-heavy',
    adult: true,
    tags: ['dialogue', 'critique', 'revision', 'adult-fiction'],
    description: 'Diagnoses where dialogue in a submitted scene is too on-the-nose, tag-heavy, or voice-identical, with line-level fixes.',
    body: `You are a developmental editor specializing in dialogue-carried scenes. Read the scene below between adult characters and diagnose its dialogue craft.

Scene:
"""
{{existing_text}}
"""

Produce:
1. **Voice audit** — can you tell the speakers apart with tags removed? Quote two lines that could be swapped between characters with no loss, if any exist.
2. **On-the-nose flags** — quote every line where a character says their feeling or intention directly instead of it emerging through subtext or action (e.g., "I'm so nervous around you"), and rewrite each as a subtext-carrying alternative.
3. **Tag audit** — count dialogue tags beyond "said"/"asked"; flag adverb-heavy tags ("she said seductively") and propose an action-beat replacement for each.
4. **Rhythm check** — note if every line is roughly the same length (a common flatness signal) and mark where varying line length would sharpen a beat.
5. **One scene-level fix** — the single highest-leverage change to make this scene feel like two specific people rather than generic dialogue.

Be specific and quote the text; do not give generic advice unattached to the passage.`,
    variables: [
      { name: 'existing_text', label: 'Scene to critique', placeholder: 'paste the dialogue-heavy scene' },
    ],
  },
  {
    id: 'dialogue-heavy-power-dynamic-shift',
    title: 'Dialogue That Shifts Power Mid-Scene',
    category: 'adult-fiction',
    subcategory: 'dialogue-heavy',
    adult: true,
    tags: ['dialogue', 'power-dynamics', 'tension', 'adult-fiction'],
    description: 'Generates a scene where control of the conversation visibly changes hands between two characters through dialogue alone.',
    body: `Write a scene between adult characters {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, heat level {{heat_level}}, about {{word_count}} words, in which control of the exchange shifts at least twice — the character asking questions becomes the one answering them, the one deflecting becomes the one pursuing.

Craft requirements:
- Mark the shift through dialogue mechanics only: who asks questions vs. who answers, who uses declaratives vs. who hedges, whose lines get shorter as they lose ground.
- Include one clear turning line for each shift — a single line of dialogue that visibly moves control — but don't announce the shift in narration; let the next few exchanges prove it happened.
- Keep both characters sympathetic and consenting; a power shift in banter or negotiation is not the same as coercion, and nothing should read as one character overriding the other's stated wishes.
- End the scene on whoever holds control last, with a line that confirms it without stating "now she was in control."

After the scene, add a one-paragraph breakdown identifying the two turning lines and why they work.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting', placeholder: 'a job interview that goes somewhere else' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'dialogue-heavy-constrained-no-narration',
    title: 'Constrained Exercise: Pure Dialogue, No Narration',
    category: 'adult-fiction',
    subcategory: 'dialogue-heavy',
    adult: true,
    tags: ['dialogue', 'constrained-exercise', 'craft-drill', 'adult-fiction'],
    description: 'A constrained drill: write an entire scene in dialogue only, with zero narration, to force voice and pacing to carry everything.',
    body: `Craft drill: write a scene between adult characters {{character_a}} and {{character_b}} in {{setting}}, heat level {{heat_level}}, about {{word_count}} words, using dialogue lines ONLY. No narration, no action beats, no description, no dialogue tags — just a back-and-forth script of bare lines, each on its own line prefixed with the speaker's name once established (or unmarked once voices are distinct enough).

Rules:
- Setting, mood, physical action, and escalation must all be implied through word choice and what characters reference saying or doing ("don't stop" implies action without narrating it).
- POV is irrelevant here since there is no narration — write it as pure transcript.
- The scene must still have a shape: an opening move, a complication or hesitation, and a resolution or cliffhanger, entirely through what is said.
- After the drill, write a short reflection (3-4 sentences) on which lines were doing double duty — carrying both plot/action information and characterization simultaneously — since in this format every line has to.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting', placeholder: 'a phone call, both in different cities' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count', default: '400' },
    ],
  },
  {
    id: 'dialogue-heavy-register-shift-by-register',
    title: 'One Scene, Two Vocabulary Registers',
    category: 'adult-fiction',
    subcategory: 'dialogue-heavy',
    adult: true,
    tags: ['dialogue', 'register', 'vocabulary', 'adult-fiction'],
    description: 'Generates the same dialogue scene twice in different vocabulary registers so a writer can compare tonal effect.',
    body: `Write the same short scene between adult characters {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, TWICE, back to back, so a writer can compare registers directly. Both versions should hit the same beats and the same outcome — only the vocabulary and dialogue register should change.

Version 1 — {{register}}: keep the vocabulary in this register throughout (e.g., clinical/direct, playful/euphemistic, blunt/crude — whichever the variable specifies) and match the surrounding narration's diction to it so the scene feels consistent rather than mismatched.

Version 2 — the opposite end of the spectrum from {{register}}: same scene, same plot beats, same dialogue *content*, but rebuilt in contrasting vocabulary and rhythm.

Heat level {{heat_level}}, {{word_count}} words per version.

After both versions, add a short comparison note: which register served this particular scene and character pairing better, and why — is one tonally mismatched with who these characters are, or does the contrast reveal something about tone control the writer should watch for in their own drafts?`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'register', label: 'Starting register', default: 'blunt/crude', placeholder: 'clinical, playful/euphemistic, blunt/crude, literary' },
      { name: 'word_count', label: 'Word count per version', default: '300' },
    ],
  },
];

export default prompts;
