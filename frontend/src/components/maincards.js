import React from 'react'

// import { HiHome } from "react-icons/hi2";



export default function maincards (){
    return (
      
  <div className="flex overflow-x-auto scrollbar-hide w-screen">

    <div className="flex-shrink-0 bg-gradient-to-tr from-[#f09376] to-[#ed3248] w-9/12 h-80  ml-6 mt-8 rounded-lg justify-center ;">
    
        <div className="flex-shrink-0 ml-20 mt-10 grayscale overflow-hidden">
        
          <img className="object-cover h-full w-full ml-14  " src="/img/pg13trans2.png" />
        </div>
    </div>

    <div className="flex-shrink-0 bg-gradient-to-tr from-[#bccf88] to-[#b2ec10] w-9/12 h-80  ml-6 mt-8 rounded-lg justify-center ;">
    <div className="flex-shrink-0 ml-20 mt-14 grayscale overflow-hidden">
          <img className="object-cover h-full w-full ml-14  " src="/img/giannistrans.png" />
        </div>
    </div>

    <div className="flex-shrink-0 bg-gradient-to-tr from-[#694695] to-[#BE5E69] w-9/12 h-80  ml-6 mt-8 rounded-lg justify-center ;">
        
    </div>

 

  </div>

    )

}

