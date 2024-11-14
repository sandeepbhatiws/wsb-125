"use client";
import Product from '@/app/Components/Page/Product';
import Productlisting from '@/app/Components/Products/Productlisting';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {

    const params = useParams();
    console.log(params);

    if(params.slug[2] != undefined){

    } else {
      if(params.slug[1] != undefined){
        var cat = [params.slug[1]];
      } else {
        var cat = [];
      }

      if(params.slug[0] != undefined){
        var brand = [params.slug[0]];
      } else {
        var brand = [];
      }
    }

    const [category, setCategories] = useState(cat);
    const [brands, setBrands] = useState(brand);


  return (
    <div>
        {
            params.slug[2] 
            ? 
            <Product id={params.slug[2]}/> 
            :
            <Productlisting category = {category} setCategories = {setCategories} brands ={brands} setBrands = {setBrands}/>
        }
    </div>
  )
}
