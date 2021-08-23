import React from 'react'
import { searchesList, TSearchesList } from './searchesList'

export default function GoogleSearches() {
  return (
    <section className="absolute bg-white z-10 w-full h-40 rounded-2xl border-gray-200 border-2 shadow-sm top-9 flex flex-col">
      {searchesList?.map((singleSearch: TSearchesList) => (
        <div
          key={singleSearch.text}
          className="flex items-center gap-x-4 group text-sm hover:bg-gray-100 py-2 px-4 cursor-pointer"
        >
          <i className="fas fa-history text-gray-700 group-hover:text-gray-900 transition-colors transition duration-150"></i>
          <a
            href={singleSearch.url}
            target="_parent"
            rel="noreferer"
            className="text-purple-800 group-hover:text-purple-900 transition-colors transition-duration-150"
          >
            {singleSearch.text}
          </a>
        </div>
      ))}
    </section>
  )
}
