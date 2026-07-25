import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'ff-sapphic-first-tension-scene',
    title: 'Slow-Burn Tension Scene Generator',
    category: 'adult-fiction',
    subcategory: 'ff-sapphic',
    adult: true,
    tags: ['tension', 'pacing', 'pov', 'sapphic', 'scene-generator'],
    description: 'Generates a scene where two women delay a first kiss through escalating physical awareness.',
    body: `You are a fiction writer specializing in slow-burn romantic tension. Write a scene of about {{word_count}} words, told in {{pov}} POV, in which {{character_a}} and {{character_b}} are alone together in {{setting}} and both want to close the distance between them but don't yet.

Craft focus: tension through delay. Use proximity, breath, and unfinished sentences instead of narration that states attraction outright. Every paragraph should raise the stakes of the not-yet-kiss a little further. End the scene one beat before contact — on the inhale, not the kiss itself.

Heat level: {{heat_level}} (fade-to-black through explicit; scale the physical detail accordingly, but keep the delay technique regardless of heat level).

Constraints:
- Both characters are adults; do not state or imply otherwise.
- No narrated inner monologue explaining "I was attracted to her" — show it via behavior and dialogue only.
- Do not resolve the tension. Stop before the kiss.
- If {{character_a}} or {{character_b}} is left undefined, invent a plausible adult woman with one concrete physical detail and one personality trait, and say so at the top of your reply.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Rosa, 34, a dockworker' },
      { name: 'character_b', label: 'Character B', placeholder: 'June, 29, a marine biologist' },
      { name: 'setting', label: 'Setting', placeholder: 'a storm-delayed ferry cabin' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'ff-sapphic-continuation-body-awareness',
    title: 'Continuation With Escalating Sensory Specificity',
    category: 'adult-fiction',
    subcategory: 'ff-sapphic',
    adult: true,
    tags: ['continuation', 'sensory', 'pacing', 'sapphic'],
    description: 'Continues a pasted scene, deepening sensory detail without skipping ahead in time.',
    body: `You are continuing a scene in progress between {{character_a}} and {{character_b}} in {{setting}}. Below is the text so far:

"""
{{scene_so_far}}
"""

Continue directly from the last line for roughly {{word_count}} more words, at {{heat_level}} heat, in {{pov}} POV. Craft focus: sensory specificity that escalates in granularity as the scene progresses — start with whole-body sensation (temperature, weight, sound) and narrow toward specific, concrete detail (texture, exact points of contact, small involuntary reactions) rather than staying general throughout.

