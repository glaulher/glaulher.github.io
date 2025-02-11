import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const [colorthemeBackground, setColorthemeBackground] = useState('');

  useEffect(() => {
    if (resolvedTheme === 'light') {
      setColorthemeBackground('dark_mode');
    } else {
      setColorthemeBackground('light_mode');
    }
  }, [resolvedTheme]);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
    >
      <span className="text-slate-600 dark:text-white dark:hover:text-sky-700 hover:text-sky-300 material-symbols-outlined">
        {colorthemeBackground}
      </span>
    </button>
  );
}
