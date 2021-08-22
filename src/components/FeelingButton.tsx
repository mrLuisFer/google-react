import React from 'react'

export default function FeelingButton({ text }: { text: string }) {
  return (
    <h1 className="px-6 py-2 text-base text-gray-800 bg-gray-100 rounded-md sm:hover:border-gray-500 shadow-sm hover:shadow-lg sm:hover:border-2 transition-shadow duration-150">
      {text}
    </h1>
  )
}
