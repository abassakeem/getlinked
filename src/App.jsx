import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Register from './pages/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <LandingPage/> */}
     {/* <Contact/> */}
     <Register/>
    </>
  )
}

export default App
