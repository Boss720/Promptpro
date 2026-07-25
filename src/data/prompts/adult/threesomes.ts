import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'threesomes-scene-generator-triangulated-attention',
    title: 'Scene Generator: Triangulated Attention',
    category: 'adult-fiction',
    subcategory: 'threesomes',
    adult: true,
    tags: ['threesome', 'pov', 'choreography', 'generator', 'sensory'],
    description: 'Generates a three-person scene that deliberately rotates focus so no character goes silent on the page.',
    body: `You are a craft-focused fiction writer. Write a {{heat_level}} scene in {{pov}} POV set in {{setting}}, featuring {{character_a}}, {{character_b}}, and {{character_c}}.

The technique being exercised: attention rotation. In group scenes the biggest failure mode is one character disappearing for paragraphs while the other two get all the sensory detail. Structure the scene in three beats, and in each beat make sure:
- Every one of the three characters gets at least one line of dialogue or interiority.
- Every one of the three characters gets at least one concrete physical action or sensory beat (touch, sound, breath, position) — not just "the others."
- Use character names or unambiguous pronouns at every position change so a reader can always answer "where is everyone's body right now."

Target length: {{word_count}} words.

Before the prose, output a one-line "attention map" listing the three beats and who is centered in each. Then write the scene. Do not let any character become furniture — give each one at least one moment of agency or choice.`,
    variables: [
      { name: 'heat_level', label: 'Heat level', default: 'suggestive, fade-to-black', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'pov', label: 'POV', default: 'third limited, following one character', placeholder: 'first person, third limited, third omniscient' },
      { name: 'setting', label: 'Setting', placeholder: 'a rented cabin after a storm knocks out power' },
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'word_count', label: 'Target word count', default: '900', placeholder: '900' },
    ],
  },
  {
    id: 'threesomes-negotiation-scene-before',
    title: 'The Conversation Before: Negotiation Scene',
    category: 'adult-fiction',
    subcategory: 'threesomes',
    adult: true,
    tags: ['threesome', 'consent', 'dialogue', 'generator', 'negotiation'],
    description: 'Generates a dialogue-driven scene where three adults negotiate boundaries before anything happens.',
    body: `Write a dialogue-forward scene in {{pov}} POV where {{character_a}}, {{character_b}}, and {{character_c}} explicitly talk through what they each want before {{setting}} turns intimate. Heat level: {{heat_level}}.

Craft focus: negotiated consent as character work, not paperwork. The conversation should reveal personality — one character might be blunt, another might deflect with humor, another might need direct reassurance — while still functionally covering:
- What each person is and isn't open to tonight.
- A check-in method they agree on (a word, a gesture, a phrase) for changing their mind mid-scene.
- At least one moment where a stated boundary shifts the plan, so the negotiation visibly has stakes rather than being a checklist.

Do not let the negotiation read as stilted legalese. It should sound like three specific adults who trust each other enough to be honest, with subtext (nerves, desire, old history between any two of them) audible underneath the practical talk.

Length: {{word_count}} words. End the scene at the moment consent is settled, before any sexual content begins.`,
    variables: [
      { name: 'pov', label: 'POV', default: 'first person', placeholder: 'first person, third limited' },
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'setting', label: 'Setting', placeholder: 'the night of their anniversary trip' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '700', placeholder: '700' },
    ],
  },
  {
    id: 'threesomes-choreography-blocking-planner',
    title: 'Choreography Planner: Blocking a Three-Body Scene',
    category: 'adult-fiction',
    subcategory: 'threesomes',
    adult: true,
    tags: ['threesome', 'choreography', 'blocking', 'planning', 'craft'],
    description: 'Plans physical positioning and transitions for a three-person scene before prose is written.',
    body: `Act as a choreography consultant for prose fiction. Before any scene is written, plan the physical blocking for a scene between {{character_a}}, {{character_b}}, and {{character_c}} in {{setting}}, at heat level {{heat_level}}.

Output a numbered blocking sheet, not prose:
1. Starting positions — where each of the three bodies is relative to the others and the room.
2. For each of 4–6 transitions, state: who moves, from where to where, what triggers the move (a line of dialogue, a look, a physical cue), and what the other two are doing simultaneously (never leave two characters in an unstated position).
3. Flag any position where two characters could plausibly be confused for each other in prose (e.g. similar names, same gender, same rough age) and suggest a tag — a distinguishing verb, a physical trait, a habit of speech — the writer should attach to each in that moment.
4. Note any transition that risks becoming a "pile of limbs" paragraph, and suggest how to break it into clearer sub-beats.

This is a planning artifact — do not write the scene itself. The output should let a writer produce a scene where a reader could sketch the room from the text alone.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'setting', label: 'Setting', placeholder: 'a narrow hotel bed' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'sensual, explicit' },
    ],
  },
  {
    id: 'threesomes-jealousy-reassurance-beat',
    title: 'Jealousy and Reassurance Beat',
    category: 'adult-fiction',
    subcategory: 'threesomes',
    adult: true,
    tags: ['threesome', 'emotional-stakes', 'generator', 'character'],
    description: 'Generates a mid-scene emotional beat where one partner feels a flicker of jealousy and is reassured without stopping the scene cold.',
    body: `Write a scene in {{pov}} POV, heat level {{heat_level}}, set in {{setting}}, involving {{character_a}}, {{character_b}}, and {{character_c}}, that includes one specific emotional beat: {{character_a}} feels a flicker of jealousy or insecurity watching {{character_b}} and {{character_c}} together, and it gets acknowledged and addressed within the scene.

Craft focus: emotional realism inside group intimacy. Three-ways are not conflict-free by default, and pretending otherwise flattens the characters. Requirements:
- Root the jealousy in something specific to {{character_a}}'s history or insecurity, not a generic "feeling left out."
- Show it in the body first (a held breath, a stilled hand, a too-careful tone) before any character names it aloud.
- Have it addressed through action and brief dialogue from whichever partner notices — a gesture that includes {{character_a}} again, a check-in question, a moment of eye contact — without turning into a therapy session that kills the scene's momentum.
- End the beat with the scene able to continue, having shifted the emotional temperature rather than resetting to nothing happened.

Length: {{word_count}} words.`,
    variables: [
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'setting', label: 'Setting', placeholder: 'their shared apartment, a year into the arrangement' },
      { name: 'character_a', label: 'Character A (feels the flicker)', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'word_count', label: 'Target word count', default: '600', placeholder: '600' },
    ],
  },
  {
    id: 'threesomes-continuation-shifting-pov',
    title: 'Continuation: Shift the POV Mid-Scene',
    category: 'adult-fiction',
    subcategory: 'threesomes',
    adult: true,
    tags: ['threesome', 'pov', 'continuation', 'craft'],
    description: 'Continues an in-progress scene by deliberately handing narration to a different one of the three characters.',
    body: `Below is an in-progress scene involving three characters ({{character_a}}, {{character_b}}, {{character_c}}) at {{setting}}, heat level {{heat_level}}. Continue it for {{word_count}} more words, but shift the POV to center {{character_c}} — whoever has been least central so far — for this continuation.

--- SCENE SO FAR ---
{{scene_so_far}}
--- END ---

Craft focus: earning a POV handoff in a multi-partner scene. Rules for the continuation:
- Open with a clear, non-jarring signal of the POV shift (a section break, a new paragraph anchored firmly in {{character_c}}'s sensory experience) — the reader should never have to reread to figure out whose head we're in.
- {{character_c}}'s interiority should reveal something the previous POV could not have shown — a thought, a physical sensation, or a read on the other two that only they would have.
- Keep continuity: do not contradict established positions, dialogue, or emotional beats from the scene so far.
- Maintain {{pov}} narrative distance (first or third) consistent with the original, just reassign whose consciousness it follows.`,
    variables: [
      { name: 'scene_so_far', label: 'Existing scene text', placeholder: 'Paste the in-progress scene here' },
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C (new POV)', placeholder: 'Dev' },
      { name: 'setting', label: 'Setting', placeholder: 'a narrow hotel bed' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit', placeholder: 'sensual, explicit' },
      { name: 'pov', label: 'POV distance', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'word_count', label: 'Target word count', default: '500', placeholder: '500' },
    ],
  },
  {
    id: 'threesomes-revision-critique-body-tracking',
    title: 'Revision Critique: Body-Tracking Pass',
    category: 'adult-fiction',
    subcategory: 'threesomes',
    adult: true,
    tags: ['threesome', 'revision', 'critique', 'editing'],
    description: 'Critiques a draft three-person scene specifically for whether every body stays trackable on the page.',
    body: `Act as a developmental editor specializing in multi-character intimate scenes. Read the draft scene below, involving {{character_a}}, {{character_b}}, and {{character_c}} in {{setting}}, and run a body-tracking pass.

--- DRAFT ---
{{draft_text}}
--- END ---

For each paragraph, silently determine where all three characters' bodies are. Then report only the problems, as a numbered list, each entry giving:
1. The paragraph or line (quote the shortest identifying fragment).
2. The specific tracking failure — e.g. a pronoun with two possible antecedents, a character who vanishes for multiple paragraphs, an action attributed to "they" that needs a name, a physically impossible position given what was just established.
3. A concrete one-line fix (not a rewritten paragraph, just the correction to make).

Do not comment on prose style, heat level, or content appropriateness — this pass is scoped only to spatial and attributional clarity. If a paragraph has no tracking problems, skip it; do not list clean paragraphs. End with a one-sentence overall verdict on whether a reader could draw an accurate diagram of the scene from the text.`,
    variables: [
      { name: 'draft_text', label: 'Draft scene to critique', placeholder: 'Paste the draft scene here' },
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'setting', label: 'Setting', placeholder: 'a narrow hotel bed' },
    ],
  },
  {
    id: 'threesomes-dialogue-exercise-three-voices',
    title: 'Dialogue Exercise: Three Distinct Voices Under Heat',
    category: 'adult-fiction',
    subcategory: 'threesomes',
    adult: true,
    tags: ['threesome', 'dialogue', 'voice', 'exercise'],
    description: 'Drills writing three characters whose dialogue stays distinguishable without dialogue tags.',
    body: `Write a dialogue-only exercise (no action lines, no narration, just spoken lines each on its own line prefixed with the speaker's name in brackets for reference only) between {{character_a}}, {{character_b}}, and {{character_c}} during {{setting}}, heat level {{heat_level}}.

Craft focus: voice differentiation under emotional/physical intensity, where writers most often let every character start sounding the same. Constraints:
- Give each character a distinct verbal signature established in the first two lines they speak: sentence length, favorite filler or interjection, how directly they ask for what they want, how they tease or deflect.
- Write {{word_count}} words total of dialogue covering the arc from banter to increasing heat to one character calling a brief pause (for a laugh, a repositioning, a check-in) and the scene resuming.
- After the dialogue, add a short "voice key" (2–3 lines) explaining the specific verbal tell you gave each character, so the technique is visible and reusable.

Do not include narration or physical description in the dialogue block itself — the exercise is testing whether voice alone can carry character distinction.`,
    variables: [
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'setting', label: 'Setting', placeholder: 'getting undressed with the lights still on' },
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'sensual, explicit' },
      { name: 'word_count', label: 'Target word count', default: '400', placeholder: '400' },
    ],
  },
  {
    id: 'threesomes-scene-generator-uneven-desire',
    title: 'Scene Generator: Uneven Desire, Even Attention',
    category: 'adult-fiction',
    subcategory: 'threesomes',
    adult: true,
    tags: ['threesome', 'generator', 'dynamics', 'craft'],
    description: 'Generates a scene where one pairing has more established chemistry, testing how to keep the third character fully present.',
    body: `Write a {{heat_level}} scene in {{pov}} POV set in {{setting}}. {{character_a}} and {{character_b}} have an established dynamic and easy chemistry; {{character_c}} is newer to the three of them and slightly less certain of their footing.

Craft focus: avoiding the "third wheel" failure mode. The scene must not let {{character_c}} become a passive observer or prop for the established pair. Requirements:
- Give {{character_c}} at least two moments of initiating action or directing the scene, not just responding.
- Have {{character_a}} or {{character_b}} do something small and specific — a word, a look, a shared joke extended outward — that visibly folds {{character_c}} in rather than around them.
- Let {{character_c}}'s uncertainty show honestly in interiority or dialogue at the start, and let it visibly ease by the end, tracked through a concrete change (posture, boldness of a line, a laugh) rather than a stated summary like "they relaxed."

Length: {{word_count}} words. Write in {{pov}} POV.`,
    variables: [
      { name: 'heat_level', label: 'Heat level', default: 'sensual', placeholder: 'fade-to-black, sensual, explicit' },
      { name: 'pov', label: 'POV', default: 'third limited, centered on character_c', placeholder: 'first person, third limited' },
      { name: 'setting', label: 'Setting', placeholder: 'the three of them alone for the first time' },
      { name: 'character_a', label: 'Character A (established pair)', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B (established pair)', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C (newer)', placeholder: 'Dev' },
      { name: 'word_count', label: 'Target word count', default: '900', placeholder: '900' },
    ],
  },
  {
    id: 'threesomes-aftercare-scene-generator',
    title: 'Aftercare Scene: Three-Way Wind-Down',
    category: 'adult-fiction',
    subcategory: 'threesomes',
    adult: true,
    tags: ['threesome', 'aftercare', 'generator', 'emotional-stakes'],
    description: 'Generates a post-scene aftercare beat that checks in with all three characters individually.',
    body: `Write an aftercare scene in {{pov}} POV, set immediately after an intimate scene between {{character_a}}, {{character_b}}, and {{character_c}} in {{setting}}. Heat level of any remaining physical content: {{heat_level}} (this should be gentler and less charged than the scene that preceded it).

Craft focus: aftercare as individual, not generic. A common flaw is writing one group "everyone's happy" paragraph that treats all three characters the same. Instead:
- Give each of the three characters a distinct physical or verbal check-in — what they need right now (water, quiet, a specific reassurance, humor to cut tension) should differ from the other two.
- Include one small logistical or emotional loose end from earlier in the encounter (a boundary that was tested, a nerve that flared, a joke that needs finishing) that gets resolved here.
- End on a concrete image of the three of them settled — not a summary sentence about how they felt, but what the room looks like now.

Length: {{word_count}} words.`,
    variables: [
      { name: 'pov', label: 'POV', default: 'third limited', placeholder: 'first person, third limited' },
      { name: 'character_a', label: 'Character A', placeholder: 'Priya' },
      { name: 'character_b', label: 'Character B', placeholder: 'Marcus' },
      { name: 'character_c', label: 'Character C', placeholder: 'Dev' },
      { name: 'setting', label: 'Setting', placeholder: 'the bedroom, well after midnight' },
      { name: 'heat_level', label: 'Heat level', default: 'fade-to-black', placeholder: 'fade-to-black, sensual' },
      { name: 'word_count', label: 'Target word count', default: '500', placeholder: '500' },
    ],
  },
];

export default prompts;
