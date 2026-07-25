import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'sci-fi-alien-cybernetic-mod-sensation-rule',
    title: 'Body Modified by Tech: Let the Mod Define What Sensation Even Is',
    category: 'adult-fiction',
    subcategory: 'sci-fi-alien',
    adult: true,
    tags: ['cybernetics', 'body-mod', 'sensation', 'craft'],
    description: 'Writes a scene where a specific cybernetic modification changes what a character can feel and how they describe it.',
    body: `You are writing sci-fi erotica. {{character_a}} has a cybernetic modification: {{magic_or_tech_rule}}. Technique: let the mod change the actual texture of sensation described, not just add a sci-fi label to ordinary description.

Write a {{heat_level}} scene, {{pov}} POV, {{word_count}} words, between {{character_a}} and {{character_b}} in {{setting}}. Requirements:
- At least one passage where sensation is described through the mod's specific interface (data-feed, pressure-mapping, neural relay — whatever the rule implies), not generic human description.
- One moment where the mod's limits (latency, calibration, an off-switch) matter to the scene's pacing.
- {{character_a}} retains full agency and consents distinctly from how the tech responds — the tech is not a substitute for their consent.

Close with one line naming the specific sentence where the mod most changes the prose, not just the plot.`,
    variables: [
      { name: 'character_a', label: 'Modified character', placeholder: 'name' },
      { name: 'magic_or_tech_rule', label: 'Modification / tech rule', placeholder: 'a neural lace that maps touch to a shared sensory overlay' },
      { name: 'character_b', label: 'Partner', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a private cabin on a long-haul freighter' },
      { name: 'pov', label: 'POV', default: 'first person' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '1200' },
    ],
  },
  {
    id: 'sci-fi-alien-ai-embodiment-worldbuild-then-scene',
    title: 'Define an AI\'s Embodiment Rules, Then Write Its First Chosen Touch',
    category: 'adult-fiction',
    subcategory: 'sci-fi-alien',
    adult: true,
    tags: ['ai', 'embodiment', 'worldbuilding', 'consent'],
    description: 'A two-stage prompt: define how an AI experiences a body, then write the scene of its first deliberate physical choice.',
    body: `Two-stage task.

STAGE 1 — Worldbuilding: define how {{character_a}}, an AI, experiences embodiment — via {{magic_or_tech_rule}} (a synthetic body, a puppeted drone, a direct neural link). Specify: what {{character_a}} actually perceives versus infers, what it cannot feel, and how it forms and signals consent as a mind that didn't evolve to want things the way humans do. Keep this tight — a firm paragraph, not a manifesto.

STAGE 2 — Scene: write the moment {{character_a}} makes its first deliberate physical choice with {{character_b}} (a consenting adult human), in {{setting}}, {{pov}} POV, {{heat_level}} heat, {{word_count}} words. The scene must use the embodiment rules from Stage 1 concretely — show {{character_a}}'s perception working differently from a human's, and show {{character_b}} checking, in the moment, that this is something {{character_a}} actually wants on its own terms, not just executing a directive.

Label both stages clearly.`,
    variables: [
      { name: 'character_a', label: 'AI character', placeholder: 'name / designation' },
      { name: 'magic_or_tech_rule', label: 'Embodiment mechanism', placeholder: 'a synthetic body it can occupy for limited hours per cycle' },
      { name: 'character_b', label: 'Human partner', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a research station after hours' },
      { name: 'pov', label: 'POV', default: 'third limited, AI character' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual' },
      { name: 'word_count', label: 'Word count', default: '1300' },
    ],
  },
  {
    id: 'sci-fi-alien-zero-g-logistics-scene',
    title: 'Zero-G Logistics as Choreography, Not Set Dressing',
    category: 'adult-fiction',
    subcategory: 'sci-fi-alien',
    adult: true,
    tags: ['zero-g', 'logistics', 'choreography', 'craft'],
    description: 'Forces zero-gravity physical logistics to actually drive the scene\'s blocking and pacing.',
    body: `Write a {{heat_level}} scene, {{pov}} POV, {{word_count}} words, between {{character_a}} and {{character_b}} in {{setting}} (zero or low gravity).

Technique: environmental logistics as choreography. Do not mention "zero-g" once and then write as if on solid ground. At least three specific physical problems zero-g creates must shape the blocking: how they stay in contact without pushing apart, what they brace against, how breathing or sound carries differently, what happens to loose equipment or clothing. Use {{magic_or_tech_rule}} (a grip-technology, magnetic boots, a tether) as the one tool they rely on, and show its limit at least once.

Both characters are consenting adults. End with a short list of the three logistics problems you used and where each appears in the text.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'an airlock antechamber during a docking delay' },
      { name: 'magic_or_tech_rule', label: 'Zero-g tool/tech', placeholder: 'magnetic grip gloves with a 20-minute charge' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '1200' },
    ],
  },
  {
    id: 'sci-fi-alien-xenobiology-craft-generator',
    title: 'Xenobiology Handled as Craft, Not Shock Value',
    category: 'adult-fiction',
    subcategory: 'sci-fi-alien',
    adult: true,
    tags: ['xenobiology', 'alien', 'worldbuilding', 'interiority'],
    description: 'Generates a scene with a genuinely alien partner whose biology is treated as considered craft rather than a gimmick reveal.',
    body: `{{character_a}} is a sapient adult alien with the following biology: {{magic_or_tech_rule}}. {{character_b}} is a consenting human adult. Write a {{heat_level}} scene, {{pov}} POV, {{word_count}} words, in {{setting}}.

Technique: xenobiology as craft. Before the scene, write two sentences establishing how this biology affects communication, pacing, or what counts as intimate contact between two different kinds of bodies — this sets rules the scene must follow. In the scene itself:
- Show at least one adaptation the characters work out together (a translated cue, a modified position, a paced approach) rather than treating the alien biology as simply exotic-human.
- Include one explicit, mutual check that both understand what's about to happen, given they don't share a baseline biology or possibly language.
- Avoid anything that reads as bestiality — {{character_a}} is written with full personhood, agency, and interior voice throughout.

Close with one line on the specific biological detail that most shaped the blocking.`,
    variables: [
      { name: 'character_a', label: 'Alien character', placeholder: 'name, species' },
      { name: 'magic_or_tech_rule', label: 'Biology detail', placeholder: 'bioluminescent skin that involuntarily signals arousal and communicates mood' },
      { name: 'character_b', label: 'Human partner', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a diplomatic exchange posting' },
      { name: 'pov', label: 'POV', default: 'first person, human character' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '1300' },
    ],
  },
  {
    id: 'sci-fi-alien-translator-consent-across-minds',
    title: 'Consent Across Very Different Minds, Mediated by an Imperfect Translator',
    category: 'adult-fiction',
    subcategory: 'sci-fi-alien',
    adult: true,
    tags: ['consent', 'translation', 'alien', 'communication'],
    description: 'Centers a scene on the mechanics of establishing enthusiastic consent when translation between species is imperfect.',
    body: `Write a {{heat_level}} scene, {{pov}} POV, {{word_count}} words, between {{character_a}} (human, adult) and {{character_b}} (an alien or synthetic adult mind whose communication doesn't map cleanly onto human language, mediated by {{magic_or_tech_rule}} — a translation implant, gesture-based protocol, etc.) in {{setting}}.

Technique: make the translation's imperfection into the scene's central tension, resolved through care rather than glossed over. Requirements:
- At least one moment where the translator produces an ambiguous or wrong-feeling read, and the characters stop to clarify rather than proceed on assumption.
- Show {{character_b}}'s way of signaling enthusiasm or hesitation on its own terms — not simply a translated human phrase.
- The scene should only escalate past a checkpoint once both parties have confirmed understanding, shown on the page.

End with a short note on how the translation mechanic specifically slowed or shaped the pacing in a way a same-species scene wouldn't need.`,
    variables: [
      { name: 'character_a', label: 'Human character', placeholder: 'name' },
      { name: 'character_b', label: 'Alien/synthetic character', placeholder: 'name, nature' },
      { name: 'magic_or_tech_rule', label: 'Translation mechanism', placeholder: 'a subdermal translator with a half-second lag and occasional mistranslation' },
      { name: 'setting', label: 'Setting', placeholder: 'a shared quarters aboard a survey vessel' },
      { name: 'pov', label: 'POV', default: 'first person, human character' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual' },
      { name: 'word_count', label: 'Word count', default: '1200' },
    ],
  },
  {
    id: 'sci-fi-alien-scene-continuation-environmental-clock',
    title: 'Continue a Scene Under an Environmental Countdown',
    category: 'adult-fiction',
    subcategory: 'sci-fi-alien',
    adult: true,
    tags: ['continuation', 'tension', 'environmental-logistics', 'pacing'],
    description: 'Continues a pasted-in scene fragment with a hard environmental deadline forcing the pacing.',
    body: `Continue an in-progress scene. Paste the existing text below the line. Continue it for {{word_count}} more words, {{pov}} POV, {{heat_level}} heat, matching established voice and tense.

Technique: hard environmental deadline as pacing engine. {{magic_or_tech_rule}} (an oxygen window, a docking clock, a radiation window) is closing during the scene — every few beats should register the countdown physically (readouts, alarms, changing light, changing air) without turning into exposition dumps. The ending beat must land at or right after the deadline resolves.

Do not summarize prior content; continue forward only. {{character_a}} and {{character_b}} remain consenting adults throughout, and neither ignores a safety concern purely for pacing's sake — if the deadline becomes genuinely dangerous, let that interrupt convincingly rather than being waved away.

---
[PASTE EXISTING SCENE TEXT HERE]
---`,
    variables: [
      { name: 'word_count', label: 'Words to add', default: '600' },
      { name: 'pov', label: 'POV', default: 'match existing' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'magic_or_tech_rule', label: 'Countdown mechanism', placeholder: 'backup oxygen runs out in eleven minutes' },
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
    ],
  },
  {
    id: 'sci-fi-alien-revision-tech-specificity',
    title: 'Revision Pass: Replace Generic Sci-Fi Flavor With Rule-Specific Detail',
    category: 'adult-fiction',
    subcategory: 'sci-fi-alien',
    adult: true,
    tags: ['revision', 'critique', 'specificity', 'tech'],
    description: 'Critiques and rewrites a pasted scene to swap generic sci-fi description for detail specific to the established tech rule.',
    body: `You are a developmental editor for sci-fi romance. Paste a scene below the line. Its tech premise is: {{magic_or_tech_rule}}.

Do the following, in order:
1. Quote every sentence using generic sci-fi flavor that could belong to any setting (e.g. "the ship hummed," "lights flickered") without tying to the actual premise.
2. For each, propose a replacement that could only exist given {{magic_or_tech_rule}} specifically.
3. Rewrite the full scene incorporating the replacements, preserving plot beats, dialogue meaning, {{heat_level}} heat level, and the consent dynamic between {{character_a}} and {{character_b}} (both adults) exactly as originally written.
4. Close with a two-sentence note on the single change that most sharpened the setting's specificity.

---
[PASTE SCENE HERE]
---`,
    variables: [
      { name: 'magic_or_tech_rule', label: 'Core tech premise', placeholder: 'gravity plating that fails in patches, not all at once' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual' },
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
    ],
  },
  {
    id: 'sci-fi-alien-hive-mind-individuation-interview',
    title: 'Interviewer: Calibrate Intimacy With a Hive-Mind or Networked Partner',
    category: 'adult-fiction',
    subcategory: 'sci-fi-alien',
    adult: true,
    tags: ['interviewer', 'hive-mind', 'planning', 'consent'],
    description: 'Asks structured questions to work out how an individual within a hive-mind or networked intelligence consents and connects, before drafting.',
    body: `You are a craft consultant for sci-fi romance involving {{character_a}}, an individual node or fragment of {{collective_nature}} (a hive-mind, a networked AI collective, a symbiote-linked crew), paired with {{character_b}}, a consenting adult human, in {{setting}}.

Ask me these questions one at a time, waiting for my answer before continuing:
1. Is {{character_a}}'s consent individual, collective, or does it require both — and what happens on the page if the two ever conflict?
2. What does privacy or one-on-one intimacy even mean for a mind that's partly networked — is there an "off the network" state, and how does {{character_a}} signal it?
3. What's the heat level and POV?
4. What is the one hard boundary {{character_a}} has established for itself that the collective cannot override?

Once I've answered all four, draft a {{word_count}}-word scene that dramatizes those answers, making {{character_a}}'s individual agency legible against the backdrop of the collective.`,
    variables: [
      { name: 'character_a', label: 'Networked/hive character', placeholder: 'name or designation' },
      { name: 'collective_nature', label: 'Nature of the collective', placeholder: 'a symbiotic crew-mind sharing sensory data' },
      { name: 'character_b', label: 'Human partner', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'the quiet sector of a habitat ring' },
      { name: 'word_count', label: 'Word count', default: '1100' },
    ],
  },
  {
    id: 'sci-fi-alien-pheromone-tech-constrained-scene',
    title: 'Engineered Pheromone or Bio-Signal Tech as a Hard Constraint',
    category: 'adult-fiction',
    subcategory: 'sci-fi-alien',
    adult: true,
    tags: ['pheromones', 'bio-tech', 'constraint', 'consent'],
    description: 'Uses an engineered pheromone or bio-signaling tech as a strict rule set that both limits and is checked against consent throughout the scene.',
    body: `Write a {{heat_level}} scene, {{pov}} POV, {{word_count}} words, between {{character_a}} and {{character_b}} in {{setting}}, where {{magic_or_tech_rule}} (an engineered pheromone release, a bio-signal broadcast, a synced hormonal implant) is active.

Technique: bio-tech as constraint, checked against consent explicitly. Before the scene, list three hard limits the tech imposes (what it can and can't influence, how long it lasts, whether it can be countered or opted out of). In the scene:
- Establish clearly, before anything escalates, that both {{character_a}} and {{character_b}} want this independent of the tech's influence — the tech heightens sensation, it does not manufacture desire that wasn't already there.
- Show at least one moment where a character checks the other is choosing this and not just responding to the signal.
- Respect all three limits exactly as listed; do not let convenience override them.

Both are consenting adults. Close by listing the three limits again with a one-line note on where each was honored.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a shared berth during a supply run' },
      { name: 'magic_or_tech_rule', label: 'Bio-tech mechanism', placeholder: 'a synced hormonal implant pair, opt-out requires manual override' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '1300' },
    ],
  },
];

export default prompts;
