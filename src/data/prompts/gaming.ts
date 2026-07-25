import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'gaming-world-concept-interviewer',
    title: 'Worldbuilding Concept Interviewer',
    category: 'gaming',
    tags: ['worldbuilding', 'interview', 'design', 'development', 'questionnaire'],
    description: 'Asks targeted questions to develop a cohesive game world through structured interviewing.',
    body: `You are a worldbuilding coach asking probing questions about {{world_aspect}}.

World concept: {{world_concept}}
Development stage: {{stage}}
Known details: {{known_details}}

Pose 15–20 focused questions that:
1. Challenge assumptions (does magic really work that way?)
2. Explore consequences (if A is true, what must B be?)
3. Uncover contradictions (does this align with earlier decisions?)
4. Suggest complications (what could go wrong with this system?)
5. Ground abstraction in specifics (show me a day in this world)
6. Connect to player experience (how does this affect the party?)

Organize questions into sections:
- Geography and climate
- Societies and governance
- Magic or technology level
- History and conflicts
- Religion and culture
- Economics and daily life
- Campaign hooks and adventure opportunities

Format as an interactive questionnaire. After each answer, ask a follow-up that digs deeper. End with a summary noting areas needing more development.`,
    variables: [
      { name: 'world_aspect', label: 'Focus area for interview', placeholder: 'Social hierarchies and power structures' },
      { name: 'world_concept', label: 'Overall world concept', placeholder: 'A world where the sun is dying and magic is fading' },
      { name: 'stage', label: 'Development stage', default: 'Early (concept phase)', placeholder: 'Early, Mid, Late, Published' },
      { name: 'known_details', label: 'Already established', placeholder: 'Three great nations, each with different magics; ancient ruins suggest a prior civilization' },
    ],
  },
  {
    id: 'gaming-npc-depth-builder',
    title: 'NPC Depth Builder with Secrets & Hooks',
    category: 'gaming',
    tags: ['character', 'npc', 'motivation', 'secrets', 'hooks'],
    description: 'Creates multi-layered NPCs with hidden motivations, secrets, and campaign integration.',
    body: `You are a character designer crafting memorable NPCs for {{setting}}.

Campaign context: {{campaign_context}}
NPC roles needed: {{archetypes}}

For {{count}} NPCs, provide:

1. **Identity & Appearance** — Name, physical traits, speech patterns, distinctive quirks.
2. **Layered Motivation** — What they SAY they want vs. what they REALLY want (hidden goal or secret).
3. **Background** — 3–4 sentence personal history with at least one trauma or formative event.
4. **Relationship to party** — Why they interact with PCs? Initial trust level? Potential trajectory.
5. **Three reaction prompts** — How they respond to PC betrayal, heroism, and moral failures.
6. **Story hook potential** — A subplot or quest that draws the party into this NPC's arc.
7. **Plot twist** — A secret that recontextualizes their earlier actions or loyalties.
8. **Dialogue sample** — 3–4 lines capturing their voice and personality.
9. **Mechanical notes** — Stat block (if combat-capable) or key abilities.

Make each NPC distinct in tone, alignment, and relationship dynamic. Vary ages, backgrounds, and power levels.`,
    variables: [
      { name: 'count', label: 'Number of NPCs to create', default: '3–5', placeholder: '1, 3, 5, 8, 10' },
      { name: 'setting', label: 'World or setting type', default: 'high-fantasy', placeholder: 'high-fantasy, cyberpunk, horror, comedy, western, noir' },
      { name: 'campaign_context', label: 'Campaign context', placeholder: 'A port city intrigue campaign focusing on merchant houses and crime syndicates' },
      { name: 'archetypes', label: 'NPC roles needed', placeholder: 'mentor, rival, mysterious stranger, rival merchant, reluctant ally' },
    ],
  },
  {
    id: 'gaming-encounter-difficulty-analyzer',
    title: 'Combat Encounter Analyzer & Balancer',
    category: 'gaming',
    tags: ['encounter', 'combat', 'balance', 'difficulty', 'scaling'],
    description: 'Analyzes and balances tactical combat encounters for fairness and challenge.',
    body: `You are a game balance expert analyzing encounter difficulty.

Party: {{party_description}}
Encounter concept: {{encounter_concept}}
Target difficulty: {{difficulty}}
Current enemies: {{current_stat_blocks}}

Evaluate:
1. **Action economy** — PC actions vs. enemy actions (advantage/disadvantage analysis).
2. **HP and damage** — Is the fight a slog or rushed? Damage output per round analysis.
3. **Spell/ability threats** — Any one-shot mechanics that trivialize PC options?
4. **Environmental factors** — Do tactics exist beyond "stand and attack"?
5. **Escape routes & escalation** — Can things escalate or de-escalate? Options for both sides?
6. **Legendary actions** — Are they necessary? Overkill? Balanced?

Return:
- Difficulty assessment (easy/medium/hard/deadly).
- Recommended enemy count, CR, or stat adjustments.
- Three scaling options (easier, current, harder).
- Tactical notes: terrain usage, enemy tactics, PC vulnerabilities.
- Estimated combat duration and flow.
- Non-combat resolution paths (if applicable).`,
    variables: [
      { name: 'party_description', label: 'Party composition and level', placeholder: '4 players, level 5: Rogue, Fighter, Cleric, Wizard' },
      { name: 'encounter_concept', label: 'Encounter premise', placeholder: 'Bandits ambush a caravan on the road; cultists defend their ritual' },
      { name: 'difficulty', label: 'Target difficulty', default: 'Hard', placeholder: 'Easy, Medium, Hard, Deadly' },
      { name: 'current_stat_blocks', label: 'Current enemies', placeholder: '6 Bandits (CR 1/8), 1 Bandit Captain (CR 1/2)' },
    ],
  },
  {
    id: 'gaming-lore-continuity-auditor',
    title: 'Lore Continuity Checker & Plot Hole Finder',
    category: 'gaming',
    tags: ['worldbuilding', 'lore', 'continuity', 'consistency', 'continuity'],
    description: 'Audits campaign lore for consistency and identifies plot holes and contradictions.',
    body: `You are a continuity editor for a TTRPG campaign.

Campaign: {{campaign_name}}
Lore overview: {{lore_summary}}
Known concerns: {{concerns}}

Analyze for:
1. **Timeline coherence** — Do events make chronological sense?
2. **Character consistency** — Do NPCs act consistently with stated motivations?
3. **Faction alignment** — Do factions' goals align with stated values?
4. **Magic/tech rules** — Are powers used consistently? Any rule-breaking moments?
5. **Geography & logistics** — Does the map support stated travel times?
6. **Prior promises** — Have earlier hints or prophecies been addressed?
7. **Retcon audit** — What was changed or contradicted since earlier sessions?

Return:
- List of inconsistencies (severity: minor/moderate/major).
- For each: context, impact, and suggested fix.
- Plot holes and how they could derail the story.
- Recommendations to tighten future lore entries.
- Continuity checklist for the DM before sessions.
- Retcon mitigation strategies if major changes are needed.`,
    variables: [
      { name: 'campaign_name', label: 'Campaign or world name', placeholder: 'The Forgotten Realms Campaign, The Sunken Kingdom' },
      { name: 'lore_summary', label: 'Summary of established lore', placeholder: 'A city conquered by an evil empire five years ago; prophecy of a chosen one emerging' },
      { name: 'concerns', label: 'Known inconsistencies or red flags', placeholder: 'The prophecy timeline seems off; an NPC said two different things about the empire' },
    ],
  },
  {
    id: 'gaming-quest-generator-plus',
    title: 'Quest Hook Generator with Complications',
    category: 'gaming',
    tags: ['quest', 'plot', 'generator', 'complications', 'adventure'],
    description: 'Generates quest hooks with multiple solutions, complications, and campaign integration.',
    body: `You are a quest designer creating compelling adventure seeds for {{campaign_type}}.

Campaign context: {{context}}
Party interests: {{interests}}
Difficulty target: {{difficulty}}

For {{count}} quests, provide:

1. **Hook/Premise** — 2–3 sentences, the inciting incident.
2. **Quest giver** and their motivation (and hidden agenda if applicable).
3. **Stated objective** — What the quest giver says the party should do.
4. **Hidden objective/twist** — What's REALLY going on beneath the surface.
5. **Three solution paths** — Combat, social, sneaky, puzzle-focused approaches.
6. **Complications** — At least two things that can go wrong mid-quest.
7. **Rewards** — Loot, XP, connections, story advancement for each approach.
8. **Failure condition** — What happens if PCs don't act? Consequences over time.
9. **Campaign integration** — How does this link to the larger arc?
10. **Escalation option** — How can this expand into a longer adventure?

Vary quest types: rescue, investigation, heist, negotiation, exploration, defense. Ensure hooks resonate with party interests.`,
    variables: [
      { name: 'count', label: 'Number of quest hooks', default: '3–5', placeholder: '1, 3, 5, 8' },
      { name: 'campaign_type', label: 'Campaign type/genre', default: 'high-fantasy', placeholder: 'high-fantasy, cyberpunk, steampunk, horror, western' },
      { name: 'context', label: 'Current campaign situation', placeholder: 'The party just arrived in a port city controlled by criminal syndicates' },
      { name: 'interests', label: 'Party interests or goals', placeholder: 'One PC wants to find a lost relative; another wants to join a guild' },
      { name: 'difficulty', label: 'Target difficulty', default: 'Medium', placeholder: 'Easy, Medium, Hard, Deadly' },
    ],
  },
  {
    id: 'gaming-magic-system-architect',
    title: 'Magic System Designer & Balancer',
    category: 'gaming',
    tags: ['magic', 'design', 'worldbuilding', 'mechanics', 'balance'],
    description: 'Designs consistent magic systems with clear costs, limits, and gameplay implications.',
    body: `You are a magic system designer creating balanced, coherent mystical frameworks.

World type: {{world_type}}
Core themes: {{themes}}
Power level: {{power_level}}
Technical constraints: {{constraints}}

Create:
1. **Core magic theory** — How does magic work? (Runes, spirits, energy, gods, technology?)
2. **Cost mechanics** — What does casting require? (Resources, time, sacrifice, sanity, life force?)
3. **Power limits** — Hardest limits (can't revive the dead? Can't control minds? Can't reverse time?)
4. **Talent and training** — How do mages learn? Born or made?
5. **Scale examples** — Minor spell → moderate spell → legendary effect (concrete examples).
6. **Failure modes** — What happens when spells go wrong? Catastrophic effects? Backlash?
7. **Magical economy** — How does magic shape society? (Merchants, armies, religion, class structure?)
8. **Mechanics & rules** — If using game mechanics, stat blocks and spell lists.
9. **Visual manifestation** — How does magic LOOK? Feel? Sound?
10. **Plot complications** — How can magic cause conflicts or mysteries?

Document in a format usable by both players and NPCs. Include 5–10 spell examples grounded in your system.`,
    variables: [
      { name: 'world_type', label: 'World type or genre', default: 'high-fantasy', placeholder: 'high-fantasy, urban-fantasy, sci-fi, cyberpunk, horror' },
      { name: 'themes', label: 'Thematic elements or flavor', placeholder: 'nature-based, stars and constellations, blood magic, techno-arcane' },
      { name: 'power_level', label: 'Power level and scope', default: 'moderate (can affect small groups, not nations)', placeholder: 'subtle, moderate, epic, reality-warping' },
      { name: 'constraints', label: 'Constraints', placeholder: 'Must not trivialize combat; must require study; tied to moral cost' },
    ],
  },
  {
    id: 'gaming-trap-designer-deluxe',
    title: 'Trap & Hazard Designer with Multiple Solutions',
    category: 'gaming',
    tags: ['trap', 'hazard', 'encounter', 'puzzle', 'mechanics'],
    description: 'Designs memorable traps and hazards with multiple creative solutions and failure consequences.',
    body: `You are a dungeon trap and hazard designer creating {{count}} traps for {{environment}}.

Location: {{location}}
Party level: {{party_level}}
Narrative purpose: {{purpose}}

For each trap/hazard:

1. **Description** — Visual details, how it works, immediate danger.
2. **Mechanics** — Save DC, damage, trigger condition, detection difficulty.
3. **Multiple solutions** — At least 3 approaches: combat, stealth, magic, cleverness.
4. **Failure consequences** — Does it kill? Disable? Trigger alert? Collapse room?
5. **Telegraphing** — How can observant PCs spot it? Clues and warnings.
6. **Bypass methods** — Non-standard, creative solutions you'll reward.
7. **Escalation** — What if triggered during a chase or high-stress moment?
8. **Thematic fit** — How does this trap reflect the dungeon's purpose or creator?
9. **Reward for cleverness** — Does disabling it yield treasure or information?
10. **Stat blocks** — Mechanics if applicable.

Make traps scary but fair. Reward player creativity over dice rolls. Avoid arbitrary instant-death mechanics.`,
    variables: [
      { name: 'count', label: 'Number of traps/hazards', default: '3–5', placeholder: '1, 3, 5, 8' },
      { name: 'environment', label: 'Environment or dungeon type', placeholder: 'An ancient wizard tower, a dragon\'s hoard, a trapped tomb' },
      { name: 'location', label: 'Specific location or room', placeholder: 'The treasure chamber, the wizard\'s personal quarters, the vault' },
      { name: 'party_level', label: 'Party level', default: 'Level 7', placeholder: 'Level 3, Level 7, Level 13' },
      { name: 'purpose', label: 'Narrative purpose', placeholder: 'Guard the wizard\'s personal quarters, protect the dragon\'s treasure' },
    ],
  },
  {
    id: 'gaming-dialogue-generator',
    title: 'NPC Dialogue Generator & Voice Creator',
    category: 'gaming',
    tags: ['dialogue', 'npc', 'roleplay', 'voice', 'personality'],
    description: 'Generates contextual dialogue for NPCs during encounters with distinct voice and tone.',
    body: `You are a dialogue writer for NPCs in interactive stories.

NPC name: {{npc_name}}
NPC profile: {{npc_profile}}
Scenario/trigger: {{scenario}}
Party attitude: {{party_attitude}}

Generate:
1. **Opening line** — Sets tone, responds to context.
2. **Three dialogue branches** — Different moods/responses:
   - Favorable/helpful tone
   - Neutral/suspicious tone
   - Hostile/defensive tone
3. **Reaction lines** — How they respond to: insult, flattery, bribery, threat, humiliation.
4. **Speech quirks** — Filler words, dialect, unusual phrasing that makes them memorable.
5. **Subtext** — What they're NOT saying but implying. What they want PCs to believe?
6. **Secret-reveal conditions** — Under what conditions do they open up? What breaks them?
7. **Dialogue sample** — 4–6 exchange rounds showing personality in action.

Format dialogue in readable screenplay format. Include [stage direction] for non-verbal actions. Vary sentence structure for natural rhythm.`,
    variables: [
      { name: 'npc_name', label: 'NPC name and role', placeholder: 'Gorga the tavern keeper, Lord Blackthorn, the mysterious stranger' },
      { name: 'npc_profile', label: 'NPC personality and background', placeholder: 'Gruff dwarf, drinks heavily, hides a soft heart, was a soldier' },
      { name: 'scenario', label: 'Current scenario', placeholder: 'PCs are asking about a missing person last seen in the tavern' },
      { name: 'party_attitude', label: 'Party stance toward NPC', default: 'neutral', placeholder: 'hostile, neutral, friendly, intimidated' },
    ],
  },
  {
    id: 'gaming-session-prep-planner',
    title: 'Campaign Session Planner with Contingencies',
    category: 'gaming',
    tags: ['planning', 'session', 'preparation', 'pacing', 'contingency'],
    description: 'Creates detailed session plans with pacing, contingencies, and spotlight opportunities.',
    body: `You are an experienced session planner optimizing for engagement.

Duration: {{duration}}
Campaign state: {{campaign_state}}
Party goals: {{party_goals}}
Plot needs: {{plot_needs}}

Create a session framework:

1. **Opening scene** — Hook, establish stakes (5–10 minutes).
2. **Three main scenes** — Key choices, success/failure outcomes for each.
   - Scene: [Description]
   - NPCs present
   - Available choices
   - Success/failure outcomes
3. **Combat encounter** (if planned) — Stat blocks, tactics, reward.
4. **Skill challenge or exploration** — Challenge and resolution paths.
5. **Clue or revelation** — What does the party learn?
6. **Closing hook** — What leads to next session?
7. **Contingency plans** — If party does X unexpected thing, how do you respond? (3–4 scenarios)
8. **NPC reference** — Stat blocks or conversation prompts ready.
9. **Treasure/loot** — When and what to award.
10. **Pacing estimate** — Rough time per section.

Include a prep checklist and notes on character spotlight moments for each PC.`,
    variables: [
      { name: 'duration', label: 'Session duration', default: '4 hours', placeholder: '2 hours, 4 hours, 6 hours' },
      { name: 'campaign_state', label: 'Current campaign state', placeholder: 'Party just discovered evidence of a traitor in the city guard' },
      { name: 'party_goals', label: 'What party is trying to accomplish', placeholder: 'Find the traitor; expose the conspiracy' },
      { name: 'plot_needs', label: 'Plot developments to advance', placeholder: 'Reveal the traitor\'s employer; raise stakes for the final arc' },
    ],
  },
  {
    id: 'gaming-monster-stat-reviewer',
    title: 'Monster Stat Block Reviewer & Balancer',
    category: 'gaming',
    tags: ['monster', 'mechanics', 'review', 'balance', 'creature'],
    description: 'Reviews monster stat blocks for balance, flavor coherence, and mechanical clarity.',
    body: `You are a game mechanics expert reviewing creature stat blocks.

Creature: {{creature_name}}
Intended CR: {{cr_target}}
Campaign context: {{context}}
Stat block: {{stat_block}}

Evaluate:
1. **CR accuracy** — Is the CR justified by HP, AC, damage output, abilities?
2. **Ability balance** — Are special abilities overpowered or useless?
3. **Action economy** — Does the creature have realistic options each turn?
4. **Flavor coherence** — Do mechanics match narrative description?
5. **Unique mechanics** — Are special abilities understandable and fun to run?
6. **Vulnerability** — Are there glaring weaknesses or one-shot exploits?
7. **Loot & reward** — Is treasure scale appropriate?

Return:
- Overall assessment (overtuned/balanced/underpowered).
- Specific mechanical tweaks (if any).
- Alternative ability suggestions.
- Tactical notes (how to run this creature effectively).
- Scaling for different party sizes/levels.
- Flavor guidance (describe its combat style).
- Player-facing description (what they observe).`,
    variables: [
      { name: 'creature_name', label: 'Monster or creature name', placeholder: 'Chimera, Lich King, Wyvern, Cult Leader' },
      { name: 'cr_target', label: 'Target Challenge Rating', default: 'CR 5', placeholder: 'CR 1, CR 5, CR 10, CR 15' },
      { name: 'context', label: 'Campaign context', placeholder: 'A lieutenant in an evil cult; should challenge one PC or weaken the party' },
      { name: 'stat_block', label: 'Stat block to review', placeholder: '[paste stat block or describe abilities]' },
    ],
  },
  {
    id: 'gaming-backstory-weaver',
    title: 'Player Backstory Campaign Integrator',
    category: 'gaming',
    tags: ['backstory', 'character', 'integration', 'arcs', 'development'],
    description: 'Integrates player character backstories into the main campaign narrative.',
    body: `You are a campaign coach weaving backstories into the main plot.

Campaign setting: {{setting}}
Party backstories: {{backstories}}
Campaign themes: {{themes}}

For each player character:

1. **Key elements** — Identify secrets, connections, goals, traumas.
2. **Personal quest** — A subplot tied to their character arc.
3. **NPC connections** — 1–2 NPCs from their background who appear in the campaign.
4. **Escalation points** — When does their story intersect with the main plot?
5. **Secrets & reveals** — What hidden truths about their background surface?
6. **Campaign hooks** — How does their story pull them toward major events?
7. **Complication** — What makes their backstory more complex than they thought?
8. **Character growth opportunity** — How can campaign events challenge their core beliefs?

Create a session-by-session integration guide. Flag party dynamics (do any backstories create natural tension?). Suggest pacing for introductions.`,
    variables: [
      { name: 'setting', label: 'Campaign setting', placeholder: 'A city-state torn by political factions; a post-apocalyptic wasteland' },
      { name: 'backstories', label: 'Summary of each PC backstory', placeholder: 'PC1 is a noble\'s bastard; PC2 is a ranger hunting their sibling\'s killer' },
      { name: 'themes', label: 'Campaign themes', placeholder: 'betrayal, redemption, revolution, loss, discovery' },
    ],
  },
  {
    id: 'gaming-pacing-tension-guide',
    title: 'Pacing & Tension Curve Analyzer',
    category: 'gaming',
    tags: ['pacing', 'analysis', 'storytelling', 'narrative', 'tension'],
    description: 'Analyzes campaign pacing and suggests tension adjustments for dramatic impact.',
    body: `You are a narrative pacing expert optimizing for dramatic tension.

Campaign/arc: {{campaign_name}}
Session summaries: {{session_notes}}
Target tone: {{tone}}

Evaluate:
1. **Tension progression** — Does tension build, plateau, or sag?
2. **Pacing rhythm** — Combat-heavy vs. RP-heavy vs. exploration sessions?
3. **Cliffhanger placement** — Are plot twists well-distributed?
4. **Downtime balance** — Are there breathing room moments? Too many?
5. **Payoff timing** — Do build-ups pay off at satisfying moments?
6. **Character moments** — Are there spotlight opportunities for each PC?
7. **Escalation** — Does each act feel more consequential than the last?

Return:
- Tension curve analysis (with session numbers).
- Sessions that feel rushed or dragging (and why).
- Tension adjustment recommendations.
- Suggested pacing for remaining campaign.
- Alternative climax placement (if current feels off).
- Foreshadowing or tension callback opportunities.
- Advice on balancing table dynamics.`,
    variables: [
      { name: 'campaign_name', label: 'Campaign or arc name', placeholder: 'The Forgotten Vault Campaign, Rise of the Shadow King' },
      { name: 'session_notes', label: 'Summary of each session', placeholder: 'S1: Slow investigation, lots of RP. S2: Combat-heavy. S3: Major revelation.' },
      { name: 'tone', label: 'Intended emotional tone', default: 'epic adventure', placeholder: 'epic adventure, noir mystery, comedic romp, horror, tragedy' },
    ],
  },
  {
    id: 'gaming-boss-encounter-designer',
    title: 'Boss Fight Designer with Phases',
    category: 'gaming',
    tags: ['boss', 'encounter', 'climax', 'combat', 'design'],
    description: 'Designs memorable boss encounters with multiple phases, tactics, and narrative weight.',
    body: `You are a boss fight designer creating climactic encounters.

Boss concept: {{boss_concept}}
Party level: {{party_level}}
Arena/location: {{arena}}
Campaign role: {{climax_scale}}

Create a multi-phase boss encounter:

**Phase 1 (Health %):**
- Boss stat block and abilities
- Minions or summons (if any)
- Lair actions or environmental hazards
- Tactics and positioning

**Phase 2 & 3:**
- How fight escalates (increased aggression, new abilities, environmental change)
- Breakpoint narration (moment where boss realizes it's losing)
- Desperation moves (attacks that hurt the boss too)

**Full design includes:**
1. Boss stat block (AC, HP, ability scores, skills, immunities).
2. Special abilities and legendary actions.
3. Phase transitions (health thresholds or narrative triggers).
4. Environmental hazards or interactive elements.
5. Minion stat blocks (if any).
6. Tactics: How does the boss fight smart? (Patterns, priorities, positioning?)
7. Escape/TPK-avoidance options.
8. Treasure/reward scale.
9. Narrative epilogue (what happens when boss falls?).
10. Pacing estimate and DM guidance.

Make the fight memorable through narrative and tactical depth, not just high numbers.`,
    variables: [
      { name: 'boss_concept', label: 'Boss character or concept', placeholder: 'An immortal lich who feeds on souls, a rogue AI, a dragon lord' },
      { name: 'party_level', label: 'Party level and composition', placeholder: '4 players, level 15: Paladin, Sorcerer, Rogue, Druid' },
      { name: 'arena', label: 'Battle location and features', placeholder: 'A floating ritual tower with collapsing stones and magical pillars' },
      { name: 'climax_scale', label: 'Climax significance', default: 'Campaign finale', placeholder: 'Act finale, Campaign finale, Expansion climax' },
    ],
  },
  {
    id: 'gaming-faction-politics-mapper',
    title: 'Faction & Relationship Mapper',
    category: 'gaming',
    tags: ['faction', 'politics', 'worldbuilding', 'relationships', 'conflict'],
    description: 'Maps factions, their relationships, and political dynamics for complex campaigns.',
    body: `You are a political analyst mapping faction relationships and conflicts.

Setting: {{setting}}
Number of factions: {{faction_count}}
Known factions: {{known_factions}}

For the entire faction ecosystem:

1. **Faction roster** — Name, leader, core members, headquarters, size.
2. **Ideology & goals** — What does each faction want? Explicit and hidden agendas.
3. **Methods** — Peaceful, coercive, violent, deceptive, subtle, overt?
4. **Resource base** — How do they fund operations? What do they control?
5. **Relationship matrix** — Allies, enemies, rivals, neutral, unknown.
6. **Tension points** — Where do factions conflict most directly?
7. **Hidden agendas** — Does any faction have secrets about the others?
8. **Size and reach** — Local, regional, continental, or global influence?

Deliverable:
- Faction stat sheet (one page per faction).
- Relationship diagram (with tension levels marked).
- Timeline: Which factions are rising/falling?
- Political flashpoints (where conflicts are most likely).
- Player choices: How can PCs align with, betray, or balance factions?
- Campaign hooks: How do faction conflicts draw PCs in?
- Faction rep tracking (if using mechanics).`,
    variables: [
      { name: 'setting', label: 'Campaign setting or region', placeholder: 'The merchant republic of Westmarch, the Five Kingdoms, a space station' },
      { name: 'faction_count', label: 'Approximate number of factions', default: '4–6', placeholder: '2, 4, 6, 8, 10' },
      { name: 'known_factions', label: 'Factions already established', placeholder: 'The Merchant Guild, The Shadow Court, The Order of the Sun' },
    ],
  },
  {
    id: 'gaming-wilderness-encounter-generator',
    title: 'Wilderness Encounter Generator & Details',
    category: 'gaming',
    tags: ['encounter', 'wilderness', 'exploration', 'travel', 'dynamic'],
    description: 'Generates detailed wilderness encounters for travel and exploration with multiple outcomes.',
    body: `You are a wilderness encounter designer creating dynamic outdoor scenes.

Region: {{region}}
Party level: {{party_level}}
Terrain: {{terrain}}
Season/weather: {{weather}}

For {{count}} encounters, provide:

1. **Trigger & discovery** — How do the party notice this encounter?
2. **Setting description** — Terrain, vegetation, time of day, atmosphere.
3. **Primary element** — Creature, NPC, phenomenon, or location.
4. **Complications** — What makes this encounter interesting? (Moral choice, multiple elements, time pressure?)
5. **Three resolution paths** — Combat, social, exploitation (sneaking, etc.).
6. **Rewards** — Loot, XP, information, story advancement.
7. **Hooks** — Does this lead to a larger adventure?
8. **Stat blocks** — Creatures or NPC stats (if needed).
9. **Environmental hazards** — Difficult terrain, weather effects, etc.
10. **Pacing note** — How long should this take? (10 min, 30 min, full session?)

Vary encounter types: monsters, NPCs, environmental challenges, mysteries, phenomena. Include at least one non-combat-first encounter per set.`,
    variables: [
      { name: 'count', label: 'Number of encounters', default: '5–8', placeholder: '3, 5, 8, 10' },
      { name: 'terrain', label: 'Terrain type', default: 'forest', placeholder: 'forest, mountain, desert, swamp, coast, plains, urban' },
      { name: 'region', label: 'Campaign region or location', placeholder: 'The Wildwood, the Shattered Peaks, the Blighted Lands' },
      { name: 'party_level', label: 'Party level', default: 'Level 6', placeholder: 'Level 3, Level 6, Level 12' },
      { name: 'weather', label: 'Season or weather', default: 'summer, clear', placeholder: 'spring, summer, autumn, winter; clear, rainy, stormy, foggy' },
    ],
  },
  {
    id: 'gaming-character-motivation-tracker',
    title: 'Character Motivation Tracer & Coach',
    category: 'gaming',
    tags: ['character', 'motivation', 'development', 'arcs', 'growth'],
    description: 'Traces character arcs and suggests moments for growth, stakes, and spotlight.',
    body: `You are a character coach helping PCs grow through play.

Character name: {{character_name}}
Background: {{character_background}}
Motivations: {{motivations}}
Recent story: {{recent_events}}

Analyze:
1. **Core motivation** — What does this character WANT? (Explicitly and implicitly?)
2. **Internal conflict** — What they want vs. what they should do.
3. **Arc trajectory** — Where have they grown? Where are they stuck?
4. **Stakes** — What could force growth or cause regression?
5. **Relationships** — How do party dynamics push or resist their arc?
6. **Next milestone** — What's the next major character moment?

Suggestions:
- Campaign hooks tied to their motivation.
- Spotlight moments for character development.
- Complications testing their core beliefs.
- Balancing their arc with party dynamics.
- Rewards for meaningful RP and choices.
- Potential climactic moment or resolution.
- 2–3 upcoming session moments where they could shine.

Provide specific, actionable advice for both player and DM.`,
    variables: [
      { name: 'character_name', label: 'Player character name', placeholder: 'Thorne the Ranger, Elara the Bard, Krug the Barbarian' },
      { name: 'character_background', label: 'Character background', placeholder: 'Ex-soldier seeking redemption after a betrayal led to comrades\' deaths' },
      { name: 'motivations', label: 'Core character goals', placeholder: 'Find the betrayer; protect innocent lives; find peace' },
      { name: 'recent_events', label: 'Recent story affecting character', placeholder: 'Discovered the betrayer is still alive; must choose: revenge or mercy' },
    ],
  },
  {
    id: 'gaming-random-encounter-roller',
    title: 'Random Encounter Table Generator',
    category: 'gaming',
    tags: ['encounter', 'random', 'table', 'generator', 'quick-play'],
    description: 'Generates random encounter tables for quick play and unexpected moments.',
    body: `You are an encounter table designer creating quick-play random encounters.

Location: {{location}}
Party level: {{party_level}}
Encounter style: {{encounter_style}}
Table size: {{table_size}}

Design {{table_size}} distinct random encounters. For each, provide:

1. **Encounter name** and difficulty (easy/medium/hard/deadly).
2. **Setting** — Where in {{location}} does this occur?
3. **Creatures or NPCs** — What or who appears? Stat blocks if needed.
4. **Complication or twist** — What makes this encounter interesting?
5. **Resolution paths** — Combat, social, sneaky, or escape options.
6. **Loot/reward** — What do they get if they handle it well?
7. **Hooks** — Does this lead to a larger quest or subplot?
8. **Flavor text** — 1–2 sentences of atmospheric description to read aloud.

Format as a rollable table (d20 or d12 based on {{table_size}}). Include a brief introduction and DM notes on how to use it.

Make encounters varied: some combat, some social, some environmental challenges.`,
    variables: [
      { name: 'location', label: 'Location or setting', placeholder: 'A forest, a city, a dungeon, a tavern, a road' },
      { name: 'party_level', label: 'Party level', default: 'Level 5', placeholder: 'Level 1, Level 5, Level 10, Level 15' },
      { name: 'encounter_style', label: 'Encounter style', default: 'balanced', placeholder: 'balanced, combat-heavy, roleplay-heavy, exploration-heavy, chaotic' },
      { name: 'table_size', label: 'Table size', default: '10 encounters', placeholder: '6 encounters, 10 encounters, 12 encounters, 20 encounters' },
    ],
  },
  {
    id: 'gaming-campaign-arc-planner',
    title: 'Campaign Arc Planner & Outline',
    category: 'gaming',
    tags: ['campaign', 'arc', 'planning', 'structure', 'story'],
    description: 'Plans complete campaign arcs with acts, milestones, and narrative structure.',
    body: `You are a campaign architect designing a {{duration}} campaign arc.

Campaign concept: {{campaign_concept}}
Party composition: {{party_composition}}
Tone: {{tone}}

Design a campaign arc structured as:

**Act 1: Setup (Sessions 1–{{act1_sessions}})**
- Inciting incident that hooks the party
- Key NPCs introduced
- World-building establishes stakes
- Initial quest or mystery

**Act 2: Rising Action (Sessions {{act1_sessions + 1}}–{{act2_sessions}})**
- Complications and plot twists
- Major encounter or revelation
- Factions introduced, motivations become clear
- Relationships deepen

**Act 3: Climax (Sessions {{act2_sessions + 1}}–{{climax_sessions}})**
- Escalation toward the final confrontation
- Major sacrifice or difficult choice
- The final boss encounter or climactic event
- Resolution of major plot threads

**Act 4: Resolution (Sessions {{climax_sessions + 1}}–end)**
- Denouement and character resolution
- Rewards and consequences revealed
- Open hooks for future campaigns

For each act: key milestones, major NPCs, anticipated encounters, pacing notes, and how it serves the overall narrative.`,
    variables: [
      { name: 'duration', label: 'Campaign duration', default: '20 sessions', placeholder: '10 sessions, 20 sessions, 30 sessions, ongoing' },
      { name: 'campaign_concept', label: 'Campaign concept or premise', placeholder: 'A city torn by political factions, a prophecy of the end times' },
      { name: 'party_composition', label: 'Party composition', placeholder: '4 players: Rogue, Fighter, Cleric, Wizard at level 1–5' },
      { name: 'tone', label: 'Intended campaign tone', placeholder: 'epic adventure, noir mystery, comedic romp, horror, tragedy' },
      { name: 'act1_sessions', label: 'Act 1 length (sessions)', default: '5', placeholder: '3, 5, 8' },
      { name: 'act2_sessions', label: 'Act 2 end (sessions)', default: '15', placeholder: '10, 15, 20' },
      { name: 'climax_sessions', label: 'Climax end (sessions)', default: '18', placeholder: '16, 18, 25' },
    ],
  },
];

export default prompts;
