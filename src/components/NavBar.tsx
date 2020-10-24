import React from "react"

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between content-center items-center text-gray-600">
      <div className="flex">
        <span className="invisible sm:visible sm:cursor-pointer">About</span>
        <span className="invisible sm:visible pl-3 sm:cursor-pointer">
          Store
        </span>
      </div>
      <div className="flex">
        <p className="invisible sm:visible sm:cursor-pointer">Gmail</p>
        <p className="invisible sm:visible pl-4 sm:cursor-pointer">Images</p>
        <i className="invisible sm:visible fab fa-buromobelexperte sm:text-2xl sm:px-4 sm:cursor-pointer"></i>
        <i className="fas fa-user-circle text-3xl pr-5 sm:p-0 sm:cursor-pointer "></i>
      </div>
    </div>
  )
}

export default NavBar
