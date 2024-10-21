import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function CommonRoute() {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}
