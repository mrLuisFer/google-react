import React from "react"

const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 bg-gray-100 w-full left-0 border-t-2 text-gray-700 text-xs px-5">
      <p className="leading-8 cursor-text select-none">Some Country</p>
      <hr />
      <div className="flex py-2 items-center content-center justify-between">
        <div className="flex">
          <p className="pr-5 leading-6 cursor-pointer select-none hover:underline">
            Advertising
          </p>
          <p className="pr-5 leading-6 cursor-pointer select-none hover:underline">
            Business
          </p>
          <p className="pr-5 leading-6 cursor-pointer select-none hover:underline">
            About Google
          </p>
          <p className="pr-5 leading-6 cursor-pointer select-none hover:underline">
            How Search works
          </p>
        </div>
        <div className="flex">
          <p className="pl-5 leading-6 cursor-pointer select-none hover:underline">
            Privacy
          </p>
          <p className="pl-5 leading-6 cursor-pointer select-none hover:underline">
            Terms
          </p>
          <p className="pl-5 leading-6 cursor-pointer select-none hover:underline">
            References
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
