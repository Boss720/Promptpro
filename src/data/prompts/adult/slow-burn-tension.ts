import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'slow-burn-tension-escalation-ladder',
    title: 'Slow-Burn Escalation Ladder',
    category: 'adult-fiction',
    subcategory: 'slow-burn-tension',
    adult: true,
    tags: ['slow-burn', 'planning', 'structure', 'tension', 'pacing'],
    description: 'Builds a beat-by-beat escalation ladder from first spark to release for a slow-burn arc.',
    body: `You are a romance-fiction structural editor. Design a slow-burn tension escalation ladder for a story between {{character_a}} and {{character_b}}, set in {{setting}}.

Build exactly 8 rungs, each one small step more charged than the last, ending just short of the heat level the user wants ({{heat_level}}) so the payoff can land in a later scene. For each rung give:
1. A one-line beat description (what happens).
2. The physical or verbal trigger (a touch, a look, a line of dialogue).
3. What each character privately notices but does not say.
4. Why this rung could not happen earlier in the sequence (what has to be true first).

Rules:
- No rung may include an actual kiss or sex act — this ladder stops at the threshold.
- At least two rungs must be near-misses: a moment interrupted or deliberately not taken.
- Escalate through proximity, restraint, and stakes, not just physical contact.
- Close with a one-paragraph note on where the payoff scene should start given this ladder.

If {{character_a}} or {{character_b}} lack defined personalities, invent brief consistent ones rather than leaving them generic.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and brief trait' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and brief trait' },
      { name: 'setting', label: 'Setting', placeholder: 'small research station in winter' },
      { name: 'heat_level', label: 'Target heat level', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'slow-burn-tension-almost-kiss-scene',
    title: 'The Almost-Kiss Scene Generator',
    category: 'adult-fiction',
    subcategory: 'slow-burn-tension',
    adult: true,
    tags: ['slow-burn', 'scene', 'tension', 'restraint', 'pov'],
    description: 'Writes a single almost-kiss scene that ends in interruption or retreat rather than contact.',
    body: `Write one scene (~{{word_count}} words, {{pov}} POV) between {{character_a}} and {{character_b}} in {{setting}} that builds to an almost-kiss and then does NOT complete it.

