import React from "react"
import { Link } from "react-router-dom"

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between content-center items-center text-gray-600">
      <div className="flex">
        <span className="invisible sm:visible sm:cursor-pointer hover:text-gray-800 select-none md:text-xs hover:underline">
          <Link to="/about">About</Link>
        </span>
        <span className="invisible sm:visible pl-3 sm:pl-4 md:pl-6 sm:cursor-pointer hover:text-gray-800 select-none md:text-xs hover:underline">
          <Link to="/store">Store</Link>
        </span>
      </div>
      <div className="flex">
        <p className="invisible sm:visible sm:cursor-pointer hover:text-gray-800 select-none md:text-xs hover:underline">
          <Link to="/gmail">Gmail</Link>
        </p>
        <p className="invisible sm:visible pl-4 sm:pl-5 md:pl-6 sm:cursor-pointer hover:text-gray-800 select-none md:text-xs hover:underline">
          <Link to="/images">Images</Link>
        </p>
        <i className="invisible sm:visible fab fa-buromobelexperte sm:text-2xl sm:px-4 sm:cursor-pointer md:pl-6 hover:text-gray-700 md:text-lg"></i>
        <i className="fas fa-user-circle text-3xl md:text-2xl pr-5 sm:p-0 sm:cursor-pointer md:pl-1 hover:text-gray-700"></i>
      </div>
    </div>
  )
}

export default NavBar
