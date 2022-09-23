import React from 'react'
// import { HiHome } from "react-icons/hi2";
import { HiCalendar, HiChartBar, HiHome,HiUser, HiUserGroup } from "react-icons/hi";


export default function sidebar (){
    return (
        <div className="bg-[#16151f] w-1/6 h-screen  rounded-lg text-base">
            <ul className=" flex flex-col space-y-12 p-10" >

                <div className="flex items-center space-x-4 rounded-lg ">
                    <HiHome className=" backdrop-blur-sm text-slate-400"/> 
                    <li className="text-slate-300">Home</li> 
                </div>

                <div className="flex items-center space-x-4 ">
                    <HiUser className="text-slate-400"/> 
                    <li className="text-slate-300">Players</li> 
                </div>

                <div className="flex items-center space-x-4 ">
                    <HiUserGroup className="text-slate-400"/> 
                    <li className="text-slate-300">Teams</li> 
                </div>

                <div className="flex items-center space-x-4 ">
                    <HiChartBar className="text-slate-400"/> 
                    <li className="text-slate-300">Standings</li> 
                </div>

                <div className="flex items-center space-x-4 ">
                    <HiCalendar className="text-slate-400"/> 
                    <li className="text-slate-300">Calendar</li> 
                </div>

            </ul> 
        </div>
    )

}


