import { Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Home from './pages/home';
import Event from './pages/event';
import Gallery from './pages/gallery';
import Competitions from './pages/competitions'
import CompetitionDetail from './pages/competition_detail'
import Sponsors from './pages/sponsors'
import Team from './pages/team';
import Contact from './pages/contact';

import Footer from './common/footer';
import ScrollTop from './common/scrollTop';




function App() {
  return(
    
    <div>
      <Navbar/>
      <ScrollTop/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/event" element={<Event/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/competitions" element={<Competitions/>} />
        <Route path="/competitions/:id" element={<CompetitionDetail/>} />

        <Route path="/sponsors" element={<Sponsors/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/contact" element={<Contact/>} />
  
      </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
