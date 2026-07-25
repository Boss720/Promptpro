import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'poly-dynamics-not-a-threesome',
    title: 'The Difference Between a Triad and a Threesome Scene',
    category: 'adult-fiction',
    subcategory: 'poly-dynamics',
    adult: true,
    tags: ['polyamory', 'craft', 'structure', 'generator'],
    description: 'Generates a scene that shows the three people involved have distinct, individually-maintained relationships rather than one merged unit.',
    body: `You are a fiction writing coach specializing in polyamorous relationship dynamics. Write a scene involving {{character_a}}, {{character_b}}, and a third character in {{setting}}, where the craft goal is to make visible that these are three separate two-person (or more) relationships with their own history, not one interchangeable throuple unit.

Requirements:
- POV: {{pov}}. Heat level: {{heat_level}}.
- Include at least one beat where {{character_a}} and the third character interact in a way that has nothing to do with {{character_b}} being present — an inside joke, a habit, a point of friction — establishing that their bond predates or exists independent of this moment.
- Include at least one beat where {{character_b}} is momentarily on the outside of a private exchange between the other two, and show how they experience it (not necessarily jealousy — could be fondness, patience, or mild exclusion actively managed).
- Avoid writing the third character as a plot device who exists only to enable {{character_a}} and {{character_b}}. Give them a want in the scene that isn't about either of the other two.
- Target length: {{word_count}} words.

After the scene, write 2-3 sentences naming which specific beat did the most work to prove these are three real relationships, not a unit.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Name, brief description' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, brief description' },
      { name: 'setting', label: 'Setting', placeholder: 'A shared apartment on a slow Sunday' },
      { name: 'pov', label: 'POV', default: 'third limited, one character', placeholder: 'first person, third limited, rotating' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '900', placeholder: '600-1200' },
    ],
  },
  {
    id: 'poly-dynamics-hinge-dialogue',
    title: 'Dialogue Exercise: The Hinge Manages Two Conversations',
    category: 'adult-fiction',
    subcategory: 'poly-dynamics',
    adult: true,
    tags: ['polyamory', 'dialogue', 'hinge', 'exercise'],
    description: 'A dialogue-only exercise where a hinge partner navigates two separate check-ins about the same event with each metamour.',
    body: `You are running a dialogue-only writing exercise about hinge dynamics. {{character_a}} is the hinge, partnered separately with {{character_b}} and with a third character; those two are not partnered with each other (metamours). Something happened recently — {{recent_event}} — that both relationships need to process, but separately and differently.

Write two short dialogue-only scenes back to back:
1. {{character_a}} checking in with {{character_b}} about {{recent_event}}.
2. {{character_a}} checking in with the third character about the same event.

