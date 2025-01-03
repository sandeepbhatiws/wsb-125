'use client'
import React, { useState } from 'react'
import ".././globals.css";
import Address from './address'
import Menu from './menu';
import Header from '../pages/Common/Header';


export default function page() {

  const [selectedAddress, setSelectedAddress] = useState('');

  const handleRadioChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <>
    <Header/>
    <div className='container-fluid bg-black py-2 mb-3'>
        <div>
          <span className='offer-title'>Buy 3+ items, get an extra 15% off*</span>
          <span className='offer-subtitle'>Automatically applied at checkout</span>
        </div>
    </div>



    <div className='container-fluid '>

      <div className='row pb-5'>

        <div className='col-lg-3'>
       <Menu/>
        </div>

        <div className='col-lg-9'>
          <Address/>

          <div className='shipping'>
      <div className='d-flex p-2 border-bottom'>
        <input
          type='radio'
          name='address'
          value='address1'
          checked={selectedAddress === 'address1'}
          onChange={handleRadioChange}
        />
        <p className='ms-3'>
          Rajveer Singh, Wscube Tech, Basker Circle,In,Raj Jodhpur, 342001
        </p>
      </div>

      <div className='d-flex p-2 border-bottom'>
        <input
          type='radio'
          name='address'
          value='address2'
          checked={selectedAddress === 'address2'}
          onChange={handleRadioChange}
        />
        <p className='ms-3'>
        Rajveer Singh, Wscube Tech, Basker Circle, In, Raj Jodhpur, 342001
        </p>
      </div>

      <div className='d-flex p-2 border-bottom'>
        <input
          type='radio'
          name='address'
          value='address3'
          checked={selectedAddress === 'address3'}
          onChange={handleRadioChange}
        />
        <p className='ms-3'>
        Rajveer Singh, Wscube Tech, Basker Circle, In, Raj Jodhpur, 342001
        </p>
      </div>
    </div>
        </div>
      </div>
      
    </div>
    </>
  )
}
