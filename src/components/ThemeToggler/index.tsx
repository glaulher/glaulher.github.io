import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()
  const [colorthemeBackground, setColorthemeBackground] = useState('')

  useEffect(() => {
    resolvedTheme === 'light'
      ? setColorthemeBackground('dark_mode')
      : setColorthemeBackground('light_mode')
  }, [resolvedTheme])

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      <span className="hover:text-sky-700 material-symbols-outlined">
        {colorthemeBackground}
      </span>
    </button>
  )
}
