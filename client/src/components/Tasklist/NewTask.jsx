import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className="h-full bg-red-400 w-[300px] rounded-xl flex-shrink-0 p-5 text-white ">
            <div className="flex items-center justify-between ">
                <h3 className='bg-red-500 px-3 py-1 rounded text-sm '>{data?.category}</h3>
                <h4 className='text-sm'>{data?.task_date}</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold '>{data?.task_title}</h2>

            <p className='text-sm mt-2'>{data?.task_description}</p>
            <div className='flex justify-between mt-10'>
                <button className='bg-green-500 py-1 px-2 text-sm  '>{data?.new_task == true ? 'Mark as Completed ':null }</button>
                <button className='bg-red-500 py-1 px-2 text-sm  '>{data?.new_task == true ? 'Mark as Faield ':null }</button>
            </div>
        </div>
    )
}

export default NewTask