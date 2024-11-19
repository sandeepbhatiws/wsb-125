"use client";
import React, { useState } from 'react'
import Productlisting from '../Components/Products/Productlisting';

export default function page() {

    const [category, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

  return (
    <div>
      <Productlisting category = {category} setCategories = {setCategories} brands ={brands} setBrands = {setBrands}/>
    </div>
  )
}
