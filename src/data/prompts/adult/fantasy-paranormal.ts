import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'fantasy-paranormal-cost-of-magic-scene',
    title: 'Magic With a Price, Written Into the Scene',
    category: 'adult-fiction',
    subcategory: 'fantasy-paranormal',
    adult: true,
    tags: ['magic-system', 'worldbuilding', 'consent', 'craft'],
    description: 'Writes an intimate scene where a magic-cost rule directly shapes the physical and emotional beats.',
    body: `You are a fantasy-romance author. Technique: magic-with-a-cost as scene structure, not backdrop — the rule below must alter blocking, pacing, or dialogue, not just get mentioned once.

Rule: {{magic_or_tech_rule}}

Write a {{heat_level}} scene, {{pov}} POV, {{word_count}} words, between {{character_a}} and {{character_b}} in {{setting}}. The cost of the magic must create a real complication inside the scene — a choice one of them makes, a limit they hit, a bargain they strike in the moment. Do not let the rule sit inert; show at least one point where it forces a decision.

Both characters are consenting adults; make that clear through behavior, not disclaimers. End with a one-paragraph note explaining exactly how the cost rule shaped the scene's structure.`,
    variables: [
      { name: 'magic_or_tech_rule', label: 'Magic cost/rule', placeholder: 'shared pleasure drains the caster\'s lifeforce into the bonded partner' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'word_count', label: 'Word count', default: '1200' },
      { name: 'character_a', label: 'Character A', placeholder: 'name, species, role' },
      { name: 'character_b', label: 'Character B', placeholder: 'name, species, role' },
      { name: 'setting', label: 'Setting', placeholder: 'a warded tower during a siege' },
    ],
  },
  {
    id: 'fantasy-paranormal-soul-bond-worldbuild-then-scene',
    title: 'Design the Bond Mark, Then Write Its First Activation',
    category: 'adult-fiction',
    subcategory: 'fantasy-paranormal',
    adult: true,
    tags: ['bond', 'worldbuilding', 'mark', 'two-part'],
    description: 'A two-stage prompt: first define a bond-mark system with rules, then write the scene where it first activates.',
    body: `Two-stage task for a paranormal-romance piece.

STAGE 1 — Worldbuilding: design a bond-mark or claiming-mark system linking {{character_a}} and {{character_b}}. Specify: how it forms, what it costs each party, what it lets them sense or do, and one hard limit it cannot override (consent must remain a limit it cannot override). Keep this to a tight paragraph, not lore-dump length.

STAGE 2 — Scene: using only the rules you just defined, write the moment the mark first fully activates, in {{setting}}, {{pov}} POV, {{heat_level}} heat, {{word_count}} words. Both characters must consent to what the mark is doing to them in the scene itself — show one of them naming what's happening and the other affirming it. The physical sensations described must trace directly back to a rule from Stage 1.

Label the two stages clearly in your output.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name, species' },
      { name: 'character_b', label: 'Character B', placeholder: 'name, species' },
      { name: 'setting', label: 'Setting', placeholder: 'a moonlit grove' },
      { name: 'pov', label: 'POV', default: 'first person' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '1400' },
    ],
  },
  {
    id: 'fantasy-paranormal-immortal-mortal-asymmetry',
    title: 'Immortal/Mortal Lifespan Asymmetry as Emotional Undertow',
    category: 'adult-fiction',
    subcategory: 'fantasy-paranormal',
    adult: true,
    tags: ['immortal', 'grief', 'pacing', 'interiority'],
    description: 'Writes a scene where the age/lifespan gap between an immortal and mortal partner colors the intimacy without becoming the whole plot.',
    body: `Write a {{heat_level}} scene, {{pov}} POV, {{word_count}} words, between {{character_a}} (immortal or long-lived) and {{character_b}} (mortal), both adults, in {{setting}}.

Technique: lifespan asymmetry as undertow, not spoken theme. Do not have either character deliver a speech about mortality. Instead let the immortal's pacing, restraint, or attention to detail betray an awareness of time the mortal doesn't share — show it through one specific sensory choice (what they notice, what they save, what they refuse to rush) rather than exposition.

Keep the scene physically grounded and consensual throughout — both characters are enthusiastic, adult participants. Close with a two-sentence craft note identifying the exact line where the asymmetry surfaces and why it works there rather than earlier.`,
    variables: [
      { name: 'character_a', label: 'Immortal character', placeholder: 'name, what kind of immortal, how old' },
      { name: 'character_b', label: 'Mortal character', placeholder: 'name, age, role' },
      { name: 'setting', label: 'Setting', placeholder: 'a quiet inn on the last night before parting' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual' },
      { name: 'word_count', label: 'Word count', default: '1000' },
    ],
  },
  {
    id: 'fantasy-paranormal-monstrous-partner-interiority',
    title: 'Monstrous Partner Given Full Interiority',
    category: 'adult-fiction',
    subcategory: 'fantasy-paranormal',
    adult: true,
    tags: ['monster-romance', 'pov', 'interiority', 'nonhuman'],
    description: 'Writes from inside the head of a non-human partner so their desire reads as alien logic, not a human in a costume.',
    body: `You are drafting monster-romance. {{character_a}} is a non-human sapient adult being — {{nonhuman_nature}} — written from the inside, {{pov}} POV, so their sensory processing, desire, and restraint follow logic native to what they are, not human affect pasted onto a human body. {{character_b}} is a consenting human adult.

Write a {{heat_level}} scene, {{word_count}} words, in {{setting}}. Requirements:
- At least two moments where {{character_a}}'s non-human physiology or perception changes what the scene's beats even are (what counts as intimate, how they read consent, what pleasure registers as).
- {{character_a}} must check in on consent in a way consistent with how their kind actually communicates, not a generic human line dropped in.
- No sexualization of anything that reads as animal — this is a sapient adult being with agency and interior life, treated as a full character, not a creature.

End with one line naming the specific non-human trait you used to differentiate the interiority.`,
    variables: [
      { name: 'character_a', label: 'Non-human character', placeholder: 'name' },
      { name: 'nonhuman_nature', label: 'Nature of the non-human partner', placeholder: 'a dragon-shifter who perceives emotion as heat signatures' },
      { name: 'character_b', label: 'Human character', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a cliffside den' },
      { name: 'pov', label: 'POV', default: 'first person, non-human character' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '1300' },
    ],
  },
  {
    id: 'fantasy-paranormal-scene-continuation-rising-stakes',
    title: 'Continue an In-Progress Scene Under a Ticking Rule',
    category: 'adult-fiction',
    subcategory: 'fantasy-paranormal',
    adult: true,
    tags: ['continuation', 'tension', 'stakes', 'pacing'],
    description: 'Continues a pasted-in scene fragment, escalating tension using a worldbuilding rule with a countdown quality.',
    body: `You are continuing an in-progress scene. Paste the existing text below the line. Continue it for {{word_count}} more words, {{pov}} POV, {{heat_level}} heat, matching established voice and tense.

Technique: use {{magic_or_tech_rule}} as a ticking clock — it should make the scene's stakes rise measurably as it continues (a countdown, a building sensation, an approaching deadline), and the ending beat must land on or just after that clock resolves, not before.

Do not restate or summarize what came before; continue forward only. Keep {{character_a}} and {{character_b}} as consenting adults throughout, and preserve any established power dynamic without escalating it into anything non-consensual.

---
[PASTE EXISTING SCENE TEXT HERE]
---`,
    variables: [
      { name: 'word_count', label: 'Words to add', default: '600' },
      { name: 'pov', label: 'POV', default: 'match existing' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'magic_or_tech_rule', label: 'Ticking-clock rule', placeholder: 'the binding spell fully seals at moonset' },
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
    ],
  },
  {
    id: 'fantasy-paranormal-revision-sensory-specificity',
    title: 'Revision Pass: Replace Generic Description With Setting-Specific Sensory Detail',
    category: 'adult-fiction',
    subcategory: 'fantasy-paranormal',
    adult: true,
    tags: ['revision', 'sensory-detail', 'critique', 'setting'],
    description: 'Critiques and rewrites a pasted scene to replace generic sensory language with details unique to its fantasy setting.',
    body: `You are a developmental editor specializing in fantasy romance. Paste a scene below the line. It is set in {{setting}}.

Do the following, in order:
1. List every sentence that uses generic sensory language that could belong to any setting (e.g. "his skin was warm," "she gasped") — quote each one.
2. For each, propose a replacement grounded specifically in {{setting}} and the established magic/world rule ({{magic_or_tech_rule}}) — something that could not be dropped into an unrelated scene unchanged.
3. Rewrite the full scene incorporating the replacements, preserving plot beats, dialogue meaning, and the {{heat_level}} heat level. Keep both {{character_a}} and {{character_b}} as consenting adults throughout.
4. Close with a two-sentence note on which single change most improved the scene's specificity.

---
[PASTE SCENE HERE]
---`,
    variables: [
      { name: 'setting', label: 'Setting', placeholder: 'a floating spire above a storm-sea' },
      { name: 'magic_or_tech_rule', label: 'Relevant world rule', placeholder: 'ambient magic thickens the air near ley lines' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual' },
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
    ],
  },
  {
    id: 'fantasy-paranormal-dubcon-fiction-frame-generator',
    title: 'Negotiated Dubcon-as-Fiction Frame Generator',
    category: 'adult-fiction',
    subcategory: 'fantasy-paranormal',
    adult: true,
    tags: ['dubcon', 'consent-framing', 'roleplay-within-fiction', 'generator'],
    description: 'Generates a scene using a consent-play trope, with the negotiated real-world consent made explicit around the fiction.',
    body: `Write a scene using {{trope}} (e.g. a curse-induced compulsion, a bargain with ambiguous terms) as a dubcon trope, {{pov}} POV, {{heat_level}} heat, {{word_count}} words, between {{character_a}} and {{character_b}} in {{setting}}.

Technique: negotiated fiction framing. Before the scene itself, write a two-line out-of-scene frame establishing that {{character_a}} and {{character_b}} are adults who have agreed to explore this trope as fiction — treat this the way a tabletop table negotiates a scene, not as a disclaimer bolted on. Inside the scene, the in-fiction ambiguity belongs to the trope's premise, never to whether the real people involved consented — that must never be in doubt. Include one moment of in-fiction checking-in that reads as the trope's internal logic (a curse-breaker phrase, a safeword folded into the world) rather than breaking the fourth wall.

No character is a minor. No real people. End with the scene; do not add a disclaimer after it — the frame goes before.`,
    variables: [
      { name: 'trope', label: 'Dubcon trope', placeholder: 'a compulsion curse with a spoken release word' },
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a cursed keep' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '1200' },
    ],
  },
  {
    id: 'fantasy-paranormal-power-imbalance-craft-interview',
    title: 'Interviewer: Calibrate a Power-Imbalanced Pairing Before Drafting',
    category: 'adult-fiction',
    subcategory: 'fantasy-paranormal',
    adult: true,
    tags: ['interviewer', 'power-dynamics', 'planning', 'consent'],
    description: 'Asks the user structured questions to calibrate a power-imbalanced fantasy pairing before drafting the scene.',
    body: `You are a craft consultant for fantasy romance involving a power-imbalanced pairing (e.g. fae lord and mortal, ancient vampire and newly-turned partner) — {{character_a}} and {{character_b}} in {{setting}}.

Before drafting anything, ask me these questions one at a time, waiting for my answer before moving to the next:
1. What specifically creates the power gap — knowledge, magic, social rank, age — and is it fixed or does it shift across the story?
2. How does {{character_b}} exercise agency despite the gap? Name one concrete way they say no, negotiate, or set a term, and have it hold.
3. What's the heat level and POV?
4. Is there a hard limit the more powerful character has bound themselves to (a vow, a rule, a personal line) that keeps the imbalance from tipping into non-consent?

Once I've answered all four, draft a {{word_count}}-word scene that puts my answers into practice, making {{character_b}}'s agency visible on the page rather than asserted.`,
    variables: [
      { name: 'character_a', label: 'More powerful character', placeholder: 'name' },
      { name: 'character_b', label: 'Less powerful character', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a fae court' },
      { name: 'word_count', label: 'Word count', default: '1000' },
    ],
  },
  {
    id: 'fantasy-paranormal-shifter-rut-rule-constrained-scene',
    title: 'Shifter Rut/Heat Cycle as a Hard Constraint on the Scene',
    category: 'adult-fiction',
    subcategory: 'fantasy-paranormal',
    adult: true,
    tags: ['shifter', 'biology-as-rule', 'constraint', 'pacing'],
    description: 'Uses a shifter biological cycle as a strict rule set that limits what characters can do and choose in the scene.',
    body: `Write a {{heat_level}} scene, {{pov}} POV, {{word_count}} words, involving {{character_a}} (a shifter in {{cycle_phase}}) and {{character_b}} in {{setting}}.

Technique: biology-as-constraint. Define, in one short list before the scene, three hard limits the cycle imposes (e.g. what {{character_a}} cannot control, what triggers a shift, what a partner must do to keep things safe). The scene must respect all three limits exactly — do not let convenience override a limit you set. {{character_b}} must have a genuine, exercised opt-out or pacing control point during the scene, and {{character_a}}'s heightened state never overrides {{character_b}}'s stated limits.

Both are consenting adults. After the scene, list the three limits again and confirm, in one line each, where in the text each was honored.`,
    variables: [
      { name: 'character_a', label: 'Shifter character', placeholder: 'name, species' },
      { name: 'cycle_phase', label: 'Cycle/phase', placeholder: 'rut, three days after the full moon' },
      { name: 'character_b', label: 'Partner', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a warded cabin' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '1300' },
    ],
  },
];

export default prompts;
