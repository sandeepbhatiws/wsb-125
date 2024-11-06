import React from 'react'
import ProductCard from './ProductCard'

export default function ProductListing({params}) {
  return (
    <div className='flex flex-col w-screen min-h-screen p-10 text-gray-800 bg-gray-100'>
        <h1 class="text-3xl text-center">Product Listing { params.slug[0] }</h1>
        <div class="w-[1190px] mx-auto my-auto">
            <div class="flex flex-col w-full h-auto mt-[3%]">
                <div class="flex flex-wrap">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                </div>
                
            </div>
        </div>
    </div>
  )
}
