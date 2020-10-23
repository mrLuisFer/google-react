import React from "react"

const SearchBar: React.FC = () => {
  return (
    <div className="border-gray-400 border w-auto max-w-5xl h-12 flex items-center mx-3 px-4 rounded-3xl mt-5">
      <i className="fas fa-search text-gray-600 text-xl pr-4 select-none"></i>
      <input
        type="text"
        name="search_input"
        className="outline-none w-3/4 pr-3"
      />
      <div className="w-auto flex justify-around">
        <i className="fas fa-microphone text-gray-600 pr-8 text-xl cursor-pointer select-none"></i>
        <i className="fas fa-camera text-gray-600 text-xl cursor-pointer select-none md:hidden"></i>
      </div>
    </div>
  )
}

export default SearchBar
