import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar'
import Maincards from './components/maincards';
import Higlights from './components/highlights';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';

/* End of pages */


function App() {
  return (
    <div className="container md:flex">

      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path={'/teams'} element={<Home />} />
        </Routes>

      </Router>

      <Navbar />
      
      {/* <div className=" flex  ">
        <Sidebar />

        <Maincards/>
      </div>

      <Higlights /> */}
      
      
     
     
    </div>
  );
}

export default App;
