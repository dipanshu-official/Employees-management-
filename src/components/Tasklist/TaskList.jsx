import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div className='container max-w-7xl mx-auto h-screen '>
            <div id='tasklist' className='w-full   mt-6 h-[50%] flex items-center flex-nowrap gap-5 py-5 overflow-x-auto '>
                {data.tasks.map((taskData, index) => (
                    <React.Fragment key={index}>
                        {taskData.active && <AcceptTask data={taskData}/>}
                        {taskData.completed && <CompleteTask data={taskData}/>}
                        {taskData.failed && <FailedTask  data={taskData}/>}
                        {taskData.new_task && <NewTask data={taskData}/>}
                    </React.Fragment>
                ))}





            </div>

        </div>
    )
}

export default TaskList