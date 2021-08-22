import React from "react"

type Props = {
  text: string
  url: string
}

export default function FooterLink ({text, url}: Props) {
  return (
  <p className="pr-5 cursor-pointer select-none leading-6 hover:underline">
    <a href={url} target="_blank" rel="noopener noreferrer" >{text}</a> </p>
  )
}

