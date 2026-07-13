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
      className="theme-toggle-switch"
    >
      <FiSun className="theme-toggle-icon theme-toggle-icon-light" aria-hidden="true" />
      <FiMoon className="theme-toggle-icon theme-toggle-icon-dark" aria-hidden="true" />
      <span className="theme-toggle-knob" aria-hidden="true" />
    </button>
  );
}
