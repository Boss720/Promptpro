import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'scene-continuation-voice-matched',
    title: 'Voice-Matched Scene Continuation',
    category: 'adult-fiction',
    subcategory: 'scene-continuation',
    adult: true,
    tags: ['continuation', 'voice-matching', 'pacing', 'generator'],
    description: 'Continues a pasted draft in the same diction and rhythm, stopping at a specified beat.',
    body: `You are a fiction collaborator continuing an in-progress adult scene between established, adult characters.

Existing draft:
"""
{{existing_text}}
"""

Task: before writing anything, silently note (do not output) the draft's tense, POV, sentence rhythm (short/punchy vs. long/flowing), vocabulary register, and current heat level so you can match them exactly.

Continue the scene from precisely where it stops — do not repeat, summarize, or re-describe anything already established (setting, positions, clothing state, dialogue already said). Write {{word_count}} more words, holding heat level at {{heat_level}} and matching {{character_a}}'s and {{character_b}}'s voices exactly as shown in the existing text.

Stop the continuation at this beat, do not go past it: {{stop_at_beat}}. End the passage cleanly at that point rather than trailing off mid-action.

Output only the continuation text — no preamble, no recap of the original.`,
    variables: [
      { name: 'existing_text', label: 'Existing draft', placeholder: 'paste the scene so far' },
      { name: 'character_a', label: 'Character A', placeholder: 'name as used in the draft' },
      { name: 'character_b', label: 'Character B', placeholder: 'name as used in the draft' },
      { name: 'heat_level', label: 'Heat level to hold', default: 'match existing', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Continuation length', default: '400' },
      { name: 'stop_at_beat', label: 'Stop at this beat', placeholder: 'e.g. the moment they finally kiss' },
    ],
  },
  {
    id: 'scene-continuation-heat-escalation',
    title: 'Continuation With Deliberate Heat Escalation',
    category: 'adult-fiction',
    subcategory: 'scene-continuation',
    adult: true,
    tags: ['continuation', 'heat-level', 'pacing', 'generator'],
    description: 'Continues a draft while raising the heat level gradually to a target, without a sudden tonal jump.',
    body: `You are continuing an adult fiction scene already in progress between {{character_a}} and {{character_b}}, established adults.

Existing draft:
"""
{{existing_text}}
"""

The existing text sits at a lower heat level than the target. Task: write a {{word_count}}-word continuation that escalates smoothly from the draft's current heat level to {{heat_level}}, without a jarring jump — the escalation itself should read as part of the scene's tension, not as a gear-change the reader notices.

Match the draft's diction and sentence rhythm throughout, including during the escalation — do not switch into a more purple or more clinical register than the original uses.

Honor every established detail (what's already happened, what either character has said, physical positioning) — do not reset or contradict anything in the pasted text.

Stop at this beat and no further: {{stop_at_beat}}.

Output the continuation only.`,
    variables: [
      { name: 'existing_text', label: 'Existing draft', placeholder: 'paste the scene so far' },
      { name: 'character_a', label: 'Character A', placeholder: 'name as used in the draft' },
      { name: 'character_b', label: 'Character B', placeholder: 'name as used in the draft' },
      { name: 'heat_level', label: 'Target heat level', default: 'explicit', placeholder: 'suggestive / explicit' },
      { name: 'word_count', label: 'Continuation length', default: '350' },
      { name: 'stop_at_beat', label: 'Stop at this beat', placeholder: 'e.g. just as clothing starts to come off' },
    ],
  },
  {
    id: 'scene-continuation-style-audit',
    title: 'Style-Match Audit Before Continuing',
    category: 'adult-fiction',
    subcategory: 'scene-continuation',
    adult: true,
    tags: ['continuation', 'audit', 'voice-matching', 'critic'],
    description: 'Analyzes a draft\'s voice fingerprint first, then continues it, so the match is verifiable rather than guessed.',
    body: `You are a fiction editor and continuator working from a pasted draft.

Existing draft:
"""
{{existing_text}}
"""

Task, in two parts.

Part 1 — Style fingerprint: output a short table with rows for Tense, POV, average sentence length (short/medium/long), vocabulary register (plain/literary/purple/clinical), dialogue tag style, and current heat level. Base every row on direct evidence from the text.

Part 2 — Continuation: using that fingerprint as your spec, continue the scene for {{word_count}} words at heat level {{heat_level}}, involving {{character_a}} and {{character_b}} exactly as characterized so far. Do not restate anything already established — pick up mid-scene. Stop precisely at: {{stop_at_beat}}.

Label the two parts clearly. If the fingerprint reveals a stylistic quirk (e.g., no dialogue tags, sentence fragments for emphasis, second-person asides), deliberately preserve it in the continuation and note that you did so in one closing line.`,
    variables: [
      { name: 'existing_text', label: 'Existing draft', placeholder: 'paste the scene so far' },
      { name: 'character_a', label: 'Character A', placeholder: 'name as used in the draft' },
      { name: 'character_b', label: 'Character B', placeholder: 'name as used in the draft' },
      { name: 'heat_level', label: 'Heat level to hold', default: 'match existing', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Continuation length', default: '400' },
      { name: 'stop_at_beat', label: 'Stop at this beat', placeholder: 'e.g. right before the first kiss' },
    ],
  },
  {
    id: 'scene-continuation-dialogue-only',
    title: 'Dialogue-Driven Continuation',
    category: 'adult-fiction',
    subcategory: 'scene-continuation',
    adult: true,
    tags: ['continuation', 'dialogue', 'voice-matching', 'generator'],
    description: 'Continues a scene leaning primarily on dialogue, matching each character\'s established speech patterns.',
    body: `You are continuing an adult fiction scene, prioritizing dialogue as the main driver of the continuation.

Existing draft:
"""
{{existing_text}}
"""

Before continuing, identify each character's speech pattern from the draft: sentence length in dialogue, use of contractions, characteristic phrases, how often they interrupt or trail off. Carry these forward exactly.

Write a {{word_count}}-word continuation for {{character_a}} and {{character_b}} that is driven primarily by dialogue and reaction, with narration used only to carry physical action and sensation, not to slow the exchange down. Hold heat level at {{heat_level}}.

Do not have either character say anything that contradicts what they've already said or done in the pasted draft. Do not restart the scene's setting or re-introduce either character.

Stop at this beat: {{stop_at_beat}}. End on a line of dialogue or a single-beat action, not mid-sentence.

Output the continuation only.`,
    variables: [
      { name: 'existing_text', label: 'Existing draft', placeholder: 'paste the scene so far' },
      { name: 'character_a', label: 'Character A', placeholder: 'name as used in the draft' },
      { name: 'character_b', label: 'Character B', placeholder: 'name as used in the draft' },
      { name: 'heat_level', label: 'Heat level to hold', default: 'match existing', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Continuation length', default: '300' },
      { name: 'stop_at_beat', label: 'Stop at this beat', placeholder: 'e.g. when one of them finally says yes' },
    ],
  },
  {
    id: 'scene-continuation-consistency-checker',
    title: 'Continuity Checker for Continuations',
    category: 'adult-fiction',
    subcategory: 'scene-continuation',
    adult: true,
    tags: ['continuation', 'continuity', 'reviewer', 'editing'],
    description: 'Reviews a completed continuation against the original draft for contradictions before accepting it.',
    body: `You are a continuity editor comparing an original draft to a continuation written for it.

Original draft:
"""
{{existing_text}}
"""

Continuation to check (may have been written by another model or a human):
"""
{{continuation_text}}
"""

Task: list every continuity issue you find — contradicted physical detail (clothing, position, injuries, setting), dialogue that ignores something just said, a character acting against voice or motivation established in the original, or a heat-level jump that doesn't track from where the original left off. Quote both the original line and the conflicting continuation line for each issue.

Then rate overall continuity fit on a 1-5 scale with one sentence of justification.

Finally, rewrite only the passages with issues (not the full continuation) so they align with the original, preserving the continuation's own voice and stopping point otherwise. If there are no issues, say so plainly rather than inventing minor nitpicks.`,
    variables: [
      { name: 'existing_text', label: 'Original draft', placeholder: 'paste the original scene' },
      { name: 'continuation_text', label: 'Continuation to check', placeholder: 'paste the continuation' },
    ],
  },
  {
    id: 'scene-continuation-pov-switch',
    title: 'Continuation With a POV Switch',
    category: 'adult-fiction',
    subcategory: 'scene-continuation',
    adult: true,
    tags: ['continuation', 'pov', 'generator', 'craft'],
    description: 'Continues a scene from the other character\'s point of view, a common craft move for extended scenes.',
    body: `You are continuing an adult fiction scene but switching point of view.

Existing draft (currently from {{character_a}}'s POV):
"""
{{existing_text}}
"""

Task: continue the scene for {{word_count}} words, but shift POV to {{character_b}}, picking up at the exact moment the draft leaves off. The reader should now access {{character_b}}'s internal sensation and thought instead of {{character_a}}'s — do not simply keep narrating {{character_a}}'s interiority with a name swap.

Preserve every external fact established in the draft (what's physically happened, what's been said, the setting) exactly — a POV switch changes whose head we're in, not what occurred. Hold heat level at {{heat_level}} and match the prose's existing diction and rhythm.

Stop at this beat: {{stop_at_beat}}.

Before the continuation, add one line: "POV now: {{character_b}}." Then the continuation itself.`,
    variables: [
      { name: 'existing_text', label: 'Existing draft', placeholder: 'paste the scene so far' },
      { name: 'character_a', label: 'Original POV character', placeholder: 'name as used in the draft' },
      { name: 'character_b', label: 'New POV character', placeholder: 'name as used in the draft' },
      { name: 'heat_level', label: 'Heat level to hold', default: 'match existing', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Continuation length', default: '350' },
      { name: 'stop_at_beat', label: 'Stop at this beat', placeholder: 'e.g. when they lock eyes again' },
    ],
  },
  {
    id: 'scene-continuation-slow-burn-holdback',
    title: 'Slow-Burn Holdback Continuation',
    category: 'adult-fiction',
    subcategory: 'scene-continuation',
    adult: true,
    tags: ['continuation', 'pacing', 'tension', 'generator'],
    description: 'Continues a draft while deliberately withholding escalation past a named beat, for slow-burn pacing.',
    body: `You are continuing a slow-burn adult fiction scene where restraint is the point.

Existing draft:
"""
{{existing_text}}
"""

Task: write a {{word_count}}-word continuation for {{character_a}} and {{character_b}} that builds tension — through proximity, near-misses, charged dialogue, small physical details — without crossing past {{stop_at_beat}}. The continuation must not resolve or escalate past that beat even if the draft's momentum makes it tempting; the craft goal here is restraint, not release.

Stay at or just below heat level {{heat_level}} throughout — err toward less if in doubt, since slow burn depends on withholding.

Match the draft's existing diction, pacing, and both characters' voices exactly. Do not re-establish anything already shown in the pasted text.

End the continuation exactly at {{stop_at_beat}}, on a note of suspended tension rather than release.`,
    variables: [
      { name: 'existing_text', label: 'Existing draft', placeholder: 'paste the scene so far' },
      { name: 'character_a', label: 'Character A', placeholder: 'name as used in the draft' },
      { name: 'character_b', label: 'Character B', placeholder: 'name as used in the draft' },
      { name: 'heat_level', label: 'Heat ceiling', default: 'suggestive', placeholder: 'fade-to-black / suggestive' },
      { name: 'word_count', label: 'Continuation length', default: '400' },
      { name: 'stop_at_beat', label: 'Stop at this beat', placeholder: 'e.g. the instant before either of them moves first' },
    ],
  },
  {
    id: 'scene-continuation-interviewer-gap-fill',
    title: 'Continuation Interviewer for Ambiguous Drafts',
    category: 'adult-fiction',
    subcategory: 'scene-continuation',
    adult: true,
    tags: ['continuation', 'interviewer', 'planning', 'generator'],
    description: 'Asks about missing context before continuing an ambiguous draft, rather than guessing and drifting off-voice.',
    body: `You are a fiction collaborator asked to continue a pasted scene.

Existing draft:
"""
{{existing_text}}
"""

Before writing, check whether the draft gives you enough to continue faithfully. If any of the following are unclear from the text, ask the user directly (as a short numbered list, no more than four questions) rather than guessing: who {{character_a}} and {{character_b}} are to each other at this point in the story, what heat level the continuation should hold ({{heat_level}} was given, but confirm it fits where the draft left off), what {{stop_at_beat}} should look like concretely, and any established detail (positions, prior dialogue, injuries, clothing) you're unsure about.

If the draft is unambiguous enough that no question is needed, say so in one line and proceed directly to writing.

Once you have what you need (either from this pass or the user's answers), write a {{word_count}}-word continuation matching the draft's diction, rhythm, and heat level, honoring all established detail, stopping cleanly at {{stop_at_beat}}.`,
    variables: [
      { name: 'existing_text', label: 'Existing draft', placeholder: 'paste the scene so far' },
      { name: 'character_a', label: 'Character A', placeholder: 'name as used in the draft' },
      { name: 'character_b', label: 'Character B', placeholder: 'name as used in the draft' },
      { name: 'heat_level', label: 'Heat level to hold', default: 'match existing', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Continuation length', default: '350' },
      { name: 'stop_at_beat', label: 'Stop at this beat', placeholder: 'e.g. when the door finally opens' },
    ],
  },
  {
    id: 'scene-continuation-multi-option-branch',
    title: 'Three Branching Continuations From One Draft',
    category: 'adult-fiction',
    subcategory: 'scene-continuation',
    adult: true,
    tags: ['continuation', 'branching', 'generator', 'revision'],
    description: 'Produces three distinct, voice-consistent continuations from the same stopping point so the user can pick a direction.',
    body: `You are continuing a paused adult fiction scene, offering the writer options rather than a single path.

Existing draft:
"""
{{existing_text}}
"""

Task: write three distinct continuations, each {{word_count}} words, each starting from the exact same point where the draft stops and each ending at {{stop_at_beat}}. The three should differ in emotional direction (for example: one tender, one tense/charged, one playful/teasing) while every one of them stays consistent with {{character_a}}'s and {{character_b}}'s established voices, holds heat level {{heat_level}}, and honors every fact already set in the draft — position, dialogue said, setting.

Label each continuation "Option 1", "Option 2", "Option 3" with a three-to-five-word tag naming its emotional direction. Do not repeat the same sentence structure or opening line across options — each should feel like a genuinely different path, not a reworded duplicate.

After the three options, add one line recommending which best matches the momentum of the original draft, and why.`,
    variables: [
      { name: 'existing_text', label: 'Existing draft', placeholder: 'paste the scene so far' },
      { name: 'character_a', label: 'Character A', placeholder: 'name as used in the draft' },
      { name: 'character_b', label: 'Character B', placeholder: 'name as used in the draft' },
      { name: 'heat_level', label: 'Heat level to hold', default: 'match existing', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'word_count', label: 'Length per option', default: '250' },
      { name: 'stop_at_beat', label: 'Stop at this beat', placeholder: 'e.g. right as they step into the bedroom' },
    ],
  },
];

export default prompts;
