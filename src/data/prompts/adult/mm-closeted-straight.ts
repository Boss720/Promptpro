import type { Prompt } from '../../types';

const prompts: Prompt[] = [
  {
    id: 'mm-closeted-straight-denial-pov-scene',
    title: 'Internal-Denial POV Scene Generator',
    category: 'adult-fiction',
    subcategory: 'mm-closeted-straight',
    adult: true,
    tags: ['pov', 'internal-conflict', 'tension', 'mm', 'scene'],
    description: 'Writes a scene from inside the head of a nominally straight, closeted character rationalizing his attraction.',
    body: `Write a scene of about {{word_count}} words in {{pov}} POV, from inside {{character_a}}'s head — a man who identifies as straight and is closeted, even to himself — during a moment of escalating physical closeness with {{character_b}} in {{setting}}. Both are adults.

Craft focus: internal contradiction. {{character_a}}'s narration should keep offering himself non-sexual explanations for what's happening (it's just a joke, it's just the alcohol, it's just what guys do) even as the reader can see the explanations thinning. Let his internal voice get shorter and more fragmented as denial gets harder to maintain. Do not have him "realize" or announce his attraction outright — the scene ends at the edge of admission, not past it.

Heat level: {{heat_level}}. Make {{character_b}}'s intentions and consent legible through action and dialogue even though we're locked in {{character_a}}'s head.`,
    variables: [
      { name: 'word_count', label: 'Word count', default: '900' },
      { name: 'pov', label: 'POV', default: 'first person' },
      { name: 'character_a', label: 'Closeted character' },
      { name: 'character_b', label: 'Other character' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
    ],
  },
  {
    id: 'mm-closeted-straight-first-encounter-explicit',
    title: 'First Encounter, Explicit — Crossing the Line',
    category: 'adult-fiction',
    subcategory: 'mm-closeted-straight',
    adult: true,
    tags: ['scene', 'consent', 'emotional-stakes', 'mm', 'first-time'],
    description: 'Writes the explicit first sexual encounter between an out character and a closeted one, consent-forward.',
    body: `Write a scene, roughly {{word_count}} words, in which {{character_a}} (out) and {{character_b}} (closeted, has never acted on attraction to men before) — both consenting adults — cross into sex for the first time, in {{setting}}.

Craft requirements:
1. Before escalation, include a clear, in-scene moment where {{character_b}} explicitly says or unambiguously signals he wants this, and {{character_a}} checks in rather than assuming. Write it in voice, not as a checklist.
2. Track {{character_b}}'s internal conflict alongside physical sensation — give him at least one line of interiority where wanting this and his self-image collide, without turning it into a lecture.
3. Heat level: {{heat_level}}, written consistently throughout.
4. POV: {{pov}}.

End on a moment that is honest about what just changed for {{character_b}}, without resolving his identity questions neatly — this is one scene, not a coming-out arc.`,
    variables: [
      { name: 'character_a', label: 'Out character' },
      { name: 'character_b', label: 'Closeted character' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '1200' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'pov', label: 'POV', default: 'third limited' },
    ],
  },
  {
    id: 'mm-closeted-straight-continue-scene',
    title: 'Continue My Scene, Matching Voice',
    category: 'adult-fiction',
    subcategory: 'mm-closeted-straight',
    adult: true,
    tags: ['continuation', 'voice', 'pacing', 'mm'],
    description: 'Continues a pasted-in scene involving a closeted character while preserving his internal conflict and voice.',
    body: `You are continuing a piece of fiction already in progress, featuring {{character_a}} (closeted) and {{character_b}}, both adults, in {{setting}}.

--- EXISTING TEXT ---
{{existing_text}}
--- END EXISTING TEXT ---

Before writing, silently note: POV, tense, sentence rhythm, and how {{character_a}}'s internal conflict has been characterized so far — do not soften or resolve it faster than the existing text has earned.

Continue for approximately {{word_count}} more words at heat level {{heat_level}}, preserving voice, tense, and the specific texture of {{character_a}}'s denial or self-negotiation established already. Escalate the scene rather than restating what's already happened; do not re-introduce characters or setting.`,
    variables: [
      { name: 'existing_text', label: 'Existing text to continue' },
      { name: 'character_a', label: 'Closeted character' },
      { name: 'character_b', label: 'Other character' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Additional word count', default: '600' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
    ],
  },
  {
    id: 'mm-closeted-straight-revision-critique',
    title: 'Critique Pass: Is the Denial Believable?',
    category: 'adult-fiction',
    subcategory: 'mm-closeted-straight',
    adult: true,
    tags: ['revision', 'critique', 'characterization', 'mm'],
    description: 'Critiques whether a draft scene\'s portrayal of a closeted character\'s internal conflict reads as earned rather than caricature.',
    body: `You are a developmental editor. Below is a draft scene featuring {{character_a}}, a closeted character, and {{character_b}}.

--- DRAFT ---
{{draft_text}}
--- END DRAFT ---

Step 1 — Critique (5-8 bullets), specifically assessing:
- Does {{character_a}}'s internal conflict read as psychologically real, or as a caricature/trope?
- Is the pacing of his self-negotiation earned by what's on the page, or does it jump too fast?
- Is {{character_b}}'s consent-seeking behavior clear without breaking the scene's tension?
- Any place dialogue tells us what internal narration should be showing, or vice versa.

Step 2 — Revised excerpt: rewrite the single weakest 150-250 word span, at heat level {{heat_level}}, demonstrating the fix.

Step 3 — One sentence on the top priority for a full pass.`,
    variables: [
      { name: 'character_a', label: 'Closeted character' },
      { name: 'character_b', label: 'Other character' },
      { name: 'draft_text', label: 'Draft scene text' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
    ],
  },
  {
    id: 'mm-closeted-straight-chemistry-builder',
    title: 'Chemistry Builder: Five Charged Exchanges',
    category: 'adult-fiction',
    subcategory: 'mm-closeted-straight',
    adult: true,
    tags: ['chemistry', 'dialogue', 'characterization', 'mm'],
    description: 'Generates five short exchanges building tension between an out character and a closeted one.',
    body: `You are building tension between {{character_a}} (out) and {{character_b}} (closeted, presents as straight) for a longer work set in {{setting}}.

Generate five short, self-contained exchanges (dialogue plus minimal action beats, 60-120 words each), each using a different technique:

1. {{character_b}} deflects a moment of closeness with a joke or a change of subject, and {{character_a}} lets it go without pushing.
2. A moment where {{character_b}} does something small and telling that contradicts his stated disinterest (lingers, notices, remembers a detail he "shouldn't").
3. Physical proximity forced by circumstance, where {{character_b}}'s discomfort is really about himself, not {{character_a}}.
4. A conversation where {{character_a}} makes space for {{character_b}} without labeling anything or pressuring him.
5. A near-admission from {{character_b}} that he retreats from mid-sentence.

Label each exchange with its technique and keep both voices consistent.`,
    variables: [
      { name: 'character_a', label: 'Out character' },
      { name: 'character_b', label: 'Closeted character' },
      { name: 'setting', label: 'Setting / story context' },
    ],
  },
  {
    id: 'mm-closeted-straight-dialogue-only-morning-after',
    title: 'Dialogue-Only Morning-After Exercise',
    category: 'adult-fiction',
    subcategory: 'mm-closeted-straight',
    adult: true,
    tags: ['dialogue', 'exercise', 'characterization', 'mm', 'aftermath'],
    description: 'Writes a dialogue-only morning-after conversation where a closeted character reckons with what happened.',
    body: `Write a dialogue-only exchange (no narration, no action beats — "Name: line" format only) between {{character_a}} (closeted) and {{character_b}}, the morning after intimacy, in {{setting}}.

Constraints:
- Roughly {{word_count}} words total, pure dialogue.
- {{character_a}} should oscillate visibly between wanting to minimize what happened and not being able to fully do so — show this through hedging, contradiction, or subject-changing rather than stating it.
- {{character_b}} should neither pressure {{character_a}} to label himself nor pretend nothing happened — give him a grounded, patient register.
- Include one line that references the intimacy honestly without recapping it physically.
- End with the relationship's next step genuinely unresolved — no tidy label, no rejection either.`,
    variables: [
      { name: 'character_a', label: 'Closeted character' },
      { name: 'character_b', label: 'Other character' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '400' },
    ],
  },
  {
    id: 'mm-closeted-straight-drunk-consent-scene',
    title: 'Alcohol-Present Scene With Explicit Sober Consent Check',
    category: 'adult-fiction',
    subcategory: 'mm-closeted-straight',
    adult: true,
    tags: ['consent', 'scene', 'dialogue', 'mm'],
    description: 'Writes a scene where alcohol lowers inhibition, structured so consent is explicitly confirmed while sober enough to matter.',
    body: `Write a scene of about {{word_count}} words where {{character_a}} (closeted) and {{character_b}} have been drinking in {{setting}}, and tension between them comes to a head. Both are adults.

Non-negotiable structure: before anything physical happens, write a beat where {{character_a}}'s state of mind is explicitly established as coherent and capable of consenting (not blackout, not slurring, tracking the conversation clearly) — and {{character_b}} names the elephant in the room out loud and gets a clear, undrunk "yes" in {{character_a}}'s own words before continuing. This beat should feel like a real conversation, not a legal disclaimer.

After that, proceed to heat level {{heat_level}}, POV {{pov}}, letting {{character_a}}'s closeted-ness show through hesitation and self-consciousness rather than incapacity. If at any point his clarity is in doubt, {{character_b}} should pause the scene rather than continue — write that as the responsible outcome if it arises.`,
    variables: [
      { name: 'character_a', label: 'Closeted character' },
      { name: 'character_b', label: 'Other character' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '1000' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'pov', label: 'POV', default: 'third limited' },
    ],
  },
  {
    id: 'mm-closeted-straight-jealousy-catalyst',
    title: 'Jealousy-as-Catalyst Scene',
    category: 'adult-fiction',
    subcategory: 'mm-closeted-straight',
    adult: true,
    tags: ['emotional-stakes', 'scene', 'conflict', 'mm'],
    description: 'A closeted character\'s jealousy over the other character forces a confrontation he can\'t rationalize away.',
    body: `Write a scene of roughly {{word_count}} words in which {{character_a}} (closeted) reacts with unexpected, out-of-character jealousy or possessiveness when {{character_b}} shows interest in someone else (invent a plausible trigger fitting {{setting}}) — and has to confront what that jealousy means.

Craft focus: {{character_a}}'s jealousy should read as involuntary and alarming to him — show it through behavior (a sharper tone than he intends, an excuse to intervene he can't quite justify to himself) before he or the narration names it as jealousy. The confrontation with {{character_b}} that follows should force at least a partial, reluctant admission — not a full coming-out, just enough truth that he can't take it back.

Heat level: {{heat_level}}. POV: {{pov}}. If the scene turns physical, make consent from both characters clearly mutual despite the charged, unresolved emotional tone.`,
    variables: [
      { name: 'character_a', label: 'Closeted character' },
      { name: 'character_b', label: 'Other character' },
      { name: 'setting', label: 'Setting' },
      { name: 'word_count', label: 'Word count', default: '900' },
      { name: 'heat_level', label: 'Heat level', default: 'suggestive' },
      { name: 'pov', label: 'POV', default: 'third limited' },
    ],
  },
  {
    id: 'mm-closeted-straight-outline-interview',
    title: 'Scene Architect: Interview Then Outline',
    category: 'adult-fiction',
    subcategory: 'mm-closeted-straight',
    adult: true,
    tags: ['outline', 'interviewer', 'structure', 'mm', 'planning'],
    description: 'Asks clarifying questions about a closeted character\'s arc before producing a beat-by-beat scene outline.',
    body: `You are a fiction outlining assistant. I want to write a scene between {{character_a}} (closeted) and {{character_b}} in {{setting}}, heat level {{heat_level}}, but haven't fully planned it.

Step 1: Ask me up to five targeted questions before outlining — cover at minimum: how far along {{character_a}} is in acknowledging his attraction, what he stands to lose or fear by acting on it, what {{character_b}} already knows or suspects, and any hard limits or must-include beats. Skip questions you can reasonably infer from what I've already given.

Step 2: Once I answer (or say "just proceed with reasonable assumptions"), produce a beat-by-beat outline (8-12 beats) for a scene of approximately {{word_count}} words, marking which beats are internal-conflict turns versus physical escalation, and noting POV ({{pov}}) if it shifts.

Do not write prose yet — outline only, until I approve it.`,
    variables: [
      { name: 'character_a', label: 'Closeted character' },
      { name: 'character_b', label: 'Other character' },
      { name: 'setting', label: 'Setting' },
      { name: 'heat_level', label: 'Heat level', default: 'explicit' },
      { name: 'word_count', label: 'Target word count', default: '1500' },
      { name: 'pov', label: 'POV', default: 'third limited' },
    ],
  },
];

export default prompts;
