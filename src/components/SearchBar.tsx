import React from "react"

const SearchBar: React.FC = () => {
  return (
    <div className="border-gray-400 border w-auto max-w-5xl h-12 flex items-center mx-3 px-4 rounded-3xl mt-5">
      <label htmlFor="search_input">
        <i className="fas fa-search text-gray-600 text-xl pr-2 select-none"></i>
      </label>
      <input
        type="text"
        name="search_input"
        className="outline-none w-3/4 pr-3 text-sm md:text-base"
      />
      <div className="w-auto flex justify-around">
        <i className="fas fa-microphone text-gray-600 pr-6 text-xl cursor-pointer select-none"></i>
        <i className="fas fa-camera text-gray-600 text-xl cursor-pointer select-none md:hidden"></i>
      </div>
    </div>
  )
}

export default SearchBar
