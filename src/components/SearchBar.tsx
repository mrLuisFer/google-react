import React, { useState } from 'react'
import GoogleSearches from './GoogleSearches'

const SearchBar: React.FC = () => {
  const [showGoogleSearches, setShowGoogleSearches] = useState(false)
  const handleFocusInput = (event: FocusEvent | any) => {
    console.log(event)
    setShowGoogleSearches(true)
  }

  const handleOnBlurEvent = (event: FocusEvent | any) => {
    console.log(event)
    setShowGoogleSearches(false)
  }

  return (
    <div
      className={`relative flex items-center justify-center w-auto h-12 px-4 mx-3 mt-5 transition duration-150 hover:shadow-lg md:h-10 md:w-2/4 md:m-auto md:mt-6 ${
        showGoogleSearches
          ? 'rounded-none rounded-tl-3xl rounded-tr-3xl border border-b-0'
          : 'rounded-3xl border border-gray-400 md:hover:border-gray-500'
      }`}
    >
      <label htmlFor="search_input" className="flex items-center">
        <span className="material-icons-outlined pr-2 text-xl text-gray-500 cursor-pointer select-none md:pr-3 md:text-lg">
          search
        </span>
      </label>
      <input
        autoFocus
        type="text"
        name="search_input"
        id="search_input"
        autoComplete="off"
        autoCorrect="off"
        className="w-3/4 pr-3 text-sm outline-none md:text-base md:w-full"
        onFocus={(event) => handleFocusInput(event)}
        onBlur={(event) => handleOnBlurEvent(event)}
      />
      <div className="flex justify-around w-auto">
        <span
          className="material-icons-outlined pr-4 text-xl text-gray-600 hover:text-gray-700 cursor-pointer select-none"
          title="Active Voice"
        >
          mic
        </span>
        <i
          className="text-xl text-gray-600 cursor-pointer select-none fas fa-camera md:hidden"
          title="Active Camera"
        ></i>
      </div>
      {showGoogleSearches && <GoogleSearches showGoogleSearches={showGoogleSearches} />}
    </div>
  )
}

export default SearchBar
