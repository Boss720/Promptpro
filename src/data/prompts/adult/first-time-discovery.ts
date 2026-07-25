import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'first-time-discovery-nervous-generator',
    title: 'Nerves-and-Awkwardness First Time Generator',
    category: 'adult-fiction',
    subcategory: 'first-time-discovery',
    adult: true,
    tags: ['first-time', 'nerves', 'consent', 'sensory', 'scene'],
    description: 'Generates a first-time scene between adults where nervousness and small awkward moments are written honestly rather than smoothed over.',
    body: `Write a scene of approximately {{word_count}} words, in {{pov}} point of view, in which {{character_a}} and {{character_b}} — both adults — are together for the first time in {{setting}}.

Craft focus: honest nervousness. Do not let either character be effortlessly smooth. Include:
- At least one moment of genuine awkwardness (fumbling, mistimed movement, a nervous laugh) that the characters recover from rather than pretend didn't happen
- An explicit, in-voice check-in before any escalation, and at least one more check-in mid-scene
- Interiority that names the specific thing each character is nervous about (being judged, disappointing the other, their own inexperience) distinct from physical description
- Heat level: {{heat_level}} — escalate gradually; do not skip past the awkward beat to get to the confident one

End on a moment of mutual relief or reassurance, not a tidy fade-out. Do not make either character a flawless performer.`,
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
    id: 'first-time-discovery-new-identity-scene',
    title: 'Acting on a Late-Realized Identity',
    category: 'adult-fiction',
    subcategory: 'first-time-discovery',
    adult: true,
    tags: ['first-time', 'identity', 'interiority', 'consent', 'scene'],
    description: 'Writes a scene where an adult acts for the first time on a sexual or romantic identity they only recognized later in life.',
    body: `{{character_a}} is an adult who has only recently recognized {{identity_detail}} about themselves. Write a scene of roughly {{word_count}} words, {{pov}} POV, in which {{character_a}} acts on this with {{character_b}} — also an adult, and aware of what this means to {{character_a}} — for the first time, in {{setting}}.

Craft requirements:
1. Show the gap between what {{character_a}} expected this to feel like and what it actually feels like, as a distinct interior beat, not just stated once and dropped.
2. Ground consent in dialogue that acknowledges this is new territory for {{character_a}} — {{character_b}} should check in without being clinical or treating {{character_a}} as fragile.
3. Track physical sensation and emotional recognition as two separate threads that occasionally collide.
4. Heat level: {{heat_level}}.

Avoid narrating this as a triumphant "finally becoming myself" montage — keep it specific, physical, and a little uncertain, the way a genuine first time is.`,
    variables: [
      { name: 'word_count', label: 'Word count', default: '1100' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, third limited' },
      { name: 'character_a', label: 'Character A' },
      { name: 'identity_detail', label: 'What they recently recognized about themselves', placeholder: 'their attraction to men, a kink, their bisexuality' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
    ],
  },
  {
    id: 'first-time-discovery-expectation-vs-reality',
    title: 'Expectation vs. Reality Scene',
    category: 'adult-fiction',
    subcategory: 'first-time-discovery',
    adult: true,
    tags: ['first-time', 'interiority', 'sensory', 'scene', 'expectation'],
    description: 'Writes a first-time scene structured around the gap between what a character imagined and what actually happens.',
    body: `Write a scene, about {{word_count}} words, {{pov}} POV, where {{character_a}} experiences {{new_experience}} for the first time with {{character_b}} in {{setting}}. Both are adults.

Structure the scene around a running contrast: before or during key moments, briefly surface what {{character_a}} imagined this would be like, then immediately follow with what it actually is — funnier, clumsier, more tender, or more intense than expected. Do this at least three times across the scene, varying which direction the gap runs (sometimes reality undersells the fantasy, sometimes it outdoes it).

Requirements:
- Keep consent explicit and current — check-ins woven into dialogue, not a disclaimer up front
- Heat level: {{heat_level}}
- Let {{character_b}} have their own brief interior moment too, not just {{character_a}}

End with {{character_a}} consciously updating what they now know, in their own words or thought — no narrator summary.`,
    variables: [
      { name: 'word_count', label: 'Word count', default: '1000' },
      { name: 'pov', label: 'POV', default: 'first person' },
      { name: 'character_a', label: 'Character A' },
      { name: 'new_experience', label: 'What they are experiencing for the first time', placeholder: 'sex with a woman, a threesome, being with someone older' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
    ],
  },
  {
    id: 'first-time-discovery-continue-voice',
    title: 'Continue a First-Time Scene, Matching Voice',
    category: 'adult-fiction',
    subcategory: 'first-time-discovery',
    adult: true,
    tags: ['first-time', 'continuation', 'voice', 'pacing'],
    description: 'Continues a pasted-in first-time scene while preserving its established nervous energy and pacing.',
    body: `You are continuing fiction already in progress. Below is the existing text, in which {{character_a}} and {{character_b}}, both adults, are having a first-time experience together in {{setting}}.

--- EXISTING TEXT ---
{{existing_text}}
--- END EXISTING TEXT ---

Before writing, silently note: POV, tense, how nervousness has been shown so far (dialogue, body language, interiority), and the current heat level.

Continue for about {{word_count}} more words at heat level {{heat_level}}. Preserve the established nervous energy — do not let the characters suddenly become confident or fluent unless the existing text has already earned that shift. If consent check-ins have appeared already, keep that pattern going at least once more. Do not reintroduce characters or re-describe the setting.`,
    variables: [
      { name: 'existing_text', label: 'Existing text to continue' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '700' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
    ],
  },
  {
    id: 'first-time-discovery-revision-pass',
    title: 'Revision Pass: Deepen Nerves and Interiority',
    category: 'adult-fiction',
    subcategory: 'first-time-discovery',
    adult: true,
    tags: ['first-time', 'revision', 'interiority', 'critique'],
    description: 'Critiques and revises a drafted first-time scene to add honest nervousness and physical interiority.',
    body: `Act as a developmental editor specializing in intimate scenes. Below is a draft first-time scene between {{character_a}} and {{character_b}}, both adults.

--- DRAFT ---
{{draft_text}}
--- END DRAFT ---

Step 1 — Critique (bullet list): identify where the draft skips over nervousness or awkwardness too fast, where consent is implied rather than shown, where physical sensation is described but not filtered through interiority, and where pacing rushes past a beat that should land.

Step 2 — Revise: rewrite the full scene at heat level {{heat_level}}, keeping the same plot beats and POV ({{pov}}) but fixing every issue you flagged. Add at least one grounded interior thought under physical sensation that wasn't in the original, and make sure at least one consent check-in reads as natural dialogue.

Do not pad the word count beyond what the draft needs — aim for roughly {{word_count}} words.`,
    variables: [
      { name: 'draft_text', label: 'Draft scene to revise' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'pov', label: 'POV', default: 'third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Target word count', default: '1000' },
    ],
  },
  {
    id: 'first-time-discovery-character-interview',
    title: 'Character Interview: The Morning After',
    category: 'adult-fiction',
    subcategory: 'first-time-discovery',
    adult: true,
    tags: ['first-time', 'character-interview', 'interiority', 'voice'],
    description: 'Interviews a character in first person about their first time with a new partner, surfacing what they were actually thinking.',
    body: `You are {{character_a}}, an adult, speaking in first person the morning after a first-time encounter with {{character_b}} in {{setting}}. Stay entirely in character — do not narrate, do not break voice.

I will ask you questions about last night. Answer each in 2-4 sentences, honestly, including at least one thing you didn't say out loud at the time. Start by answering these three, then wait for follow-ups:
1. What were you actually nervous about beforehand — not the polite version, the real one?
2. Was there a moment it didn't go the way you expected? What happened instead?
3. What's one thing {{character_b}} did that you haven't told them mattered to you?

Tone: reflective, a little unguarded, {{voice_note}}. Do not summarize the physical events of the night in graphic detail here — this is about what {{character_a}} was thinking and feeling, referenced at heat level {{heat_level}} at most.`,
    variables: [
      { name: 'character_a', label: 'Character being interviewed' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'voice_note', label: 'Voice note', default: 'a bit self-deprecating', placeholder: 'wry, tender, guarded' },
      { name: 'heat_level', label: 'Heat level (of references)', default: 'suggestive' },
    ],
  },
  {
    id: 'first-time-discovery-outline-generator',
    title: 'Beat-by-Beat First-Time Scene Outline',
    category: 'adult-fiction',
    subcategory: 'first-time-discovery',
    adult: true,
    tags: ['first-time', 'outline', 'structure', 'consent'],
    description: 'Produces a beat-by-beat outline for a first-time scene before any prose is written, so consent and pacing are planned in advance.',
    body: `Before writing any prose, outline a first-time scene between {{character_a}} and {{character_b}}, both adults, in {{setting}}, at heat level {{heat_level}}.

Produce a numbered beat list (8-12 beats) covering, in order:
1. The emotional or circumstantial lead-in — why now, why here
2. The first moment nervousness becomes visible to the other character
3. The explicit consent moment (note exact phrasing or gesture)
4. At least two escalation beats, each with one sensory anchor and one interiority note
5. One beat where expectation and reality diverge
6. A mid-scene check-in
7. The emotional peak, distinct from the physical peak
8. A closing beat that isn't a clean fade-out

For each beat, write one line: [beat name] — [what happens] — [whose interiority we're in]. Do not write prose yet; wait for confirmation the outline works before expanding it to {{word_count}} words.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Target word count for later expansion', default: '1200' },
    ],
  },
  {
    id: 'first-time-discovery-pov-swap',
    title: 'Same Scene, Second POV',
    category: 'adult-fiction',
    subcategory: 'first-time-discovery',
    adult: true,
    tags: ['first-time', 'pov', 'rewrite', 'interiority'],
    description: 'Rewrites a first-time scene from the other character\'s point of view to surface a different interior experience of the same events.',
    body: `Below is a first-time scene written from {{character_a}}'s point of view, involving {{character_b}}. Both are adults.

--- ORIGINAL SCENE ---
{{original_scene}}
--- END ORIGINAL SCENE ---

Rewrite the same sequence of events entirely from {{character_b}}'s point of view ({{pov}}), at the same heat level ({{heat_level}}) and roughly the same length. Do not simply mirror {{character_a}}'s reactions — {{character_b}} should notice different physical details, worry about different things, and have at least one internal reaction that contradicts or complicates what {{character_a}}'s version implied. Keep all external events (what actually happens) consistent with the original; only the interior lens changes.

End with a line of interiority from {{character_b}} that recontextualizes one moment from the original scene.`,
    variables: [
      { name: 'original_scene', label: 'Original scene (Character A POV)' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'pov', label: 'New POV', default: 'first person' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
    ],
  },
  {
    id: 'first-time-discovery-dialogue-only',
    title: 'Dialogue-Only Consent Negotiation',
    category: 'adult-fiction',
    subcategory: 'first-time-discovery',
    adult: true,
    tags: ['first-time', 'dialogue', 'consent', 'craft'],
    description: 'Generates a dialogue-only exchange where two adults negotiate a first-time encounter through talk before any action begins.',
    body: `Write a dialogue-only scene (minimal action tags, no narration of physical description) in which {{character_a}} and {{character_b}}, both adults, talk through wanting to be intimate for the first time, in {{setting}}. Length: about {{word_count}} words.

Craft focus: let the negotiation itself carry tension and personality. Requirements:
- Neither character should be purely eager or purely reluctant — give each at least one line of hesitation and one line of genuine wanting
- Include one moment of humor that breaks tension without deflating it
- Surface one boundary or preference being stated plainly (what they want, don't want, or aren't sure about yet)
- End the dialogue at the point consent is clearly and enthusiastically established — do not continue into the physical scene

Heat level context for tone only: {{heat_level}} — the dialogue should telegraph where this is headed without describing it.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '600' },
      { name: 'heat_level', label: 'Heat level (tone reference)', default: 'suggestive' },
    ],
  },
];

export default prompts;
