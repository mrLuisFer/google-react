import React from 'react'
import FeelingButton from './FeelingButton'

const FeelingInDesk: React.FC = () => {
  return (
    <div className="flex justify-center w-full mt-8 justify-items-center gap-x-4">
      <FeelingButton text="Find with Google" />
      <FeelingButton text="I feel lucky" />
    </div>
  )
}

export default FeelingInDesk
