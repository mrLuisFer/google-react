import { useEffect, useState } from 'react'

type UseSetDarkModeReturn = {
  isDarkMode: Boolean
  handleClickToggleDarkMode: any
}

export const useSetDarkMode = (): UseSetDarkModeReturn => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const body = document.body

  const handleClickToggleDarkMode = (event: any) => {
    const isChecked = event.target.checked
    setIsDarkMode(isChecked)

    if (isChecked) {
      body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  const checkTheme = (): void => {
    if (!theme) {
      localStorage.setItem('theme', 'light')
    }
    if (theme === 'dark') {
      body.classList.add('dark')
      setIsDarkMode(true)
    } else {
      body.classList.remove('dark')
      setIsDarkMode(false)
    }
  }

  useEffect(() => {
    checkTheme()
    // eslint-disable-next-line
  }, [])

  return {
    isDarkMode,
    handleClickToggleDarkMode,
  }
}
