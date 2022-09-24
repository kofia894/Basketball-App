import React from 'react'
// import { HiHome } from "react-icons/hi2";
import { HiChartBar, HiHome,HiUser, HiUserGroup, HiOutlineUserCircle,HiMenu,HiSearch } from "react-icons/hi";


export default function sidebar (){
    return (
      
    <nav className="bg-[#16151f] w-screen">
        <div className=" flex justify-between l px-2 sm:px-6 lg:px-8 ">

          
            
            <div className=" flex h-16 items-center lg:hidden ">
                <HiMenu className="text-slate-400 text-3xl"/>
            </div>

              {/* <div className="">
            <input type="text"  id="price" className=" rounded-md  pl-7 pr-12 py-1 w-96 bg-[#363441]" placeholder="Search"></input>
            </div> */}

            <div className=" flex  h-16 items-center lg:justify-end">
                <HiSearch className="text-slate-400 text-3xl mr-10 lg:hidden "/>
                <HiOutlineUserCircle className="text-slate-400 text-3xl "/>
            </div>
        </div>

    
     
    </nav>

    )

}

