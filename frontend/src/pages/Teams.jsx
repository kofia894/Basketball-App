import Navbar from '../components/NavbarComp/NavBar'

const Teams = () => {
     return ( 
          <>
               <div className="w-full max-w-full text-white h-screen pt-16 px-5 lg:pt-5 lg:px-12 bg-[#1F1D2B]">
                    <Navbar />
                    <h2 className="text-2xl font-semibold mt-5 mb-3">All Teams</h2>
                    <hr></hr>
                    <div className="mt-5 overflow-y-auto md:columns-3 space-y-5 ">
                       <div className="flex space-x-5 items-center">
                         <div className="rounded-full h-20 w-20  bg-white"> 
                         </div>
                         <p className="text-lg">Milwuake Bucks</p>
                       </div>

                       <div className="flex space-x-5 items-center">
                         <div className="rounded-full h-20 w-20  bg-white"> 
                         </div>
                         <p className="text-lg">Milwuake Bucks</p>
                       </div>

                       <div className="flex space-x-5 items-center">
                         <div className="rounded-full h-20 w-20  bg-white"> 
                         </div>
                         <p className="text-lg">Milwuake Bucks</p>
                       </div>

                       <div className="flex space-x-5 items-center">
                         <div className="rounded-full h-20 w-20  bg-white"> 
                         </div>
                         <p className="text-lg">Milwuake Bucks</p>
                       </div>

                       <div className="flex space-x-5 items-center">
                         <div className="rounded-full h-20 w-20  bg-white"> 
                         </div>
                         <p className="text-lg">Milwuake Bucks</p>
                       </div>

                       <div className="flex space-x-5 items-center">
                         <div className="rounded-full h-20 w-20  bg-white"> 
                         </div>
                         <p className="text-lg">Milwuake Bucks</p>
                       </div>
                         
                    </div>
               </div>
          </>
          
      );
}
 
export default Teams;