import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'voyeur-exhibition-watcher-interiority',
    title: 'The Watcher\'s Interiority',
    category: 'adult-fiction',
    subcategory: 'voyeur-exhibition',
    adult: true,
    tags: ['voyeurism', 'pov', 'interiority', 'craft', 'generator'],
    description: 'Generates a scene from the watching character\'s POV, building the scene around their internal conflict rather than just describing what they see.',
    body: `You are a fiction craft assistant. Write a scene of consensual voyeurism between adult, fictional characters.

{{character_a}} is being watched by {{character_b}}, in {{setting}}. Both characters know this arrangement exists and have agreed to it beforehand — this is not surveillance of an unwilling person.

Write the scene entirely from {{character_b}}'s POV ({{pov}}). The technique to exercise: voyeurism is a POV problem, not a camera problem. Do not just catalog what {{character_b}} sees — build the scene around what watching *costs* or *gives* them: guilt, hunger, the discipline of staying still and silent, the specific pleasure of witnessing without participating. Track at least one shift in {{character_b}}'s internal state over the course of the scene (e.g., from detached observation to overwhelmed want).

Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the scene only, no preamble. End with a one-line note naming the internal shift you wrote.`,
    variables: [
      { name: 'character_a', label: 'Character being watched', placeholder: 'Mara' },
      { name: 'character_b', label: 'Character watching', placeholder: 'Theo' },
      { name: 'setting', label: 'Setting', placeholder: 'a lit window across a courtyard' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '600' },
    ],
  },
  {
    id: 'voyeur-exhibition-being-seen',
    title: 'Wanting to Be Seen',
    category: 'adult-fiction',
    subcategory: 'voyeur-exhibition',
    adult: true,
    tags: ['exhibitionism', 'pov', 'desire', 'craft', 'generator'],
    description: 'Generates an exhibitionist scene focused on the performing character\'s awareness and enjoyment of the audience.',
    body: `You are a fiction craft assistant. Write a scene of consensual exhibitionism between adult, fictional characters who have negotiated this arrangement in advance.

{{character_a}} knows {{character_b}} is watching them in {{setting}}, and wants to be watched. Write from {{character_a}}'s POV ({{pov}}).

Technique to exercise: exhibitionism is powered by the performer's *awareness* of the audience, not by describing the audience's reaction. Stay inside {{character_a}}'s head. Show how knowing they're seen changes their movements, breath, and pacing — the performance is for someone, and that changes what "being watched" means to them emotionally, not just physically. Include one moment where {{character_a}} deliberately does something *because* they know it's being witnessed.

Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the scene only. After it, list two specific sentences where awareness of the watcher visibly changed {{character_a}}'s behavior.`,
    variables: [
      { name: 'character_a', label: 'Character performing/being watched', placeholder: 'Nadia' },
      { name: 'character_b', label: 'Character watching', placeholder: 'Sam' },
      { name: 'setting', label: 'Setting', placeholder: 'a hotel room with the curtains open' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '600' },
    ],
  },
  {
    id: 'voyeur-exhibition-mirror-device',
    title: 'The Mirror as Instrument',
    category: 'adult-fiction',
    subcategory: 'voyeur-exhibition',
    adult: true,
    tags: ['voyeurism', 'mirrors', 'blocking', 'craft', 'generator'],
    description: 'Generates a scene that uses a mirror deliberately as a storytelling device rather than a set dressing detail.',
    body: `You are a fiction craft assistant. Write a scene between {{character_a}} and {{character_b}}, consenting adults, set in {{setting}}, that uses a mirror as a deliberate narrative device.

Technique to exercise: a mirror in a scene like this should do actual work — it lets a character watch themselves being watched, or lets two characters make eye contact without turning around, or reveals something one character couldn't otherwise see. Do not include a mirror as passive decoration. Choose one specific function for it before writing, and make sure the scene would break if the mirror were removed.

POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output, in order:
1. One line stating which specific function the mirror serves in this scene.
2. The scene itself.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Iris' },
      { name: 'character_b', label: 'Character B', placeholder: 'Devon' },
      { name: 'setting', label: 'Setting', placeholder: 'a dance studio after hours' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third, alternating' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '650' },
    ],
  },
  {
    id: 'voyeur-exhibition-camera-consent',
    title: 'The Camera as Agreed Witness',
    category: 'adult-fiction',
    subcategory: 'voyeur-exhibition',
    adult: true,
    tags: ['voyeurism', 'consent', 'technology', 'craft', 'generator'],
    description: 'Generates a scene involving recording that foregrounds the explicit, mutual agreement behind the camera\'s presence.',
    body: `You are a fiction craft assistant. Write a scene between {{character_a}} and {{character_b}}, consenting adults, in {{setting}}, where one of them is recording the encounter with the other's full knowledge and agreement.

Hard requirement: open the scene with a brief beat (dialogue or internal narration) that makes the consent to being recorded explicit and specific — what's being recorded, for whom, and any limits. Do not skip this or leave it implied.

Technique to exercise: once consent is established, use the camera's presence to heighten stakes — self-consciousness, performance, permanence — without ever letting the scene slip into surveillance-of-an-unwilling-person territory. The device should feel like a third participant both characters chose.

POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the scene only, opening with the consent beat as specified.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B (operating camera)', placeholder: 'Colm' },
      { name: 'setting', label: 'Setting', placeholder: 'their apartment' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '700' },
    ],
  },
  {
    id: 'voyeur-exhibition-pov-swap',
    title: 'POV Swap: Watcher and Watched',
    category: 'adult-fiction',
    subcategory: 'voyeur-exhibition',
    adult: true,
    tags: ['voyeurism', 'pov', 'exercise', 'revision'],
    description: 'Rewrites an existing voyeurism/exhibition scene from the opposite character\'s POV to expose what the first draft left out.',
    body: `You are a fiction craft coach. Below is a draft scene involving {{character_a}} and {{character_b}}, consenting adults engaged in a voyeurism/exhibition dynamic in {{setting}}.

Draft scene:
"""
{{draft_scene}}
"""

Task: rewrite the same events entirely from the *other* character's POV — if the draft is written from the watcher's perspective, rewrite from the one being watched, and vice versa. Keep the same timeline and physical actions, but the internal experience must be genuinely different, not a mirrored restatement.

After the rewrite, add a short craft note (3-5 sentences) identifying what the original POV choice hid or flattened, and what the swap reveals about either character's wants.

Heat level: {{heat_level}}. Target length for the rewrite: {{word_count}} words.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Ana' },
      { name: 'character_b', label: 'Character B', placeholder: 'Ravi' },
      { name: 'setting', label: 'Setting', placeholder: 'a shared apartment, one room away' },
      { name: 'draft_scene', label: 'Draft scene to rewrite', placeholder: 'Paste the existing scene here' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '600' },
    ],
  },
  {
    id: 'voyeur-exhibition-tension-audit',
    title: 'Watching Tension Audit',
    category: 'adult-fiction',
    subcategory: 'voyeur-exhibition',
    adult: true,
    tags: ['voyeurism', 'tension', 'critique', 'audit'],
    description: 'Audits a draft voyeurism scene line by line for where tension is generated versus merely described.',
    body: `You are a fiction craft editor specializing in voyeurism/exhibition scenes between consenting adult characters. Audit the following draft.

Draft:
"""
{{draft_scene}}
"""

For each paragraph, classify it as one of:
- GENERATES TENSION (through restraint, risk of discovery, physical distance, sound, timing)
- MERELY DESCRIBES (states what's visible/happening without building pressure)
- NEUTRAL (setup, transition)

Return a table: paragraph number | classification | one-line reason.

Then give three concrete rewrite suggestions for the weakest "MERELY DESCRIBES" paragraph, each showing how to convert description into tension using a different lever (distance, sound/silence, or time pressure).

Do not rewrite the whole scene — only the targeted paragraph, three ways.`,
    variables: [
      { name: 'draft_scene', label: 'Draft scene to audit', placeholder: 'Paste the existing scene here' },
    ],
  },
  {
    id: 'voyeur-exhibition-slow-burn-continuation',
    title: 'Slow-Burn Continuation from a Glance',
    category: 'adult-fiction',
    subcategory: 'voyeur-exhibition',
    adult: true,
    tags: ['voyeurism', 'pacing', 'continuation', 'slow-burn'],
    description: 'Continues a scene starting from a single moment of eye contact, stretching the beat before anything else happens.',
    body: `You are a fiction craft assistant. Continue the following moment between {{character_a}} and {{character_b}}, consenting adults in {{setting}}, who have just made eye contact across a distance and both know exactly what it means.

Opening line to continue from:
"{{opening_line}}"

Technique to exercise: pacing through delay. For the first half of the piece, nothing physical should happen — extend the moment of mutual awareness through small physical detail, environment, and internal monologue ({{pov}}) rather than skipping to contact. Only in the second half should the distance between {{character_a}} and {{character_b}} actually close.

Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the continuation only, picking up directly from the opening line.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Bea' },
      { name: 'character_b', label: 'Character B', placeholder: 'Jonah' },
      { name: 'setting', label: 'Setting', placeholder: 'a crowded gallery opening' },
      { name: 'opening_line', label: 'Opening line', placeholder: 'She didn\'t look away.' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '700' },
    ],
  },
  {
    id: 'voyeur-exhibition-negotiation-scene',
    title: 'Negotiating the Arrangement',
    category: 'adult-fiction',
    subcategory: 'voyeur-exhibition',
    adult: true,
    tags: ['voyeurism', 'consent', 'dialogue', 'generator'],
    description: 'Generates the dialogue scene where two characters explicitly negotiate a voyeurism/exhibition arrangement before it happens.',
    body: `You are a fiction craft assistant. Write the negotiation scene between {{character_a}} and {{character_b}}, consenting adults, that happens *before* the voyeurism/exhibition scene proper — the conversation where they work out what they're about to do.

Setting: {{setting}}.

Technique to exercise: consent-as-dialogue. This is a scene about two people establishing boundaries and desires out loud — what will be watched, from where, any limits, a way to stop. Write it as character-revealing dialogue, not a checklist recited aloud: each character's phrasing should tell us something about their nerves, their want, or their past experience. Include at least one moment of hesitation or renegotiation from either character.

POV: {{pov}}. Heat level: {{heat_level}} (this scene itself may be lower heat than the encounter it sets up). Target length: {{word_count}} words.

Output: the scene only.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Lena' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'setting', label: 'Setting', placeholder: 'their kitchen, the night before' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third, alternating' },
      { name: 'heat_level', label: 'Heat level', default: 'mild', placeholder: 'mild, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '500' },
    ],
  },
  {
    id: 'voyeur-exhibition-sound-only',
    title: 'Sound-Only Voyeurism',
    category: 'adult-fiction',
    subcategory: 'voyeur-exhibition',
    adult: true,
    tags: ['voyeurism', 'sensory', 'constraint', 'generator'],
    description: 'Generates a scene where the watching character can only hear, never see, forcing the prose to build the scene through sound alone.',
    body: `You are a fiction craft assistant. Write a scene where {{character_b}} can hear {{character_a}} through a wall or door in {{setting}}, but cannot see them at all. Both characters are consenting adults aware this is happening.

Technique to exercise: sensory constraint as a generator, not a limitation. With sight removed, {{character_b}}'s POV ({{pov}}) must build the entire scene from sound — breath, voice, movement, silence — and from what {{character_b}}'s imagination fills in. Make at least one moment where {{character_b}} imagines something incorrectly, then a sound corrects it.

Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the scene only, followed by one line naming the sound detail doing the most work in the piece.`,
    variables: [
      { name: 'character_a', label: 'Character A (heard, not seen)', placeholder: 'Willa' },
      { name: 'character_b', label: 'Character B (listening)', placeholder: 'Desmond' },
      { name: 'setting', label: 'Setting', placeholder: 'adjoining hotel rooms' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '600' },
    ],
  },
];

export default prompts;
