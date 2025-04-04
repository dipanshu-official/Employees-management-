import React from 'react'
import Header from '../other/Header'
import TaskNumberList from '../other/TaskNumberList'
import TaskList from '../Tasklist/TaskList'

const EmployDashboard = (props) => {
    return (
        <div>
            <Header newUserData={props.newUserData} data={props.data}/>
            <TaskNumberList data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}

export default EmployDashboard