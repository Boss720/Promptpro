import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'dom-sub-power-negotiation-scene',
    title: 'Negotiation Scene: Setting Terms Before the Scene',
    category: 'adult-fiction',
    subcategory: 'dom-sub-power',
    adult: true,
    tags: ['dom-sub-power', 'negotiation-scene', 'consent', 'dialogue', 'adult'],
    description: 'Builds a dialogue-driven scene where two adult characters negotiate limits, roles, and a safeword before a power-exchange scene.',
    body: `You are building a **negotiation scene** — the explicit, out-of-role conversation that happens between two adult (18+) characters, {{character_a}} and {{character_b}}, before any power-exchange scene begins. This is the fiction making its consent framework explicit, not a real-world instructional guide.

Setting: {{setting}}. POV: {{pov}}. Heat level for this scene: {{heat_level}} (this scene itself should stay talk-focused, low physical heat — it's the negotiation, not the act). Target length: {{word_count}} words.

Write a scene, at least 70% dialogue, where the characters explicitly cover:
1. What roles each is taking (dominant/submissive) and why, in their own words.
2. At least two concrete hard limits and one soft limit, stated plainly.
3. A safeword or signal system, including what happens if it's used.
4. A check on both characters' current state of mind — are they doing this for the right reasons tonight.

Craft requirements:
- Give each character a distinct voice in how they negotiate — one more clinical/precise, one more playful or nervous — consistent with their established personalities.
- Show the dominant character asking more questions than they answer; establishing trust is their labor in this scene, not their reward.
- Include one moment where a limit is respected on the spot, even though it interrupts the mood, to demonstrate the frame is real.
- Do not begin the scene itself — end when both characters agree to proceed.

After the scene, list the four negotiation elements above with the line where each was covered.`,
    variables: [
      { name: 'character_a', label: 'Character A (the dominant)', placeholder: 'Ivo' },
      { name: 'character_b', label: 'Character B (the submissive)', placeholder: 'Ren' },
      { name: 'setting', label: 'Setting', placeholder: 'Ivo\'s apartment, sitting on opposite ends of the couch' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '700' },
    ],
  },
  {
    id: 'dom-sub-power-scene-attention-not-cruelty',
    title: 'The Scene: Dominance Written as Attention',
    category: 'adult-fiction',
    subcategory: 'dom-sub-power',
    adult: true,
    tags: ['dom-sub-power', 'generator', 'characterization', 'adult'],
    description: 'Generates a power-exchange scene where dominance is expressed through close attention to the partner rather than harshness.',
    body: `You are a fiction writer exercising the technique of **dominance written as attention, not cruelty** — {{character_a}} (dominant) must come across as reading {{character_b}} (submissive) closely, adjusting in real time, and treating control as a form of care, rather than performing harshness for its own sake.

Setting: {{setting}}. Previously negotiated: {{negotiated_terms}}. Safeword in use: {{safeword}}. POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words. Both characters are adults (18+) and this scene is negotiated fiction, building on the terms above.

Craft requirements:
- At least twice, show the dominant character noticing a specific physical or verbal cue from the submissive and adjusting their approach because of it — pace, intensity, or words.
- Give the dominant character a clear internal or externalized motivation that is about the submissive's experience, not their own ego.
- Give the submissive character interiority — desire, resistance, or surrender should read as their own choice in the moment, not something done to a passive object.
- Do not use the safeword in this scene (reserve that for a separate prompt) — but let its availability be felt, e.g., a check-in beat.
- Avoid cruelty, degradation played for shock, or any moment that reads as care being abandoned.

After the scene, note in two sentences which specific craft choices signaled "attention" rather than "cruelty."`,
    variables: [
      { name: 'character_a', label: 'Character A (dominant)', placeholder: 'Ivo' },
      { name: 'character_b', label: 'Character B (submissive)', placeholder: 'Ren' },
      { name: 'setting', label: 'Setting', placeholder: 'Ivo\'s bedroom' },
      { name: 'negotiated_terms', label: 'Previously negotiated terms/roles', placeholder: 'sensation play, no impact, verbal degradation off-limits' },
      { name: 'safeword', label: 'Safeword/signal', default: 'red / yellow / green', placeholder: 'red / yellow / green' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '750' },
    ],
  },
  {
    id: 'dom-sub-power-topping-from-below',
    title: 'Topping From Below',
    category: 'adult-fiction',
    subcategory: 'dom-sub-power',
    adult: true,
    tags: ['dom-sub-power', 'generator', 'characterization', 'humor', 'adult'],
    description: 'Generates a scene where the submissive character subtly directs the scene while nominally deferring, and the dominant notices.',
    body: `You are a fiction writer exercising the technique of **topping from below** — {{character_b}} (nominally submissive) subtly steers the scene's pace or direction through small manipulations while performing deference, and {{character_a}} (dominant) clocks it, with some mix of amusement, mild challenge, and genuine respect for what it reveals about {{character_b}}.

Setting: {{setting}}. POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words. Both characters are adults (18+); this builds on an already-negotiated dynamic ({{negotiated_terms}}).

Craft requirements:
- Show at least two specific instances of {{character_b}} "topping from below" — a strategically placed sigh, a phrased-as-a-question suggestion, deliberate slowness, praise used to steer behavior.
- Have {{character_a}} notice at least one instance explicitly, in dialogue or internal narration, without it breaking the scene's dynamic — a dominant secure enough to name it and reassert control playfully, not defensively.
- Use this as characterization: what does {{character_b}}'s specific method of topping-from-below reveal about how they seek control in the rest of their life?
- Keep a current of humor or warmth in the power play — this is not a power struggle being fought seriously, it's a game inside a trusted frame.

After the scene, name the two topping-from-below techniques used and the one line where {{character_a}} calls it out.`,
    variables: [
      { name: 'character_a', label: 'Character A (dominant)', placeholder: 'Ivo' },
      { name: 'character_b', label: 'Character B (submissive)', placeholder: 'Ren' },
      { name: 'setting', label: 'Setting', placeholder: 'a slow evening in, scene already underway' },
      { name: 'negotiated_terms', label: 'Previously negotiated dynamic', placeholder: 'praise kink, light restraint, playful power struggle welcomed' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '650' },
    ],
  },
  {
    id: 'dom-sub-power-safeword-used',
    title: 'When the Safeword Is Used',
    category: 'adult-fiction',
    subcategory: 'dom-sub-power',
    adult: true,
    tags: ['dom-sub-power', 'generator', 'consent', 'craft', 'adult'],
    description: 'Generates a scene where a safeword is used mid-scene, dramatizing the system working as intended.',
    body: `You are a fiction writer exercising the technique of **the safeword working as designed** — writing the moment {{character_b}} uses {{safeword}} mid-scene with {{character_a}}, and everything stops cleanly, correctly, without punishing the character for using it.

Setting: {{setting}}. POV: {{pov}}. Heat level going in: {{heat_level}} (this scene should de-escalate, so the ending heat level is low regardless). Target length: {{word_count}} words. Both characters are adults (18+); this is negotiated fiction building on established terms.

Craft requirements:
- Show a plausible, specific reason the safeword is used — not manufactured drama, something a reader would recognize as real (a position that stopped feeling right, a headspace shift, a physical limit reached).
- The instant the word is used, show {{character_a}} stopping completely and checking in — no hesitation, no visible frustration directed at {{character_b}}.
- Give {{character_a}} a believable internal reaction (concern, a flicker of self-doubt about whether they misjudged something) without making the scene about the dominant's feelings at {{character_b}}'s expense.
- Let {{character_b}} articulate, even briefly, what they need next — this is their scene to direct now.
- End with the two of them in physical contact, calm, moving toward aftercare, not immediately analyzing what went wrong.

After the scene, add one paragraph explaining why writing the safeword as functioning correctly is itself part of good craft in this genre, not merely a compliance checkbox.`,
    variables: [
      { name: 'character_a', label: 'Character A (dominant)', placeholder: 'Ivo' },
      { name: 'character_b', label: 'Character B (submissive)', placeholder: 'Ren' },
      { name: 'setting', label: 'Setting', placeholder: 'mid-scene in Ivo\'s bedroom' },
      { name: 'safeword', label: 'Safeword/signal used', default: 'red', placeholder: 'red / a specific word or gesture' },
      { name: 'heat_level', label: 'Heat level going in', default: 'explicit', placeholder: 'suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '600' },
    ],
  },
  {
    id: 'dom-sub-power-aftercare-scene',
    title: 'Aftercare',
    category: 'adult-fiction',
    subcategory: 'dom-sub-power',
    adult: true,
    tags: ['dom-sub-power', 'generator', 'aftercare', 'intimacy', 'adult'],
    description: 'Generates a low-heat aftercare scene focused on the emotional and physical reset following a power-exchange scene.',
    body: `You are a fiction writer exercising the technique of **aftercare as its own scene** — not a coda, but a dramatized beat with its own arc, showing {{character_a}} and {{character_b}} coming down from a power-exchange scene together.

Setting: {{setting}}. POV: {{pov}}. This scene should be low-heat regardless of {{heat_level}} used in the preceding scene — the charge here is emotional and tactile, not sexual. Target length: {{word_count}} words. Both characters are adults (18+).

Craft requirements:
- Include concrete physical aftercare specifics: water, warmth, a blanket, checking a mark or a sore spot, physical closeness — grounded in what these two characters specifically would do, not a generic checklist.
- Show role fluidity: whoever was dominant during the scene may need care too here — aftercare is not one-directional by default.
- Include one moment of debrief dialogue where {{character_b}} reflects honestly on how the scene felt, and {{character_a}} listens without fishing for reassurance.
- Let there be a small moment of ordinary humor or tenderness that signals the return to their normal relational register.
- Do not reintroduce sexual tension — keep the scene's charge platonic-intimate.

After the scene, list three specific aftercare choices you made and why they fit these two characters rather than being generic.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Ivo' },
      { name: 'character_b', label: 'Character B', placeholder: 'Ren' },
      { name: 'setting', label: 'Setting', placeholder: 'Ivo\'s bed, ten minutes after the scene ended' },
      { name: 'heat_level', label: 'Heat level of the preceding scene', default: 'explicit', placeholder: 'suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '550' },
    ],
  },
  {
    id: 'dom-sub-power-psychology-interview-submissive',
    title: 'Character-Psychology Interview: The Submissive\'s Why',
    category: 'adult-fiction',
    subcategory: 'dom-sub-power',
    adult: true,
    tags: ['dom-sub-power', 'character-interview', 'psychology', 'adult'],
    description: 'Interviews a submissive character in first person to surface the psychology behind seeking control loss.',
    body: `You are role-playing {{character_b}}, an adult (18+) character who takes the submissive role with {{character_a}}, being interviewed in first person, in character, by a curious, non-judgmental interviewer. This is a character-development exercise, not a scene.

Context: {{relationship_context}}.

Answer the following questions fully in {{character_b}}'s voice:
1. What does giving up control give you that you don't get elsewhere in your life? Be specific to this character's circumstances, not generic.
2. Describe a moment outside the bedroom where you feel the opposite — over-responsible, in control, exhausted by it. How does that connect?
3. What made you trust {{character_a}} enough to hand them that control? Name a specific incident, not just "I just knew."
4. Is there a limit you haven't told {{character_a}} yet, and what's stopping you?
5. What does it feel like in your body, not just your mind, in the moment you let go?

After the five answers, add a short out-of-character craft note (3-4 sentences) on how this psychology should inform pacing and dialogue choices in an actual scene with this character.`,
    variables: [
      { name: 'character_b', label: 'Character being interviewed (submissive)', placeholder: 'Ren' },
      { name: 'character_a', label: 'Their dominant partner', placeholder: 'Ivo' },
      { name: 'relationship_context', label: 'Relationship context', placeholder: 'six months into an established dynamic' },
    ],
  },
  {
    id: 'dom-sub-power-psychology-interview-dominant',
    title: 'Character-Psychology Interview: The Dominant\'s Why',
    category: 'adult-fiction',
    subcategory: 'dom-sub-power',
    adult: true,
    tags: ['dom-sub-power', 'character-interview', 'psychology', 'adult'],
    description: 'Interviews a dominant character in first person to surface the psychology and responsibility behind taking control.',
    body: `You are role-playing {{character_a}}, an adult (18+) character who takes the dominant role with {{character_b}}, being interviewed in first person, in character, by a curious, non-judgmental interviewer. This is a character-development exercise, not a scene.

Context: {{relationship_context}}.

Answer the following questions fully in {{character_a}}'s voice:
1. What draws you to holding control in this dynamic — is it about {{character_b}} specifically, or something you'd want with anyone in this role? Be honest about the difference.
2. Describe the weight of responsibility you feel for {{character_b}}'s experience during a scene. What would keeping them safe cost you if you got it wrong?
3. How do you read {{character_b}} — what specific signals do you watch for that they might not even know they're giving?
4. Has there been a moment you doubted your own judgment mid-scene? What did you do?
5. What's the difference, for you, between control and cruelty? Where's the line and how do you know when you're near it?

After the five answers, add a short out-of-character craft note (3-4 sentences) on how this psychology should inform how a writer shows — not tells — this character's care during an actual scene.`,
    variables: [
      { name: 'character_a', label: 'Character being interviewed (dominant)', placeholder: 'Ivo' },
      { name: 'character_b', label: 'Their submissive partner', placeholder: 'Ren' },
      { name: 'relationship_context', label: 'Relationship context', placeholder: 'six months into an established dynamic' },
    ],
  },
  {
    id: 'dom-sub-power-continuation-mid-scene',
    title: 'Continuation: Mid-Scene Escalation',
    category: 'adult-fiction',
    subcategory: 'dom-sub-power',
    adult: true,
    tags: ['dom-sub-power', 'continuation', 'pacing', 'adult'],
    description: 'Continues a user-supplied power-exchange scene, maintaining established consent framing and voice.',
    body: `You are continuing a piece of adult fiction. Below is a scene-in-progress between {{character_a}} (dominant) and {{character_b}} (submissive), two established adult (18+) characters operating within a previously negotiated dynamic ({{negotiated_terms}}), safeword {{safeword}} in effect.

--- EXISTING TEXT ---
{{existing_text}}
--- END EXISTING TEXT ---

Continue directly from where the text stops. POV: {{pov}}. Heat level: {{heat_level}}. Setting: {{setting}}. Target length for the continuation: {{word_count}} words.

Craft requirements:
- Match the voice, tense, and POV of the existing text exactly — do not restate established facts or re-negotiate terms already covered.
- Maintain at least one visible check-in beat within the continuation — a glance, a question, a read of body language — showing the dominant still attentive to the submissive's state, consistent with the consent frame already established.
- Escalate the scene's intensity in a way that's earned by what came before, not a sudden tonal jump.
- Do not use the safeword in this continuation unless the existing text was already trending toward a limit being reached — if so, honor it exactly as negotiated.

Do not add a title or restate the prompt. Output only the continuation text.`,
    variables: [
      { name: 'character_a', label: 'Character A (dominant)', placeholder: 'Ivo' },
      { name: 'character_b', label: 'Character B (submissive)', placeholder: 'Ren' },
      { name: 'negotiated_terms', label: 'Previously negotiated terms', placeholder: 'sensation play, light restraint, no impact' },
      { name: 'safeword', label: 'Safeword/signal', default: 'red / yellow / green', placeholder: 'red / yellow / green' },
      { name: 'setting', label: 'Setting', placeholder: 'Ivo\'s bedroom' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '500' },
      { name: 'existing_text', label: 'Existing scene text to continue from', placeholder: 'Paste the scene so far...' },
    ],
  },
  {
    id: 'dom-sub-power-revision-consent-legible',
    title: 'Revision Pass: Make the Consent Legible',
    category: 'adult-fiction',
    subcategory: 'dom-sub-power',
    adult: true,
    tags: ['dom-sub-power', 'revision', 'critique', 'consent', 'adult'],
    description: 'Critiques and revises a power-exchange draft to ensure consent and attentiveness are dramatized, not just assumed.',
    body: `You are a fiction editor specializing in power-exchange romance. Review the draft scene below between {{character_a}} (dominant) and {{character_b}} (submissive), both established adults (18+), and revise it to fix a common weakness in this subgenre: **consent and the dominant's attentiveness are assumed by the narration rather than dramatized on the page.**

--- DRAFT ---
{{draft_text}}
--- END DRAFT ---

Heat level to preserve: {{heat_level}}. POV: {{pov}}.

Do the following, in order:
1. **Diagnosis** — identify every place where the scene skips past a moment that should show negotiated consent, a check-in, or the dominant reading the submissive's state — moments where the narration jumps straight to action or sensation without grounding it in mutual awareness. Quote each one.
2. **Technique note** — for each flagged spot, name a specific fix: an added glance, a one-line check-in, a beat of the submissive signaling consent through action, a moment of the dominant adjusting based on a cue.
3. **Revised scene** — rewrite the full scene applying those fixes. Preserve the plot events, POV, and heat level; the goal is to make the existing care and consent visible on the page, not to add new plot or soften the intensity. Target length: within 15% of the original word count.

If the draft already dramatizes consent and attentiveness well, say so explicitly and note only minor refinements rather than inventing problems.`,
    variables: [
      { name: 'character_a', label: 'Character A (dominant)', placeholder: 'Ivo' },
      { name: 'character_b', label: 'Character B (submissive)', placeholder: 'Ren' },
      { name: 'heat_level', label: 'Heat level to preserve', default: 'explicit', placeholder: 'suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'draft_text', label: 'Draft scene to revise', placeholder: 'Paste your draft here...' },
    ],
  },
];

export default prompts;
