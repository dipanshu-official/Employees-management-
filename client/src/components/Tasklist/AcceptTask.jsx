import React from 'react'

const AcceptTask = ({data}) => {
    console.log('AcceptTask',data)
    return (
        <div className="h-full bg-green-400 w-[300px] rounded-xl flex-shrink-0 p-5 text-white ">
            <div className="flex items-center justify-between ">
                <h3 className='bg-red-500 px-3 py-1 rounded text-sm '>{data?.category}</h3>
                <h4 className='text-sm'>{data?.task_date}</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold '>{data?.task_title}</h2>

            <p className='text-sm mt-2'>{data?.task_description}</p>
           <div className='mt-4'>
            <button>
                {data?.active && 'Active Task ' }
            </button>
            </div>
        </div>
    )
}

export default AcceptTask