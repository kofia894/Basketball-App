import React from 'react'
// import { HiHome } from "react-icons/hi2";
import { HiChartBar, HiHome,HiUser, HiUserGroup, HiOutlineUserCircle } from "react-icons/hi";


export default function sidebar (){
    return (
      
    <nav className="bg-[#16151f]">
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <p className="text-white">Ashesi Basketball Association</p>
                <input type="text"  id="price" className=" rounded-md  pl-7 pr-12 py-1 bg-[#363441]" placeholder="Search"></input>

                <HiOutlineUserCircle className="text-slate-400 text-3xl"/>
        
         
            </div>
        </div>

    
     
    </nav>

    )

}

