import Navbar from '../components/NavbarComp/NavBar';
import Filter from '../components/PlayersComp/Filter';
import PlayerTable from '../components/PlayersComp/PlayerTable';
import data from "../data/players.json";


const Players = () => {

     // console.log(data);

     return ( 
          <>
               <div className="w-full max-w-full text-white min-h-screen pt-16 pb-5 px-5 lg:pt-5 lg:px-12 bg-[#1F1D2B]">
                    <Navbar />
                   
                    <div className="space-y-6 ">
                         <h2 className="flex text-2xl font-semibold mt-5 text-white">Players</h2>
                         <Filter />
                    </div>

                    <div className="mt-10 rounded-lg">
                         <PlayerTable players={data} />
                    </div>
               </div>
          </>
          
      );
}
 
export default Players;