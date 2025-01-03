'use client'
import React from 'react'
import ".././globals.css";
import Link from 'next/link';

export default function menu() {
  return (
   <>
    <ul className='dashbord'>
          <li className='py-3 border-bottom border-end'><Link href='/dashbord'>Address</Link></li>
              <li className='py-3 border-bottom border-end'><Link href='/dashbord/order'>Order's</Link></li>
              <li className='py-3 border-bottom border-end'><Link href='/dashbord/changepassword'>Change Password</Link></li>
              {/* <li className='py-3 border-bottom border-end'><Link href='/dashbord/coupen'>Coupon Genrate</Link></li> */}
              <li className='py-3 border-bottom border-end'>
                <button className='btn'>Log out</button>
              </li>
          </ul>
   </>
  )
}
