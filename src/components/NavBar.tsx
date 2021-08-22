import React from "react"
import { Link } from "react-router-dom"

const NavBar: React.FC = () => {
  return (
    <div className="flex items-center content-center justify-between text-gray-600">
      <div className="flex">
        <span className="visible ml-4 select-none md:ml-0 sm:cursor-pointer hover:text-gray-800 md:text-xs hover:underline">
          <Link to="/about">About</Link>
        </span>
        <span className="invisible pl-3 select-none sm:visible sm:pl-4 md:pl-6 sm:cursor-pointer hover:text-gray-800 md:text-xs hover:underline">
          <a
            href="https://chrome.google.com/webstore/category/extensions?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store
          </a>
        </span>
      </div>
      <div className="flex">
        <p className="invisible select-none sm:visible sm:cursor-pointer hover:text-gray-800 md:text-xs hover:underline">
          <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
            Gmail
          </a>
        </p>
        <p className="invisible pl-4 select-none sm:visible sm:pl-5 md:pl-6 sm:cursor-pointer hover:text-gray-800 md:text-xs hover:underline">
          <a href="https://photos.google.com/" target="_blank" rel="noopener noreferrer">
            Images
          </a>
        </p>
        <i className="invisible sm:visible fab fa-buromobelexperte sm:text-2xl sm:px-4 sm:cursor-pointer md:pl-6 hover:text-gray-700 md:text-2xl"></i>
        <i className="pr-5 text-3xl fas fa-user-circle md:text-2xl sm:p-0 sm:cursor-pointer md:pl-1 hover:text-gray-700"></i>
      </div>
    </div>
  )
}

export default NavBar
