import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/HomeLayouts';
import Project from '../components/General/Project';
import JacobD from '../components/OurTeam/JacobD';
import GustavoL from '../components/OurTeam/GustavoL';
import LiYang from '../components/OurTeam/LiYang';
import PascualG from '../components/OurTeam/PascualG';
import LouisL from '../components/OurTeam/LouisL';

function AppRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/projects/:id' element={<Project />} />

                <Route path="/teams/jacobd" element={<JacobD />} />
                <Route path="/teams/gustavol" element={<GustavoL />} />
                <Route path="/teams/li_yang" element={<LiYang />} />
                <Route path="/teams/pascualg" element={<PascualG />} />
                <Route path="/teams/louis_l" element={<LouisL />} />
            </Routes>
        </div>
    );
};

export default AppRoute;