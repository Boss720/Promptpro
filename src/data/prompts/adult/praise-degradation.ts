import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'praise-degradation-register-generator',
    title: 'Two Registers: Praise and Degradation in the Same Scene',
    category: 'adult-fiction',
    subcategory: 'praise-degradation',
    adult: true,
    tags: ['dirty-talk', 'dialogue', 'voice', 'generator', 'craft'],
    description: 'Generates a scene where one character shifts between praise and degradation registers, showing the switch as intentional.',
    body: `You are writing adult fiction focused on dirty-talk craft. Write a scene between {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, about {{word_count}} words, heat level {{heat_level}}, centered on {{kink_focus}}.

Technique: a single character deliberately moving between a praise register and a degradation register within the same scene, and the shift itself communicating something about the dynamic — reward versus challenge, tenderness versus intensity — rather than being random tonal whiplash. Requirements:
- Give {{character_a}} at least 3 distinct lines of praise and 3 distinct lines of degradation, each specific to what's happening physically in the moment, not generic
- Make the *transition* between registers a deliberate beat the reader can track — a change in pace, a look, a physical cue — not an unexplained jump
- Have {{character_b}} respond differently to each register in a way that reveals what they specifically need from each
- Keep both registers inside consensual, negotiated play — the fictional frame that this is wanted should be legible throughout

Close with a short craft note: name the one word-choice or rhythm technique that kept the degradation lines from reading as cruelty rather than play.`,
    variables: [
      { name: 'character_a', label: 'Character speaking (switching registers)' },
      { name: 'character_b', label: 'Character responding' },
      { name: 'setting', label: 'Setting' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Target word count', default: '550' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Scene focus', placeholder: 'praise/degradation switching, orgasm control' },
    ],
  },
  {
    id: 'praise-degradation-voice-reveals-character',
    title: 'Dirty Talk as a Window Into Who They Are',
    category: 'adult-fiction',
    subcategory: 'praise-degradation',
    adult: true,
    tags: ['dirty-talk', 'characterization', 'voice', 'generator', 'craft'],
    description: 'Generates dirty talk for a character built from their established personality traits, not a generic template.',
    body: `You are demonstrating how a character's established personality should shape their dirty-talk register, so it reads as *that character* rather than interchangeable erotica dialogue. The user supplies {{character_a}} with a few personality traits (e.g. controlling in daily life but self-deprecating in bed, or someone who uses humor to manage vulnerability). Write a scene with {{character_b}} in {{setting}}, POV {{pov}}, about {{word_count}} words, heat level {{heat_level}}, focused on {{kink_focus}}.

Technique: dialogue register should be derived from character, not genre convention. Before writing the scene, state in 2-3 sentences how {{character_a}}'s established traits will shape their specific word choices, rhythm, and what they praise or degrade (do they compliment competence, appearance, effort, obedience? do they degrade with cruelty, with affectionate teasing, with blunt vulgarity?).

Then write the scene, making sure:
- At least one line of dialogue would be recognizably wrong if spoken by a different kind of character
- {{character_a}}'s vulnerability or control-need, established outside the bedroom, shows up specifically in what they need to hear or say during sex
- {{character_b}}'s responses are voiced with equal specificity, not just as a receptive foil

End with one sentence naming the single biggest tell that distinguishes this character's dirty talk from a generic version of the same scene.`,
    variables: [
      { name: 'character_a', label: 'Character A (with 2-3 personality traits)', placeholder: 'name — traits, e.g. "controlling at work, self-deprecating in bed"' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Target word count', default: '550' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Scene focus', placeholder: 'praise, degradation, mixed' },
    ],
  },
  {
    id: 'praise-degradation-dialogue-only-exercise',
    title: 'Dialogue-Only: Praise and Degradation With No Narration',
    category: 'adult-fiction',
    subcategory: 'praise-degradation',
    adult: true,
    tags: ['dirty-talk', 'dialogue', 'exercise', 'craft'],
    description: 'A dialogue-only exercise isolating spoken praise/degradation lines from any narrative crutch.',
    body: `You are running a craft exercise. Write a scene between {{character_a}} and {{character_b}} in {{setting}} using ONLY dialogue and minimal speaker tags (max 4-5 words of action per tag), about {{word_count}} words, heat level {{heat_level}}, centered on {{kink_focus}}.

Technique: with no narration to lean on, every register shift, every escalation, and every emotional beat must live entirely in word choice, punctuation, and rhythm. Requirements:
- Alternate between praise and degradation lines from at least one character across the scene
- Distinguish the two registers purely through diction and cadence — praise lines might run longer and softer, degradation lines might be shorter and sharper, or whatever choice you make, make it consistent and readable without stage directions
- Include one line where the listening character's single-word or short-phrase reply does the work a paragraph of narration would normally do
- Make clear through dialogue alone that this is consensual play both characters want, not one-sided cruelty

After the scene, note which of the two registers was harder to sustain without narration and why.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Target word count', default: '500' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'kink_focus', label: 'Scene focus', placeholder: 'degradation, praise kink, humiliation play' },
    ],
  },
  {
    id: 'praise-degradation-play-vs-cruelty-line',
    title: 'Naming the Line Between Play and Cruelty',
    category: 'adult-fiction',
    subcategory: 'praise-degradation',
    adult: true,
    tags: ['degradation', 'consent', 'craft', 'critique', 'ethics-in-fiction'],
    description: 'Writes a degradation-heavy scene that makes the play/cruelty distinction explicit within the fiction itself.',
    body: `You are writing adult fiction that handles degradation play responsibly by making the distinction between play and cruelty legible *inside the story*, not just implied. Write a scene between {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, about {{word_count}} words, heat level {{heat_level}}, centered on {{kink_focus}}.

Technique: the fictional frame — that this is wanted, negotiated intensity between people who trust each other — must be visible on the page through specific craft choices, not a disclaimer bolted on. In the scene:
- Establish, briefly and naturally (not as a recited list), that this specific degradation content was discussed beforehand
- Give the character receiving degradation at least one moment of visible, specific enjoyment or desire in response to a degrading line, so the reader can track that this lands as wanted
- Include one small check-in or attunement beat mid-scene — a look, a pause, a word — where the other character confirms they're still good, woven into the scene's rhythm rather than halting it
- Keep the degrading language itself sharp and specific rather than generic insults, since specificity is part of what signals "this is a chosen game" rather than genuine contempt

Close with a short craft note explaining the single technique that most clearly signals "this is play" without breaking the scene's heat.`,
    variables: [
      { name: 'character_a', label: 'Character A (giving degradation)' },
      { name: 'character_b', label: 'Character B (receiving)' },
      { name: 'setting', label: 'Setting' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Target word count', default: '600' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Degradation focus', placeholder: 'verbal humiliation, name-calling, praise withholding' },
    ],
  },
  {
    id: 'praise-degradation-continuation-escalation',
    title: 'Continuation: Escalating the Register',
    category: 'adult-fiction',
    subcategory: 'praise-degradation',
    adult: true,
    tags: ['dirty-talk', 'continuation', 'pacing', 'escalation'],
    description: 'Continues a scene-in-progress, escalating dirty talk intensity while tracking a specific escalation logic.',
    body: `You are continuing an in-progress scene between {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, heat level {{heat_level}}, centered on {{kink_focus}}. The user will paste the scene so far; pick up exactly where it leaves off and write forward about {{word_count}} words.

Technique: escalation in dirty talk should follow a legible internal logic — mounting specificity, shrinking sentence length, or narrowing focus to fewer and fewer words — rather than simply getting "more explicit" in a flat line. As you continue:
- Track and escalate whichever register (praise, degradation, or both) is already established in the pasted scene; do not introduce a new register from nothing
- Make each successive line of dialogue tighter, more specific, or more charged than the last using a consistent method (repetition with variation, shortening, narrowing to one body part or one word)
- Include at least one moment where a character's dialogue briefly breaks composure — a stutter, a broken-off word, a laugh — since real escalation isn't uniformly smooth
- Do not resolve the scene to climax unless the pasted material was already at that threshold; find a natural stopping point mid-escalation if not

If no draft is provided, first generate {{word_count}}-word opening lines to continue from, then perform the escalation pass on your own material.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'pov', label: 'POV', default: 'first person' },
      { name: 'word_count', label: 'Target word count', default: '400' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Register being escalated', placeholder: 'praise, degradation, orgasm denial talk' },
    ],
  },
  {
    id: 'praise-degradation-revision-generic-to-specific',
    title: 'Revision Pass: Generic Filth to Character-Specific Filth',
    category: 'adult-fiction',
    subcategory: 'praise-degradation',
    adult: true,
    tags: ['dirty-talk', 'revision', 'critique', 'voice'],
    description: 'Revises generic dirty-talk dialogue lines into character-specific ones tied to established traits and history.',
    body: `You are a dialogue editor for adult fiction. The user will paste a block of dirty-talk dialogue between {{character_a}} and {{character_b}} (heat level {{heat_level}}, focus {{kink_focus}}) along with 1-2 sentences establishing who each character is.

Technique: generic dirty talk (lines that could be swapped into any story with any characters unchanged) is a craft failure in character-driven fiction. Given the draft:
1. Identify up to 5 lines that are generic — could belong to any pairing, any story.
2. For each, name what specific character trait, relationship history, or established dynamic is being ignored.
3. Rewrite each line so it could only plausibly be spoken by *this* character to *this* partner — reference something specific to who they are, what they know about each other, or an in-story detail, without turning the line into exposition.
4. Note where one *should* keep a line simple and universal rather than over-personalizing it — not every line needs a callback, and forcing one can read as try-hard.

If no draft is supplied, generate a deliberately generic {{word_count}}-word exchange in {{setting}}, POV {{pov}}, first, then revise it per the steps above.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting (used only if no draft supplied)' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Kink focus', placeholder: 'praise kink, degradation, mixed' },
      { name: 'word_count', label: 'Sample word count (if generating)', default: '350' },
    ],
  },
  {
    id: 'praise-degradation-withholding-praise',
    title: 'Withheld Praise as Tension',
    category: 'adult-fiction',
    subcategory: 'praise-degradation',
    adult: true,
    tags: ['praise', 'tension', 'pacing', 'generator'],
    description: 'Generates a scene built around delayed or withheld praise as the primary tension mechanic rather than explicit acts.',
    body: `You are writing a scene where the central tension mechanic is withheld or delayed praise, not physical intensity. Write a scene between {{character_a}} (withholding) and {{character_b}} (seeking) in {{setting}}, POV {{pov}}, about {{word_count}} words, heat level {{heat_level}}, centered on {{kink_focus}}.

Technique: tension built from anticipation and denial of a specific verbal reward, structured like any well-paced scene — setup, escalating stakes, a near-miss, a payoff. Structure it so:
- {{character_a}} makes clear early, through tone and behavior rather than announcement, that praise is being deliberately withheld or made conditional
- {{character_b}}'s desire for that praise should be as legible as any physical desire in the scene — show what they specifically want to hear and why it matters to them
- Include at least one moment where {{character_a}} almost gives praise and pulls back, to demonstrate control of the pacing
- Deliver the eventual praise (if the scene reaches that point) as a specific, earned line rather than a generic "good girl/boy" — tie it to something {{character_b}} actually did in this scene

This is negotiated play between characters who both want this dynamic; that mutual wantedness should be visible. Close with a one-line note on how withholding differs technically from degradation as a tension tool.`,
    variables: [
      { name: 'character_a', label: 'Character A (withholding praise)' },
      { name: 'character_b', label: 'Character B (seeking praise)' },
      { name: 'setting', label: 'Setting' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Target word count', default: '550' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Scene focus', placeholder: 'praise kink, orgasm control, service' },
    ],
  },
  {
    id: 'praise-degradation-negotiation-builder',
    title: 'Negotiation Builder: Setting Limits on Degradation Language',
    category: 'adult-fiction',
    subcategory: 'praise-degradation',
    adult: true,
    tags: ['degradation', 'negotiation', 'consent', 'interviewer', 'planning'],
    description: 'Interviews the user to build a specific degradation-language limit list for a pairing before any scene is drafted.',
    body: `You are a fiction development partner helping the user define exactly what degradation language works for {{character_a}} and {{character_b}} before drafting a scene — planning, not prose. This matters because "degradation" covers wildly different specific content, and generic prompts produce generic (or accidentally off-target) results.

Ask the user one question at a time, waiting for each answer, covering:
1. Which categories of degrading language are in-bounds for this pairing (e.g. about behavior/effort, about desire/neediness, about appearance, about intelligence) and which are explicitly off-limits.
2. Whether {{character_a}} degrading {{character_b}} should ever reference something true about them outside the bedroom, or must stay strictly confined to in-scene behavior only.
3. What specific words or phrases {{character_b}} finds hot versus what would actually hurt them — ask for at least one concrete example of each.
4. What signal, in the fiction, shows the reader this is chosen and wanted rather than actual contempt.
5. Where the hard stop is — a line that, if crossed even in fiction, ends the scene's credibility as play.

Synthesize the answers into a short reference sheet: an in-bounds list, an off-limits list, and one example line of degradation dialogue that fits. Offer to generate a full scene at {{setting}}, heat level {{heat_level}}, using this sheet.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting for a follow-up scene' },
      { name: 'heat_level', label: 'Intended heat level', default: 'explicit' },
    ],
  },
  {
    id: 'praise-degradation-mixed-messages-critique',
    title: 'Critique: When Praise and Degradation Send Mixed Signals',
    category: 'adult-fiction',
    subcategory: 'praise-degradation',
    adult: true,
    tags: ['dirty-talk', 'critique', 'consent', 'craft', 'revision'],
    description: 'Reviews a draft scene for moments where praise/degradation dialogue accidentally reads as ambiguous about consent or tone.',
    body: `You are a craft critic reviewing dirty-talk dialogue for a common failure mode: lines that are meant to read as hot but land ambiguous about whether the receiving character actually wants what's happening. The user will paste a draft scene between {{character_a}} and {{character_b}} (heat level {{heat_level}}, focus {{kink_focus}}, POV {{pov}}).

Review the draft for:
1. Lines where {{character_b}}'s reaction to praise or degradation is left unclear enough that a reader could plausibly read distress instead of desire — quote each one.
2. Whether the surrounding narration or dialogue gives the reader anywhere else to look for confirmation (a physical response, a verbal reply, a beat of the character's own interiority) — note where it doesn't.
3. For each flagged line, propose a minimal fix: often a single added reaction beat or line of dialogue from {{character_b}} resolves the ambiguity without slowing the scene or breaking the heat.
4. Flag, separately, any place where the fix would require *more* words than the problem justifies — sometimes the right call is trimming the ambiguous line rather than padding around it.

If no draft is supplied, generate a {{word_count}}-word scene in {{setting}} with 2-3 deliberately planted ambiguous moments, then critique your own draft using the steps above.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting (used only if no draft supplied)' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Kink focus', placeholder: 'degradation, praise, mixed' },
      { name: 'word_count', label: 'Sample word count (if generating)', default: '400' },
    ],
  },
];

export default prompts;
