import Navbar from '../components/navbar'
import Maincards from '../components/maincards';
import Higlights from '../components/highlights';

const Home = () => {
    return ( 
        <>
            <div className="container w-screen">
                <Navbar />

                <div className="container ml-20 ">
                    
                <h5 className="text-white text-3xl ml-8 ">Home</h5>
                <Maincards />

                <h5 className="text-white text-2xl ml-8 mt-8">Highlights</h5>
                <Higlights />
                
                </div>

                
            </div>
        </>
     );
}
 
export default Home;