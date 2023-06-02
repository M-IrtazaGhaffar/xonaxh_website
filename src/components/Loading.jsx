import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
        <progress className="progress w-56"></progress>
        <h3 className="text-sm">Please wait</h3>
    </div>
  )
}

export default Loading