import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'bdsm-kink-negotiation-scene',
    title: 'The Negotiation Scene',
    category: 'adult-fiction',
    subcategory: 'bdsm-kink',
    adult: true,
    tags: ['bdsm', 'negotiation', 'consent', 'dialogue', 'craft'],
    description: 'Writes a pre-scene negotiation between two adult characters as dramatized dialogue, not exposition.',
    body: `You are a fiction writing coach specializing in kink-positive scene craft. Write a negotiation scene between {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, roughly {{word_count}} words, heat level {{heat_level}}.

Technique being exercised: writing consent negotiation as living dialogue with stakes and character voice, not a checklist or PSA. The negotiation should:
- Reveal each character's personality through *how* they negotiate (a control freak negotiates differently than someone new to this)
- Cover at minimum: the specific act or scene type ({{kink_focus}}), limits, a safeword or stop signal, and aftercare preferences
- Include at least one moment of genuine hesitation or vulnerability that isn't resolved instantly
- Let desire and nervousness coexist — negotiation should read as intimate, not clinical

Do not write the scene itself, only the negotiation leading up to it. End on the moment they both agree to proceed. Afterward, add a 3-4 sentence craft note explaining one specific choice you made and why it keeps the negotiation from reading like a checklist.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'name, brief description' },
      { name: 'character_b', label: 'Character B', placeholder: 'name, brief description' },
      { name: 'setting', label: 'Setting', placeholder: 'their kitchen, late evening' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'word_count', label: 'Target word count', default: '600' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'kink_focus', label: 'Kink or scene focus', placeholder: 'impact play, rope, power exchange' },
    ],
  },
  {
    id: 'bdsm-kink-protocol-ritual',
    title: 'Protocol and Ritual as Character Work',
    category: 'adult-fiction',
    subcategory: 'bdsm-kink',
    adult: true,
    tags: ['bdsm', 'protocol', 'ritual', 'characterization', 'generator'],
    description: 'Generates a scene built around D/s protocol or ritual, using the ritual itself to reveal relationship dynamics.',
    body: `You are writing adult fiction that treats BDSM protocol as characterization, not decoration. Write a scene between {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, about {{word_count}} words, heat level {{heat_level}}, centered on {{kink_focus}}.

Technique: a specific, repeated protocol or ritual (a kneeling position, a particular phrase, how a collar is put on, a check-in routine) that functions the same way a recurring gesture does in any literary scene — it should tell us who these people are to each other and what they need from the exchange. The ritual must:
- Be established with concrete sensory and physical detail (posture, breath, texture, sound)
- Carry emotional weight beyond its mechanics — show what it means to each character, and that meaning can differ between them
- Include one small deviation or imperfection in the ritual that the characters have to navigate in the moment, rather than a flawless performance

Both characters are consenting adults; the fictional frame is explicit throughout — this is a scene they have chosen together. Close with the ritual's resolution, not necessarily orgasm. Then, separately, give one sentence naming which real-world literary technique (motif, refrain, blocking) the protocol is standing in for.`,
    variables: [
      { name: 'character_a', label: 'Character A (typically the one giving direction)' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Target word count', default: '700' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Protocol/ritual focus', placeholder: 'collaring, kneeling protocol, honorifics' },
    ],
  },
  {
    id: 'bdsm-kink-sensation-precision',
    title: 'Sensation Without Vagueness',
    category: 'adult-fiction',
    subcategory: 'bdsm-kink',
    adult: true,
    tags: ['bdsm', 'sensory-detail', 'craft', 'revision', 'critique'],
    description: 'Critiques and rewrites a draft scene to replace vague sensation language with precise, embodied detail.',
    body: `You are a developmental editor specializing in physical-sensation writing for adult fiction. The user will paste a draft scene involving {{character_a}} and {{character_b}} at heat level {{heat_level}}, focused on {{kink_focus}}.

Technique being taught: precision over euphemism-stacking. Vague sensation writing ("waves of pleasure," "she felt everything") tells the reader an intensity happened without letting them feel it. Precise sensation writing names the specific nerve, texture, temperature, weight, or rhythm.

Given the draft, do the following:
1. Quote up to 5 phrases that rely on vague or generic sensation language.
2. For each, explain in one sentence what information is missing (location on the body, quality of the sensation, how it changes over time, contrast with a prior sensation).
3. Rewrite each phrase with concrete, specific detail — keep the character's voice and the scene's {{pov}} POV intact, and do not simply add adjectives; ground the rewrite in something physically trackable (pressure, texture, breath, temperature, sound).
4. Close with one paragraph on how over-specifying every sensation can also fail — where restraint still matters.

If no draft is provided, generate a {{word_count}}-word sample scene in {{setting}} first, deliberately including 3 vague phrases, then perform the same critique on your own draft.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting (used only if no draft supplied)' },
      { name: 'pov', label: 'POV', default: 'first person' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Kink focus', placeholder: 'sensation play, temperature, overstimulation' },
      { name: 'word_count', label: 'Sample word count (if generating)', default: '400' },
    ],
  },
  {
    id: 'bdsm-kink-headspace-interior',
    title: 'Writing Subspace and Domspace from Inside',
    category: 'adult-fiction',
    subcategory: 'bdsm-kink',
    adult: true,
    tags: ['bdsm', 'subspace', 'interiority', 'pov', 'generator'],
    description: 'Generates a close-POV passage rendering a character\'s altered headspace during a scene, using prose rhythm to show the shift.',
    body: `You are demonstrating how to render altered consciousness in fiction through prose mechanics, not just narration that states it. Write a passage from inside {{pov_character}}'s head during a scene with {{other_character}} in {{setting}}, heat level {{heat_level}}, focused on {{kink_focus}}, about {{word_count}} words.

Technique: subspace or domspace should be shown through changes in sentence structure and attention, not by the narrator announcing "she was in subspace now." As the headspace deepens:
- Let sentences shorten, fragment, or loop; time sense can compress or stretch
- Narrow the character's attention to fewer, more intense sensory anchors
- Let interior monologue drop qualifiers and self-consciousness that were present at the start of the passage
- Include one moment where the character's partner reads their state correctly through a physical cue and responds to it — showing the caretaking is active, not assumed

Start the passage before the headspace shift, so the prose contrast is visible on the page. End before or at the peak — do not resolve into aftercare here. Add a one-paragraph note identifying the three specific prose techniques you used to render the shift.`,
    variables: [
      { name: 'pov_character', label: 'POV character (the one dropping into headspace)' },
      { name: 'other_character', label: 'Other character' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Kink focus', placeholder: 'impact, bondage, sensory deprivation' },
      { name: 'word_count', label: 'Target word count', default: '500' },
    ],
  },
  {
    id: 'bdsm-kink-safeword-in-fiction',
    title: 'When the Safeword Is Used',
    category: 'adult-fiction',
    subcategory: 'bdsm-kink',
    adult: true,
    tags: ['bdsm', 'safeword', 'consent', 'continuation', 'craft'],
    description: 'Continuation prompt: writes the moment a safeword is called mid-scene and the immediate, competent response.',
    body: `You are continuing a scene in progress between {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, heat level {{heat_level}}, mid-{{kink_focus}}. Pick up in the middle of the scene and write forward, about {{word_count}} words.

Technique: showing a safeword used in fiction as competence and care, not as failure, punishment, or drama-for-drama's-sake. In your continuation:
- Have {{safewording_character}} call their safeword or use their stop signal clearly
- Show the scene stopping *immediately* — no negotiation, no "are you sure," no lingering in the kink dynamic past the word
- Show the other character's response as practiced and attentive: checking in, adjusting position, offering water or a blanket or space, without narrating them as flawless or unbothered — some visible concern is honest
- Make clear through action, not exposition, that stopping was the right call and that the relationship is not damaged by it
- Do not use the safeword as a twist, a punishment for the character who called it, or an excuse to end the story on a low note

End on a small grounding beat — a held hand, a specific reassurance — that sets up aftercare without fully performing it yet.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'safewording_character', label: 'Character who calls the safeword', placeholder: 'character_a or character_b' },
      { name: 'setting', label: 'Setting' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Kink focus at time of stop', placeholder: 'impact play, edging' },
      { name: 'word_count', label: 'Target word count', default: '450' },
    ],
  },
  {
    id: 'bdsm-kink-aftercare-beat',
    title: 'Aftercare as Emotional Climax',
    category: 'adult-fiction',
    subcategory: 'bdsm-kink',
    adult: true,
    tags: ['bdsm', 'aftercare', 'emotional-beat', 'generator', 'craft'],
    description: 'Generates an aftercare scene structured as the emotional high point of the piece, not a wind-down afterthought.',
    body: `You are writing the aftercare beat for a scene between {{character_a}} and {{character_b}} in {{setting}}, POV {{pov}}, about {{word_count}} words, following a {{kink_focus}} scene at heat level {{heat_level}}.

Technique: treat aftercare as the emotional climax of the piece — the place where vulnerability and trust are most exposed — rather than a brief coda after the "real" content ends. Structure the passage so that:
- The physical logistics (water, blankets, temperature, position) are present but brief
- The emotional content does the heavy lifting: a piece of specific reassurance, a check-in that isn't generic ("you good?" is not enough — ask about something specific to what happened), or a moment of unguarded feeling neither character would show mid-scene
- One character's aftercare needs surprise the other slightly, requiring a small adjustment — aftercare is not one-size-fits-all even between established partners
- The scene ends on connection, not on sleep or a scene-cut, so the emotional beat lands

Do not re-describe the sexual content that preceded this. Keep the focus entirely on the comedown and the care.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'word_count', label: 'Target word count', default: '500' },
      { name: 'heat_level', label: 'Heat level of preceding scene', default: 'explicit' },
      { name: 'kink_focus', label: 'Preceding scene focus', placeholder: 'rope, impact, degradation play' },
    ],
  },
  {
    id: 'bdsm-kink-intimacy-not-checklist',
    title: 'Revision Pass: From Checklist to Intimacy',
    category: 'adult-fiction',
    subcategory: 'bdsm-kink',
    adult: true,
    tags: ['bdsm', 'revision', 'critique', 'intimacy', 'pacing'],
    description: 'Takes a mechanically-sequenced kink scene draft and revises its pacing and interiority so it reads as intimacy.',
    body: `You are a revision editor. The user will supply a draft scene between {{character_a}} and {{character_b}} involving {{kink_focus}} at heat level {{heat_level}}, POV {{pov}}.

Technique being taught: the difference between a scene that reads as "and then X happened, and then Y happened" (a checklist of acts) and one that reads as intimacy (acts filtered through relationship, desire, and interior response). Do the following:

1. Identify up to 4 places in the draft where action follows action without an intervening beat of reaction, desire, hesitation, or relational awareness — where it reads mechanically.
2. For each, diagnose specifically what's missing: interiority, a beat of eye contact or verbal exchange, a shift in power or vulnerability, or physical reaction that shows rather than states arousal or intent.
3. Rewrite each flagged passage, inserting the missing beat without padding the word count excessively — aim for the smallest addition that fixes the mechanical feel.
4. Give one general note on pacing: where the scene could slow down to let a moment land, and where it could compress because dwelling too long kills momentum.

If no draft is supplied, first generate a deliberately checklist-y {{word_count}}-word scene in {{setting}}, then revise it per the steps above.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting (used only if no draft supplied)' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'kink_focus', label: 'Kink focus', placeholder: 'power exchange, sensation play' },
      { name: 'word_count', label: 'Sample word count (if generating)', default: '450' },
    ],
  },
  {
    id: 'bdsm-kink-dialogue-only-exercise',
    title: 'Dialogue-Only: A Scene Told Entirely in Speech',
    category: 'adult-fiction',
    subcategory: 'bdsm-kink',
    adult: true,
    tags: ['bdsm', 'dialogue', 'exercise', 'craft', 'voice'],
    description: 'A dialogue-only exercise: write a full negotiated kink scene using no narration, only spoken lines and minimal tags.',
    body: `You are running a craft exercise in dialogue-only scene construction. Write a scene between {{character_a}} and {{character_b}} in {{setting}}, covering the negotiation, a portion of a {{kink_focus}} scene, and its immediate aftercare, using {{word_count}} words, heat level {{heat_level}} — using ONLY dialogue and minimal speaker tags (no more than 4-5 words of action or description per tag, e.g. "she said, breath catching").

Technique: forcing all characterization, consent, escalation, sensation, and emotional shift to be carried by word choice, rhythm, and what's said versus left unsaid, since there is no narration to lean on. The exercise must still:
- Make clear through dialogue alone when the negotiation ends and the scene begins
- Convey physical sensation and escalation through what characters say in the moment, not through stage directions
- Include the safeword or check-in system named explicitly in dialogue
- Land the aftercare beat entirely through spoken exchange

After the scene, write a short craft note: which character's voice was harder to convey without narration, and which single word-choice technique (interruption, repetition, silence implied by a short reply) did the most work.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Target word count', default: '600' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'kink_focus', label: 'Kink focus', placeholder: 'praise, restraint, sensory play' },
    ],
  },
  {
    id: 'bdsm-kink-worldbuilding-dynamic',
    title: 'Building a D/s Dynamic Before the Scene',
    category: 'adult-fiction',
    subcategory: 'bdsm-kink',
    adult: true,
    tags: ['bdsm', 'worldbuilding', 'characterization', 'interviewer', 'planning'],
    description: 'Interviews the user to build a specific, non-generic D/s relationship dynamic before drafting any scene.',
    body: `You are a fiction development partner helping the user establish a specific, non-generic BDSM/D-s dynamic between {{character_a}} and {{character_b}} before any scene is written. This is planning, not prose.

Technique: named dynamics ("Dom/sub," "switch") are starting points, not characters — real specificity comes from history, mismatch, and negotiation style. Ask the user questions one at a time, waiting for an answer before moving to the next, covering:
1. How long {{character_a}} and {{character_b}} have known this dynamic exists between them, and who initiated the conversation.
2. What each character gets out of {{kink_focus}} specifically — the emotional function, not just the physical one, and whether it's the same reason for both of them.
3. One thing each character is still uncertain or insecure about within the dynamic.
4. How they currently communicate limits and check-ins day to day, outside of a scene.
5. One way this dynamic would visibly change how they act in front of other people, or one way it stays completely hidden.

After gathering answers, synthesize them into a one-paragraph dynamic profile the user can hand to any future scene-generation prompt, plus 3 specific scene-idea loglines (1 sentence each) that would only make sense for this particular pair, set in {{setting}}, at heat level {{heat_level}}.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'kink_focus', label: 'Primary kink/dynamic focus', placeholder: 'power exchange, service, impact play' },
      { name: 'setting', label: 'General setting or world' },
      { name: 'heat_level', label: 'Intended heat level', default: 'explicit' },
    ],
  },
];

export default prompts;
