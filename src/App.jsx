import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LandingPage from './pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LandingPage/>
    </>
  )
}

export default App
