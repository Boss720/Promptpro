import type { Variable } from '../data/types';

const TOKEN = /\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g;

/** Every distinct {{token}} in a body, in order of first appearance. */
export function extractNames(body: string): string[] {
  const seen: string[] = [];
  for (const m of body.matchAll(TOKEN)) {
    if (!seen.includes(m[1])) seen.push(m[1]);
  }
  return seen;
}

function humanize(name: string): string {
  return name
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Builds Variable defs for bodies that did not declare them explicitly. */
export function deriveVariables(body: string): Variable[] {
  return extractNames(body).map((name) => ({ name, label: humanize(name) }));
}

/** Substitutes values into a body. Unfilled tokens are left in place. */
export function interpolate(body: string, values: Record<string, string>): string {
  return body.replace(TOKEN, (match, name: string) => {
    const v = values[name];
    return v && v.trim() ? v : match;
  });
}

/** Names still unfilled after interpolation — used to warn before copying. */
export function missingNames(body: string, values: Record<string, string>): string[] {
  return extractNames(body).filter((n) => !values[n] || !values[n].trim());
}
