import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userdata, setUserdata] = useContext(AuthContext)


    return (

        <div className='container max-w-7xl mx-auto p-6 bg-white shadow-lg h-60 '>

            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded sticky text-white'>
                <h2 className='w-1/5 '>Employee Name</h2>
                <h3 className='w-1/5 '>New Task</h3>
                <h5 className='w-1/5 '>Active Task</h5>
                <h5 className='w-1/5 '>Completed</h5>
                <h5 className='w-1/5 '>Faield</h5>



            </div>
            <div className='mt-4'>
                {userdata.employees.map((item, index) => {
                    return <div key={index} className='border border-blue-300 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='w-1/5 '>{item.name}</h2>
                        <h3 className='w-1/5 text-blue-600'>{item.task_show.new_task}</h3>

                        <h5 className='w-1/5 text-yellow-400'>{item.task_show.active}</h5>
                        <h5 className='w-1/5 text-green-400 '>{item.task_show.completed}</h5>
                        <h5 className='w-1/5 text-red-400'>{item.task_show.failed}</h5>

                    </div>
                })}
            </div>



        </div>
    )
}

export default AllTask