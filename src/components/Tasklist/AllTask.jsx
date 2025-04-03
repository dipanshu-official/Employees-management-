import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const Authdata = useContext(AuthContext)
    console.log('Authdata', Authdata)
    return (
        <div className='container max-w-7xl mx-auto p-6 bg-white shadow-lg h-40 overflow-auto'>
            {Authdata.employees.map((item , index) => {
                return <div key={index} className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2>{item.name}</h2>
                    <h3>Make a UI design</h3>
                    <h5>Staus</h5>


                </div>
            })}

            

        </div>
    )
}

export default AllTask