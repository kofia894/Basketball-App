import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar'
import Maincards from './components/maincards';
import Higlights from './components/highlights';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className=" flex  ">
        <Sidebar />

        <Maincards/>
      </div>

      <Higlights />
      
      
     
     
    </div>
  );
}

export default App;
