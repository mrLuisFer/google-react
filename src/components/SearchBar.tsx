import React from "react"

const SearchBar: React.FC = () => {
  return (
    <div className="border-gray-400 border w-auto md:hover:border-gray-500 md:hover:shadow-lg  h-12 md:h-10 flex items-center justify-center mx-3 px-4 rounded-3xl mt-5 md:w-2/4 md:m-auto md:mt-6">
      <label htmlFor="search_input">
        <i className="fas fa-search text-gray-500 text-xl pr-2 select-none md:pr-3 md:text-lg "></i>
      </label>
      <input
        autoFocus
        type="text"
        name="search_input"
        autoComplete="off"
        autoCorrect="off"
        className="outline-none w-3/4 pr-3 text-sm md:text-base md:w-full "
      />
      <div className="w-auto flex justify-around">
        <i className="fas fa-microphone text-gray-600 pr-6 text-xl cursor-pointer select-none"></i>
        <i className="fas fa-camera text-gray-600 text-xl cursor-pointer select-none md:hidden"></i>
      </div>
    </div>
  )
}

export default SearchBar
