"use client";

import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useParams } from 'next/navigation'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function FilterProduct({ categories, setCategories }) {

  let [drop, SetDrop] = useState(0)
  let Drop = () => {
    SetDrop(!drop)

  }

  const params = useParams();

  if(params.slug != ''){
    setCategories(params.slug);
  }
  
  
  // console.log(categories);

  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
      params: {
        page : '',
        limit : 15,
        sorting : '',
        name : '',
        price_from : '',
        price_to : '',
        discount_from : '',
        discount_to : '',
        rating : '',
        brands : '',
        categories : categories.toString()
      }
    })
    .then((response) => {
      setProducts(response.data.data);
      setLoading(false);
    })
    .catch(function (error) {
      toast.error('Something went Wrong');
    });
  },[categories]);

  

  return (
    <>
      <ToastContainer/>
      <div>
        <div class="mb-5 flex  justify-end px-5">
           <div className='relative w-40 '>
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" onClick={Drop} class="text-white bg-[#4C1D95] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase" type="button">Shorting <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>


              <div id="dropdown" class={`z-10  bg-white divide-y divide-gray-100 rounded-lg shadow  w-full dark:bg-gray-700 absolute ${ drop==0 ? 'hidden': ''}`} >
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Whats new </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Popularity</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Better Discount</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price: Low To High</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price: High To Low</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Customer </a>
              </li>Rating 
            </ul>
            </div>
          </div>
        </div>
        <section
          class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3"
        >
            {
              loading 
              ? 
              <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 bg-slate-200 rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
              :
              products.map((value,index) => {
                return(
                  <ProductCard productInformation = {value}/>
                )
                
              })
            }

   </section>
   </div>
    </>
  )
}
