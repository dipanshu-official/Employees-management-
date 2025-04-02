import React from 'react'
import Header from '../other/Header'

const CreateTask = () => {
    return (
        <div className=''>
            <Header />
            <div className='container max-w-7xl mx-auto p-6 pt-0 bg-white shadow-lg rounded-2xl'>
                <form className=' flex w-full flex-wrap items-start justify-between'>
                    <div className='w-1/2'>

                        <div>
                            <h3 className='text-lg font-semibold text-gray-700'>Task Title</h3>
                            <input
                                type='text'
                                placeholder='Make a UI design'
                                className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                            />
                        </div>

                        <div>
                            <h3 className='text-lg font-semibold text-gray-700'>Date</h3>
                            <input
                                type='date'
                                className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                            />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold text-gray-700'>Assign to</h3>
                            <input
                                type='text'
                                placeholder='Employee name'
                                className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                            />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold text-gray-700'>Category</h3>
                            <input
                                type='text'
                                placeholder='Design, Dev, etc'
                                className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                            />
                        </div>
                    </div>
                    <div className='w1/2'>
                        <h3 className='text-lg font-semibold text-gray-700'>Description</h3>
                        <textarea
                            className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                            rows='4'
                        ></textarea>
                        <button
                            className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold'
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default CreateTask