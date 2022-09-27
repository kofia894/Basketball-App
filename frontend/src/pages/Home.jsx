import LargeCard from '../components/HomeComp/LargeCard';
import Navbar from '../components/NavbarComp/NavBar'
// import Maincards from '../components/maincards';
// import Higlights from '../components/highlights';

const Home = () => {
    return ( 
        <>
            <div className="w-full max-w-full text-white h-screen pt-16 px-5 lg:pt-5 lg:px-12 bg-[#1F1D2B]">
                    <Navbar />
                    <h2 className="text-2xl font-semibold mt-5">Home</h2>
                    <div className="mt-5 flex overflow-scroll space-x-4 hide-scroll-bar lg:space-x-12">
                        {
                            <LargeCard />
                            // homeCardsData.map((homeCard) => (
                            //     <HomeCards key={homeCard.id} name={homeCard.name} icon={homeCard.icon} color={homeCard.color} />      
                            // ))
                        }
                    </div>
               </div>
            {/* <div className="ml-4">
                    
                    <h5 className="text-white text-3xl ml-8">Home</h5>
                    <Maincards />

                    <h5 className="text-white text-2xl ml-8 mt-8">Highlights</h5>
                    <Higlights />
                    
                </div> */}
        </>
     );
}
 
export default Home;