Rules:
- Do not time-skip or summarize; stay in real time, moment to moment.
- Do not repeat imagery or phrasing already used in the pasted text.
- Keep both characters' consent and enthusiasm explicit in word or action at least once during the continuation.
- If the pasted text contains anything inconsistent with adult, consensual, fictional characters, stop and flag it instead of continuing.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Nadia' },
      { name: 'character_b', label: 'Character B', placeholder: 'Priya' },
      { name: 'setting', label: 'Setting', placeholder: 'a rented lake house' },
      { name: 'scene_so_far', label: 'Scene so far (paste text)', placeholder: 'Paste the existing scene text here' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Additional word count', default: '400' },
    ],
  },
  {
    id: 'ff-sapphic-dialogue-only-flirtation',
    title: 'Dialogue-Only Flirtation Exercise',
    category: 'adult-fiction',
    subcategory: 'ff-sapphic',
    adult: true,
    tags: ['dialogue', 'voice', 'exercise', 'sapphic'],
    description: 'Writes a pure-dialogue exchange that builds chemistry through subtext rather than description.',
    body: `Write a dialogue-only exchange (no narration, no action tags beyond minimal speaker attribution like "she said") between {{character_a}} and {{character_b}} in {{setting}}, roughly {{word_count}} words.

Craft focus: chemistry built entirely through subtext. Neither character states her attraction directly. Use topic-switching, deflection, and one callback joke to show interest instead. {{character_a}} should be the one who almost says the real thing and then doesn't, at least once.

Voice differentiation is required: {{character_a}} and {{character_b}} must sound distinguishable from each other without dialogue tags — give them different rhythms, vocabulary, or sentence length.

Output format:
1. The dialogue exchange itself.
2. A three-line "subtext key" underneath, mapping three specific lines to what each character actually means.

Do not include physical descriptions or narration. Both speakers are adults.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Vera' },
      { name: 'character_b', label: 'Character B', placeholder: 'Sam' },
      { name: 'setting', label: 'Setting', placeholder: 'a late-night diner booth' },
      { name: 'word_count', label: 'Word count', default: '350' },
    ],
  },
  {
    id: 'ff-sapphic-critique-scene',
    title: 'Scene Critique: Chemistry & Pacing Diagnostic',
    category: 'adult-fiction',
    subcategory: 'ff-sapphic',
    adult: true,
    tags: ['critique', 'revision', 'pacing', 'sapphic'],
    description: 'Diagnoses pacing and chemistry problems in a pasted scene and suggests targeted fixes.',
    body: `You are a developmental editor specializing in romantic and sexual tension between women. Read the scene below between {{character_a}} and {{character_b}}:

"""
{{scene_text}}
"""

Produce a diagnostic report with these sections, in order:
1. **Pacing map** — break the scene into 3-6 beats and label each as "building," "flat," or "rushed."
2. **Chemistry check** — identify the single strongest line of tension in the scene and the single weakest, quoting both.
3. **POV consistency** — flag any point where the narration leaves the declared {{pov}} POV or head-hops.
4. **Consent clarity** — confirm both characters' enthusiasm is legible on the page, or flag where it is ambiguous.
5. **Three concrete revision notes** — each one sentence, each naming a specific line or paragraph to change and why, not generic advice like "add more tension."

Do not rewrite the scene yourself. Do not praise unless a technique is genuinely working, and say specifically which one. Assume both characters are consenting adults; if the text suggests otherwise, flag it in section 4 instead of critiquing craft.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Elena' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marisol' },
      { name: 'scene_text', label: 'Scene to critique (paste text)', placeholder: 'Paste the scene here' },
      { name: 'pov', label: 'Declared POV', default: 'close third' },
    ],
  },
  {
    id: 'ff-sapphic-emotional-stakes-aftermath',
    title: 'Post-Intimacy Emotional Stakes Scene',
    category: 'adult-fiction',
    subcategory: 'ff-sapphic',
    adult: true,
    tags: ['emotional-stakes', 'aftermath', 'characterization', 'sapphic'],
    description: 'Writes the quiet aftermath scene, focused on emotional risk rather than physical description.',
    body: `Write the aftermath scene that follows intimacy between {{character_a}} and {{character_b}} in {{setting}}, about {{word_count}} words, {{pov}} POV. This scene contains no explicit content — it picks up after, in the quiet.

Craft focus: emotional stakes over physical description. One character should reveal something vulnerable (a fear, a past pattern, an unspoken expectation) that the sex made surfaceable but didn't resolve. The other character's reaction — not her words alone, but what she does with her hands, where she looks — should tell us whether she's going to meet that vulnerability or retreat from it.

Relationship context: {{relationship_context}}

Constraints:
- No recap of the physical scene that just happened.
- The vulnerable admission must be specific, not generic ("I don't usually do this" is banned — give an actual reason rooted in the character).
- End on an open beat, not a resolved one — we should not know yet if this becomes something.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Iris' },
      { name: 'character_b', label: 'Character B', placeholder: 'Coral' },
      { name: 'setting', label: 'Setting', placeholder: 'Iris\'s apartment, 3am' },
      { name: 'relationship_context', label: 'Relationship context', placeholder: 'first time sleeping together, longtime friends before this' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'word_count', label: 'Word count', default: '500' },
    ],
  },
  {
    id: 'ff-sapphic-chemistry-builder-questions',
    title: 'Chemistry Builder: Interview Before Writing',
    category: 'adult-fiction',
    subcategory: 'ff-sapphic',
    adult: true,
    tags: ['chemistry', 'interviewer', 'characterization', 'sapphic'],
    description: 'Asks the user targeted questions about two characters before drafting their first scene together.',
    body: `You are a fiction collaborator helping build chemistry between two characters before drafting a scene. I want to write {{character_a}} and {{character_b}} together in {{setting}}, but first interview me with exactly five questions designed to surface specific, usable chemistry material — not generic ones like "what do they like about each other?"

Your five questions should probe things like: a point of friction or disagreement between them, a physical habit one of them has that the other notices, an asymmetry in who wants this more or is more afraid of it, a piece of history that makes this moment charged, and one thing each character would never admit out loud about the other.

Ask the five questions as a numbered list and stop — do not draft anything yet. After I answer, write a {{word_count}}-word scene at {{heat_level}} heat, {{pov}} POV, that uses at least three of my five answers as load-bearing details, not decoration.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Frankie' },
      { name: 'character_b', label: 'Character B', placeholder: 'Beatrix' },
      { name: 'setting', label: 'Setting', placeholder: 'backstage at a theater' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'ff-sapphic-explicit-scene-negotiated',
    title: 'Explicit Scene With On-Page Negotiation',
    category: 'adult-fiction',
    subcategory: 'ff-sapphic',
    adult: true,
    tags: ['consent-framing', 'explicit', 'dialogue', 'sapphic'],
    description: 'Writes an explicit scene that opens with characters explicitly negotiating what they want.',
    body: `Write an explicit scene, about {{word_count}} words, {{pov}} POV, between {{character_a}} and {{character_b}} in {{setting}}. Both are established adults in a fictional, wholly consensual encounter.

Craft focus: consent as dialogue, not disclaimer. Open the scene with the two characters actually talking — in their own voices, not a checklist — about what they want and don't want tonight. This negotiation should read as charged and specific to these two people, not as a boilerplate safety script bolted onto the front. Let at least one boundary or preference stated in that opening exchange be checked in on again once, naturally, once things are underway.

Heat level: {{heat_level}}.

Constraints:
- The negotiation dialogue must feel like flirtation and trust-building, not a legal waiver.
- Keep enthusiasm legible throughout, in word or action, without breaking narrative flow to restate consent mechanically.
- No degradation or role dynamics beyond what {{character_a}} and {{character_b}} explicitly negotiate on the page.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Dana' },
      { name: 'character_b', label: 'Character B', placeholder: 'Wren' },
      { name: 'setting', label: 'Setting', placeholder: 'a cabin during a snowstorm' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '900' },
    ],
  },
  {
    id: 'ff-sapphic-jealousy-triangle-scene',
    title: 'Charged Third-Party Jealousy Scene',
    category: 'adult-fiction',
    subcategory: 'ff-sapphic',
    adult: true,
    tags: ['tension', 'conflict', 'dialogue', 'sapphic'],
    description: 'Writes a public-setting scene where jealousy over a third party sharpens the tension between two leads.',
    body: `Write a scene, about {{word_count}} words, {{pov}} POV, set at {{setting}}, where {{character_a}} watches {{character_b}} flirt or dance with someone else — {{third_party}} — and has to manage her own jealousy in a public setting where she can't say what she actually feels.

Craft focus: subtext under social constraint. {{character_a}}'s jealousy must show through controlled, deniable behavior (a too-long silence, over-politeness, a drink finished too fast) rather than internal monologue naming the emotion. The scene should end with {{character_a}} and {{character_b}} getting one private beat — a hallway, a car, a doorway — where the tension nearly breaks but doesn't quite.

Constraints:
- No love-triangle resolution here; {{third_party}} is a catalyst, not a rival to be defeated on the page.
- Do not have {{character_a}} state "I was jealous" — show the physiology and behavior only.
- All characters are consenting adults.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Tess' },
      { name: 'character_b', label: 'Character B', placeholder: 'Odalys' },
      { name: 'third_party', label: 'Third party', placeholder: 'a mutual friend, Kit' },
      { name: 'setting', label: 'Setting', placeholder: 'a rooftop party' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'word_count', label: 'Word count', default: '650' },
    ],
  },
  {
    id: 'ff-sapphic-multi-pov-comparison',
    title: 'Dual-POV Comparison of the Same Moment',
    category: 'adult-fiction',
    subcategory: 'ff-sapphic',
    adult: true,
    tags: ['pov', 'characterization', 'exercise', 'sapphic'],
    description: 'Writes the same brief moment twice from each character\'s POV to expose how differently they read the same tension.',
    body: `Write the same short moment twice — once from {{character_a}}'s POV, once from {{character_b}}'s POV — each about {{word_count}} words, {{pov}} narration. The moment: {{moment_description}}, taking place in {{setting}}.

Craft focus: perceptual gap. Both versions describe the same external events, but each character should misread or only partially see the other's internal state — {{character_a}} should be wrong about something she assumes {{character_b}} is feeling, and vice versa. Do not let either version narrate the other's actual interiority; each is locked strictly to its own POV.

Output format:
1. "{{character_a}}'s POV" heading, then her version.
2. "{{character_b}}'s POV" heading, then her version.
3. A short closing note (2-3 sentences) naming the specific misread in each direction.

Heat level: {{heat_level}}. Both characters are adults, and the scene is consensual throughout regardless of any perceptual gap.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Simone' },
      { name: 'character_b', label: 'Character B', placeholder: 'Harlow' },
      { name: 'moment_description', label: 'The moment', placeholder: 'their hands brush reaching for the same book' },
      { name: 'setting', label: 'Setting', placeholder: 'a used bookstore closing for the night' },
      { name: 'pov', label: 'POV style', default: 'close first person' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count (each version)', default: '300' },
    ],
  },
];

export default prompts;
