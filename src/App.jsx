import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarSection from './components/NavbarSection';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <NavbarSection/>
      <Routes>
      
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
