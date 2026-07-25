import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'friends-to-lovers-shared-history-leverage',
    title: 'Shared History as Leverage',
    category: 'adult-fiction',
    subcategory: 'friends-to-lovers',
    adult: true,
    tags: ['friends-to-lovers', 'generator', 'backstory', 'tension', 'adult'],
    description: 'Generates a scene where years of shared history are used as emotional leverage in a charged moment.',
    body: `You are a fiction writer exercising the technique of using **shared history as leverage** — where a long friendship gives {{character_a}} and {{character_b}} access to each other's vulnerabilities that a new lover wouldn't have, and one of them starts using that access on purpose.

Setting: {{setting}}. POV: {{pov}}. Heat level: {{heat_level}} (fade-to-black through explicit — calibrate description to this). Target length: {{word_count}} words.

Write a scene in which one character deliberately invokes a specific memory, private joke, or known insecurity from years of friendship to close emotional distance or provoke a reaction — and it works, but it also exposes how much power that history gives them. Both characters must be adults (18+), and nothing in the text should suggest otherwise.

Craft requirements:
- Open mid-scene, no preamble.
- Include at least one line of dialogue that only makes sense because of their shared past.
- Let the character deploying the memory have a flicker of guilt or calculation about doing it.
- End on a beat of charged ambiguity, not resolution.

After the scene, add a two-sentence craft note explaining specifically how the shared-history leverage was built into the dialogue or action.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'Dez' },
      { name: 'setting', label: 'Setting', placeholder: 'a late-night kitchen after a party' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '600' },
    ],
  },
  {
    id: 'friends-to-lovers-risking-the-friendship',
    title: 'The Risk of Losing the Friendship',
    category: 'adult-fiction',
    subcategory: 'friends-to-lovers',
    adult: true,
    tags: ['friends-to-lovers', 'generator', 'stakes', 'internal-conflict', 'adult'],
    description: 'Generates a scene built around the explicit fear that acting on attraction will cost the friendship.',
    body: `You are a fiction writer exercising the technique of **stakes through what's at risk** — the tension in this scene must come from {{pov_character}} weighing physical desire against the real, named cost of losing {{character_a}} and {{character_b}}'s friendship if this goes wrong.

Setting: {{setting}}. POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words.

Write the moment just before or during a first crossing of a physical line, where the internal narration (or, if dialogue-driven, subtext) makes the friendship's value explicit — years invested, mutual friends, what they'd lose structurally and emotionally, not just awkwardness. Both characters are adults (18+).

Craft requirements:
- Name at least one concrete thing that would be lost (a shared apartment, a friend group, a standing tradition) — not just abstract "our friendship."
- Show the moment the risk calculation loses to desire, without skipping over the hesitation.
- Keep dialogue naturalistic; avoid melodrama or stated-aloud monologuing about "what if this ruins everything" unless it fits the character's voice.
- Do not resolve whether the risk was worth it — end before the aftermath.

