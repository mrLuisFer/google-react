import React from "react"

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-auto h-12 px-4 mx-3 mt-5 border border-gray-400 transition duration-150 md:hover:border-gray-500 hover:shadow-lg md:h-10 rounded-3xl md:w-2/4 md:m-auto md:mt-6">
      <label htmlFor="search_input">
        <i className="pr-2 text-xl text-gray-500 select-none fas fa-search md:pr-3 md:text-lg "></i>
      </label>
      <input
        autoFocus
        type="text"
        name="search_input"
        autoComplete="off"
        autoCorrect="off"
        className="w-3/4 pr-3 text-sm outline-none md:text-base md:w-full "
      />
      <div className="flex justify-around w-auto">
        <i className="pr-6 text-xl text-gray-600 cursor-pointer select-none fas fa-microphone"></i>
        <i className="text-xl text-gray-600 cursor-pointer select-none fas fa-camera md:hidden"></i>
      </div>
    </div>
  )
}

export default SearchBar
