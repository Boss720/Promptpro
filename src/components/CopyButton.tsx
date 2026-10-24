import { useState } from 'react';
import { copyText } from '../lib/clipboard';

type Props = {
  text: string;
  label?: string;
  /** 'solid' is the primary action; 'ghost' matches the bordered secondary buttons. */
  variant?: 'solid' | 'ghost';
  disabled?: boolean;
  className?: string;
};

const SOLID = 'rounded-md bg-[var(--color-accent)] px-3 py-1.5 text-sm font-medium text-black disabled:opacity-40';
const GHOST = 'rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm disabled:opacity-40';

/** Copy button that reports both success and failure instead of swallowing it. */
export default function CopyButton({ text, label = 'Copy', variant = 'solid', disabled, className }: Props) {
  const [state, setState] = useState<'idle' | 'done' | 'failed'>('idle');

  async function run() {
    const ok = await copyText(text);
    setState(ok ? 'done' : 'failed');
    setTimeout(() => setState('idle'), ok ? 1200 : 2500);
  }

  return (
    <button
      onClick={run}
      disabled={disabled}
      className={`${variant === 'solid' ? SOLID : GHOST} ${className ?? ''}`}
    >
      {state === 'done' ? 'Copied' : state === 'failed' ? 'Copy failed' : label}
    </button>
  );
}
