export type Variable = {
  name: string;
  label: string;
  placeholder?: string;
  default?: string;
};

export type Prompt = {
  /** Globally unique, kebab-case, prefixed with the file slug. e.g. "coding-regex-builder" */
  id: string;
  title: string;
  category: string;
  /** Only used by the adult section today, but valid anywhere. */
  subcategory?: string;
  tags: string[];
  description: string;
  /** The prompt itself. May contain {{variable}} placeholders. */
  body: string;
  /** Optional; when omitted, variables are derived from {{...}} in body. */
  variables?: Variable[];
  models?: string[];
  adult?: boolean;
  source?: string;
};

export type Category = {
  id: string;
  label: string;
  description: string;
  icon: string;
  adult?: boolean;
  subcategories?: Subcategory[];
};

export type Subcategory = {
  id: string;
  label: string;
  description: string;
};
