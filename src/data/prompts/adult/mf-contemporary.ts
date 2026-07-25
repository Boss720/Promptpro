import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'mf-contemporary-meet-charged-scene',
    title: 'Charged First-Meeting Scene Generator',
    category: 'adult-fiction',
    subcategory: 'mf-contemporary',
    adult: true,
    tags: ['tension', 'pov', 'scene-generator', 'contemporary'],
    description: 'Generates a first-meeting scene between a man and woman that plants attraction without stating it.',
    body: `You are a contemporary romance writer. Write a scene of about {{word_count}} words, {{pov}} POV, in which {{character_a}} and {{character_b}} meet for the first time in {{setting}}.

Craft focus: attraction through friction, not description. Give them an immediate practical reason to talk that has nothing to do with romance (a mistake, a shared problem, competing for the same thing), and let the attraction surface as a byproduct of that friction — in banter, in who notices what first, in a beat where one of them almost overstays a moment that should have ended. Do not narrate physical attraction directly ("he found her attractive" is banned).

Heat level: {{heat_level}} (this scene should stay non-explicit regardless of level — it establishes the spark, not the payoff).

Constraints:
- Both characters are adults; establish this contextually (careers, independence, adult social setting) without stating ages baldly.
- End on a specific, concrete unresolved thread (a forgotten object, an unanswered question, an interrupted sentence) that would justify them meeting again.
- If either character is undefined, invent one adult with a concrete job and one contradiction in their personality, and note it at the top.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Marcus, 38, a contractor' },
      { name: 'character_b', label: 'Character B', placeholder: 'Elise, 33, an architect' },
      { name: 'setting', label: 'Setting', placeholder: 'a permit office at closing time' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'mf-contemporary-continuation-escalation',
    title: 'Continuation With Controlled Escalation',
    category: 'adult-fiction',
    subcategory: 'mf-contemporary',
    adult: true,
    tags: ['continuation', 'pacing', 'sensory', 'contemporary'],
    description: 'Continues a pasted scene at a deliberately controlled pace rather than jumping straight to explicit content.',
    body: `Continue the scene below between {{character_a}} and {{character_b}} in {{setting}}. Text so far:

"""
{{scene_so_far}}
"""

Write roughly {{word_count}} more words, {{pov}} POV, at {{heat_level}} heat. Craft focus: controlled escalation — each paragraph should raise physical or emotional intensity by exactly one step, never two. If the pasted text ends at hand-holding, the next beat is not a full explicit scene; it's the next plausible step, given fully, before moving further.

