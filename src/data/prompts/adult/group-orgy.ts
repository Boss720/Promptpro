import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'group-orgy-ensemble-scene-generator',
    title: 'Ensemble Scene Generator: Rotating Focal Pairs',
    category: 'adult-fiction',
    subcategory: 'group-orgy',
    adult: true,
    tags: ['group', 'ensemble', 'pov', 'generator', 'choreography'],
    description: 'Generates a multi-partner scene structured as a sequence of clearly bounded focal pairings so no one blurs together.',
    body: `You are a craft-focused fiction writer. Write a {{heat_level}} group scene in {{pov}} POV set in {{setting}}, involving {{character_a}}, {{character_b}}, {{character_c}}, and at least one additional adult character you name and briefly establish.

Craft focus: managing more bodies than a reader can track at once. Structure the scene as 3–4 short focal segments, each centered on a specific pairing or trio within the group, while the others remain present but not vanished. For each segment:
- Open with one line establishing where every character not in the current focal pairing is and what they're doing.
- Give the focal characters a distinguishing action or verbal tag on entry to that segment so a reader never has to guess who's who.
- Transition between segments with a concrete cue (a shift of position, a line of dialogue, someone changing places) rather than a hard cut.

Target length: {{word_count}} words. Before the prose, output a short cast list with one distinguishing trait per character, to be used as the disambiguation anchor throughout.`,
    variables: [
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited, third omniscient' },
      { name: 'setting', label: 'Setting', placeholder: 'a friend group\'s last night at a rented villa' },
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'word_count', label: 'Target word count', default: '1100', placeholder: '1100' },
    ],
  },
  {
    id: 'group-orgy-negotiation-house-rules',
    title: 'Group Negotiation: Setting House Rules',
    category: 'adult-fiction',
    subcategory: 'group-orgy',
    adult: true,
    tags: ['group', 'consent', 'negotiation', 'dialogue', 'generator'],
    description: 'Generates a dialogue scene where a group negotiates shared ground rules before an encounter begins.',
    body: `Write a dialogue-driven scene in {{pov}} POV where a group including {{character_a}}, {{character_b}}, {{character_c}}, and at least one more adult character work out ground rules together before {{setting}} turns intimate. Heat level: {{heat_level}}.

Craft focus: consent negotiation at group scale, where the challenge is more voices and more possible mismatches than a pair negotiation. The scene must functionally cover:
- A shared check-in signal that works even when someone can't easily get a partner's individual attention (e.g., a word anyone can call out, a visible gesture).
- At least one character stating a hard boundary (a person they're not interested in that night, an act that's off the table) handled by the group without awkward silence dragging the scene down — show it absorbed smoothly and respectfully.
- At least one character asking a clarifying question that reveals they're tracking someone else's comfort, not just their own.

Keep each character's voice distinct — do not let the negotiation read as an interchangeable chorus. Length: {{word_count}} words. End when the group is aligned, before physical content begins.`,
    variables: [
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'setting', label: 'Setting', placeholder: 'a regular gathering at a member-run space' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '750', placeholder: '750' },
    ],
  },
  {
    id: 'group-orgy-choreography-room-map',
    title: 'Choreography Planner: Mapping the Room',
    category: 'adult-fiction',
    subcategory: 'group-orgy',
    adult: true,
    tags: ['group', 'choreography', 'blocking', 'planning', 'craft'],
    description: 'Plans a spatial map and movement log for a group scene before any prose is drafted.',
    body: `Act as a choreography consultant for prose fiction handling a group scene. Before writing begins, plan the blocking for a scene set in {{setting}} involving {{character_a}}, {{character_b}}, {{character_c}}, and {{group_size}} total adults, at heat level {{heat_level}}.

Output a planning document, not prose:
1. A simple spatial map (described in text — zones of the room, e.g. "the bed," "the rug by the window," "the doorway") and which named characters start in which zone.
2. A movement log of 6–10 entries: who moves, from which zone to which, and what motivates it.
3. A "confusability" audit: list any two or more characters who share a gender, similar name sound, or similar role in the scene, and assign each a one-word physical or behavioral tag a writer should repeat at every appearance to keep them distinct.
4. A pacing note flagging any point where more than three characters would be in the same zone at once, with a suggestion for splitting that beat into smaller legible chunks instead of one large tangled paragraph.

Do not write the scene itself — this is purely the planning layer a writer would work from.`,
    variables: [
      { name: 'setting', label: 'Setting', placeholder: 'a large shared bedroom, low light' },
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'group_size', label: 'Total number of characters', default: '5', placeholder: '5' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'sensual, explicit' },
    ],
  },
  {
    id: 'group-orgy-pov-anchor-single-thread',
    title: 'One Anchor, Many Bodies: Single-POV Group Scene',
    category: 'adult-fiction',
    subcategory: 'group-orgy',
    adult: true,
    tags: ['group', 'pov', 'generator', 'craft'],
    description: 'Generates a group scene deliberately restricted to one steady POV anchor to keep the scene readable.',
    body: `Write a {{heat_level}} group scene set in {{setting}}, involving {{character_a}}, {{character_b}}, {{character_c}}, and {{group_size}} adults total, told strictly from {{pov_anchor}}'s point of view — never head-hopping into anyone else's interiority.

Craft focus: using a single fixed POV as a deliberate constraint to keep a crowded scene legible. Requirements:
- Everything the reader learns about other characters' internal states must come through {{pov_anchor}}'s external observation (what they see, hear, infer) — no sentences that assert another character's private thoughts or feelings directly.
- {{pov_anchor}} should periodically lose track of someone in the room and then relocate them, mirroring how a real participant's attention would narrow and widen — use this as a feature, not a bug, to explain why some characters fade in and out.
- Include at least one moment where {{pov_anchor}} actively chooses where to direct their attention next, making the POV restriction visible as a character choice.

Length: {{word_count}} words.`,
    variables: [
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'sensual, explicit' },
      { name: 'setting', label: 'Setting', placeholder: 'a candlelit living room after everyone else has arrived' },
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'group_size', label: 'Total number of characters', default: '5', placeholder: '5' },
      { name: 'pov_anchor', label: 'POV anchor character', placeholder: 'Priya' },
      { name: 'word_count', label: 'Target word count', default: '1000', placeholder: '1000' },
    ],
  },
  {
    id: 'group-orgy-jealousy-reassurance-triage',
    title: 'Jealousy Triage in a Crowd',
    category: 'adult-fiction',
    subcategory: 'group-orgy',
    adult: true,
    tags: ['group', 'emotional-stakes', 'generator', 'character'],
    description: 'Generates a beat where one character in a larger group needs reassurance, and someone notices amid the noise.',
    body: `Write a scene in {{pov}} POV, heat level {{heat_level}}, set in {{setting}}, involving {{character_a}}, {{character_b}}, {{character_c}}, and other adults in the group. Center one specific emotional beat: {{character_a}} starts to feel overlooked or anxious as attention distributes across the group, and someone notices before it becomes a real problem.

Craft focus: emotional tracking doesn't stop scaling just because the group is bigger. Requirements:
- Show {{character_a}}'s withdrawal through small, specific physical tells (going quiet, drifting to the edge of the room, a smile that doesn't reach the eyes) rather than stating the emotion outright.
- Have exactly one other character — not the whole group at once — notice and act, in a way consistent with that character's established personality (protective, playful, direct, whatever fits {{character_b}} or {{character_c}}).
- Resolve the beat with a specific, small gesture (pulling {{character_a}} back into the center of things, a private aside, a joke that includes them) rather than a group announcement or speech.

Length: {{word_count}} words.`,
    variables: [
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'setting', label: 'Setting', placeholder: 'a party that\'s been going for hours' },
      { name: 'character_a', label: 'Character A (feels overlooked)', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'word_count', label: 'Target word count', default: '650', placeholder: '650' },
    ],
  },
  {
    id: 'group-orgy-revision-headcount-audit',
    title: 'Revision Audit: Headcount and Continuity Check',
    category: 'adult-fiction',
    subcategory: 'group-orgy',
    adult: true,
    tags: ['group', 'revision', 'critique', 'editing', 'continuity'],
    description: 'Audits a group-scene draft for characters who silently vanish, reappear, or become physically impossible.',
    body: `Act as a continuity editor for group intimate scenes. Read the draft below, which involves this cast: {{cast_list}}, set in {{setting}}. Run a headcount and continuity audit.

--- DRAFT ---
{{draft_text}}
--- END ---

Track, silently, who is present and what they're doing at every point in the scene. Then report only problems, as a numbered list:
1. Quote the shortest identifying fragment of the relevant line.
2. State the continuity failure: a character who disappears without explanation for a long stretch and reappears with no transition, two characters doing physically incompatible things in the same beat, a pronoun that could refer to more than one present character, or a character mentioned in the cast who never actually appears on the page.
3. Give a concrete one-line fix.

Skip anything that isn't a genuine tracking or continuity problem — do not comment on prose quality, pacing, or content. End with a running headcount check: does the number of characters "in the room" implied by the prose stay consistent with the stated cast throughout?`,
    variables: [
      { name: 'cast_list', label: 'Full cast list', placeholder: 'Priya, Marcus, Dev, Sana, Theo' },
      { name: 'setting', label: 'Setting', placeholder: 'a large shared bedroom' },
      { name: 'draft_text', label: 'Draft scene to audit', placeholder: 'Paste the draft scene here' },
    ],
  },
  {
    id: 'group-orgy-continuation-new-arrival',
    title: 'Continuation: A New Arrival Joins',
    category: 'adult-fiction',
    subcategory: 'group-orgy',
    adult: true,
    tags: ['group', 'continuation', 'consent', 'craft'],
    description: 'Continues an in-progress group scene by adding a new participant, exercising on-the-fly group consent and integration.',
    body: `Below is an in-progress group scene involving {{cast_list}} in {{setting}}, heat level {{heat_level}}. Continue it for {{word_count}} words by having {{character_new}} join the group already in progress.

--- SCENE SO FAR ---
{{scene_so_far}}
--- END ---

Craft focus: integrating a new participant into a live group scene without skipping consent or breaking momentum. The continuation must:
- Have the group visibly acknowledge the new arrival — at minimum a beat where attention shifts and someone checks in, verbally or physically, before {{character_new}} is folded into what's already happening.
- Give {{character_new}} a distinct entrance that establishes their voice or manner immediately, so they don't read as interchangeable with the existing cast.
- Preserve continuity with everything already established in the scene so far — do not contradict positions, dialogue, or established dynamics.
- Keep tracking every character named in {{cast_list}}; none should silently vanish just because a new person arrived.`,
    variables: [
      { name: 'cast_list', label: 'Existing cast', placeholder: 'Priya, Marcus, Dev' },
      { name: 'setting', label: 'Setting', placeholder: 'a low-lit den, music playing' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'sensual, explicit' },
      { name: 'scene_so_far', label: 'Existing scene text', placeholder: 'Paste the in-progress scene here' },
      { name: 'character_new', label: 'New arriving character', placeholder: 'Sana' },
      { name: 'word_count', label: 'Target word count', default: '500', placeholder: '500' },
    ],
  },
  {
    id: 'group-orgy-dialogue-crosstalk-exercise',
    title: 'Dialogue Exercise: Crosstalk Without Confusion',
    category: 'adult-fiction',
    subcategory: 'group-orgy',
    adult: true,
    tags: ['group', 'dialogue', 'voice', 'exercise'],
    description: 'Drills writing overlapping group dialogue that stays attributable without heavy tagging.',
    body: `Write a dialogue-only exercise (spoken lines only, each prefixed in brackets with the speaker's name for reference) among {{character_a}}, {{character_b}}, {{character_c}}, and {{group_size}} adults total during {{setting}}, heat level {{heat_level}}.

Craft focus: crosstalk. Groups talk over and interrupt each other in ways pairs don't; the exercise is keeping every voice attributable even when lines are short and overlapping. Requirements:
- Give at least four distinct characters a recognizable verbal signature (established early: sentence rhythm, a recurring word, how blunt or oblique they are).
- Include at least two genuine interruptions (a line cut off, a second speaker talking over the first) marked clearly, and one moment where two characters say something nearly simultaneous and it becomes a small joke or beat rather than confusing the reader.
- {{word_count}} words total.

After the dialogue, add a 2–3 line voice key naming each character's specific verbal tell, so the disambiguation technique is explicit and reusable. No narration or action lines inside the dialogue block itself.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'group_size', label: 'Total number of characters', default: '5', placeholder: '5' },
      { name: 'setting', label: 'Setting', placeholder: 'right as things start to slow down and get playful' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '450', placeholder: '450' },
    ],
  },
  {
    id: 'group-orgy-aftercare-group-wind-down',
    title: 'Group Aftercare: Everyone Gets Checked On',
    category: 'adult-fiction',
    subcategory: 'group-orgy',
    adult: true,
    tags: ['group', 'aftercare', 'generator', 'emotional-stakes'],
    description: 'Generates a post-scene aftercare sequence that individually checks in with every named character in a group.',
    body: `Write an aftercare scene in {{pov}} POV set immediately after a group encounter among {{cast_list}} in {{setting}}. Remaining heat level: {{heat_level}} (gentler than the preceding scene, transitioning toward rest).

Craft focus: aftercare that scales without becoming a generic group hug. For each named character in {{cast_list}}:
- Give them a distinct, brief individual check-in — a specific need (water, a blanket, quiet, a joke, a private word with one other person) rather than a repeated beat of "everyone cuddled and felt good."
- Show at least one practical or logistical loose end from the scene being resolved (someone finding their clothes, a boundary that was tested getting a follow-up "you good?", cleanup).
- Include one moment of the group's shared mood, but earn it only after the individual check-ins, not instead of them.

Length: {{word_count}} words. End on a concrete, grounded image of the room rather than a summary statement of how everyone felt.`,
    variables: [
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'cast_list', label: 'Full cast list', placeholder: 'Priya, Marcus, Dev, Sana' },
      { name: 'setting', label: 'Setting', placeholder: 'the living room, blankets pulled off the couch' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black, sensual' },
      { name: 'word_count', label: 'Target word count', default: '600', placeholder: '600' },
    ],
  },
];

export default prompts;
