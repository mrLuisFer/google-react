import React, { useEffect, useState } from "react"
import google_logo from "../assets/Google_logo.svg"
import FeelingInDesk from "./FeelingInDesk"
import SearchBar from "./SearchBar"
import NavBar from "./NavBar"
import Footer from "./Footer"

export const HomePage: React.FC = () => {
  const [width, setWidth] = useState<Number>(0)

  useEffect(() => {
    const updateWidth = () => {}
    const width: number = document.body.clientWidth

    setWidth(width)

    updateWidth()
    window.addEventListener("resize", updateWidth)
  }, [])

  return (
    <>
      <NavBar />
      <div className="max-w-full mt-5 md:mt-24">
        <img
          src={google_logo}
          alt="google_logo"
          className="mx-auto h-12 select-none sm:h-20 md:h-24"
        />
        <SearchBar />
        <FeelingInDesk />
        {width > 800 ? <Footer /> : ""}
      </div>
    </>
  )
}
