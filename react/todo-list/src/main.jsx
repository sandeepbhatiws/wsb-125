import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './Components/Common/Header'
import Home from './Components/Home'
import Footer from './Components/Common/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Footer/>
  </StrictMode>,
)
