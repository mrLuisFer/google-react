import React from "react"

export default function FeelingButton({text}: {text: string}) {
  return (
    <h1 className="px-6 py-2 text-base text-gray-800 bg-gray-100 rounded-md sm:hover:border-gray-500 hover:shadow-md sm:hover:border-2 transition-shadow">
    {text}
    </h1>
  )
}