Craft requirements:
- Open with the two characters already in proximity for an unrelated, mundane reason — do not open on romantic intent.
- Track the closing physical distance through concrete sensory detail (breath, weight shift, a hand that doesn't quite land) rather than narrated emotion ("he felt nervous").
- Give at least one line of dialogue that means one thing on the surface and another underneath — the reader should feel the gap between what's said and what's meant.
- The interruption or retreat must come from character choice or circumstance established earlier in the scene, not a random external event.
- End on the after-beat: the few seconds of consequence once the moment breaks, showing what each character does with their hands, eyes, or body to cover the loss of nerve.
- Do not resolve the tension. This scene's job is to raise the cost of the eventual kiss, not deliver it.

Heat level for suggestiveness in dialogue and interiority: {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and brief trait' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and brief trait' },
      { name: 'setting', label: 'Setting', placeholder: 'kitchen after a dinner party' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '800', placeholder: '800' },
      { name: 'heat_level', label: 'Heat level', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'slow-burn-tension-charged-ordinary-dialogue',
    title: 'Charged Subtext in Ordinary Dialogue',
    category: 'adult-fiction',
    subcategory: 'slow-burn-tension',
    adult: true,
    tags: ['slow-burn', 'dialogue', 'subtext', 'tension', 'craft'],
    description: 'Writes a mundane-task dialogue scene where every line carries romantic subtext underneath.',
    body: `Write a dialogue-driven scene (~{{word_count}} words) between {{character_a}} and {{character_b}} in {{setting}} where the surface conversation is about something completely mundane (fixing something, cooking, doing paperwork, driving somewhere) while the subtext is entirely about the unspoken attraction between them.

Constraints:
- Neither character may say anything explicitly romantic or reference the attraction directly.
- Every line of dialogue must do double duty: functional on the surface, loaded underneath. If a line only serves the plot task, cut or rewrite it.
- Use at least three physical beats (action tags, not dialogue tags) that carry the real emotional information — where someone stands, what they do with an object, a pause before answering.
- Include one moment where a character almost says the true thing and swerves into the mundane topic instead.
- Write in {{pov}} POV so we get interiority only from one side; the other character stays legible purely through behavior.
- End the scene on a line of dialogue, not narration — let the subtext land in silence after it.

Heat level (how charged the interiority is allowed to get): {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and brief trait' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and brief trait' },
      { name: 'setting', label: 'Setting', placeholder: 'garage, fixing a car' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '700', placeholder: '700' },
      { name: 'heat_level', label: 'Heat level', default: 'mild', placeholder: 'mild / moderate / explicit' },
    ],
  },
  {
    id: 'slow-burn-tension-continuation',
    title: 'Slow-Burn Scene Continuation',
    category: 'adult-fiction',
    subcategory: 'slow-burn-tension',
    adult: true,
    tags: ['slow-burn', 'continuation', 'tension', 'pacing'],
    description: 'Continues an existing slow-burn scene, raising tension one notch without resolving it.',
    body: `You are continuing a slow-burn scene already in progress between {{character_a}} and {{character_b}} in {{setting}}. Here is the existing text:

"""
{{existing_scene}}
"""

Write the next ~{{word_count}} words in {{pov}} POV, continuing directly from where the excerpt ends. Requirements:
- Match the established voice, pacing, and level of restraint already present in the excerpt — do not suddenly accelerate the heat level beyond {{heat_level}}.
- Raise the tension exactly one notch: introduce a new small charged detail (a touch, a confession half-made, proximity that wasn't there before) rather than several at once.
- Do not resolve the tension or move the characters into overt romantic or sexual territory unless the excerpt was already at the very threshold of it.
- Preserve any established character voice tics, speech patterns, or physical habits visible in the excerpt.
- If the excerpt's POV or tense is ambiguous, state your interpretation in one line before the continuation, then write only the continuation after that.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'where the scene takes place' },
      { name: 'existing_scene', label: 'Existing scene text', placeholder: 'paste the scene so far' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '500', placeholder: '500' },
      { name: 'heat_level', label: 'Heat level ceiling', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'slow-burn-tension-audit-existing-draft',
    title: 'Slow-Burn Tension Audit',
    category: 'adult-fiction',
    subcategory: 'slow-burn-tension',
    adult: true,
    tags: ['slow-burn', 'critique', 'revision', 'tension', 'audit'],
    description: 'Audits a draft scene or chapter for where slow-burn tension sags, rushes, or resolves too early.',
    body: `You are a developmental editor specializing in slow-burn romantic tension. Audit the following draft between {{character_a}} and {{character_b}}:

"""
{{draft_text}}
"""

Produce your audit in this exact structure:
1. **Tension curve** — a line-by-line or paragraph-by-paragraph read of where tension rises, plateaus, or drops, using a simple scale (rising / flat / dropping) with a one-line reason for each shift.
2. **Premature resolution** — flag any moment where the text gives the reader relief (a joke, a scene cut, an admission) before enough tension has been built, and explain what was lost.
3. **Missed near-misses** — identify at least two points where the scene could have set up a near-miss (interrupted contact, swerved confession) but didn't, and suggest what to insert.
4. **Telling vs. showing** — quote any line that states emotion directly ("she felt a rush of desire") instead of dramatizing it, and propose a physical/behavioral replacement.
5. **Verdict** — one paragraph: is this scene earning its place on a slow-burn arc, or moving too fast/slow? Target heat level for the eventual payoff is {{heat_level}}.

Do not rewrite the scene wholesale. Quote only the specific lines needed to make each point.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'draft_text', label: 'Draft text to audit', placeholder: 'paste the scene or chapter' },
      { name: 'heat_level', label: 'Target heat level for eventual payoff', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'slow-burn-tension-pov-swap-interiority',
    title: 'Dual-POV Interiority Contrast',
    category: 'adult-fiction',
    subcategory: 'slow-burn-tension',
    adult: true,
    tags: ['slow-burn', 'pov', 'interiority', 'dual-pov', 'craft'],
    description: 'Writes the same charged moment twice from each character\'s interiority to show the tension gap.',
    body: `Write the same short moment of charged proximity between {{character_a}} and {{character_b}} in {{setting}} TWICE — once from each character's close third-person interiority — so the reader can see the gap between what each believes is happening.

Moment to dramatize: {{moment_description}}

Structure your response as:
1. **{{character_a}}'s version** (~{{word_count}} words): their internal read of the moment, what they think it means, what they're afraid to want.
2. **{{character_b}}'s version** (~{{word_count}} words): the same external events, but their internal read may differ — perhaps they misread {{character_a}}'s intent, or are hiding something {{character_a}} can't see.
3. **Craft note** (3-4 sentences): name specifically where the two interiorities diverge and why that gap is what makes slow-burn tension work — the reader knows more than either character does.

External actions and dialogue must be consistent across both versions; only the interiority and interpretation should differ. Heat level: {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and brief trait' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and brief trait' },
      { name: 'setting', label: 'Setting', placeholder: 'crowded elevator' },
      { name: 'moment_description', label: 'Moment to dramatize', placeholder: 'their hands brush reaching for the same object' },
      { name: 'word_count', label: 'Word count per version', default: '300', placeholder: '300' },
      { name: 'heat_level', label: 'Heat level', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'slow-burn-tension-forced-proximity-planner',
    title: 'Forced-Proximity Setup Planner',
    category: 'adult-fiction',
    subcategory: 'slow-burn-tension',
    adult: true,
    tags: ['slow-burn', 'planning', 'trope', 'structure', 'proximity'],
    description: 'Designs a plausible forced-proximity premise and the rules that keep it from resolving too fast.',
    body: `You are a romance-plotting consultant. Design a forced-proximity premise that puts {{character_a}} and {{character_b}} in sustained close contact in {{setting}}, built to support a slow-burn arc rather than a fast one.

Deliver:
1. **The setup** — a plausible, non-contrived reason the two are stuck together, stated in 2-3 sentences. Avoid premises that could be resolved in one phone call; explain why the obvious exit is blocked.
2. **The friction source** — a concrete reason beyond "they're attracted to each other" that keeps them from acting on it early (competing goals, a promise to someone else, professional stakes, pride). Name it specifically.
3. **Three built-in proximity beats** — recurring situations the premise naturally creates (shared meals, one bed, a task requiring cooperation) that can each be revisited multiple times at rising heat.
4. **The pressure valve** — one plot element that could force the tension to a head, to be held in reserve for later rather than used immediately.
5. **A warning list** — two ways a writer typically cheapens this trope by resolving it too early, specific to this premise, to actively avoid.

Target eventual heat level: {{heat_level}}. Keep the whole plan under 350 words.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and role' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and role' },
      { name: 'setting', label: 'Setting', placeholder: 'storm-stranded cabin, rival architects' },
      { name: 'heat_level', label: 'Eventual heat level', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'slow-burn-tension-sensory-restraint-drill',
    title: 'Sensory Restraint Drill',
    category: 'adult-fiction',
    subcategory: 'slow-burn-tension',
    adult: true,
    tags: ['slow-burn', 'sensory', 'craft', 'restraint', 'drill'],
    description: 'A constrained writing drill that builds tension using only non-verbal, non-touch sensory detail.',
    body: `Write a short scene (~{{word_count}} words, {{pov}} POV) of {{character_a}} and {{character_b}} together in {{setting}}, under one hard constraint: no physical touch of any kind may occur, and no character may say anything about the attraction, even obliquely.

Build all tension exclusively through:
- Proximity and distance (how far apart they stand or sit, and when that changes).
- Breath, posture, and micro-timing (a pause before speaking, a held glance, a shift in weight).
- Sound and environment (what's audible in the silences — a clock, traffic, their own breathing).
- Scent or temperature if it's natural to the setting (not forced).

After the scene, add a short **"what did the restraint buy you"** note (3-4 sentences) explaining which of the above techniques carried the most tension and why removing touch and direct statement forced sharper craft.

Heat level should be read entirely through restraint here — cap explicit content at: {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'library after closing' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '600', placeholder: '600' },
      { name: 'heat_level', label: 'Heat level cap', default: 'mild', placeholder: 'mild / moderate' },
    ],
  },
  {
    id: 'slow-burn-tension-payoff-earning-checklist',
    title: 'Payoff-Earning Checklist & Scene Draft',
    category: 'adult-fiction',
    subcategory: 'slow-burn-tension',
    adult: true,
    tags: ['slow-burn', 'payoff', 'checklist', 'revision', 'structure'],
    description: 'Checks whether prior buildup earns the payoff scene, then drafts the payoff only if it does.',
    body: `You are validating whether a slow-burn arc between {{character_a}} and {{character_b}} has earned its payoff before writing it. Here is a summary of the buildup so far:

"""
{{buildup_summary}}
"""

Step 1 — **Earn check.** Score the buildup against this checklist, one line each with yes/partial/no and why:
- Has there been at least one near-miss or interrupted moment?
- Has a specific obstacle (external or internal) been named and does the payoff require it to be resolved or overcome?
- Does the reader know something has changed in at least one character's resolve, not just their desire?
- Has restraint been visibly costly to at least one character, on the page?

Step 2 — **Verdict.** State plainly whether the buildup earns the payoff yet. If not, name the single biggest gap and stop — do not draft the scene.

Step 3 — **If earned**, write the payoff scene (~{{word_count}} words, {{pov}} POV, setting: {{setting}}) at heat level {{heat_level}}, opening from the specific obstacle finally giving way, not from a neutral scene-start.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'buildup_summary', label: 'Summary of buildup so far', placeholder: 'what has happened between them up to this point' },
      { name: 'setting', label: 'Payoff scene setting', placeholder: 'where the payoff scene happens' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '900', placeholder: '900' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
];

export default prompts;
