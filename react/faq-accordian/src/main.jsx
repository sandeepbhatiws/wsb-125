import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Footer/>
  </StrictMode>,
)
