import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

let CartContext = createContext();

export default function MainContext({children}) {

    var userLogin = JSON.parse(localStorage.getItem('userLogin'));
    var userLogin = userLogin ? true : false;
    let [isLogin, setLogin] = useState(userLogin);

    let contextData = {isLogin, setLogin}

  return (
    <CartContext.Provider value={contextData}>
        {children}
    </CartContext.Provider>
  )
}

export { CartContext };
