import React from 'react'

// import { HiHome } from "react-icons/hi2";



export default function highlights (){
    return (
      
    <div className=" lg:flex lg:justify-between container lg:ml-6 mt-5 w-9/12  overflow-y-auto lg:overflow-y-hidden scrollbar-hide ">
        
        <div className="container mb-5 px-4">
            <div className="container rounded-t-xl ">
                <img className =" rounded-t-xl object-cover h-36 w-full"src="/img/bball.jpg" />
            </div>
            <div className=" bg-[#252836] rounded-b-xl  h-24">
                <p className= "text-center text-white">Details</p>
            </div>
        </div>

        <div className="container mb-5 px-4">
            <div className="container rounded-t-xl ">
            <img className =" rounded-t-xl object-cover h-36 w-full"src="/img/bball.jpg" />
            </div>
            <div className=" bg-[#252836] rounded-b-xl  h-24 ;">
                <p className= "text-center text-white">Details</p>
            </div>
        </div>

        <div className="container mb-5 px-4">
            <div className="container rounded-t-xl ">
            <img className =" rounded-t-xl object-cover h-36 w-full"src="/img/bball.jpg" />
            </div>
            <div className=" bg-[#252836] rounded-b-xl  h-24 ;">
                <p className= "text-center text-white">Details</p>
            </div>
        </div>
    </div>
    )

}
