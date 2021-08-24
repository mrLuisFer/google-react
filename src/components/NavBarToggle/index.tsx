import React from 'react'
import { useSetDarkMode } from '../../hooks/useSetDarkMode'
import LightIcon from './LightIcon'
import DarkMode from './DarkIcon'

export default function NavBarToggle() {
  const { isDarkMode, handleClickToggleDarkMode } = useSetDarkMode()

  console.log(isDarkMode)

  return (
    <div className="px-3">
      <input
        type="checkbox"
        name="darkmode"
        id="darkmode"
        className="hidden"
        onClick={handleClickToggleDarkMode}
      />
      <label
        htmlFor="darkmode"
        className="cursor-pointer select-none flex justify-center items-center"
      >
        {isDarkMode ? <DarkMode /> : <LightIcon />}
      </label>
    </div>
  )
}
