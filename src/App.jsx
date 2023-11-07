import { Routes, Route} from 'react-router-dom';
import Navbar from './Componentes/Navegar';

import Home from './pages/Home';
import Abauts from './pages/Abauts';
import Contact from './pages/Contact';
import Galery from './pages/Galery';
import Room from './pages/Room';


import './App.css'

function App() {
  return (
    <>
   
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abauts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/room" element={<Room />} />
      
    </Routes>
    </>
    
  )
}
export default App
