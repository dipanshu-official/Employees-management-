import React from 'react'
import Header from '../other/Header'
import TaskNumberList from '../other/TaskNumberList'
import TaskList from '../Tasklist/TaskList'
import AllTask from '../Tasklist/AllTask'

const EmployDashboard = () => {
    return (
        <div>
            <Header />
            <TaskNumberList />
            <TaskList/>
        </div>
    )
}

export default EmployDashboard