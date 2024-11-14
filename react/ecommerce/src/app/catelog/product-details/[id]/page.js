"use client";

import Product from '@/app/Components/Page/Product'
import { useParams } from 'next/navigation';
import React from 'react'


export default function page() {

  const params = useParams();

  console.log(params);

  if(params.id != undefined){
    var id = params.id;
  } else {
    var id = '';
  }

  return (
  <>
  <Product id={id}></Product>
  
  </>
  )
}
