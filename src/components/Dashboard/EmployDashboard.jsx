import React from 'react'
import Header from '../other/Header'
import TaskNumberList from '../other/TaskNumberList'
import TaskList from '../Tasklist/TaskList'

const EmployDashboard = ({data}) => {
    return (
        <div>
            <Header data={data}/>
            <TaskNumberList data={data}/>
            <TaskList data={data}/>
        </div>
    )
}

export default EmployDashboard