Requirements:
- No interior narration, minimal action beats — this is a script exercise focused on how {{character_a}}'s language and priorities shift appropriately between the two conversations without being dishonest to either partner.
- Each conversation must surface something specific to that relationship's history or agreements — not a copy-pasted version of the same reassurance.
- {{character_a}} should not badmouth one partner to the other, and should not make promises in one conversation that contradict the other.
- Heat level: {{heat_level}} (this exercise is primarily emotional/logistical, so heat should stay low unless the event itself was sexual).
- After both scenes, add a "Notes:" paragraph identifying one line from each conversation that shows {{character_a}} respecting relationship boundaries rather than blurring them.`,
    variables: [
      { name: 'character_a', label: 'Character A (the hinge)', placeholder: 'Name, brief description' },
      { name: 'character_b', label: 'Character B (partner 1)', placeholder: 'Name, brief description' },
      { name: 'recent_event', label: 'The event being processed', placeholder: 'A new partner was introduced to the friend group; a date ran late without warning' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'suggestive, sensual' },
    ],
  },
  {
    id: 'poly-dynamics-compersion-vs-jealousy',
    title: 'Holding Compersion and Jealousy in the Same Scene',
    category: 'adult-fiction',
    subcategory: 'poly-dynamics',
    adult: true,
    tags: ['polyamory', 'jealousy', 'compersion', 'emotional-stakes', 'generator'],
    description: 'Generates a scene where a character feels genuine compersion and genuine jealousy simultaneously, without resolving the contradiction too cleanly.',
    body: `You are a fiction writing coach. Write a scene from {{pov}} where {{character_a}} watches {{character_b}} be intimate with, or affectionate toward, a third partner in {{setting}}, and experiences both real compersion (pleasure in the partner's pleasure) and real jealousy or insecurity at the same time — not sequentially, not one cancelling the other out.

Requirements:
- Do not resolve the contradiction with a tidy epiphany. The scene should end with both feelings still present, credibly coexisting, the way they do for people who've done the internal work of polyamory but are still human.
- Ground the jealousy in something specific and ordinary (a joke only the other two share, a nickname, more time spent than usual) rather than a generic "fear of losing them."
- Ground the compersion in something specific too — a particular detail {{character_a}} notices that genuinely moves them.
- Heat level: {{heat_level}}. If explicit, the sexual content should not be the point of the scene — the internal emotional weather is.
- Target length: {{word_count}} words.

After the scene, write one sentence naming the technique: how did you keep both feelings legible without letting one erase the other?`,
    variables: [
      { name: 'character_a', label: 'Character A (POV, observing)', placeholder: 'Name, brief description' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, brief description' },
      { name: 'setting', label: 'Setting', placeholder: 'A shared living room during a movie night' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '800', placeholder: '600-1100' },
    ],
  },
  {
    id: 'poly-dynamics-scheduling-labour',
    title: 'The Logistics Scene: Scheduling as Intimacy Work',
    category: 'adult-fiction',
    subcategory: 'poly-dynamics',
    adult: true,
    tags: ['polyamory', 'logistics', 'labour', 'realism', 'generator'],
    description: 'Writes a mundane scheduling/logistics scene that reveals relationship dynamics without becoming a sex scene at all.',
    body: `You are a fiction writing coach. Write a scene where {{character_a}} and {{character_b}} sit down to actually do the unglamorous logistics of a polyamorous life together — shared calendars, whose night is whose, a partner's kid's school event, splitting emotional labour of managing multiple relationships — in {{setting}}. No sexual content in this prompt; heat level is not applicable.

Requirements:
- Treat scheduling as characterization: who tracks the calendar, who forgets, who over-plans out of anxiety, who resents being the "logistics person" even while loving the relationship structure.
- Include one real point of friction that is about fairness or labour distribution, not about romantic jealousy — e.g., one partner always doing the coordinating work, or a metamour's needs consistently taking priority in ways that go unexamined.
- Include one moment of genuine warmth or humor that shows why they choose this complexity despite the overhead.
- Do not let the scene resolve the friction completely — a small, honest acknowledgment is more useful than a fixed problem.
- POV: {{pov}}. Target length: {{word_count}} words.

This prompt exercises writing relationship structure and labour as dramatic material — the technique of making unsexy logistics carry real emotional stakes.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Name, brief description' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, brief description' },
      { name: 'setting', label: 'Setting', placeholder: 'Kitchen table, Sunday planning session' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'word_count', label: 'Target word count', default: '700', placeholder: '500-1000' },
    ],
  },
  {
    id: 'poly-dynamics-boundaries-group-conversation',
    title: 'Group Conversation: Renegotiating a Boundary',
    category: 'adult-fiction',
    subcategory: 'poly-dynamics',
    adult: true,
    tags: ['polyamory', 'boundaries', 'consent', 'dialogue', 'group'],
    description: 'Writes a multi-person conversation where an existing relationship agreement is renegotiated openly, with disagreement allowed to stand.',
    body: `You are a fiction writing coach. Write a group conversation scene among {{character_a}}, {{character_b}}, and a third partner in {{setting}}, where an existing agreement or boundary ({{boundary_topic}}) is being renegotiated because circumstances changed.

Requirements:
- All three characters must speak and want something different from the outcome — avoid a scene where two characters silently agree and the third just accepts it.
- At least one character should voice a boundary using clear, specific, non-accusatory language (a real negotiated-fiction skill), and at least one other character should push back respectfully rather than immediately capitulating.
- The scene should not resolve with perfect harmony. End with a concrete next step (a trial period, a follow-up conversation scheduled, a partial agreement) rather than a fully solved conflict — this is more honest to how real renegotiation works.
- No sexual content is required; if any heat is present it should stay at {{heat_level}} and be incidental to the negotiation, not the point.
- POV: {{pov}}. Target length: {{word_count}} words.

Name, in one closing sentence, the specific communication technique modeled by whichever character handled the boundary conversation best.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Name, brief description' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, brief description' },
      { name: 'setting', label: 'Setting', placeholder: 'A weekly household meeting' },
      { name: 'boundary_topic', label: 'Boundary being renegotiated', placeholder: 'Overnight stays, new-partner introductions, travel together' },
      { name: 'pov', label: 'POV', default: 'third limited, rotating', placeholder: 'first person, third limited, rotating' },
      { name: 'heat_level', label: 'Heat level', default: 'not applicable / low', placeholder: 'not applicable, suggestive' },
      { name: 'word_count', label: 'Target word count', default: '900', placeholder: '700-1200' },
    ],
  },
  {
    id: 'poly-dynamics-relationship-map-builder',
    title: 'Relationship Map Builder: The Constellation',
    category: 'adult-fiction',
    subcategory: 'poly-dynamics',
    adult: true,
    tags: ['polyamory', 'relationship-map', 'planning', 'structure'],
    description: 'Builds a structural map of a polycule — who is connected to whom, what agreements exist, and where the pressure points are — before any scene is drafted.',
    body: `You are a story planning consultant. Before drafting any scenes, build a relationship map (a "polycule map") for a group including {{character_a}}, {{character_b}}, and at least one more connected person, set in {{setting}}.

Produce:
1. **Connections** — list every romantic/sexual/queerplatonic link in the group and its nature (nesting partners, long-distance, new relationship energy, comet relationship, etc). Be specific; do not default to every pair being identical.
2. **Agreements** — what explicit or implicit rules exist (fluid bonding, veto power or its absence, disclosure norms, time-sharing)? Note if any agreement is outdated or being quietly ignored by someone.
3. **Metamour relationships** — for each pair of people who share a partner but aren't partnered with each other, state their actual relationship to each other (friendly, distant, actively building closeness, tense) — this should not default to instant friendship.
4. **Pressure point** — identify the single most likely source of future conflict in this structure, and which character is least aware of it.
5. **Ceiling per person** — what does each character actually want long-term from this structure, and where do those visions diverge?

Output as five labeled sections. This is planning material only — do not write any scene. Heat level to use once drafting begins: {{heat_level}}. POV to use: {{pov}}.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Name, brief description' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, brief description' },
      { name: 'setting', label: 'Setting', placeholder: 'A found-family household across two cities' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'pov', label: 'POV', default: 'rotating third limited', placeholder: 'first person, third limited, rotating' },
    ],
  },
  {
    id: 'poly-dynamics-continuation-morning-after-triad',
    title: 'Continuation: The Morning After, Three People',
    category: 'adult-fiction',
    subcategory: 'poly-dynamics',
    adult: true,
    tags: ['polyamory', 'continuation', 'aftercare', 'triad'],
    description: 'Continues a scene into the morning-after beat for three people, focused on individual aftercare rather than a group cuddle montage.',
    body: `You are continuing a scene involving {{character_a}}, {{character_b}}, and a third partner in {{setting}}, POV {{pov}}, established heat level {{heat_level}}. The night's events are already written (pasted below); continue into the next morning.

Requirements:
- Aftercare must be individualized — show what each of the three people specifically needs the morning after (coffee alone, physical affection, verbal reassurance, space, practical logistics like getting to work) rather than one shared group scene that treats all three the same.
- Include at least one small moment of awkwardness or renegotiation that is normal and not a crisis — someone unsure of the etiquette of who showers first, whose turn it is to feed the cat, what this makes plans for next week.
- Do not manufacture unnecessary drama, but do not skip straight to effortless harmony either — three real people needing three different things the morning after is the point.
- Target length: {{word_count}} words.

Existing scene to continue from:
{{scene_so_far}}`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Name' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name' },
      { name: 'setting', label: 'Setting', placeholder: 'A shared bed on a Saturday' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '600', placeholder: '400-900' },
      { name: 'scene_so_far', label: 'Existing scene text', placeholder: 'Paste the prior night\'s scene here' },
    ],
  },
  {
    id: 'poly-dynamics-critique-throuple-flattening',
    title: 'Critique Pass: Are You Flattening the Throuple?',
    category: 'adult-fiction',
    subcategory: 'poly-dynamics',
    adult: true,
    tags: ['polyamory', 'critique', 'revision', 'craft'],
    description: 'Reviews a draft multi-partner scene for whether it collapses distinct relationships into one undifferentiated unit.',
    body: `You are a developmental editor specializing in polyamorous fiction. I will paste a draft scene below involving {{character_a}}, {{character_b}}, and a third character, set in {{setting}}, POV {{pov}}, heat level {{heat_level}}.

Review specifically for the most common failure mode in multi-partner fiction: flattening three distinct relationships into one undifferentiated "throuple unit" that behaves like a single entity with three bodies. Check for:

1. **Interchangeability** — could any two characters' dialogue or actions be swapped without changing the scene? Quote any lines where this is true.
2. **Missing individual history** — does each pairing show evidence of its own separate relationship (private jokes, different physical language, different conflict style), or does everyone relate to everyone the same way?
3. **Consent and attention** — is there a moment where all three people's desire and attention is checked individually, or does the scene assume group consent from group presence?
4. **Threesome vs. relationship** — does the scene read as an ongoing relationship structure, or as a one-off threesome with poly dressing? Point to specific evidence either way.
5. **Metamour dynamic** — is there any visible relationship between the two non-POV characters that doesn't route through the POV character?

Output as a numbered list, each with quoted evidence and a concrete fix. End with a one-paragraph verdict: unit or three relationships?

Draft:
{{draft_text}}`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Name' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name' },
      { name: 'setting', label: 'Setting', placeholder: 'Wherever the scene takes place' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'draft_text', label: 'Draft scene to review', placeholder: 'Paste the scene text here' },
    ],
  },
  {
    id: 'poly-dynamics-new-partner-integration',
    title: 'New Relationship Energy Meets an Established Partnership',
    category: 'adult-fiction',
    subcategory: 'poly-dynamics',
    adult: true,
    tags: ['polyamory', 'nre', 'established-relationship', 'generator', 'emotional-stakes'],
    description: 'Generates a scene where new relationship energy with a fresh partner collides honestly with the rhythms of an established partnership.',
    body: `You are a fiction writing coach. {{character_a}} is in an established, long-term relationship with {{character_b}} and has recently begun seeing a new partner. Write a scene in {{setting}} where the new-relationship-energy (NRE) with the new partner is visible and real, and where {{character_a}} and {{character_b}} explicitly discuss its effect on their own established relationship — attention, time, sexual frequency, or habits that have shifted.

Requirements:
- POV: {{pov}}. Heat level: {{heat_level}}.
- NRE should be characterized specifically: what is different about how {{character_a}} is acting (texting more, distracted, newly adventurous, more affectionate from overflow) rather than a vague "glowing" description.
- {{character_b}}'s reaction must be layered — genuine happiness for {{character_a}} and a genuine, named need of their own (more date nights, reassurance, a specific ritual preserved) can and should coexist without either one being framed as the "wrong" feeling.
- The scene should end with a concrete, specific commitment {{character_a}} makes to {{character_b}} — not a vague reassurance, but something schedulable or checkable.
- Target length: {{word_count}} words.

Close with one sentence naming the craft technique: how did you keep this from reading as either "jealousy is bad" or "NRE is selfish"?`,
    variables: [
      { name: 'character_a', label: 'Character A (has new partner)', placeholder: 'Name, brief description' },
      { name: 'character_b', label: 'Character B (established partner)', placeholder: 'Name, brief description' },
      { name: 'setting', label: 'Setting', placeholder: 'Their shared bedroom, late at night' },
      { name: 'pov', label: 'POV', default: 'third limited, character B', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '850', placeholder: '600-1200' },
    ],
  },
];

export default prompts;
