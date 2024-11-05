"use client";

import Header from '@/app/Components/Header'
import ProductListing from '@/app/Components/ProductListing'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    const params = useParams();

    console.log(params);

  return (
    <div>
      <Header/>
      <ProductListing params={params}/>
    </div>
  )
}
