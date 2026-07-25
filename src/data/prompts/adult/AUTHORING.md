# Adult section — authoring rules

Everything in this directory is gated behind an explicit adult toggle and is excluded from the
bundle aggregate, the search index, and the sidebar when the gate is off.

These are **writing-craft prompts for adult fiction**. They instruct a model on how to write a
scene: pacing, tension, POV, sensory specificity, character voice, dialogue, consent framing,
emotional stakes, and revision.

## Hard boundaries — non-negotiable

- All characters are **adults (18+)**. Never write a prompt that involves, implies, or leaves
  ambiguous the age of a minor. No "barely legal", no school-student framing, no age-play framing
  that reads as minors.
- **No real people.** No public figures, celebrities, or identifiable private individuals.
- **No non-consent as endorsement.** Dubcon/consent-play as a fictional device must be framed as
  negotiated fiction between adult characters, with the prompt making the fictional frame explicit.
- No incest, no bestiality, no content sexualising minors in any form.
- Prompts request *fiction*. They never request instructions for real-world harm.

## Style rules

- Each prompt teaches craft, not just "write smut". Name the technique it is exercising.
- Prefer `{{variables}}` so the user supplies their own characters, setting, and heat level.
  Common ones: `{{character_a}}`, `{{character_b}}`, `{{setting}}`, `{{heat_level}}`, `{{pov}}`,
  `{{word_count}}`.
- Include a `heat_level` variable where sensible so one prompt serves fade-to-black through explicit.
- Descriptions are plain and non-titillating — they describe what the prompt does.
- `adult: true` and a `subcategory` id are required on every prompt in this directory.
