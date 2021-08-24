import React from 'react'
import google_logo from '../assets/Google_logo.svg'
import FeelingInDesk from './FeelingInDesk'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
import Footer from './Footer'

export const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-full mt-5 md:mt-20">
        <img
          src={google_logo}
          alt="google_logo"
          draggable="false"
          className="h-12 mx-auto select-none sm:h-20 md:h-24 select-none"
          title="Google"
        />
        <SearchBar />
        <FeelingInDesk />
        <Footer />
      </div>
    </>
  )
}
