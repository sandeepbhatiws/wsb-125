import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebars from '../Sidebars'
import Header from '../Header'

export default function CommonRoute() {
  return (
    <>
    <div className='flex'>
                <Sidebars/>
                <div class="w-[100%] ">
                    <Header/>
                  <Outlet/>
                </div>
            </div>
    </>
  )
}