After the scene, note in one sentence which specific stakes you used and why they were chosen over generic ones.`,
    variables: [
      { name: 'pov_character', label: 'POV character (whose fear drives the scene)', placeholder: 'Mara' },
      { name: 'character_a', label: 'Character A', placeholder: 'Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'Dez' },
      { name: 'setting', label: 'Setting', placeholder: 'the last night of a shared road trip' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '700' },
    ],
  },
  {
    id: 'friends-to-lovers-familiarity-turning-charged',
    title: 'Familiarity Turning Charged',
    category: 'adult-fiction',
    subcategory: 'friends-to-lovers',
    adult: true,
    tags: ['friends-to-lovers', 'generator', 'sensory-detail', 'slow-burn', 'adult'],
    description: 'Generates a scene where an ordinary, familiar routine between friends becomes suddenly sexually charged.',
    body: `You are a fiction writer exercising the technique of **familiarity turning charged** — taking a completely mundane, established routine between {{character_a}} and {{character_b}} (something they've done a hundred times platonically) and showing the exact moment it stops feeling platonic.

Setting: {{setting}}. Established routine: {{routine}}. POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words.

Write the scene so the routine itself doesn't change — same actions, same setting — but the sensory attention does: proximity that used to be unremarkable now gets noticed, an ordinary touch lands differently. Both characters are adults (18+).

Craft requirements:
- Establish the routine as genuinely ordinary in the opening lines before the shift begins.
- Locate the exact sentence or beat where the tone turns — make it identifiable, not gradual to the point of vagueness.
- Use sensory detail (proximity, breath, sound, temperature) rather than internal commentary to carry the shift.
- Let at least one character notice the other noticing, and choose whether to acknowledge it.

After the scene, quote the single sentence you consider the turn, and explain in one line why that's where it lands.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'Dez' },
      { name: 'setting', label: 'Setting', placeholder: 'Dez\'s apartment' },
      { name: 'routine', label: 'The ordinary shared routine', placeholder: 'splitting a couch to watch a movie, always sitting too close' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '650' },
    ],
  },
  {
    id: 'friends-to-lovers-awkward-morning-after',
    title: 'The Awkward Morning After',
    category: 'adult-fiction',
    subcategory: 'friends-to-lovers',
    adult: true,
    tags: ['friends-to-lovers', 'generator', 'aftermath', 'dialogue', 'adult'],
    description: 'Generates the morning-after scene where two friends who slept together negotiate what happens next.',
    body: `You are a fiction writer exercising the technique of **the awkward morning after** — the scene isn't the sex, it's the negotiation of meaning that happens over coffee, silence, and half-finished sentences once it's daylight.

Setting: {{setting}}, the morning after {{character_a}} and {{character_b}} slept together for the first time. POV: {{pov}}. Heat level: {{heat_level}} (this scene itself should stay low-heat regardless — it's about aftermath, not the act). Target length: {{word_count}} words.

Write a scene dominated by awkwardness that is specific rather than generic: physical logistics (whose clothes, who makes coffee, who speaks first), unresolved status of the friendship, and at least one attempt by a character to retreat into old, "safe" friend-banter that now rings false. Both characters are adults (18+).

Craft requirements:
- Do not let either character state their feelings cleanly in a speech — let subtext and deflection carry it.
- Include one piece of mundane physical business (making coffee, finding a shirt) that the dialogue happens around, not instead of.
- Show at least one moment where old friend-dynamic banter is attempted and lands wrong.
- End with an open, unresolved status — not a clean confession, not a clean breakup.

After the scene, list in bullet points three specific awkwardness techniques you used, so the user can reuse the pattern.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'Dez' },
      { name: 'setting', label: 'Setting', placeholder: 'Mara\'s studio apartment' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '650' },
    ],
  },
  {
    id: 'friends-to-lovers-continuation-crossing-line',
    title: 'Continuation: Crossing the Line',
    category: 'adult-fiction',
    subcategory: 'friends-to-lovers',
    adult: true,
    tags: ['friends-to-lovers', 'continuation', 'pacing', 'adult'],
    description: 'Continues a user-supplied friends-to-lovers scene from the moment before physical escalation.',
    body: `You are continuing a piece of adult fiction. Below is a scene-in-progress between {{character_a}} and {{character_b}}, two established adult (18+) friends, at the moment tension is about to cross from emotional to physical.

--- EXISTING TEXT ---
{{existing_text}}
--- END EXISTING TEXT ---

Continue directly from where the text stops. POV: {{pov}}. Heat level: {{heat_level}}. Setting: {{setting}}. Target length for the continuation: {{word_count}} words.

Craft requirements — this continuation must specifically exercise **pacing through hesitation**:
- Do not jump straight to the physical beat. Slow the pace at the threshold: one more exchange of dialogue, one more chance to stop, before either character commits.
- Match the voice, tense, and POV of the existing text exactly — do not restate established facts or re-introduce the characters.
- Let both characters' consent be legible through action or word, not just assumed by the narration.
- If the existing text's heat level is ambiguous, default to the {{heat_level}} value given above and stay consistent with it throughout the continuation.

Do not add a title or restate the prompt. Output only the continuation text.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'Dez' },
      { name: 'setting', label: 'Setting', placeholder: 'a parked car outside Mara\'s building' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '500' },
      { name: 'existing_text', label: 'Existing scene text to continue from', placeholder: 'Paste the scene so far...' },
    ],
  },
  {
    id: 'friends-to-lovers-negotiation-what-are-we',
    title: 'Negotiation Scene: "What Are We Now?"',
    category: 'adult-fiction',
    subcategory: 'friends-to-lovers',
    adult: true,
    tags: ['friends-to-lovers', 'negotiation-scene', 'dialogue', 'adult'],
    description: 'Builds a dialogue-driven scene where two friends explicitly negotiate the terms of a new physical relationship.',
    body: `You are building a **negotiation scene** — not a romantic declaration, but a practical, adult conversation where {{character_a}} and {{character_b}} explicitly define what their physical relationship now is, after crossing a friendship line.

Setting: {{setting}}. POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words. Both characters are adults (18+).

Write a scene that is at least 60% dialogue, in which the characters explicitly address, in-character and without narrator hand-holding:
1. Whether this is a one-time thing, ongoing, or undefined.
2. Whether other people (mutual friends, other partners) need to know.
3. What happens to the friendship if this doesn't work out.
4. At least one moment of humor or friend-dynamic familiarity that keeps the scene from reading as a business meeting.

Craft requirements:
- Give each character a distinct negotiating style — one more direct, one more avoidant or joking — and keep it consistent.
- Do not let the conversation resolve too neatly; leave one open question unanswered by the end.
- Ground the conversation in a physical action or setting detail (making food, walking, doing dishes) so it doesn't float in a dialogue void.

After the scene, list the four negotiation points above and quote the line where each was addressed.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'Dez' },
      { name: 'setting', label: 'Setting', placeholder: 'a diner booth, the next afternoon' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'word_count', label: 'Target word count', default: '700' },
    ],
  },
  {
    id: 'friends-to-lovers-revision-cut-the-telling',
    title: 'Revision Pass: Cut the Telling, Keep the Tension',
    category: 'adult-fiction',
    subcategory: 'friends-to-lovers',
    adult: true,
    tags: ['friends-to-lovers', 'revision', 'critique', 'show-dont-tell', 'adult'],
    description: 'Critiques and revises a friends-to-lovers draft to replace stated feelings with dramatized tension.',
    body: `You are a fiction editor specializing in the friends-to-lovers subgenre. Review the draft scene below between {{character_a}} and {{character_b}}, both established adults (18+), and revise it to fix the single most common weakness in this subgenre: **characters stating their feelings instead of the scene dramatizing them.**

--- DRAFT ---
{{draft_text}}
--- END DRAFT ---

Heat level to preserve: {{heat_level}}. POV: {{pov}}.

Do the following, in order:
1. **Diagnosis** — identify every sentence where a character's feeling, attraction, or internal conflict is simply stated ("she realized she wanted him," "the tension between them was undeniable") rather than shown through action, dialogue, or specific sensory detail. Quote each one.
2. **Technique note** — for each flagged sentence, name the specific technique that could replace it (e.g., a physical tell, a deflected line of dialogue, a change in pacing, a detail noticed instead of a feeling named).
3. **Revised scene** — rewrite the full scene applying those fixes. Preserve the plot events, POV, and heat level exactly; change only how the emotional beats are delivered. Target length: within 15% of the original word count.

Do not add new plot events or extend the scene's timeline. If the draft has no instances of stated feeling, say so explicitly instead of inventing a critique.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'Dez' },
      { name: 'heat_level', label: 'Heat level to preserve', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person / third limited' },
      { name: 'draft_text', label: 'Draft scene to revise', placeholder: 'Paste your draft here...' },
    ],
  },
  {
    id: 'friends-to-lovers-character-interview-denial',
    title: 'Character-Psychology Interview: The Denial Phase',
    category: 'adult-fiction',
    subcategory: 'friends-to-lovers',
    adult: true,
    tags: ['friends-to-lovers', 'character-interview', 'psychology', 'adult'],
    description: 'Interviews a character in first person to surface why they are denying attraction to their friend.',
    body: `You are role-playing {{pov_character}}, one half of a friends-to-lovers pair with {{other_character}}, being interviewed in first person, in character, by a curious but not hostile interviewer. Both characters are adults (18+). Setting/context for where this interview is "happening" mentally: {{setting}}.

The interview's purpose is to surface the specific psychological mechanism {{pov_character}} is using to deny or minimize attraction to {{other_character}} — this is a character-development exercise, not a scene.

Answer the following questions in {{pov_character}}'s voice, staying fully in character, including deflection, contradiction, or defensiveness where it fits the character:
1. When did you first notice something had changed? Describe the exact moment, then immediately downplay it.
2. What's the story you tell yourself about why it's not attraction? Be specific — a rule, a fear, a past experience.
3. What would you lose if you were wrong about your own denial?
4. Describe {{other_character}} in purely "platonic" terms — but let a detail slip that undercuts it.
5. What's the one thing {{other_character}} could do that would make denial impossible?

After the five answers, add a short out-of-character craft note (3-4 sentences) analyzing what denial mechanism this reveals (e.g., rationalization, minimization, deflection through humor) and how a writer could plant it earlier in a manuscript.`,
    variables: [
      { name: 'pov_character', label: 'Character being interviewed', placeholder: 'Mara' },
      { name: 'other_character', label: 'The friend they are denying feelings for', placeholder: 'Dez' },
      { name: 'setting', label: 'Context/setting for the interview', placeholder: 'a quiet moment, days after a near-miss' },
    ],
  },
  {
    id: 'friends-to-lovers-generator-inciting-incident',
    title: 'Inciting-Incident Generator',
    category: 'adult-fiction',
    subcategory: 'friends-to-lovers',
    adult: true,
    tags: ['friends-to-lovers', 'generator', 'plotting', 'brainstorm', 'adult'],
    description: 'Generates five distinct inciting incidents that could plausibly shift a friendship toward romance.',
    body: `You are a plotting assistant for adult friends-to-lovers fiction. Generate five distinct **inciting incidents** — the specific triggering event that shifts {{character_a}} and {{character_b}} from established friends toward romantic/sexual tension — for the following setup.

Relationship context: {{relationship_context}}. Setting: {{setting}}. Both characters are adults (18+).

For each of the five incidents:
- State it in one sentence.
- Name the technique it relies on (e.g., forced proximity, jealousy trigger, vulnerability exposed, third-party mistaken assumption, near-loss).
- Give one line on why it works specifically because these two are already friends, not strangers — i.e., what the existing friendship makes possible that wouldn't work for a meet-cute between strangers.
- Rate its heat trajectory (slow-burn / medium / fast) so the user can pick based on {{heat_level}}.

Order the five from lowest to highest initial heat trajectory. Do not write full scenes — one paragraph per incident, no more than 60 words each.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Mara' },
      { name: 'character_b', label: 'Character B', placeholder: 'Dez' },
      { name: 'relationship_context', label: 'How long/how they are friends', placeholder: 'college roommates, ten years of friendship, both recently single' },
      { name: 'setting', label: 'General setting/world', placeholder: 'a mutual friend\'s wedding weekend' },
      { name: 'heat_level', label: 'Desired heat level target', default: 'suggestive', placeholder: 'fade-to-black / suggestive / explicit' },
    ],
  },
];

export default prompts;
