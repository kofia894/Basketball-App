import React from 'react'
import { HiHome } from "react-icons/hi2";

export default function navbar (){
    return (
        <div> 
            <div className=" container px-24 py-24 ">
                <img className='logo' />

                <ul className=" flex flex-col space-y-12  " >

                    <div className="flex justify-between  ">
                        <HiHome /> 
                        <li>Home</li> 
                    </div>

                    <li>Teams</li>
                    <li>Players</li>
                    <li>Games</li>
                </ul>
            </div>

        </div>
    )

}

