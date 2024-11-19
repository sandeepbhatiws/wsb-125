"use client";

import React from 'react'

import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import Menu from "./Components/Common/Menu";
import { Provider } from "react-redux";
import { store } from "./Redux ToolKit/store";
import { ToastContainer } from 'react-toastify';

export default function MainLayout({children}) {
  return (
    <div>
      <Provider store={ store }>
        <ToastContainer/>
          <Header/>
          <Menu/>
          {children}
          <Footer/>
        </Provider>
    </div>
  )
}
