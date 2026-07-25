import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'reunion-second-chance-shared-history-shorthand',
    title: 'Shared History as Shorthand',
    category: 'adult-fiction',
    subcategory: 'reunion-second-chance',
    adult: true,
    tags: ['reunion', 'second-chance', 'dialogue', 'subtext', 'intimacy'],
    description: 'Generates a reunion scene where old private references replace exposition and build intimacy.',
    body: `You are a fiction writer specializing in adult second-chance-romance scenes. Write a reunion scene between {{character_a}} and {{character_b}}, two adults with a real romantic and sexual history, meeting again in {{setting}}.

Core technique: **shared history as shorthand**. These two people do not explain themselves to each other the way strangers would. Use inside jokes, half-finished sentences, a nickname, an old argument referenced in three words, a gesture one of them will recognize instantly. The reader should feel the years of intimacy through what is *left unsaid* as much as what is said. Do not stop to explain the backstory in narration — let it surface only through what the characters assume the other still remembers.

Write in {{pov}} POV. Escalate from wary/charged conversation into physical intimacy at a {{heat_level}} heat level, timed so the shift happens because a piece of shared history lands, not because the plot demands it. Target {{word_count}} words.

End the scene before full resolution — leave one old wound explicitly unaddressed, named in a single line of dialogue or thought, so the reader knows this reunion has not erased the past.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Mireille, 34, restoring boats' },
      { name: 'character_b', label: 'Character B', placeholder: 'Theo, 36, her ex-husband' },
      { name: 'setting', label: 'Setting', placeholder: 'the marina office after closing' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '900', placeholder: '900' },
    ],
  },
  {
    id: 'reunion-second-chance-changed-bodies',
    title: 'Bodies That Have Changed',
    category: 'adult-fiction',
    subcategory: 'reunion-second-chance',
    adult: true,
    tags: ['reunion', 'second-chance', 'sensory-detail', 'body', 'vulnerability'],
    description: 'Prompts a scene centered on noticing and reacting to how each partner\'s body has changed since the relationship ended.',
    body: `Write an intimate reunion scene between {{character_a}} and {{character_b}} in {{setting}}, adults who were previously lovers and have not touched each other in years.

Core technique: **bodies that have changed**. Time has passed. Do not write either character's body as frozen at the age the other remembers it. Have {{character_a}} and {{character_b}} each notice — with specific, sensory, non-judgmental detail — what is different: a new scar, softer or harder muscle, a scent that's changed, grey hair, a tremor, a surgical mark, weight gained or lost, a mobility limitation, stretch marks, a stiffer knee. Let noticing the change produce real emotional reaction in the moment — tenderness, grief for lost time, renewed desire, self-consciousness voiced aloud — rather than being cosmetic detail dropped in and ignored.

POV: {{pov}}. Heat level: {{heat_level}}. Length: {{word_count}} words.

