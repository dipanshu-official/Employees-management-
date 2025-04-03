import React from 'react'
import Header from '../other/Header'
import TaskNumberList from '../other/TaskNumberList'
import TaskList from '../Tasklist/TaskList'
import AllTask from '../Tasklist/AllTask'

const EmployDashboard = ({data}) => {
    console.log(data);
    return (
        <div>
            <Header data={data}/>
            <TaskNumberList data={data}/>
            <TaskList data={data}/>
        </div>
    )
}

export default EmployDashboard