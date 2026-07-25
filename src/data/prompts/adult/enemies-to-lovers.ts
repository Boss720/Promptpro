import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'enemies-to-lovers-antagonism-audit',
    title: 'Antagonism-as-Attraction Audit',
    category: 'adult-fiction',
    subcategory: 'enemies-to-lovers',
    adult: true,
    tags: ['enemies-to-lovers', 'critique', 'audit', 'subtext', 'revision'],
    description: 'Audits a rivalry scene to check whether the hostility is doing double duty as suppressed attraction.',
    body: `You are a developmental editor specializing in enemies-to-lovers dynamics. Audit the following scene between {{character_a}} and {{character_b}}:

"""
{{draft_text}}
"""

Produce your audit in this structure:
1. **Hostility inventory** — list each hostile line or action and classify it: pure conflict (about the actual stakes between them) vs. displaced attraction (anger standing in for a feeling they won't name). Quote briefly for each.
2. **Give-away moments** — flag any line where the antagonism reads as too comfortable, too personal, or too invested to be simple dislike — the "protests too much" tell that signals real feeling underneath.
3. **Missing stakes** — note if the actual point of conflict between them (the real thing they disagree about or compete for) has gone fuzzy or been replaced entirely by banter; enemies-to-lovers needs a genuine reason to be enemies, not just spice.
4. **Verdict** — one paragraph on whether this scene's hostility is earning its subtext or just performing "will they won't they" without grounding. Target heat level for the eventual arc: {{heat_level}}.

Quote only what's needed to make each point; do not rewrite the scene wholesale.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'draft_text', label: 'Draft scene to audit', placeholder: 'paste the scene' },
      { name: 'heat_level', label: 'Target eventual heat level', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'enemies-to-lovers-verbal-sparring-scene',
    title: 'Verbal Sparring Match Generator',
    category: 'adult-fiction',
    subcategory: 'enemies-to-lovers',
    adult: true,
    tags: ['enemies-to-lovers', 'dialogue', 'scene', 'banter', 'tension'],
    description: 'Writes a rapid-fire argument scene where every insult carries a charge of attraction underneath.',
    body: `Write a scene (~{{word_count}} words, {{pov}} POV) of {{character_a}} and {{character_b}} in {{setting}}, locked in a genuine argument over a real stake between them: {{conflict_stake}}.

