import React from 'react'
import google_logo from "../assets/Google_logo.svg"
import FeelingInDesk from "./FeelingInDesk"
import SearchBar from "./SearchBar"
import NavBar from "./NavBar"
import Footer from "./Footer"

export const HomePage: React.FC = () => {

  return (
    <>
      <NavBar />
      <div className="max-w-full mt-5 md:mt-24">
        <img
          src={google_logo}
          alt="google_logo"
          draggable="false"
          className="h-12 mx-auto select-none sm:h-20 md:h-24"
        />
        <SearchBar />
        <FeelingInDesk />
        <Footer />
      </div>
    </>
  )
}
