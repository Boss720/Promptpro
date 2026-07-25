import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'historical-period-clothing-as-obstacle',
    title: 'Clothing as Obstacle: The Slow Undress',
    category: 'adult-fiction',
    subcategory: 'historical-period',
    adult: true,
    tags: ['historical', 'clothing', 'tension', 'sensory', 'pacing'],
    description: 'Turns period clothing into a physical and social obstacle that builds tension scene by scene.',
    body: `You are a fiction writing coach specializing in {{era}} settings.

Write a scene between {{character_a}} and {{character_b}} in {{setting}} where getting {{character_a}} out of their {{era}}-appropriate clothing is itself the tension engine — not a skipped beat. Research and name the actual garments, fastenings, and layers of the era (stays, buttons, laces, cravats, whatever is period-correct) and make each one a small negotiation: something that must be unhooked, untied, or waited on, that either character could stop at any point.

Requirements:
- POV: {{pov}}. Heat level: {{heat_level}}.
- At least three distinct garment-removal beats, each doing double duty as characterization (impatience, fumbling, teasing, modesty) — not a checklist.
- No modern fabric, closures, or undergarments. If you're unsure whether an item existed in {{era}}, say so in a bracketed note rather than guessing.
- End before or at the heat_level ceiling given; do not escalate past it.
- Target length: {{word_count}} words.

After the scene, add a short note (3-4 sentences) on which garment beat did the most work and why.`,
    variables: [
      { name: 'era', label: 'Historical era', default: 'Regency England', placeholder: 'Regency England, Meiji Japan, Gilded Age New York' },
      { name: 'character_a', label: 'Character A', placeholder: 'Name, role, brief description' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, role, brief description' },
      { name: 'setting', label: 'Setting', placeholder: 'A locked library after a ball' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited, alternating' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual, fade before explicit', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '900', placeholder: '600-1200' },
    ],
  },
  {
    id: 'historical-period-social-constraint-generator',
    title: 'Social Constraint as Heat Source',
    category: 'adult-fiction',
    subcategory: 'historical-period',
    adult: true,
    tags: ['historical', 'tension', 'manners', 'generator', 'subtext'],
    description: 'Generates a scene where era-specific social rules, not physical obstacles, create the erotic tension.',
    body: `You are a fiction writing coach. Generate a scene set in {{era}} where the primary source of heat between {{character_a}} and {{character_b}} is a social rule of the period being bent, not broken outright — something like chaperonage, correspondence etiquette, seating order, mourning conventions, or class deference specific to {{era}}.

Before writing, list 3 real social constraints from {{era}} that could plausibly apply to {{setting}}, and pick the one with the most dramatic potential. State your pick and why in one sentence.

Then write the scene:
- POV: {{pov}}. Heat level: {{heat_level}}.
- The rule must be visible on the page — named, understood by both characters, and actively calculated around. Do not let it evaporate once the scene turns intimate; show at least one moment where breaking it has a real cost or risk attached.
- Dialogue should use period-plausible diction: formal address, indirection, subtext. No modern slang, no anachronistic frankness about sex.
- Do not caricature the era into a costume drama — characters should have interior lives that don't fully agree with the rule they're bound by.
- Target length: {{word_count}} words.`,
    variables: [
      { name: 'era', label: 'Historical era', default: 'Victorian England', placeholder: 'Victorian England, Edo Japan, antebellum New Orleans' },
      { name: 'character_a', label: 'Character A', placeholder: 'Name, role, brief description' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, role, brief description' },
      { name: 'setting', label: 'Setting', placeholder: 'A shared carriage on a long journey' },
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive to sensual', placeholder: 'suggestive, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '800', placeholder: '600-1200' },
    ],
  },
  {
    id: 'historical-period-diction-critique',
    title: 'Diction Check: Period Voice Without Pastiche',
    category: 'adult-fiction',
    subcategory: 'historical-period',
    adult: true,
    tags: ['historical', 'diction', 'revision', 'critique', 'voice'],
    description: 'Reviews a historical scene draft for anachronism and over-the-top pastiche in dialogue and narration.',
    body: `You are a historical-fiction line editor with expertise in {{era}}. I will paste a draft scene below featuring {{character_a}} and {{character_b}} in {{setting}}, written at {{heat_level}} heat, POV {{pov}}.

Review it for:
1. **Anachronism** — vocabulary, idioms, technology, or attitudes that would not exist in {{era}}. Quote the offending phrase and suggest a period-plausible replacement.
2. **Pastiche overload** — dialogue that leans so hard on "thee/thou/prithee" or stock formality that it reads as costume rather than voice. Flag lines that could be trimmed to sound natural while staying in period.
3. **Consequence realism** — does the scene acknowledge what discovery would actually have cost these characters in {{era}} (social ruin, legal jeopardy, violence, exile), or does it wave it away? If the stakes are missing, name what they should be.
4. **Sensory grounding** — does the scene use period-accurate sensory detail (fabric, light source, scent, sound) or could it be set anywhere/anytime?

Output format: a numbered list of issues, each with the quoted line, the problem, and a one-line fix. End with a 2-sentence verdict on whether the voice is doing its job.

Draft:
{{draft_text}}`,
    variables: [
      { name: 'era', label: 'Historical era', placeholder: 'Elizabethan England, 1920s Paris' },
      { name: 'character_a', label: 'Character A', placeholder: 'Name, role' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, role' },
      { name: 'setting', label: 'Setting', placeholder: 'A backstage dressing room' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'draft_text', label: 'Draft scene to review', placeholder: 'Paste the scene text here' },
    ],
  },
  {
    id: 'historical-period-discovery-stakes-mapper',
    title: 'Discovery Stakes Map',
    category: 'adult-fiction',
    subcategory: 'historical-period',
    adult: true,
    tags: ['historical', 'stakes', 'structure', 'planning', 'consequence'],
    description: 'Builds a concrete map of what discovery would cost each character in the given era before the scene is written.',
    body: `You are a story consultant helping plan a historical scene before drafting. Setting: {{era}}, {{setting}}. Characters: {{character_a}} and {{character_b}}.

Before any scene gets written, build a stakes map:

1. **Who could plausibly discover them** in {{setting}} during {{era}} — list 3 specific people or institutions (a chaperone, a landlord, a magistrate, a guild, a church body), not a vague "society."
2. **For each**, state the real consequence in {{era}} terms: legal (what statute or custom applies), social (specific loss — marriage prospects, standing, employment), physical (real risk of violence or confinement), and financial.
3. **Asymmetry check** — do {{character_a}} and {{character_b}} face different stakes because of gender, class, race, or status in {{era}}? Name the gap explicitly; it should not be identical for both.
4. **One planning paragraph**: given this map, what is the single highest-tension moment where discovery is nearly happening, and how would each character react differently based on what they individually stand to lose?

Do not write the scene itself — output only the stakes map and the planning paragraph, ready to hand to a drafting pass at {{heat_level}} heat, POV {{pov}}.`,
    variables: [
      { name: 'era', label: 'Historical era', placeholder: 'Restoration England, 1950s small-town America' },
      { name: 'character_a', label: 'Character A', placeholder: 'Name, role, social position' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, role, social position' },
      { name: 'setting', label: 'Setting', placeholder: 'A boarding house' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
    ],
  },
  {
    id: 'historical-period-letters-epistolary',
    title: 'Epistolary Tension: The Letter That Says Too Much',
    category: 'adult-fiction',
    subcategory: 'historical-period',
    adult: true,
    tags: ['historical', 'epistolary', 'dialogue', 'restraint', 'generator'],
    description: 'Generates a period-appropriate letter or exchange of letters that builds desire through what cannot be said outright.',
    body: `You are a fiction writing coach. Write an exchange of two or three letters between {{character_a}} and {{character_b}} set in {{era}}, in which written correspondence itself is dangerous — intercepted mail, a nosy household, limited literacy privacy — and both parties must communicate desire through indirection, code, and restraint appropriate to {{era}} epistolary convention.

Requirements:
- Use real period letter conventions: salutations, closings, the level of formality that would be expected between people of {{character_a}}'s and {{character_b}}'s relative status in {{era}}.
- Heat level: {{heat_level}}. Because the letters are the medium, explicitness must be conveyed through implication, double meaning, and controlled diction — this exercises restraint as a craft technique, not evasion.
- Include one moment where a letter is nearly caught or read by the wrong person, and show the physical stakes of that (a wax seal broken, a hidden pocket, a burned page).
- After the letters, add 2-3 sentences analyzing which specific word choices did the most erotic work without stating anything explicit.
- POV frame: {{pov}}. Setting context: {{setting}}.`,
    variables: [
      { name: 'era', label: 'Historical era', default: 'Regency England', placeholder: 'Regency England, Ottoman-era Istanbul' },
      { name: 'character_a', label: 'Character A', placeholder: 'Name, role, literacy/status' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, role, literacy/status' },
      { name: 'setting', label: 'Setting context', placeholder: 'Separated by a family feud' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'suggestive, sensual' },
      { name: 'pov', label: 'POV framing', default: 'epistolary, both voices', placeholder: 'epistolary, both voices; one-sided' },
    ],
  },
  {
    id: 'historical-period-continuation-interrupted',
    title: 'Continuation: The Interruption',
    category: 'adult-fiction',
    subcategory: 'historical-period',
    adult: true,
    tags: ['historical', 'continuation', 'pacing', 'consequence'],
    description: 'Continues an in-progress historical scene from the moment it is interrupted, forcing consequence into the open.',
    body: `You are continuing a historical fiction scene. Era: {{era}}. Setting: {{setting}}. Characters: {{character_a}} and {{character_b}}. POV: {{pov}}. Heat level so far: {{heat_level}}.

Below is the scene as written up to the point of interruption. Continue it from exactly where it stops. The interruption (a knock, a returning chaperone, a servant, a summons) must arrive and force an immediate, era-accurate response — clothing must be dealt with, positioning must be dealt with, and a plausible cover story must be improvised using only what would credibly exist in {{era}}.

Requirements:
- Do not skip past the interruption with a scene break. Show the scramble in real time.
- The cover story or excuse offered must be something a person of that era and station would actually say — check it against class, gender, and setting norms.
- Maintain the heat level already established; do not escalate or de-escalate the register from what precedes it.
- End the continuation at a natural beat — the interrupting party leaving, or the moment fully defused — not mid-action.
- Target length for the continuation: {{word_count}} words.

Existing scene to continue:
{{scene_so_far}}`,
    variables: [
      { name: 'era', label: 'Historical era', placeholder: 'Victorian England, feudal Japan' },
      { name: 'character_a', label: 'Character A', placeholder: 'Name, role' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, role' },
      { name: 'setting', label: 'Setting', placeholder: 'A country house study' },
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '500', placeholder: '300-800' },
      { name: 'scene_so_far', label: 'Existing scene text', placeholder: 'Paste the scene up to the interruption point' },
    ],
  },
  {
    id: 'historical-period-power-imbalance-dialogue',
    title: 'Dialogue Exercise: Status Reversal Across Class Lines',
    category: 'adult-fiction',
    subcategory: 'historical-period',
    adult: true,
    tags: ['historical', 'dialogue', 'power', 'class', 'exercise'],
    description: 'A dialogue-only exercise where two characters of unequal era-specific status negotiate desire without narration.',
    body: `You are running a dialogue-only writing exercise. Characters {{character_a}} and {{character_b}} occupy unequal social positions typical of {{era}} (master/servant, officer/enlisted, employer/employee, noble/commoner — pick whichever fits {{setting}}). Write ONLY dialogue and minimal action beats (no interior narration, no scene-setting prose) for a conversation in {{setting}} where the power imbalance is explicitly acknowledged by at least one character before anything intimate is agreed to.

Requirements:
- POV is irrelevant here — this is a script-style exchange. Heat level: {{heat_level}}, meaning the conversation may move toward intimacy but should stop at or below that ceiling.
- At least one line must name the power gap directly — a character stating aloud why consent given across this gap is complicated, and the other responding to that concern rather than brushing past it. This is the technique being exercised: making structural power visible in dialogue rather than pretending the scene is between equals.
- Use period-accurate forms of address (titles, honorifics, formal/informal registers) consistent with {{era}}.
- Length: {{word_count}} words of dialogue.
- Close with one OOC paragraph (labeled "Notes:") explaining what would need to be true narratively for this negotiation to read as genuine rather than performative.`,
    variables: [
      { name: 'era', label: 'Historical era', placeholder: 'Antebellum-adjacent free household, Edwardian England' },
      { name: 'character_a', label: 'Character A', placeholder: 'Name, higher-status role' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, lower-status role' },
      { name: 'setting', label: 'Setting', placeholder: 'A household after hours' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive', placeholder: 'suggestive, sensual' },
      { name: 'word_count', label: 'Target word count', default: '500', placeholder: '300-700' },
    ],
  },
  {
    id: 'historical-period-sensory-inventory',
    title: 'Sensory Inventory Before Drafting',
    category: 'adult-fiction',
    subcategory: 'historical-period',
    adult: true,
    tags: ['historical', 'sensory', 'research', 'planning', 'craft'],
    description: 'Builds a research-grounded sensory inventory of the era before a scene is drafted, to avoid generic description.',
    body: `You are a historical-fiction research assistant. Before drafting a scene between {{character_a}} and {{character_b}} in {{setting}}, {{era}}, build a sensory inventory grounded in the period:

- **Light**: what actually lit a room like this in {{era}} (candle, oil lamp, gas, early electric) and how it would move, smell, and flicker.
- **Sound**: ambient period sound — street noise, mechanical sound, absence of sound we'd expect today.
- **Scent**: what people, fabric, and rooms of {{era}} and this social tier actually smelled like — soap, lack of soap, perfume conventions, tobacco, food.
- **Touch**: textures available at this social level — sheet quality, floor surfaces, temperature control (or lack of it).
- **Taboo/etiquette flags**: 2-3 things a person of {{era}} would find shocking that a modern reader would consider unremarkable, and vice versa.

Output as five short labeled sections, each 2-4 sentences, plain and reference-like (not prose scene-writing). End with one line flagging any item you're uncertain is period-accurate for {{era}} specifically, so it can be verified before drafting continues at {{heat_level}} heat.`,
    variables: [
      { name: 'era', label: 'Historical era', placeholder: 'Georgian England, Song dynasty China' },
      { name: 'character_a', label: 'Character A', placeholder: 'Name, social tier' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, social tier' },
      { name: 'setting', label: 'Setting', placeholder: 'A rented room above a tavern' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
    ],
  },
  {
    id: 'historical-period-relationship-map-clandestine',
    title: 'Relationship Map: The Clandestine Arrangement',
    category: 'adult-fiction',
    subcategory: 'historical-period',
    adult: true,
    tags: ['historical', 'relationship-map', 'planning', 'structure'],
    description: 'Maps the logistics, cover stories, and risk tolerance of an ongoing secret relationship across an era-appropriate span of time.',
    body: `You are a story planning consultant. {{character_a}} and {{character_b}} are conducting an ongoing, secret relationship across {{setting}} during {{era}}, not a single encounter. Before any scene is drafted, build a relationship map covering:

1. **Cover mechanism** — what public relationship or role (employer/employee, family friends, correspondence pretext) explains why they can be seen together at all in {{era}}, and how much scrutiny it can survive.
2. **Meeting logistics** — how do they actually arrange to be alone, given period constraints on unchaperoned contact, travel, and communication in {{setting}}? Name specific windows and specific risks each one carries.
3. **Risk tolerance drift** — has one character become more reckless than the other over time? Identify which one, and one recent decision that shows it.
4. **The tell** — what small, period-plausible detail would give them away to an observant third party (a look, a gift, a scheduling pattern) if this relationship were being watched?
5. **Ceiling** — what is the actual endpoint they are each hoping for (marriage, a kept arrangement, an eventual parting), and do their two answers match? If not, name the gap.

Output as five labeled sections, 2-4 sentences each, at {{heat_level}} heat framing — this is planning material, not a scene, so keep it structural rather than sensory. POV to use once drafting begins: {{pov}}.`,
    variables: [
      { name: 'era', label: 'Historical era', placeholder: 'Gilded Age New York, Heian Japan' },
      { name: 'character_a', label: 'Character A', placeholder: 'Name, role, marital/social status' },
      { name: 'character_b', label: 'Character B', placeholder: 'Name, role, marital/social status' },
      { name: 'setting', label: 'Setting', placeholder: 'A shared social circle over one season' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'pov', label: 'POV', default: 'alternating third limited', placeholder: 'first person, third limited, alternating' },
    ],
  },
];

export default prompts;
