import { Routes, Route} from 'react-router-dom';
import Navbar from './Componentes/Navbar';

import Home from './pages/Home';
import Abauts from './pages/Abauts';
import Contact from './pages/Contact';
import Galery from './pages/Galery';
import Room from './pages/Room';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
