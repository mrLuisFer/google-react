import React, { useEffect, useState } from "react"
import google_logo from "../assets/Google_logo.svg"
import FeelingInDesk from "./FeelingInDesk"
import SearchBar from "./SearchBar"
import WeatherInMobile from "./WeatherInMobile"

const HomePage: React.FC = () => {
  const [width, setWidth] = useState<Number>(0)

  useEffect(() => {
    const updateWidth = () => {}
    const width: number = document.body.clientWidth

    setWidth(width)

    updateWidth()
    window.addEventListener("resize", updateWidth)
  }, [])

  return (
    <div className="max-w-full mt-5">
      <img
        src={google_logo}
        alt="google_logo"
        className="mx-auto h-12 select-none"
      />
      <SearchBar />
      {width < 600 ? <WeatherInMobile /> : <FeelingInDesk />}
    </div>
  )
}

export default HomePage
