import React from 'react'
import WishlistSidebar from './WishListsidebar'
import WishListProduct from './WishListProduct'

export default function WishlistContanier() {
  return (
    <>
      <section class="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
        <WishlistSidebar></WishlistSidebar>
        <WishListProduct/>

    </section>
    </>
  )
}
