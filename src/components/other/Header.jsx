import { ArrowRight, CloudSnow } from 'lucide-react'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Header = (props) => {
    const [userdata, setUserdata] = useContext(AuthContext) 

    const logOut = () => {
        //   localStorage.setItem("loggedInUserData",'')
        localStorage.setItem("loggedInUser", '')
        props.newUserData('')
        //window.location.reload() ,   {/*page reload*/}
        
    }

    const adminUserName = userdata.admin.find((e)=>e.name)
    
    


    

   
    return (
        <div className="container mx-auto max-w-7xl  p-6">
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-2xl">
                    Hello <br /> <span className='text-3xl font-semibold'>{userdata.admin.name} 👋</span>
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