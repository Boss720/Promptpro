import type { Prompt } from './types';
import { deriveVariables } from '../lib/variables';

import writing from './prompts/writing';
import marketing from './prompts/marketing';
import coding from './prompts/coding';
import devops from './prompts/devops';
import data from './prompts/data';
import business from './prompts/business';
import research from './prompts/research';
import education from './prompts/education';
import productivity from './prompts/productivity';
import career from './prompts/career';
import roleplay from './prompts/roleplay';
import systemPersonas from './prompts/system-personas';
import imageVideo from './prompts/image-video';
import gaming from './prompts/gaming';
import legalFinance from './prompts/legal-finance';
import healthFitness from './prompts/health-fitness';
import { ADULT_PROMPTS } from './prompts/adult';

/** Fills in `variables` from the body wherever a file did not declare them. */
function normalize(prompts: Prompt[]): Prompt[] {
  return prompts.map((p) => ({
    ...p,
    variables: p.variables?.length ? p.variables : deriveVariables(p.body),
  }));
}

export const SAFE_PROMPTS: Prompt[] = normalize([
  ...writing,
  ...marketing,
  ...coding,
  ...devops,
  ...data,
  ...business,
  ...research,
  ...education,
  ...productivity,
  ...career,
  ...roleplay,
  ...systemPersonas,
  ...imageVideo,
  ...gaming,
  ...legalFinance,
  ...healthFitness,
]);

export const GATED_PROMPTS: Prompt[] = normalize(ADULT_PROMPTS);

/**
 * The library the rest of the app sees. Adult prompts are only ever merged in
 * when the gate is unlocked — they never reach the search index otherwise.
 */
export function getPrompts(adultUnlocked: boolean): Prompt[] {
  return adultUnlocked ? [...SAFE_PROMPTS, ...GATED_PROMPTS] : SAFE_PROMPTS;
}

if (import.meta.env.DEV) {
  const seen = new Set<string>();
  const dupes = [...SAFE_PROMPTS, ...GATED_PROMPTS]
    .map((p) => p.id)
    .filter((id) => (seen.has(id) ? true : (seen.add(id), false)));
  if (dupes.length) {
    // Duplicate ids silently break favorites and the detail panel, so surface
    // them the moment a prompt file is added.
    console.warn('Duplicate prompt ids:', [...new Set(dupes)]);
  }
}
