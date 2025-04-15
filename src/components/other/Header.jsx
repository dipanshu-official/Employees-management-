import { ArrowRight, CloudSnow } from 'lucide-react'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

const Header = (props) => {
    const userdata = useSelector((state => state.auth))
    console.log("🚀 ~ Header ~ userdata:", userdata)


    const logOut = () => {
        //   localStorage.setItem("loggedInUserData",'')
        localStorage.setItem("loggedInUser", '')
        props.newUserData('')
        //window.location.reload() ,   {/*page reload*/}

    }

    const adminUserName = userdata.admin.find((e) => e.name)
    console.log("🚀 ~ Header ~ adminUserName:", adminUserName.name)

    const employeeUserName = userdata.employees.find((e)=>e.name)
    console.log("🚀 ~ Header ~ employeeUserName:", employeeUserName.name)

    const userName = adminUserName?.name || employeeUserName?.name || 'guest'
    console.log("🚀 ~ Header ~ userName:", userName)
    
    return (
        <div className="container mx-auto max-w-7xl  p-6">
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-2xl">
                    Hello <br /> <span className='text-3xl font-semibold'>{userName} 👋</span>
                </h1>
                <button onClick={logOut} className="bg-[#FA8232] text-white px-6 py-2 font-bold flex items-center gap-3 tracking-wide rounded-md">
                    Logout
                    <ArrowRight />
                </button>
            </div>
        </div>

    )
}

export default Header