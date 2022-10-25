import Navbar from '../components/NavbarComp/NavBar'
import Filter from '../components/PlayersComp/Filter'
import PlayerTable from '../components/PlayersComp/PlayerTable'


const Players = () => {
     return ( 
          <>
               <div className="w-full max-w-full text-white min-h-screen pt-16 pb-5 px-5 lg:pt-5 lg:px-12 bg-[#1F1D2B]">
                    <Navbar />
                   
                    <div className=" space-y-6 ">
                         <div className="flex">

                          <h2 className="text-2xl font-semibold mt-5 text-white">Players</h2>
                         
                         </div>
                         
                         <Filter />
                    </div>

                    <div className="table mt-10">
                         <PlayerTable />
                    </div>
               </div>
          </>
          
      );
}
 
export default Players;