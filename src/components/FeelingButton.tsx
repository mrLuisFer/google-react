import React from 'react'

export default function FeelingButton({ text }: { text: string }) {
  return (
    <h1 className="px-6 py-2 text-base text-gray-800 bg-gray-100 border-gray-100 rounded-md hover:border-gray-200 shadow-sm hover:shadow-md border-2 transition-shadow duration-150 select-none cursor-pointer">
      {text}
    </h1>
  )
}
