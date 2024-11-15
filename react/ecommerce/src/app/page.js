"use client";

import Image from "next/image";
import Banner from "./Components/Home/Banner";
import Sidebar from "./Components/Products/Sidebar";
import Productlisting from "./Components/Products/Productlisting";
import Cart from "./Components/Page/Cart";
import WishlistSidebar from "./Components/Wishlist/WishlistSidebar";
import WishListProduct from "./Components/Wishlist/WishListProduct";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "./Redux ToolKit/Slices/counterSlice";

export default function Home() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
  
    
    
      <Banner/>
      <section
      class="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row"
    >
      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>

      
    </section>
    
    </>
  );
}
