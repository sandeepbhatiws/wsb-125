import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

let CartContext = createContext();

export default function MainContext({children}) {

    let [cartItems, setCartItems] = useState([]);
    let [productItems, setProductItems] = useState([]);

    // const addtoCart = (data) => {
    //     const productData = {
    //       id : data.id,
    //       name : data.title,
    //       price : data.price,
    //       image : data.thumbnail,
    //       qty : 1
    //     }
  
    //     const finalData = [productData, ...cartItems];
  
    //     setCartItems(finalData);
    //     toast.success('Product successfully added to cart !!')
  
    // }

    let contextData = {cartItems, setCartItems, productItems, setProductItems}

  return (
    <CartContext.Provider value={contextData}>
        {children}
    </CartContext.Provider>
  )
}

export { CartContext };
