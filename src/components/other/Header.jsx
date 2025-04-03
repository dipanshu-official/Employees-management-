import { ArrowRight } from 'lucide-react'
import React from 'react'

const Header = ({data}) => {
    console.log(data.name);
    const logOut =() => {
      localStorage.setItem("IsLoggedIn",false)
      window.location.reload()
    }
    return (
        <div className="container mx-auto max-w-7xl  p-6">
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-2xl">
                    Hello <br /> <span className='text-3xl font-semibold'> {data.name} 👋</span>
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