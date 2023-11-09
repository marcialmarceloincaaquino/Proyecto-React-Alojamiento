import { Routes, Route} from 'react-router-dom';
import Navbar from './Componentes/Navegar';

import Home from './pages/Home';
import Abauts from './pages/Abauts';
import Familiar from './pages/Familiar';
import Contact from './pages/Contact';
import Matrimonial from './pages/Matrimonial';
import Simple from './pages/Simple';

import './App.css'

function App() {
  return (
    <>
   
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abauts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="Familiar" element={<Familiar />} />
        <Route path="Matrimonial" element={<Matrimonial />} />
        <Route path="simple" element={<Simple />} />
    </Routes>
    </>
    
  )
}
export default App
