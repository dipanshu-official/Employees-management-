import React from 'react'

const CompleteTask = () => {
  return (
    <div className="h-full bg-red-400 w-[300px] rounded-xl flex-shrink-0 p-5 text-white ">
      <div className="flex items-center justify-between ">
        <h3 className='bg-red-500 px-3 py-1 rounded text-sm '>High</h3>
        <h4 className='text-sm'>02/04/2025</h4>
      </div>
      <h2 className='text-2xl mt-5 font-semibold '>Make a youtube video</h2>

      <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident natus, ipsam eaque numquam culpa.</p>
      <div className='mt-4'>
        <button>
Complete
        </button>
      </div>
    </div>
  )
}

export default CompleteTask