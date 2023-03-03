import { useEffect, useState } from 'react'

type Mode = 'light' | 'dark'

interface ThemeData {
  mode: Mode
  changeTheme: (theme: Mode) => void
}

export const useTheme = (): ThemeData => {
  const [mode, setMode] = useState<Mode>('dark')

  const changeTheme = (theme: Mode) => {
    setMode(theme)
  }

  useEffect(() => {
    const themeLS = localStorage.getItem('@theme')
    if (themeLS) {
      setMode(themeLS as Mode)
    }
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  useEffect(() => {
    localStorage.setItem('@theme', mode)
  }, [mode])

  return { mode, changeTheme }
}