Craft requirements:
- The argument must be about something real and specific — not manufactured banter. State the stake plainly through the dialogue itself.
- Each line of dialogue should be sharp enough to function as a real jab, while also (for the reader, not the characters) carrying a charge that reads as attraction they won't admit.
- Include at least one moment where a character says something too personal or too accurate to be simple antagonism — a hit that lands because they've been paying far too much attention to the other person.
- Neither character may break the hostility to admit attraction. This scene ends still in conflict, tension unresolved.
- Use physical staging (proximity, who moves toward whom, what breaks eye contact first) to undercut or complicate the verbal hostility.
- Heat level for suggestiveness underneath the dialogue: {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and role' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and role' },
      { name: 'setting', label: 'Setting', placeholder: 'shared office after hours' },
      { name: 'conflict_stake', label: 'What they are actually fighting about', placeholder: 'a contested promotion, a broken promise' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '800', placeholder: '800' },
      { name: 'heat_level', label: 'Heat level', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'enemies-to-lovers-turn-beat-sheet',
    title: 'The Turn — Hostility-to-Attraction Beat Sheet',
    category: 'adult-fiction',
    subcategory: 'enemies-to-lovers',
    adult: true,
    tags: ['enemies-to-lovers', 'planning', 'structure', 'beat-sheet', 'turn'],
    description: 'Plans the specific beat where open hostility flips into acknowledged attraction, and what must precede it.',
    body: `You are a romance-structure consultant. Design "the turn" — the specific beat sheet for where hostility between {{character_a}} and {{character_b}} flips into acknowledged attraction — set across {{setting}}.

Produce exactly 6 beats:
1. **Peak hostility** — the most openly antagonistic moment in the arc, establishing the ceiling the turn has to fall from.
2. **The crack** — a moment of forced vulnerability, shared danger, or unwilling cooperation that neither can perform their way through, so a real self leaks out.
3. **The unwelcome noticing** — one character catches themselves seeing the other clearly for the first time, and hates it.
4. **The near-tell** — hostility deployed specifically to avoid saying something else; the reader should see the swap happening in real time.
5. **The turn itself** — the exact line or action where the antagonism can no longer hold, described precisely (what is said or done, and why it can't be explained away as anger).
6. **The aftermath beat** — how each character individually processes the turn once alone, before they've decided what to do about it.

For each beat, name what must be true structurally beforehand (established stakes, prior antagonism, a specific shared history) so the turn feels earned rather than sudden. Target heat level for what follows the turn: {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and role' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and role' },
      { name: 'setting', label: 'Setting', placeholder: 'rival law firms merging' },
      { name: 'heat_level', label: 'Heat level after the turn', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'enemies-to-lovers-forced-alliance-scene',
    title: 'Forced-Alliance Cooperation Scene',
    category: 'adult-fiction',
    subcategory: 'enemies-to-lovers',
    adult: true,
    tags: ['enemies-to-lovers', 'scene', 'cooperation', 'tension', 'trope'],
    description: 'Writes a scene forcing rivals to cooperate on a shared task, letting competence crack the antagonism.',
    body: `Write a scene (~{{word_count}} words, {{pov}} POV) where {{character_a}} and {{character_b}}, established rivals, are forced to cooperate on a shared task in {{setting}}: {{shared_task}}.

Craft requirements:
- Open with both characters resenting the forced cooperation; state why neither can refuse.
- Let competence do the work: at least one moment where a character is unwillingly impressed by the other's skill, and let that admiration slip out sideways (a grudging comment, a look held a beat too long) rather than being stated as attraction.
- Keep the antagonism alive throughout — this is not a truce, it's proximity that neither has agreed to enjoy.
- Include one moment of physical coordination (handing something off, moving in sync, one steadying the other) that neither comments on but the reader should feel land differently than the hostility around it.
- End with the task incomplete or the alliance still uneasy — do not resolve the rivalry in this scene.
- Heat level for undertone: {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and role' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and role' },
      { name: 'setting', label: 'Setting', placeholder: 'stranded on a broken-down boat' },
      { name: 'shared_task', label: 'The forced task', placeholder: 'fixing the engine before the storm hits' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '800', placeholder: '800' },
      { name: 'heat_level', label: 'Heat level', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'enemies-to-lovers-continuation',
    title: 'Enemies-to-Lovers Scene Continuation',
    category: 'adult-fiction',
    subcategory: 'enemies-to-lovers',
    adult: true,
    tags: ['enemies-to-lovers', 'continuation', 'tension', 'pacing'],
    description: 'Continues an existing rivalry scene, deepening the attraction-under-hostility without resolving it.',
    body: `You are continuing a scene already in progress between rivals {{character_a}} and {{character_b}} in {{setting}}. Here is the existing text:

"""
{{existing_scene}}
"""

Write the next ~{{word_count}} words in {{pov}} POV, continuing directly from where the excerpt ends. Requirements:
- Match the established voice and the current balance of hostility-to-attraction already present — do not resolve the antagonism or suddenly soften it wholesale.
- Deepen the subtext by one increment: a line that could be read either as attack or as tell, a physical beat that complicates the hostility.
- Preserve the specific conflict stake already established in the excerpt; do not let it dissolve into generic bickering.
- Do not have either character admit attraction outright unless the excerpt was already at that exact threshold.
- Cap suggestiveness at heat level {{heat_level}}.
- If the excerpt's POV, tense, or the nature of the conflict is ambiguous, state your interpretation in one line before the continuation, then write only the continuation after that.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'where the scene takes place' },
      { name: 'existing_scene', label: 'Existing scene text', placeholder: 'paste the scene so far' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '500', placeholder: '500' },
      { name: 'heat_level', label: 'Heat level cap', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'enemies-to-lovers-origin-of-rivalry-interviewer',
    title: 'Rivalry Origin Interviewer',
    category: 'adult-fiction',
    subcategory: 'enemies-to-lovers',
    adult: true,
    tags: ['enemies-to-lovers', 'interviewer', 'planning', 'backstory', 'structure'],
    description: 'Interviews the user to build a grounded, non-generic origin for why two characters became enemies.',
    body: `You are a story consultant helping ground an enemies-to-lovers pairing between {{character_a}} and {{character_b}} in {{setting}}. Before writing anything, interview me to build a specific, non-generic rivalry origin.

Ask me one question at a time, waiting for my answer before the next, covering:
1. What each character wanted or needed at the moment their conflict began, and how those wants collided.
2. Whether the original wound was a misunderstanding, a real betrayal, or an honest incompatible-goals conflict — push me to avoid a trivial or manufactured reason.
3. What each character believes about the other now, and whether that belief is accurate or a distortion born of the original wound.
4. What it would concretely cost each character to be proven wrong about the other.
5. What heat level and pacing ({{heat_level}}) I want the eventual arc to land at, and whether I want the origin wound to be resolved before, during, or after the physical relationship begins.

Once you have my answers, produce a one-page rivalry-origin brief: the incident, each character's operating belief, the distortion in that belief, and the specific thing that will eventually crack it. Do not invent the origin without asking first.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and role' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and role' },
      { name: 'setting', label: 'Setting', placeholder: 'world or milieu the rivalry exists in' },
      { name: 'heat_level', label: 'Target eventual heat level', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'enemies-to-lovers-jealousy-tell-scene',
    title: 'Unwilling Jealousy Tell',
    category: 'adult-fiction',
    subcategory: 'enemies-to-lovers',
    adult: true,
    tags: ['enemies-to-lovers', 'scene', 'jealousy', 'subtext', 'craft'],
    description: 'Writes a scene where jealousy exposes attraction a character has been denying, without them admitting it.',
    body: `Write a scene (~{{word_count}} words, {{pov}} POV) in which {{character_a}} witnesses {{character_b}} with someone else in {{setting}}, and {{character_a}}'s reaction betrays feelings they have been denying — without them, or the narration, ever naming it as jealousy.

Craft requirements:
- Show the reaction entirely through behavior: a change in posture, an overly casual remark, a conversation {{character_a}} suddenly can't focus on, a decision made in the next few minutes that only makes sense if read as jealousy.
- {{character_a}}'s internal monologue (if {{pov}} is theirs) should actively misattribute the feeling to something else — irritation, competitiveness, tiredness — so the reader sees the self-deception happening live.
- Include one line of dialogue {{character_a}} says to someone (not {{character_b}}) that only makes sense as a jealousy tell in context.
- Do not have {{character_a}} confront {{character_b}} about it in this scene, and do not let {{character_a}} consciously realize what the feeling is.
- Heat level: {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A (POV, in denial)', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'setting', label: 'Setting', placeholder: 'a work party' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '700', placeholder: '700' },
      { name: 'heat_level', label: 'Heat level', default: 'mild', placeholder: 'mild / moderate' },
    ],
  },
  {
    id: 'enemies-to-lovers-truce-negotiation-scene',
    title: 'The Uneasy Truce Negotiation',
    category: 'adult-fiction',
    subcategory: 'enemies-to-lovers',
    adult: true,
    tags: ['enemies-to-lovers', 'scene', 'dialogue', 'negotiation', 'tension'],
    description: 'Writes a scene where two rivals negotiate a practical truce, letting vulnerability leak through the terms.',
    body: `Write a scene (~{{word_count}} words, {{pov}} POV) where {{character_a}} and {{character_b}} sit down to negotiate a practical truce in {{setting}}, over: {{truce_subject}}.

Craft requirements:
- Frame the truce as strictly practical — neither character should describe it as anything but necessary and temporary.
- Structure the scene as an actual negotiation: proposals, pushback, a concession that costs one of them something real.
- Let one concession reveal more vulnerability than either character intends — a moment where the practical terms brush up against the personal history between them, and one character has to decide whether to let that show or paper over it.
- Include a beat where the negotiation's formal tone breaks for a sentence or two of something rawer, before one of them re-imposes the formality.
- End with the truce agreed but the underlying tension unresolved — the terms are settled, the feelings are not.
- Heat level for undertone: {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name and role' },
      { name: 'character_b', label: 'Character B', placeholder: 'name and role' },
      { name: 'setting', label: 'Setting', placeholder: 'neutral conference room' },
      { name: 'truce_subject', label: 'What the truce covers', placeholder: 'splitting custody of a shared project' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '750', placeholder: '750' },
      { name: 'heat_level', label: 'Heat level', default: 'moderate', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
  {
    id: 'enemies-to-lovers-payoff-earning-checklist',
    title: 'Payoff-Earning Checklist & Reconciliation Scene',
    category: 'adult-fiction',
    subcategory: 'enemies-to-lovers',
    adult: true,
    tags: ['enemies-to-lovers', 'payoff', 'checklist', 'revision', 'structure'],
    description: 'Checks whether the rivalry arc has earned reconciliation before drafting the payoff scene.',
    body: `You are validating whether an enemies-to-lovers arc between {{character_a}} and {{character_b}} has earned its reconciliation before writing it. Here is a summary of the arc so far:

"""
{{arc_summary}}
"""

Step 1 — **Earn check.** Score the arc against this checklist, one line each with yes/partial/no and why:
- Has the original source of conflict been directly addressed on the page, not just quietly dropped?
- Has at least one character apologized for or corrected a real wrong, not just softened in tone?
- Has the distorted belief each held about the other been specifically challenged by evidence, not just by attraction overriding judgment?
- Has vulnerability cost one of them something visible (pride, position, a secret) rather than being free?

Step 2 — **Verdict.** State plainly whether the arc earns reconciliation yet. If not, name the single biggest unresolved piece and stop — do not draft the scene.

Step 3 — **If earned**, write the reconciliation/payoff scene (~{{word_count}} words, {{pov}} POV, setting: {{setting}}) at heat level {{heat_level}}, opening from the specific unresolved piece finally being addressed, not from a neutral scene-start.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name' },
      { name: 'character_b', label: 'Character B', placeholder: 'name' },
      { name: 'arc_summary', label: 'Summary of the rivalry arc so far', placeholder: 'what has happened between them up to this point' },
      { name: 'setting', label: 'Payoff scene setting', placeholder: 'where the reconciliation happens' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '900', placeholder: '900' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black / moderate / explicit' },
    ],
  },
];

export default prompts;
