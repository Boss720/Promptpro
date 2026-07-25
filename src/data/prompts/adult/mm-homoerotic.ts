import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'mm-homoerotic-slow-burn-scene',
    title: 'Slow-Burn Tension Scene Generator',
    category: 'adult-fiction',
    subcategory: 'mm-homoerotic',
    adult: true,
    tags: ['tension', 'pacing', 'mm', 'scene', 'pov'],
    description: 'Generates a scene that builds physical tension between two men through delay, not exposition.',
    body: `You are a fiction writer specializing in slow-burn romantic and sexual tension between men.

Write a scene of approximately {{word_count}} words, told in {{pov}} point of view, featuring {{character_a}} and {{character_b}} in {{setting}}. Both characters are adults.

Craft focus: tension through *delay*. Do not let the characters touch until at least two-thirds of the way through the scene. Build tension using:
- Proximity without contact (shared space, near-misses)
- Interrupted or deflected dialogue that means more than it says
- One character noticing physical detail about the other (hands, breath, posture) without commenting on it
- A small excuse to close distance that neither character acknowledges as intentional

Heat level: {{heat_level}}. If explicit, the physical content should arrive only in the final third and should escalate gradually rather than jumping straight to the act.

End the scene before full resolution — on a held breath, a first touch, or a question left unanswered. Do not summarize what happens next.`,
    variables: [
      { name: 'word_count', label: 'Word count', default: '900' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
    ],
  },
  {
    id: 'mm-homoerotic-first-time-scene',
    title: 'First-Time-Together Explicit Scene',
    category: 'adult-fiction',
    subcategory: 'mm-homoerotic',
    adult: true,
    tags: ['scene', 'consent', 'sensory', 'emotional-stakes', 'mm'],
    description: 'Writes a first-time sexual encounter between two men grounded in consent and emotional stakes.',
    body: `Write a scene, roughly {{word_count}} words, in which {{character_a}} and {{character_b}} — both consenting adults — have sex together for the first time, in {{setting}}.

Craft requirements:
1. Open with an explicit, in-scene moment of mutual consent — spoken or clearly, unambiguously communicated — before any escalation. Make it feel natural to the characters' voices, not procedural.
2. Track at least two sensory channels beyond sight (touch, sound, smell, taste) throughout, not just at the peak.
3. Give each character one internal thought that reveals what this encounter *means* to them emotionally, distinct from physical sensation.
4. Heat level: {{heat_level}} — write to that level consistently; do not undershoot or overshoot it.
5. POV: {{pov}}.

Avoid clinical language and avoid euphemism-soup — pick a register for body language and stay consistent. End on an emotional beat, not a fade-out cliché.`,
    variables: [
      { name: 'word_count', label: 'Word count', default: '1200' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'POV', default: 'third limited' },
    ],
  },
  {
    id: 'mm-homoerotic-continue-scene',
    title: 'Continue My Scene, Matching Voice',
    category: 'adult-fiction',
    subcategory: 'mm-homoerotic',
    adult: true,
    tags: ['continuation', 'voice', 'pacing', 'mm'],
    description: 'Continues a pasted-in scene between two men while matching its existing voice and pacing.',
    body: `You are continuing a piece of fiction already in progress. Below is the existing text featuring {{character_a}} and {{character_b}}, both adults, in {{setting}}.

--- EXISTING TEXT ---
{{existing_text}}
--- END EXISTING TEXT ---

Before writing, silently note: point of view, tense, sentence rhythm (short/punchy vs. long/flowing), and the emotional register of the last paragraph.

Continue for approximately {{word_count}} more words at heat level {{heat_level}}, matching those elements exactly — do not shift POV or tense, do not suddenly speed up pacing relative to what precedes it. The continuation should escalate the physical and emotional stakes rather than restate what already happened. Do not reintroduce the characters or re-describe the setting; assume full continuity.`,
    variables: [
      { name: 'existing_text', label: 'Existing text to continue' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Additional word count', default: '600' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
    ],
  },
  {
    id: 'mm-homoerotic-revision-critique',
    title: 'Scene Critique: Tension & Pacing Pass',
    category: 'adult-fiction',
    subcategory: 'mm-homoerotic',
    adult: true,
    tags: ['revision', 'critique', 'pacing', 'craft', 'mm'],
    description: 'Critiques a draft mm scene specifically for pacing, tension, and sensory balance, then revises it.',
    body: `You are a developmental editor specializing in romantic and sexual fiction between men. Below is a draft scene between {{character_a}} and {{character_b}}.

--- DRAFT ---
{{draft_text}}
--- END DRAFT ---

Step 1 — Critique (bullet list, 5-8 points): assess pacing (does tension build or does it rush/stall?), sensory balance (is sight overused relative to touch/sound?), dialogue naturalism, and whether the emotional stakes are legible on the page, not just implied. Name the single biggest weakness first.

Step 2 — Revised excerpt: rewrite only the weakest 150-250 word span you identified, at the same heat level ({{heat_level}}), demonstrating the fix. Do not rewrite the whole scene.

Step 3 — One sentence on what a full revision pass should prioritize next.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'draft_text', label: 'Draft scene text' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
    ],
  },
  {
    id: 'mm-homoerotic-chemistry-builder',
    title: 'Chemistry Builder: Five Charged Exchanges',
    category: 'adult-fiction',
    subcategory: 'mm-homoerotic',
    adult: true,
    tags: ['chemistry', 'dialogue', 'characterization', 'mm'],
    description: 'Generates five short charged exchanges to establish chemistry before any physical scene.',
    body: `You are building romantic and sexual chemistry between {{character_a}} and {{character_b}} before any physical scene occurs, for use in a longer work set in {{setting}}.

Generate five short, self-contained exchanges (dialogue plus minimal action beats, 60-120 words each) that could occur at different points in a story to build tension between them. Each exchange must use a *different* technique:

1. Banter that thinly masks attraction — competitive or teasing.
2. A moment of unexpected vulnerability from one character that the other handles with unexpected gentleness.
3. Physical proximity forced by circumstance (not romantic intent) that both characters notice.
4. A callback/inside reference that shows history or intimacy without stating it.
5. A near-confession that gets deflected by one of them.

Label each exchange with its technique. Keep both characters' established voices consistent throughout — ask me for voice notes if none are given.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting / story context' },
    ],
  },
  {
    id: 'mm-homoerotic-dialogue-only',
    title: 'Dialogue-Only Pillow Talk Exercise',
    category: 'adult-fiction',
    subcategory: 'mm-homoerotic',
    adult: true,
    tags: ['dialogue', 'exercise', 'characterization', 'mm', 'aftercare'],
    description: 'Writes a dialogue-only aftermath conversation between two men, with no action lines or narration.',
    body: `Write a dialogue-only exchange (no narration, no action beats, no description — speaker tags only) between {{character_a}} and {{character_b}} in the moments after intimacy, in {{setting}}.

Constraints:
- Pure dialogue: "Name: line" format only, roughly {{word_count}} words total.
- Reveal through subtext what each character is feeling — one is more emotionally exposed than they intend to be; the other is deflecting with humor or practicality.
- Include at least one line that recontextualizes something from earlier in their relationship (invent a plausible shared history beat if none is given).
- No physical description of the sex that just happened — this is the conversation after, not a recap.
- End on a line that leaves the relationship's next step genuinely uncertain.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '400' },
    ],
  },
  {
    id: 'mm-homoerotic-power-dynamic-scene',
    title: 'Negotiated Power-Dynamic Scene',
    category: 'adult-fiction',
    subcategory: 'mm-homoerotic',
    adult: true,
    tags: ['scene', 'consent', 'power-dynamics', 'mm', 'dialogue'],
    description: 'Writes a dominance/submission scene between two men that opens with explicit negotiation.',
    body: `Write a scene of about {{word_count}} words between {{character_a}} and {{character_b}}, two consenting adults, exploring a {{dynamic}} dynamic, set in {{setting}}.

Structure it in two clearly distinct movements:
1. **Negotiation** (roughly the first quarter): the characters explicitly discuss boundaries, a safeword or check-in method, and what each wants from the scene, in dialogue that sounds like them, not a checklist. This is not skippable and should not be rushed.
2. **Scene** (the remainder, at heat level {{heat_level}}): the dynamic plays out. Show one moment where a boundary from the negotiation is respected in the heat of the moment — proof the negotiation mattered.

POV: {{pov}}. Keep the power exchange consensual and legible as a scene both characters are enjoying — no ambiguity about willingness once the scene begins.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'dynamic', label: 'Power dynamic', default: 'dominant/submissive', placeholder: 'dominant/submissive, service-oriented, praise-based' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '1000' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'POV', default: 'third limited' },
    ],
  },
  {
    id: 'mm-homoerotic-jealousy-catalyst',
    title: 'Jealousy-as-Catalyst Scene',
    category: 'adult-fiction',
    subcategory: 'mm-homoerotic',
    adult: true,
    tags: ['emotional-stakes', 'scene', 'conflict', 'mm'],
    description: 'Uses a jealousy trigger to force an emotional confrontation that turns physical.',
    body: `Write a scene of roughly {{word_count}} words in which {{character_a}} witnesses {{character_b}} in a situation that triggers jealousy or possessiveness (invent a plausible trigger — a flirtatious third party, an old flame, an ambiguous compliment — fitting {{setting}}), and the confrontation that follows turns into intimacy between them.

Craft focus: emotional causality. The jealousy must be shown through specific behavior (clipped speech, a too-careful tone, a refusal to make eye contact) rather than stated outright. The turn from confrontation to intimacy needs a believable hinge moment — a confession, an admission, or a physical impulse neither planned — not an abrupt cut.

Heat level: {{heat_level}}. POV: {{pov}}. Keep both characters' consent clear and mutual once things turn physical, even though the emotional tone is charged and a little raw.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '900' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'pov', label: 'POV', default: 'third limited' },
    ],
  },
  {
    id: 'mm-homoerotic-outline-interview',
    title: 'Scene Architect: Interview Then Outline',
    category: 'adult-fiction',
    subcategory: 'mm-homoerotic',
    adult: true,
    tags: ['outline', 'interviewer', 'structure', 'mm', 'planning'],
    description: 'Asks clarifying questions before producing a beat-by-beat outline for an mm scene.',
    body: `You are a fiction outlining assistant. I want to write a scene between {{character_a}} and {{character_b}} in {{setting}}, heat level {{heat_level}}, but I have not fully planned it.

Step 1: Ask me up to five targeted questions before outlining — cover at minimum: what emotional change each character should undergo, what if anything is at stake beyond the physical, and any hard limits or must-include beats. Do not ask generic questions you could infer from what I've already given you.

Step 2: Once I answer (or if I say "just proceed with reasonable assumptions"), produce a beat-by-beat outline (8-12 beats) for a scene of approximately {{word_count}} words, marking which beats are emotional turns versus physical escalation, and noting the POV ({{pov}}) at each beat if it shifts.

Do not write prose yet — outline only, until I approve it.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Target word count', default: '1500' },
      { name: 'pov', label: 'POV', default: 'third limited' },
    ],
  },
];

export default prompts;