Require at least one moment where a character names the change out loud to the other, and the other's response either reassures or complicates the moment — no silent narration-only acknowledgment. Do not let the changed body become a punchline or an obstacle to be politely ignored; it should be part of what makes the desire feel earned and adult.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Dele, 48, recovering from a knee surgery' },
      { name: 'character_b', label: 'Character B', placeholder: 'Priya, 45, his college girlfriend' },
      { name: 'setting', label: 'Setting', placeholder: 'her apartment, fifteen years later' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '800', placeholder: '800' },
    ],
  },
  {
    id: 'reunion-second-chance-resentment-mid-intimacy',
    title: 'Old Resentment Surfacing Mid-Intimacy',
    category: 'adult-fiction',
    subcategory: 'reunion-second-chance',
    adult: true,
    tags: ['reunion', 'second-chance', 'conflict', 'tension', 'emotional-stakes'],
    description: 'Writes an intimate scene interrupted by a specific unresolved grievance, then decides whether it continues.',
    body: `Write a reunion sex scene between {{character_a}} and {{character_b}} — former partners, adults, meeting again in {{setting}} — that is interrupted midway by a specific, named old resentment.

Core technique: **old resentment surfacing mid-intimacy**. Pick (or invent, consistent with the characters given) one concrete unresolved grievance between them — a betrayal, a thing said during the breakup, a promise broken, a way one of them left. Begin the scene with real desire and momentum at a {{heat_level}} heat level. Partway through, have the resentment surface organically — triggered by a specific word, position, sound, or gesture that calls back to the original wound — not by random argument. Show the physical scene actually change because of it: a pause, a flinch, a demand to stop and say the thing out loud, a shift in who has control.

POV: {{pov}}. Length: {{word_count}} words.

You must resolve the interruption one of three ways and make the choice deliberate rather than avoided: (1) they talk through it explicitly and consciously choose to continue, (2) one of them stops the encounter and the scene ends on that boundary being respected, or (3) they continue without fully resolving it and the narration is honest that something is being deferred, not fixed. State in a closing line, in-narration, which of the three happened.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Sam, 39' },
      { name: 'character_b', label: 'Character B', placeholder: 'Noor, 41, who left without a word' },
      { name: 'setting', label: 'Setting', placeholder: 'a mutual friend\'s wedding, back at the hotel' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '1000', placeholder: '1000' },
    ],
  },
  {
    id: 'reunion-second-chance-earned-or-not',
    title: 'Is the Reunion Earned? — Critique Prompt',
    category: 'adult-fiction',
    subcategory: 'reunion-second-chance',
    adult: true,
    tags: ['reunion', 'second-chance', 'critique', 'craft-feedback', 'structure'],
    description: 'Has the model critique a drafted reunion scene for whether the emotional reconciliation is actually earned.',
    body: `You are a developmental editor specializing in romance and erotica. I will give you a draft reunion/second-chance scene between {{character_a}} and {{character_b}} set in {{setting}}. Evaluate whether the reunion is **earned**, not just whether the prose is competent.

Apply this rubric explicitly, section by section:
1. **Cause, not convenience** — does the reunion happen because something changed in one or both characters, or only because the plot placed them in a room together?
2. **The original wound** — is the reason they separated named specifically anywhere in the scene, and does the reconciliation actually address it (even partially), or does physical intimacy substitute for that conversation?
3. **Cost** — does either character risk or lose something by re-opening this, or is the reunion frictionless?
4. **Consent to the past, not just the present** — do both characters get a visible moment of choosing to re-enter this relationship, distinct from choosing this one encounter?
5. **Heat level fit** — does the physical intimacy (target: {{heat_level}}) serve the emotional beat above, or is it disconnected from it?

For each of the five, give a verdict (Earned / Partially earned / Not earned) with the specific line or beat that supports your verdict, then one concrete rewrite suggestion. End with an overall verdict and the single highest-leverage change the writer should make.

Draft to evaluate:
{{setting}}`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and role in the draft' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and role in the draft' },
      { name: 'setting', label: 'Paste the draft scene here', placeholder: 'paste full scene text' },
      { name: 'heat_level', label: 'Intended heat level', default: 'explicit', placeholder: 'fade-to-black, sensual, explicit' },
    ],
  },
  {
    id: 'reunion-second-chance-slow-burn-continuation',
    title: 'Slow-Burn Continuation From a Charged Pause',
    category: 'adult-fiction',
    subcategory: 'reunion-second-chance',
    adult: true,
    tags: ['reunion', 'second-chance', 'continuation', 'pacing', 'tension'],
    description: 'Continues an in-progress reunion scene from a tense pause, extending the delay before contact.',
    body: `Continue the following reunion scene between {{character_a}} and {{character_b}} in {{setting}}. The scene so far ends on a charged pause — a held breath, a hand almost touching, a question asked but not answered.

Scene so far:
{{setting}}

Core technique: **extend the delay before the delay breaks**. Do not let the next line be contact. Add at least 150 words of held tension first — internal monologue, a small mundane interruption (a phone buzzing, a door, a memory), physical detail of the space between them — before allowing the first touch. The goal is to make the reader feel the specific ache of two people who both want the same thing and are both, for different in-character reasons, hesitating. When contact finally happens, make the trigger a small deliberate choice by one character, named on the page, not an accident.

POV: {{pov}}. Take the scene to a {{heat_level}} heat level. Total continuation length: {{word_count}} words.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting / paste scene-so-far here', placeholder: 'paste the scene fragment ending on a pause' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Continuation word count', default: '600', placeholder: '600' },
    ],
  },
  {
    id: 'reunion-second-chance-interviewer-grievance-map',
    title: 'Interviewer: Map the Grievance Before Writing',
    category: 'adult-fiction',
    subcategory: 'reunion-second-chance',
    adult: true,
    tags: ['reunion', 'second-chance', 'interviewer', 'planning', 'character-development'],
    description: 'Asks the user structured questions to define the breakup history before drafting the reunion scene.',
    body: `You are a story-development interviewer helping me plan a second-chance reunion scene between {{character_a}} and {{character_b}}, set in {{setting}}. Before writing anything, ask me the following questions one at a time, waiting for my answer before moving to the next:

1. Why did they actually separate — whose decision was it, and was the other one blindsided?
2. What is the one thing that was never said during the breakup that still needs saying?
3. How much time has passed, and what has each character built or lost in that time (career, another relationship, a loss, a health change)?
4. What does each character believe is true about why it ended — and are those beliefs the same, or do they contradict each other?
5. What is each character most afraid the other will say or do in this reunion?
6. At what heat level ({{heat_level}}) should the physical reunion happen, and should it happen before or after the unsaid thing gets said?

Once I've answered all six, synthesize my answers into a one-paragraph scene brief, then write the full reunion scene in {{pov}} POV at {{word_count}} words, explicitly using at least three of my answers as concrete beats in the scene (name which beat corresponds to which answer in a short note after the scene).`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a shared friend group\'s cabin trip' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '1000', placeholder: '1000' },
    ],
  },
  {
    id: 'reunion-second-chance-negotiated-terms',
    title: 'Negotiating the Terms of Getting Back In Bed',
    category: 'adult-fiction',
    subcategory: 'reunion-second-chance',
    adult: true,
    tags: ['reunion', 'second-chance', 'consent', 'dialogue', 'negotiation'],
    description: 'Centers the scene on an explicit spoken negotiation of what this reunion is and isn\'t before intimacy begins.',
    body: `Write a reunion scene between {{character_a}} and {{character_b}} in {{setting}} that centers on **explicit negotiation** before intimacy: these are adults who broke up, and one or both wants clarity on what tonight actually is before anything physical happens.

Core technique: **spoken terms, not assumed terms**. Write a real conversation — not a single throwaway line — where they negotiate out loud: is this a one-time thing or a reopening of the relationship, what does the other partner (if either has one now) need to know, what are they each still not ready to promise, what would make one of them regret this in the morning. Let the negotiation itself carry tension and even arousal — two people who know each other's bodies well being unusually careful with each other's feelings is its own kind of charged.

Only after the terms are actually settled on the page should the scene move into physical intimacy at a {{heat_level}} heat level. POV: {{pov}}. Length: {{word_count}} words.

The negotiation must produce a concrete, stated agreement (e.g., "just tonight," "we talk again in the morning," "this doesn't mean we're back together") — not a vague fade into contact. Reference that agreement at least once during the physical scene, showing whether it's being honored or already fraying.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'her kitchen, after the kids are asleep' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '900', placeholder: '900' },
    ],
  },
  {
    id: 'reunion-second-chance-format-exercise-then-and-now',
    title: 'Format Exercise: Then-and-Now Intercut',
    category: 'adult-fiction',
    subcategory: 'reunion-second-chance',
    adult: true,
    tags: ['reunion', 'second-chance', 'format', 'structure', 'flashback'],
    description: 'A structural exercise intercutting the present reunion with a memory of the relationship at its best.',
    body: `Write a reunion scene between {{character_a}} and {{character_b}} in {{setting}} using an **intercut structure**: alternate short passages between the present-day reunion and a specific memory of the relationship at one of its best moments, years earlier.

Formatting rules:
- Use clear section breaks (e.g., a line of ***) to separate PRESENT and MEMORY passages.
- Each MEMORY passage must be shorter than the PRESENT passage that follows it — the past should feel like it's intruding on, not overtaking, the present.
- The content of each MEMORY passage should be triggered by something specific happening in the PRESENT passage just before it (a phrase, a touch, a smell), and should recontextualize what's happening now — either by contrast (this felt easier then) or by rhyme (they're doing this same thing again, on purpose).
- The final section must be PRESENT-only, with no more cuts to memory, signaling the characters are choosing to be here now rather than in the past.

