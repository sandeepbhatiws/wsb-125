import React, { useState } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import '../assets/css/about.css'
import courseImage from '../assets/images/3.jpg'

export default function AboutUs() {

  let [status,setStatus] = useState(true);

  return (
    <>

    { status ? <Header/> : '' }

    
    <div className ="row rowcolor">
      About Us
    </div>

    <div style={{ display : `${ (status) ? 'block' : 'none' }` }}>
      About Us Content
    </div>
    <img src={ courseImage } width='200' height='200' />

    
    <Footer/>
    </>
  )
}
