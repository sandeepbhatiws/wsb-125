import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    axios.get('https://dummyjson.com/products/categories')
    .then((result) =>{
      setCategories(result.data);
    });
  },[]);

  return (
    <div className="bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:max-w-none lg:py-2">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {categories.map((category) => (
              <div key={category.name} className="relative pb-5 group">
                <div className="relative w-full mb-3 overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={category.name}
                    src='https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg'
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h3 className="mt-3 text-sm text-gray-500">
                  <Link to={ `/categories/${category.slug}` }>
                    <span className="absolute inset-0" />
                    {category.name}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}