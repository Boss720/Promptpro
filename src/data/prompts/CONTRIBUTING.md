# Authoring prompt data files

Every file in this directory (and `adult/`) exports a single default array of `Prompt` objects.

## File shape

```ts
import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'coding-regex-builder',
    title: 'Regex Builder & Explainer',
    category: 'coding',
    tags: ['regex', 'debugging', 'reference'],
    description: 'Builds a regular expression from a plain-English spec and explains each token.',
    body: `You are a regular-expression expert working in the {{flavor}} flavor.

Task: build a regex that matches {{requirement}}.

Return, in this order:
1. The expression on its own line in a code block.
2. A token-by-token table explaining each part.
3. Three strings it matches and three near-misses it rejects, with one line on why.
4. Any catastrophic-backtracking risk, or "none".

Do not simplify the requirement. If it is ambiguous, state the ambiguity and pick the stricter reading.`,
    variables: [
      { name: 'flavor', label: 'Regex flavor', default: 'PCRE', placeholder: 'PCRE, JS, Python re, Go' },
      { name: 'requirement', label: 'What it must match', placeholder: 'ISO-8601 dates with optional timezone' },
    ],
  },
];

export default prompts;
```

## Rules

- **`id`** — globally unique, kebab-case, prefixed with the category or subcategory slug.
  Collisions break the build, so keep the prefix.
- **`category`** — exactly the category id given to you. Never invent one.
- **`body`** — a template literal. It is the actual prompt text sent to a model. Escape any
  backticks and `${`. Use `{{variable}}` placeholders liberally.
- **`variables`** — declare one entry for every `{{placeholder}}` in the body, in order of
  appearance. Give a `default` when there is a sensible one.
- **`tags`** — 3–6 lowercase tags. Reuse existing tag words across files where they fit.
- **`description`** — one sentence, under 120 chars, says what the prompt does.

## Quality bar

These are meant to be genuinely better than what a user would type themselves. Each prompt should:

- Assign a clear role and a clear task.
- State the **output format** explicitly (sections, table, JSON, word count).
- Include constraints and anti-patterns ("do not", "if X is missing, ask").
- Be 80–400 words. Rich enough to be worth saving; not a wall of filler.
- Be genuinely distinct from its siblings in the same file — different technique or use case,
  not the same prompt reworded.

Vary prompt shapes across a file: generators, critics/reviewers, rewriters, interviewers that ask
the user questions first, structured-output extractors, and step-by-step coaches.
