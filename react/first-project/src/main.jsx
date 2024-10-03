import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import ContactUs from './Components/ContactUs'
import "./assets/css/index.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    {/* <Header/> */}
    {/* <AboutUs/> */}
    {/* <ContactUs/> */}
    {/* <Footer/> */}
  </StrictMode>,
)
