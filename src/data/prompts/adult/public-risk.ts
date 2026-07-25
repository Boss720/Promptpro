import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'public-risk-almost-caught-generator',
    title: 'The Almost-Caught Beat',
    category: 'adult-fiction',
    subcategory: 'public-risk',
    adult: true,
    tags: ['public', 'risk', 'pacing', 'craft', 'generator'],
    description: 'Generates a scene structured around a near-discovery interruption rather than a straight escalation.',
    body: `You are a fiction craft assistant. Write a scene between {{character_a}} and {{character_b}}, consenting adults, in {{setting}} — a public or semi-public space with real but non-criminal risk of being seen.

Technique to exercise: the almost-caught beat. Structure the scene in three movements: (1) escalation, (2) a near-discovery — footsteps, a voice, a door handle, someone passing close — that forces an abrupt freeze or scramble, (3) a return to the encounter that is changed by the interruption, either more urgent or more cautious. The near-discovery must create real physical stakes (embarrassment, being asked to leave, a relationship being seen) without involving anything criminal.

POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the scene only, with the three movements flowing as continuous prose (no headers).`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Elise' },
      { name: 'character_b', label: 'Character B', placeholder: 'Tomas' },
      { name: 'setting', label: 'Setting', placeholder: 'a coat closet at a family wedding' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '650' },
    ],
  },
  {
    id: 'public-risk-muffled-sound',
    title: 'Staying Silent',
    category: 'adult-fiction',
    subcategory: 'public-risk',
    adult: true,
    tags: ['public', 'risk', 'sensory', 'constraint', 'generator'],
    description: 'Generates a scene where characters must physically constrain sound and movement, using that constraint as the source of tension.',
    body: `You are a fiction craft assistant. Write a scene between {{character_a}} and {{character_b}}, consenting adults, in {{setting}}, where other people are close enough that any noise could be heard.

Technique to exercise: constraint as fuel. Both characters must actively work to stay quiet and still — a hand over a mouth, held breath, movements kept small and slow. Do not let the prose forget the constraint for more than a paragraph at a time; every escalation should be shadowed by the effort of controlling it. The scene should end with the constraint either barely holding or breaking.

POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the scene only, followed by one line identifying the moment the constraint was most at risk of breaking.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Owen' },
      { name: 'setting', label: 'Setting', placeholder: 'a shared office after colleagues next door haven\'t left' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '600' },
    ],
  },
  {
    id: 'public-risk-proximity-tease',
    title: 'Proximity Without Privacy',
    category: 'adult-fiction',
    subcategory: 'public-risk',
    adult: true,
    tags: ['public', 'risk', 'tension', 'craft', 'generator'],
    description: 'Generates a scene of escalating contact between characters who remain in plain view of others, never getting actual privacy.',
    body: `You are a fiction craft assistant. Write a scene between {{character_a}} and {{character_b}}, consenting adults, at {{setting}}, where they remain visible to other people the entire time — there is no moment of true privacy.

Technique to exercise: tension from denied privacy. Escalate contact using only what's possible while staying outwardly plausible-deniable — under a table, behind a menu, a hand that shouldn't be where it is, words that mean one thing to bystanders and another between the two of them. Track how the characters manage two performances at once: the public-facing one and the private one.

POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the scene only.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Sasha' },
      { name: 'character_b', label: 'Character B', placeholder: 'Diego' },
      { name: 'setting', label: 'Setting', placeholder: 'a dinner table with mutual friends present' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '650' },
    ],
  },
  {
    id: 'public-risk-interruption-continuation',
    title: 'Continuation Through an Interruption',
    category: 'adult-fiction',
    subcategory: 'public-risk',
    adult: true,
    tags: ['public', 'risk', 'pacing', 'continuation'],
    description: 'Continues a scene from the exact moment of interruption, forcing the writer to handle the break in momentum rather than skip past it.',
    body: `You are a fiction craft assistant. Continue the following scene between {{character_a}} and {{character_b}}, consenting adults, in {{setting}}, picking up at the exact moment given.

Scene so far:
"""
{{scene_so_far}}
"""

Moment to continue from: they have just been interrupted — {{interruption}}.

Technique to exercise: do not time-skip past the interruption. Write through it in real time: the scramble or freeze, the cover story or excuse if one is needed, the physical repositioning, and the return (or failure to return) to what they were doing. The interruption must have a real, non-criminal consequence that lingers into the next beat — awkwardness, a lie one of them now has to maintain, lost nerve, or renewed urgency.

POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the continuation only.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Nora' },
      { name: 'character_b', label: 'Character B', placeholder: 'Felix' },
      { name: 'setting', label: 'Setting', placeholder: 'a museum stairwell' },
      { name: 'scene_so_far', label: 'Scene so far', placeholder: 'Paste the scene up to the interruption' },
      { name: 'interruption', label: 'The interruption', placeholder: 'a security guard\'s radio crackles on the floor below' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '550' },
    ],
  },
  {
    id: 'public-risk-pov-swap-stakes',
    title: 'POV Swap: Who Has More to Lose',
    category: 'adult-fiction',
    subcategory: 'public-risk',
    adult: true,
    tags: ['public', 'risk', 'pov', 'exercise', 'revision'],
    description: 'Rewrites a public/risk scene from the more exposed character\'s POV to surface asymmetric stakes the first draft may have flattened.',
    body: `You are a fiction craft coach. Below is a draft scene between {{character_a}} and {{character_b}}, consenting adults, taking a real but non-criminal risk of being seen in {{setting}}.

Draft scene:
"""
{{draft_scene}}
"""

Task: identify which of the two characters has more to lose if they're caught (reputation, a relationship, a job, standing in a group) — state this in one line. Then rewrite the scene from that character's POV, if it isn't already, making their calculation of risk versus want an explicit thread in the prose, not just background fact.

Heat level: {{heat_level}}. Target length for the rewrite: {{word_count}} words.

Output, in order:
1. One line naming who has more to lose and why.
2. The rewritten scene.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Grace' },
      { name: 'character_b', label: 'Character B', placeholder: 'Idris' },
      { name: 'setting', label: 'Setting', placeholder: 'a work conference' },
      { name: 'draft_scene', label: 'Draft scene to rewrite', placeholder: 'Paste the existing scene here' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '600' },
    ],
  },
  {
    id: 'public-risk-tension-audit',
    title: 'Public-Risk Tension Audit',
    category: 'adult-fiction',
    subcategory: 'public-risk',
    adult: true,
    tags: ['public', 'risk', 'critique', 'audit'],
    description: 'Audits a draft public/risk scene for whether the sense of exposure is earned moment-to-moment or only stated once at the start.',
    body: `You are a fiction craft editor specializing in public/risk scenes between consenting adult characters. Audit the following draft.

Draft:
"""
{{draft_scene}}
"""

Check specifically for a common failure: risk stated once at the top of the scene ("anyone could walk in") and then forgotten. For each paragraph, note whether the sense of exposure is:
- ACTIVE (a specific sensory or situational detail keeps the risk present — a sound, a sightline, a clock, footsteps)
- STATED ONLY (risk is asserted but not reinforced)
- ABSENT (risk has dropped out of the prose entirely)

Return a table: paragraph number | status | one-line reason.

Then rewrite the two weakest paragraphs (ABSENT or STATED ONLY) to reintroduce active, concrete risk without changing what happens physically in them.`,
    variables: [
      { name: 'draft_scene', label: 'Draft scene to audit', placeholder: 'Paste the existing scene here' },
    ],
  },
  {
    id: 'public-risk-clock-constraint',
    title: 'Racing the Clock',
    category: 'adult-fiction',
    subcategory: 'public-risk',
    adult: true,
    tags: ['public', 'risk', 'pacing', 'constraint', 'generator'],
    description: 'Generates a scene bound by a hard, stated time limit, using the countdown itself as the pacing mechanism.',
    body: `You are a fiction craft assistant. Write a scene between {{character_a}} and {{character_b}}, consenting adults, in {{setting}}, constrained by a specific and stated time limit: {{time_limit}}.

Technique to exercise: pacing by countdown. Reference the shrinking time window at least three times across the scene, in ways that feel embedded in the character's attention (a glance at a phone, a sound cueing time passing, dialogue about how long they have) rather than as narrator commentary. The ending should be shaped by the clock running out — either they finish in time, are forced to stop short, or the deadline itself becomes part of what makes it charged.

POV: {{pov}}. Heat level: {{heat_level}}. Target length: {{word_count}} words.

Output: the scene only.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Yuki' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marco' },
      { name: 'setting', label: 'Setting', placeholder: 'a bathroom at a house party' },
      { name: 'time_limit', label: 'Time limit', placeholder: 'before the song playlist loops back and someone comes looking' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'fade-to-black, suggestive, explicit' },
      { name: 'word_count', label: 'Target word count', default: '600' },
    ],
  },
  {
    id: 'public-risk-negotiation-dialogue',
    title: 'Weighing the Risk Out Loud',
    category: 'adult-fiction',
    subcategory: 'public-risk',
    adult: true,
    tags: ['public', 'risk', 'consent', 'dialogue', 'generator'],
    description: 'Generates the brief negotiation where two characters weigh a public risk together before deciding to take it.',
    body: `You are a fiction craft assistant. Write the short scene between {{character_a}} and {{character_b}}, consenting adults, in {{setting}}, where they weigh the risk of being seen out loud before deciding whether to go ahead.

Technique to exercise: consent and risk assessment as character dialogue, not disclaimer. The two characters should not agree instantly or identically — give them different risk tolerances or different things at stake, and let the negotiation reveal that difference. End the scene at the moment of mutual decision, before anything further happens.

POV: {{pov}}. Heat level: mild (this sets up the encounter rather than depicting it). Target length: {{word_count}} words.

Output: the scene only.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Camille' },
      { name: 'character_b', label: 'Character B', placeholder: 'Hugo' },
      { name: 'setting', label: 'Setting', placeholder: 'a rooftop during someone else\'s engagement party' },
      { name: 'pov', label: 'POV', default: 'close third', placeholder: 'first person, close third, alternating' },
      { name: 'word_count', label: 'Target word count', default: '450' },
    ],
  },
  {
    id: 'public-risk-aftermath-scene',
    title: 'The Aftermath: Getting Away With It',
    category: 'adult-fiction',
    subcategory: 'public-risk',
    adult: true,
    tags: ['public', 'risk', 'aftermath', 'generator'],
    description: 'Generates the immediate aftermath scene, where characters rejoin a public setting and manage the comedown from risk.',
    body: `You are a fiction craft assistant. Write the scene immediately after {{character_a}} and {{character_b}}, consenting adults, take a real but non-criminal risk together in {{setting}} — the moment they rejoin the wider group or public space afterward.

Technique to exercise: the comedown. The charge of the risk doesn't end when the encounter does — write the adjustment period: straightening clothes, controlling expression, the private joke or glance that passes between them in front of others, the mismatch between how they feel and how they must appear. Include at least one near-miss of someone noticing something is different, resolved without discovery.

POV: {{pov}}. Heat level: {{heat_level}} (this scene is lower heat by nature — it's the comedown, not the encounter). Target length: {{word_count}} words.

Output: the scene only.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Freya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Adrian' },
      { name: 'setting', label: 'Setting', placeholder: 'a friend\'s dinner party' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, close third' },
      { name: 'heat_level', label: 'Heat level', default: 'mild', placeholder: 'mild, suggestive' },
      { name: 'word_count', label: 'Target word count', default: '500' },
    ],
  },
];

export default prompts;
