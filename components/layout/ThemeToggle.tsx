'use client';

import { FiMoon, FiSun } from 'react-icons/fi';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  }

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      title="Toggle color mode"
      onClick={toggleTheme}
      className="text-accent transition-colors hover:text-foreground"
    >
      {/* Both icons render on the server; the active theme attribute decides
          which one is visible, so there is nothing to hydrate. */}
      <FiMoon className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <FiSun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  );
}
