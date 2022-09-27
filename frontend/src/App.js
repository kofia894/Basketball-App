import './App.css';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import Teams from './pages/Teams';
import Players from './pages/Players';
import PlayerDetails from './pages/PlayerDetails';
/* End of pages */

/* Sidebar component */
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="lg:flex bg-[#232035]"> 

      <Router>
        <Sidebar />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path={'/teams'} element={<Teams />} />
          <Route path={'/players'} element={<Players />} />
          <Route path={'/players/:id'} element={<PlayerDetails />} />
          <Route path={'/players'} element={<Players />} />
        </Routes>

      </Router>

      
     
    </div>
  );
}

export default App;