Rules:
- Do not skip pacing steps to reach a "payoff" faster than the established rhythm allows.
- Track whose idea each step is — alternate initiative between {{character_a}} and {{character_b}} rather than having one character drive the entire escalation.
- Keep spoken or clearly signaled consent present at each new step.
- If the pasted text implies anything about the characters' ages or relationship that conflicts with two consenting adults, stop and flag it instead of continuing.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Dez' },
      { name: 'character_b', label: 'Character B', placeholder: 'Naomi' },
      { name: 'setting', label: 'Setting', placeholder: 'a kitchen after a dinner party' },
      { name: 'scene_so_far', label: 'Scene so far (paste text)', placeholder: 'Paste the existing scene text here' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Additional word count', default: '400' },
    ],
  },
  {
    id: 'mf-contemporary-dialogue-only-argument-turn',
    title: 'Dialogue-Only Exercise: Argument That Turns',
    category: 'adult-fiction',
    subcategory: 'mf-contemporary',
    adult: true,
    tags: ['dialogue', 'voice', 'exercise', 'contemporary'],
    description: 'Writes a pure-dialogue argument between two leads that pivots into charged tension without a scene break.',
    body: `Write a dialogue-only exchange (minimal attribution only, no narration or action description) between {{character_a}} and {{character_b}} in {{setting}}, about {{word_count}} words. They start in a genuine argument about {{argument_topic}} and, without a scene break or authorial comment, the exchange pivots into charged, unresolved tension — the same energy, redirected.

Craft focus: the pivot must happen through what's said, not through stage direction. Give each character a distinct verbal rhythm — {{character_a}} and {{character_b}} should be identifiable from dialogue alone.

Output format:
1. The dialogue exchange.
2. A one-line note identifying exactly which line marks the pivot and why it works.

No physical description, no explicit content — this is a voice and pacing exercise only. Both characters are adults with a pre-existing relationship implied by the argument's specificity.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Theo' },
      { name: 'character_b', label: 'Character B', placeholder: 'Cass' },
      { name: 'setting', label: 'Setting', placeholder: 'a car in a parking lot' },
      { name: 'argument_topic', label: 'Argument topic', placeholder: 'who was supposed to call the movers' },
      { name: 'word_count', label: 'Word count', default: '350' },
    ],
  },
  {
    id: 'mf-contemporary-critique-scene-diagnostic',
    title: 'Scene Critique: Stakes & Consent Diagnostic',
    category: 'adult-fiction',
    subcategory: 'mf-contemporary',
    adult: true,
    tags: ['critique', 'revision', 'consent-framing', 'contemporary'],
    description: 'Diagnoses emotional stakes, pacing, and consent clarity in a pasted contemporary romance scene.',
    body: `You are a developmental editor for contemporary romance. Read the scene below between {{character_a}} and {{character_b}}:

"""
{{scene_text}}
"""

Return a diagnostic report with these sections:
1. **Stakes audit** — what does each character stand to lose or risk by this scene happening? If the text doesn't make this clear, say so explicitly.
2. **Pacing map** — break the scene into 3-6 beats, labeling each "building," "flat," or "rushed."
3. **Consent clarity** — quote the clearest moment of legible enthusiasm from each character, or flag its absence.
4. **Cliché check** — flag any line or beat that reads as a genre cliché used without a twist, and suggest (in one sentence, not a rewrite) what would make it specific to these two characters.
5. **Single highest-leverage fix** — one concrete note on the change that would most improve the scene.

Do not rewrite the scene. Assume both characters are adults; if the text suggests otherwise, flag it under consent clarity rather than critiquing craft elsewhere.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Owen' },
      { name: 'character_b', label: 'Character B', placeholder: 'Priya' },
      { name: 'scene_text', label: 'Scene to critique (paste text)', placeholder: 'Paste the scene here' },
    ],
  },
  {
    id: 'mf-contemporary-emotional-stakes-vulnerability',
    title: 'Vulnerability-Forward Emotional Stakes Scene',
    category: 'adult-fiction',
    subcategory: 'mf-contemporary',
    adult: true,
    tags: ['emotional-stakes', 'characterization', 'pacing', 'contemporary'],
    description: 'Writes a non-explicit scene where intimacy is emotional risk-taking rather than physical description.',
    body: `Write a scene, about {{word_count}} words, {{pov}} POV, between {{character_a}} and {{character_b}} in {{setting}}, where the intimacy is emotional rather than physical: one of them says something true they've been avoiding, prompted by {{trigger_event}}.

Craft focus: vulnerability as the load-bearing beat. The admission from {{character_a}} or {{character_b}} (your choice — pick whichever is more interesting given the setup) must cost something specific — reveal a fear, an old failure, or a belief about themselves that the relationship is now testing. The other character's response should be shown through a concrete choice (what they do next, not a reassuring speech) rather than a tidy comforting monologue.

Constraints:
- No explicit content in this prompt — this is about emotional, not physical, intimacy.
- Ban the phrase "I've never told anyone this" and any close variant; find a way into the admission that isn't a stock opener.
- End before full resolution; the vulnerability should land but not be neatly fixed in the same scene.
- Both characters are adults.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Jonah' },
      { name: 'character_b', label: 'Character B', placeholder: 'Ada' },
      { name: 'setting', label: 'Setting', placeholder: 'a hospital waiting room' },
      { name: 'trigger_event', label: 'Trigger event', placeholder: 'a scare with a family member' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'word_count', label: 'Word count', default: '550' },
    ],
  },
  {
    id: 'mf-contemporary-chemistry-interview',
    title: 'Chemistry Builder: Pre-Scene Interview',
    category: 'adult-fiction',
    subcategory: 'mf-contemporary',
    adult: true,
    tags: ['chemistry', 'interviewer', 'characterization', 'contemporary'],
    description: 'Asks the user five targeted questions about a couple before drafting their scene, to surface specific chemistry material.',
    body: `You are a fiction collaborator. Before drafting a scene between {{character_a}} and {{character_b}} in {{setting}}, ask me exactly five questions to gather chemistry material — avoid generic ones like "why are they attracted to each other?"

Ask about things like: a specific disagreement they keep circling back to, a habit one has that secretly charms or annoys the other, what each is afraid the other will find out, who is more emotionally exposed right now and why, and one piece of shared history that makes this moment loaded.

List the five questions and stop; do not draft yet. Once I answer, write a {{word_count}}-word scene, {{pov}} POV, {{heat_level}} heat, that uses at least three of my answers as specific, load-bearing details rather than surface color.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Ray' },
      { name: 'character_b', label: 'Character B', placeholder: 'Junie' },
      { name: 'setting', label: 'Setting', placeholder: 'a road trip, hour six' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'mf-contemporary-explicit-scene-negotiated',
    title: 'Explicit Scene With On-Page Negotiation',
    category: 'adult-fiction',
    subcategory: 'mf-contemporary',
    adult: true,
    tags: ['consent-framing', 'explicit', 'dialogue', 'contemporary'],
    description: 'Writes an explicit scene that opens with the couple explicitly and naturally negotiating what they want.',
    body: `Write an explicit scene, about {{word_count}} words, {{pov}} POV, between {{character_a}} and {{character_b}} in {{setting}}. Both are adults in a fictional, fully consensual encounter.

Craft focus: negotiation as characterization. Open with the two of them actually talking about what they want tonight, in voices specific to them — one might be direct, the other might need to work up to saying it plainly — rather than a generic script. This exchange should double as characterization, revealing something about how each of them handles wanting something openly. Check back in on at least one stated preference once things are underway, in a way that feels natural rather than procedural.

Heat level: {{heat_level}}.

Constraints:
- Enthusiasm must stay legible throughout without breaking flow to restate consent mechanically.
- No coercion, no ambiguity about willingness from either character at any point.
- No content implying either character is anything other than a fully consenting adult.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Leo' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marisol' },
      { name: 'setting', label: 'Setting', placeholder: 'a hotel room after a wedding' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '900' },
    ],
  },
  {
    id: 'mf-contemporary-reunion-scene-history',
    title: 'Charged Reunion Scene With History',
    category: 'adult-fiction',
    subcategory: 'mf-contemporary',
    adult: true,
    tags: ['tension', 'backstory', 'dialogue', 'contemporary'],
    description: 'Writes a reunion scene between exes or estranged partners where unresolved history colors present tension.',
    body: `Write a scene, about {{word_count}} words, {{pov}} POV, in which {{character_a}} and {{character_b}} — who have a shared history described as: {{shared_history}} — run into each other again in {{setting}} after {{time_apart}} apart.

Craft focus: history as subtext, not exposition. Do not deliver the backstory as a dumped explanation; let it surface through what they avoid saying, what one notices has or hasn't changed about the other, and one small physical tell that gives away that the old feeling hasn't actually died. The dialogue should sound like two people managing a conversation, not narrating their past to the reader.

Constraints:
- No flashback scene — stay in present time throughout.
- At least one line of dialogue should mean something different to the reader (who has context) than it appears to mean on its surface.
- Heat level stays at {{heat_level}} — this scene is about charge, not payoff.
- Both characters are adults.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Nate' },
      { name: 'character_b', label: 'Character B', placeholder: 'Willa' },
      { name: 'shared_history', label: 'Shared history', placeholder: 'engaged once, called it off two weeks before the wedding' },
      { name: 'time_apart', label: 'Time apart', placeholder: 'four years' },
      { name: 'setting', label: 'Setting', placeholder: 'a mutual friend\'s engagement party' },
      { name: 'pov', label: 'POV', default: 'close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count', default: '650' },
    ],
  },
  {
    id: 'mf-contemporary-dual-pov-comparison',
    title: 'Dual-POV Comparison of the Same Moment',
    category: 'adult-fiction',
    subcategory: 'mf-contemporary',
    adult: true,
    tags: ['pov', 'characterization', 'exercise', 'contemporary'],
    description: 'Writes the same brief moment from each character\'s POV to expose the gap between what each assumes and what\'s true.',
    body: `Write the same short moment twice — once from {{character_a}}'s POV, once from {{character_b}}'s POV — each about {{word_count}} words, {{pov}} narration. The moment: {{moment_description}}, in {{setting}}.

Craft focus: perceptual gap. Both versions cover the same external events, but each character should misjudge something about what the other is thinking or feeling in that moment — and the misjudgment should be specific enough to matter later in a story, not a throwaway detail. Each version stays strictly locked to its own POV; neither may narrate the other's actual interiority.

Output format:
1. "{{character_a}}'s POV" heading, then the version.
2. "{{character_b}}'s POV" heading, then the version.
3. A short closing note (2-3 sentences) naming the specific misread in each direction and why it would matter if the story continued.

Heat level: {{heat_level}}. Both characters are adults, and any implied history between them is consensual.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Sam' },
      { name: 'character_b', label: 'Character B', placeholder: 'Callie' },
      { name: 'moment_description', label: 'The moment', placeholder: 'a slow dance neither of them planned' },
      { name: 'setting', label: 'Setting', placeholder: 'a friend\'s backyard wedding' },
      { name: 'pov', label: 'POV style', default: 'close first person' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count (each version)', default: '300' },
    ],
  },
];

export default prompts;
