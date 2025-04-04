import React, { useContext, useState } from 'react'
import Header from '../other/Header'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = (props) => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [date, setDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [Category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})
    const [userdata, setUserdata] = useContext(AuthContext)


    const submitHandler = (e) => {
        e.preventDefault()

        let newTaskData = {
            taskTitle,
            taskDescription,
            date,
            Category,
            faield: false,
            completed: false,
            new_task: true
        }

        let updatedData = { ...userdata } // create shallow copy

        updatedData.employees = updatedData.employees.map((emp) => {
            if (emp.name === asignTo) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, newTaskData]
                }
            }
            return emp
        })

        setUserdata(updatedData)
        localStorage.setItem("userData", JSON.stringify(updatedData)) // only if you’re using localStorage

        // Clear form fields
        setTaskTitle("")
        setTaskDescription("")
        setDate("")
        setAsignTo("")
        setCategory("")
    }
    return (

        <div className=''>
            <Header newUserData={props.newUserData} />
            <div className='container max-w-7xl mx-auto p-6 pt-0 bg-white shadow-lg rounded-2xl'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className=' flex w-full flex-wrap items-start justify-between'>
                    <div className='w-1/2'>

                        <div>
                            <h3 className='text-lg font-semibold text-gray-700'>Task Title</h3>
                            <input
                                type='text'
                                value={taskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)

                                }}
                                placeholder='Make a UI design'
                                className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                            />
                        </div>

                        <div>
                            <h3 className='text-lg font-semibold text-gray-700'>Date</h3>
                            <input
                                type='date'
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value)

                                }}
                                className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                            />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold text-gray-700'>Assign to</h3>
                            <input
                                type='text'
                                value={asignTo}
                                onChange={(e) => {
                                    setAsignTo(e.target.value)

                                }}
                                placeholder='employees name'
                                className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                            />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold text-gray-700'>Category</h3>
                            <input
                                type='text'
                                value={Category}
                                onChange={(e) => {
                                    setCategory(e.target.value)

                                }}
                                placeholder='Design, Dev, etc'
                                className='w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                            />
                        </div>
                    </div>
                    <div className='w1/2'>
                        <h3 className='text-lg font-semibold text-gray-700'>Description</h3>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)

                            }}

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