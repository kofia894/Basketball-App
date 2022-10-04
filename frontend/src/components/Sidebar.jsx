
import { HomeIcon, UserGroupIcon, CalendarDaysIcon, PresentationChartBarIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoIosBasketball } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

     const sidebarMenu = [
          { id:1, name: "Home", icon: HomeIcon, path: '/' },
          { id:2, name: "Players", icon: UserIcon, path: '/Players'  },
          { id:3, name: "Teams", icon: UserGroupIcon, path: '/Teams' },
          { id:4, name: "Standings", icon: PresentationChartBarIcon, path: '/Standings' },
          { id:5, name: "Calendar", icon: CalendarDaysIcon, path: '/Calendar' },
     ];

     const [showSidebar, setShowSidebar] = useState(false);

     const displayHandler = () => {
          setShowSidebar(!showSidebar);
          console.log(showSidebar);
     }


     return ( 
          <>
               <div className="lg:flex lg:flex-col text-white lg:justify-start bg-[#1F1D2B]  lg:min-h-screen lg:w-[20%]">

                    <div className="lg:hidden w-full py-4 pl-5 fixed bg-[#232035] flex items-center">
                         <button onClick={displayHandler}>
                              {showSidebar && 
                                   <XMarkIcon  className="w-8"/>
                              }
                              {!showSidebar &&
                                   <Bars3Icon  className="w-8"/>
                              }
                              
                         </button>
                         <div className="mx-[20%] flex items-center space-x-3">
                              <IoIosBasketball className="w-6" size={24} />
                              <h2 className="text-lg font-medium">Baller Mania</h2>
                         </div>
                         
                    </div> 

                    {/* <Sidebar content /> */}
                    <div className={`top-16 lg:top-0 lg:pt-0 pt-5 left-0 w-72 fixed h-full z-40 lg:h-auto lg:mt-1 bg-[#232035] lg:bg-transparent lg:px-0 px-7 lg:translate-x-0 ease-in duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                         {/* Logo */}
                         <div className="lg:flex hidden py-2 m-5 mb-10 flex-shrink">
                              <div className="flex items-center space-x-4 w-auto">
                                   <IoIosBasketball className="w-10" size={24} />
                                   <h2 className="text-xl font-semibold">BallerMania</h2>
                              </div>
                         </div>
                         {/* End of logo */}
                         <ul> 
                         {
                              sidebarMenu.map((menuItem) => (
                                   <Link key={menuItem.id} to={menuItem.path} onClick={displayHandler} className="hover:text-[#0ba8d3]">
                                        <li  className="flex items-center space-x-5 text-md lg:text-sm lg:ml-5 mb-5">
                                             
                                             <div className="menu-btn p-2">
                                                  {<menuItem.icon className="w-6" />}
                                                  
                                             </div>
                                             <p>{menuItem.name}</p>
                                        
                                        </li>
                                   </Link>      
                              ))
                         }
                         </ul>  
                    </div>
                    {/* End of sidebar content */}

                    {/* <div className={`top-16 left-0 w-64 bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "-translate-x-full"}`}>
                         
                    </div> */}

                    
               </div>
          </>
      );
}
 
export default Sidebar;