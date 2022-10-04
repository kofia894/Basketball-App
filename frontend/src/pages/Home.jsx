import LargeCard from '../components/HomeComp/LargeCard';
import Highlights from '../components/HomeComp/Highlights';
import Navbar from '../components/NavbarComp/NavBar'
// import Maincards from '../components/maincards';
// import Higlights from '../components/highlights';

const Home = () => {
    return ( 
        <>
            <div className="w-full max-w-full text-white h-screen pt-16 px-5 lg:pt-5 lg:px-12 bg-[#1F1D2B]">
                    <Navbar />
                    <h2 className="text-2xl font-semibold mt-5">Home</h2>
                        <div className="flex  mt-5 shrink-0 overflow-scroll space-x-4 lg:space-x-12 scrollbar-hide">
                            <LargeCard />
                            {
                                
                                
                                // homeCardsData.map((homeCard) => (
                                //     <HomeCards key={homeCard.id} name={homeCard.name} icon={homeCard.icon} color={homeCard.color} />      
                                // ))
                            }
                        </div>

                    <h2 className="text-xl font-semibold mt-10">Highlights</h2>
                    <div className="md:flex flex-shrink-0 mt-5 ">
                        <Highlights />
                        <Highlights />
                        <Highlights /> 
                       
                        
                        
                       
                    </div>
            </div>
            {/* 
                    
                   

                    <h5 className="text-white text-2xl ml-8 mt-8">Highlights</h5>
                    <Higlights />
                    
                */}
        </>
     );
}
 
export default Home;