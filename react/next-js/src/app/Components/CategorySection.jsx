import React from 'react'
import CategoryCard from './CategoryCard'

export default function CategorySection() {
  return (
    <div className='flex flex-col w-screen min-h-screen p-10 text-gray-800 bg-gray-100'>
        <h1 class="text-3xl text-center">Product Category Page Title</h1>
        <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
    </div>
  )
}