POV: {{pov}}. Take the present-day thread to a {{heat_level}} heat level. Total length: {{word_count}} words, roughly 70% present / 30% memory.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'the apartment they used to share, now hers alone' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '1100', placeholder: '1100' },
    ],
  },
  {
    id: 'reunion-second-chance-pov-swap-drill',
    title: 'POV-Swap Drill: Same Scene, Other Side',
    category: 'adult-fiction',
    subcategory: 'reunion-second-chance',
    adult: true,
    tags: ['reunion', 'second-chance', 'pov', 'revision', 'character-voice'],
    description: 'Rewrites a given reunion scene from the other character\'s POV to surface what the original left out.',
    body: `I will give you a completed reunion scene between {{character_a}} and {{character_b}}, set in {{setting}}, written from {{pov}}. Your task is a **POV-swap drill**: rewrite the same scene, same events, same dialogue beats, from the other character's point of view.

Scene to rewrite:
{{setting}}

Rules for the rewrite:
- Keep the external events (what is said out loud, what physically happens) identical or near-identical — this is not a new scene, it's the same scene from inside the other head.
- The internal experience must differ meaningfully: what this character notices, misreads, is insecure about, or wants that the original POV character couldn't have shown you, because they don't have access to the other's interior.
- Include at least one moment where this character's internal read of a line or gesture is different from — or contradicts — how the original POV character seemed to experience it. Flag that moment with a short bracketed note, e.g. [contrast: original read this as reluctance; here it's actually relief].
- Maintain the same heat level ({{heat_level}}) and roughly the same length as the original.

After the rewrite, give a 3-4 sentence note on what this POV swap reveals about the power balance or emotional asymmetry between {{character_a}} and {{character_b}} that the single-POV version hid.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting / paste original scene here', placeholder: 'paste the completed scene' },
      { name: 'pov', label: 'Original POV', default: 'third limited (Character A)', placeholder: 'whose head the original was in' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, sensual, explicit' },
    ],
  },
];

export default prompts;
