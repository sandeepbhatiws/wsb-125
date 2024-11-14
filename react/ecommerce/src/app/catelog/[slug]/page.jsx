"use client";
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import Productlisting from '@/app/Components/Products/Productlisting';

export default function page() {

  const params = useParams();

  console.log(params);
  
  if(params.slug != undefined){
    var slug = [params.slug];
  } else {
    var slug = [];
  }

  const [category,setCategories] = useState(slug);

  return (
 <>
  <Productlisting category = {category} setCategories = {setCategories}/>
 </>
  )
}
