import React from 'react'
import Header from '../other/Header'
import CreateTask from '../Tasklist/CreateTask'
import AllTask from '../Tasklist/AllTask'

const AdminDashboard = (props) => {
    return (
        <>


            <CreateTask newUserData={props.newUserData}/>
            <AllTask newUserData={props.newUserData}/>
        </>
    )
}

export default AdminDashboard