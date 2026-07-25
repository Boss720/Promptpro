# Prompt Library

A local prompt library, template filler, and LLM-backed prompt enhancer. Runs entirely in the
browser — no backend, no telemetry, no account.

## Run it

```bash
pnpm install
pnpm dev
```

Then open http://localhost:5173.

## What's in it

- **Library** — ~540 prompts across 17 categories. Fuzzy search over title, tags, description and
  body; filter by category and subcategory; favorite anything.
- **Templates** — any prompt containing `{{variables}}` renders a fill-in form with a live preview.
  Copy the filled version or the raw template.
- **Enhancer** — paste a rough prompt, pick a mode (Improve, Make specific, Add structure, Convert
  to system prompt, Add examples, Shorten, Critique only), get a streamed rewrite. Save the result
  into My Prompts.
- **My Prompts** — create, edit, delete your own. Stored in localStorage. Export/import as JSON.

## Provider setup

Settings → pick a preset (Anthropic, OpenAI, OpenRouter, nano-gpt.com, Ollama) or enter a base URL
manually, then paste your API key and hit **Test connection**.

Two API shapes are supported and cover almost everything: Anthropic's `/v1/messages` and the
OpenAI-compatible `/v1/chat/completions`.

Your key lives in this browser's localStorage and is sent only to the base URL you configured. It is
never written into the project and never committed. This is a local-only tool — do not deploy it
somewhere public with a key configured.

## Adult content

The Adult Fiction section is **off by default**. While the gate is closed, those prompts are not
merged into the library, not indexed for search, and not listed in the sidebar — the toggle is in
Settings and requires confirming you are 18 or older.

That section holds writing-craft prompts for explicit fiction: pacing, tension, POV, sensory
specificity, dialogue, consent framing, and revision, across 30 subcategories. All characters are
adults; the full authoring boundaries are in `src/data/prompts/adult/AUTHORING.md`.

## Adding prompts

Prompt data lives in `src/data/prompts/*.ts`, one file per category, each exporting a
`Prompt[]` default. See `src/data/prompts/CONTRIBUTING.md` for the shape and the quality bar.
Variables are derived automatically from `{{tokens}}` when a file doesn't declare them.

## Layout

```
src/
  data/
    types.ts          Prompt / Category / Variable types
    categories.ts     category + adult subcategory registry
    meta-prompts.ts   the enhancer's modes
    index.ts          gate-aware aggregator
    prompts/          the library itself
  lib/
    variables.ts      {{token}} parse / interpolate
    llm.ts            streaming client, both API shapes
  pages/              Library, Enhancer, MyPrompts, Settings
  store.ts            zustand + localStorage persistence
```
