import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'epistolary-sexting-full-scene-generator',
    title: 'Whole Scene, Carried by Messages Alone',
    category: 'adult-fiction',
    subcategory: 'epistolary-sexting',
    adult: true,
    tags: ['epistolary', 'format', 'sexting', 'voice', 'structure'],
    description: 'Generates a complete intimate scene told entirely through exchanged messages, with no prose narration.',
    body: `You are a fiction writer specializing in epistolary erotica — scenes told entirely through exchanged {{medium}}, with zero narration outside the messages themselves.

Write a complete scene between {{character_a}} and {{character_b}}, two consenting adults, conducted entirely as a sequence of {{medium}} exchanged while they are physically apart in {{setting}}. No prose narration, no scene-setting outside the messages, no "he said" — the format itself is the whole scene.

Craft requirements:
- Distinguish the two characters' voices through message habits alone: sentence length, punctuation, how fast each replies, whether they use full stops or trail off.
- Build from a mundane or ambiguous opening into explicit territory gradually — the escalation should be visible message by message, not a jump cut.
- Use timestamps or a marker of elapsed time between at least three exchanges to show real-world delay affecting the rhythm (a message left unanswered, a reply that comes too fast or too slow).
- Heat level: {{heat_level}}. POV is inherently both, but keep {{pov}}'s interiority (if the medium allows narration-adjacent asides like voice-note transcripts) as the anchor.

Length: approximately {{word_count}} words including all messages. End on an unanswered message or a status indicator (delivered, read, typing…) rather than a resolved exchange.`,
    variables: [
      { name: 'medium', label: 'Medium', default: 'text messages', placeholder: 'text messages, emails, voice notes, letters' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting / why they are apart' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'pov', label: 'Anchor POV (if applicable)', default: 'shared/ambiguous', placeholder: 'character_a, character_b, shared/ambiguous' },
      { name: 'word_count', label: 'Word count', default: '700' },
    ],
  },
  {
    id: 'epistolary-sexting-voice-without-tags',
    title: 'Distinguishable Voice, No Dialogue Tags',
    category: 'adult-fiction',
    subcategory: 'epistolary-sexting',
    adult: true,
    tags: ['epistolary', 'voice', 'characterization', 'exercise', 'format'],
    description: 'Writes an untagged message exchange where each character is identifiable purely by writing style.',
    body: `Write an exchange of {{medium}} between {{character_a}} and {{character_b}}, two adults being sexually explicit with each other from {{setting}}, formatted as a bare sequence of messages with NO speaker labels, names, or tags of any kind — just the raw messages in order, separated by line breaks.

Craft focus: voice as the only identifier. Before writing, decide one distinct stylistic signature per character (examples to choose from or invent your own): capitalization habits, use or avoidance of emoji, sentence fragments vs. full sentences, a recurring verbal tic or pet name, typing speed implied by typo frequency, formality level. Apply each signature consistently enough that a reader could correctly attribute every message without labels.

Heat level: {{heat_level}}. Length: approximately {{word_count}} words across the full exchange.

After the exchange, add a short "Answer key" section identifying which stylistic markers belonged to {{character_a}} and which to {{character_b}}, so the technique is auditable.`,
    variables: [
      { name: 'medium', label: 'Medium', default: 'text messages', placeholder: 'text messages, DMs, emails' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting / context for why they\'re apart' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '500' },
    ],
  },
  {
    id: 'epistolary-sexting-delay-as-structure',
    title: 'Delay and Anticipation as Structure',
    category: 'adult-fiction',
    subcategory: 'epistolary-sexting',
    adult: true,
    tags: ['epistolary', 'pacing', 'tension', 'format', 'structure'],
    description: 'Builds a message-based scene where gaps between replies do the structural work that scene breaks normally do.',
    body: `Write a {{medium}} exchange between {{character_a}} and {{character_b}}, adults sustaining a charged exchange across real time apart, set against {{setting}}.

Craft focus: delay *as* structure, not an obstacle to it. Explicitly mark elapsed time between message clusters (e.g., "[47 minutes later]", "[the next morning]", "[read at 11:52pm — no reply yet]") and let each gap change the emotional temperature of what follows: a long silence should make the next message land differently than an instant reply would. Include at least:
- One gap that reads as agonizing for one character and is later revealed to have an innocent cause.
- One deliberately delayed reply used as a power move or tease by one character, which the other calls out.
- One moment where a message is left on "read" without response, and the next message has to account for that silence rather than ignore it.

Heat level: {{heat_level}}. Length: approximately {{word_count}} words. Do not resolve every gap's cause — leave at least one delay unexplained.`,
    variables: [
      { name: 'medium', label: 'Medium', default: 'text messages', placeholder: 'text messages, emails, DMs' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting / why they\'re apart' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count', default: '650' },
    ],
  },
  {
    id: 'epistolary-sexting-typos-read-receipts',
    title: 'Typos and Read Receipts as Characterisation',
    category: 'adult-fiction',
    subcategory: 'epistolary-sexting',
    adult: true,
    tags: ['epistolary', 'characterization', 'format', 'realism', 'texture'],
    description: 'Uses typos, autocorrect fails, and read/delivered indicators deliberately to reveal character state.',
    body: `Write a {{medium}} exchange between {{character_a}} and {{character_b}} in {{setting}}, using message-app mechanics — typos, autocorrect errors, read receipts, "typing…" indicators, double-texting — as deliberate characterisation, not incidental realism.

Craft requirements:
- Give {{character_a}} at least two typos or autocorrect fails that occur specifically in moments of arousal or nervousness, distinct from their otherwise clean typing earlier in the exchange — the breakdown in composure should be legible through the typing itself.
- Use a "read" indicator with no immediate reply at least once to create a specific, named anxiety in the other character, shown through what they send next (over-explaining, a joke to cover discomfort, radio silence of their own).
- Include one instance of double-texting (sending a follow-up before getting a reply) that reveals impatience or insecurity rather than just moving plot forward.
- Heat level: {{heat_level}}. Length: approximately {{word_count}} words.

Do not clean up the messiness for readability — the typos and gaps are the craft, not an error to fix.`,
    variables: [
      { name: 'medium', label: 'Medium', default: 'text messages', placeholder: 'text messages, DMs' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting / context' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'epistolary-sexting-voice-note-transcript',
    title: 'Voice-Note Transcript Scene',
    category: 'adult-fiction',
    subcategory: 'epistolary-sexting',
    adult: true,
    tags: ['epistolary', 'voice-note', 'format', 'sensory', 'scene'],
    description: 'Writes a scene as a back-and-forth exchange of transcribed voice notes, using audio-only cues for intimacy.',
    body: `Write a scene between {{character_a}} and {{character_b}}, consenting adults apart in {{setting}}, told entirely as an exchange of transcribed voice notes (format each as "[Voice note from {{character_a}}, 0:XX]" followed by the transcribed speech, alternating senders).

Craft focus: audio-only intimacy cues. Since there is no visual or text-formatting information, convey arousal, hesitation, and escalation through:
- Transcribed pauses, breath, or trailed-off sentences (use ellipses and bracketed audio cues sparingly, e.g., "[laughs, quieter]" or "[long pause]").
- Word choice and rhythm shifting as each character gets more turned on or more nervous — spoken language is looser than text; let it fragment.
- At least one voice note that is markedly shorter or longer than the others because of what emotional state prompted it.

Heat level: {{heat_level}}. POV/anchor: {{pov}}. Length: approximately {{word_count}} words of transcribed content. End on a voice note that goes unanswered for a beat, with no confirmation the other has listened yet.`,
    variables: [
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting / why they\'re apart' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'Which character opens', default: 'character_a' },
      { name: 'word_count', label: 'Word count', default: '600' },
    ],
  },
  {
    id: 'epistolary-sexting-letters-slow-medium',
    title: 'Letters: Desire Under a Slow Medium',
    category: 'adult-fiction',
    subcategory: 'epistolary-sexting',
    adult: true,
    tags: ['epistolary', 'letters', 'format', 'pacing', 'longing'],
    description: 'Writes a pair of exchanged letters where the slowness of the medium itself shapes what gets said.',
    body: `Write two letters — one from {{character_a}} to {{character_b}}, one in reply — exchanged across a gap of {{setting}} (state the real-world delay implied, e.g., days or weeks by post), both adults, both aware the other cannot respond in real time.

Craft focus: the medium's slowness as content, not just container. Because a letter cannot get an immediate reaction, have each writer:
- Address anticipated objections or reactions the recipient might have, since they can't interrupt to clarify.
- Reference not knowing how their previous letter landed, or worrying about how this one will.
- Use physical detail specific to letter-writing (handwriting changing mid-page, a crossed-out and rewritten line left visible, a stain, a place where the pen pressed too hard) to signal loss of composure that a screen medium couldn't show.

Heat level: {{heat_level}}. Voice must be clearly different between the two letters — different vocabulary register, sentence length, degree of directness. Length: approximately {{word_count}} words total across both letters. Do not include a third letter or resolution — end on the second letter, unanswered.`,
    variables: [
      { name: 'character_a', label: 'Character A (writes first letter)' },
      { name: 'character_b', label: 'Character B (writes the reply)' },
      { name: 'setting', label: 'Distance / time gap between letters', placeholder: 'three weeks, army postal delay' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count', default: '700' },
    ],
  },
  {
    id: 'epistolary-sexting-continue-thread',
    title: 'Continue My Message Thread, Matching Rhythm',
    category: 'adult-fiction',
    subcategory: 'epistolary-sexting',
    adult: true,
    tags: ['epistolary', 'continuation', 'voice', 'format', 'pacing'],
    description: 'Continues a pasted-in message exchange while preserving established formatting, voice, and pacing.',
    body: `You are continuing an in-progress {{medium}} exchange between {{character_a}} and {{character_b}}, both adults, apart due to {{setting}}.

--- EXISTING EXCHANGE ---
{{existing_text}}
--- END EXISTING EXCHANGE ---

Before continuing, silently note: each character's message-length habits, punctuation and capitalization patterns, how they've been signaling arousal or hesitation so far, and the current heat level reached.

Continue the exchange for approximately {{word_count}} more words at heat level {{heat_level}}, in the same {{medium}} format already established (do not switch formats, e.g. do not shift from texts to a phone call unless the existing thread already set that up). Preserve each character's distinct voice exactly. Do not have either character summarize what's already been said — assume both remember their own thread. If timestamps or read/delivered markers were used already, continue using them consistently.`,
    variables: [
      { name: 'medium', label: 'Medium', default: 'text messages', placeholder: 'text messages, emails, voice notes' },
      { name: 'existing_text', label: 'Existing exchange to continue' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting / why they\'re apart' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Additional word count', default: '500' },
    ],
  },
  {
    id: 'epistolary-sexting-revision-critique',
    title: 'Format Critique: Does the Medium Earn Its Keep?',
    category: 'adult-fiction',
    subcategory: 'epistolary-sexting',
    adult: true,
    tags: ['epistolary', 'revision', 'critique', 'craft', 'format'],
    description: 'Critiques a draft message-based scene for whether the epistolary format is doing real structural work.',
    body: `You are a developmental editor specializing in epistolary and format-driven fiction. Below is a draft {{medium}} exchange between {{character_a}} and {{character_b}}.

--- DRAFT ---
{{draft_text}}
--- END DRAFT ---

Step 1 — Critique (bullet list, 5-8 points), centered on one question: does the format earn its keep? Assess specifically:
- Could this scene be rewritten as ordinary prose without losing anything? If so, the format is decorative, not functional — name where.
- Are the two voices actually distinguishable if you strip the names off? Test a sample line from each.
- Is delay (time between messages, unread status, silence) used as a tool, or is it absent/ignored?
- Are format-native details (typos, timestamps, read receipts, audio cues, handwriting) present and doing emotional work, or missing entirely?

Name the single biggest place the draft could be flattened into plain prose without loss first — that's the weakest use of the format.

Step 2 — Revised excerpt: rewrite only the weakest 100-200 word span you identified, at heat level {{heat_level}}, in the same {{medium}}, demonstrating the format actually mattering.

Step 3 — One sentence on what the next revision pass should prioritize.`,
    variables: [
      { name: 'medium', label: 'Medium', default: 'text messages', placeholder: 'text messages, emails, letters, voice notes' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'draft_text', label: 'Draft exchange text' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
    ],
  },
  {
    id: 'epistolary-sexting-never-same-room',
    title: 'The Constraint of Never Being in the Same Room',
    category: 'adult-fiction',
    subcategory: 'epistolary-sexting',
    adult: true,
    tags: ['epistolary', 'constraint', 'longing', 'format', 'emotional-stakes'],
    description: 'Writes a scene where the characters actively work around never having been physically together.',
    body: `Write a {{medium}} exchange between {{character_a}} and {{character_b}}, two adults in {{setting}} who have never once been in the same physical space, being sexually explicit with each other for what may be the first time.

Craft focus: the constraint itself, named and worked with, not glossed over. Include:
- At least one moment where a character explicitly acknowledges the strangeness or ache of wanting someone they've never touched — this should be voiced, not just implied by the medium.
- A specific compensating strategy each character uses to make the distance work (detailed description standing in for touch, asking questions the other could only answer if they were paying real attention, sending something physical — a photo, a sound, an object in the mail — to bridge the gap).
- A moment where the impossibility of closing the distance right now creates real frustration or grief, not just heat — let the constraint cost something emotionally, briefly, before the scene moves on.

Heat level: {{heat_level}}. Length: approximately {{word_count}} words. Do not resolve the distance (no "and then we finally met") — the scene ends still apart.`,
    variables: [
      { name: 'medium', label: 'Medium', default: 'text messages', placeholder: 'text messages, emails, DMs, voice notes' },
      { name: 'character_a', label: 'Character A' },
      { name: 'character_b', label: 'Character B' },
      { name: 'setting', label: 'Setting / how they met, why they\'re apart' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'word_count', label: 'Word count', default: '650' },
    ],
  },
];

export default prompts;
