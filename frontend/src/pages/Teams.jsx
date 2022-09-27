import Navbar from '../components/NavbarComp/NavBar'

const Teams = () => {
     return ( 
          <>
               <div className="w-full max-w-full text-white h-screen pt-16 px-5 lg:pt-5 lg:px-12 bg-[#1F1D2B]">
                    <Navbar />
                    <h2 className="text-2xl font-semibold mt-5">Teams</h2>
                    <div className="mt-5 flex overflow-scroll space-x-4 hide-scroll-bar lg:space-x-12">
                         
                    </div>
               </div>
          </>
          
      );
}
 
export default Teams;