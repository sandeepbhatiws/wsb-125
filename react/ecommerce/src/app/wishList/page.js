"use client";
import React, { useEffect } from 'react'
import WishlistContanier from '../Components/Wishlist/WishlistContanier'
import { useRouter } from 'next/navigation'

export default function page() {

  const router = useRouter();
  

  useEffect(() => {
    router.push('/');
  })

  return (
   <>
   <WishlistContanier></WishlistContanier>
   </>
  )
}
