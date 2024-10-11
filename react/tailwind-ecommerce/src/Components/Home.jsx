import React, { useState } from 'react'
import ProductCard from './ProductCard'
import productData from './data.js'
import Header from './Header.jsx';

export default function Home() {

    const [products, setProducts] = useState(productData);

    const [cart, setCart] = useState([]);

  return (
    <>
        <div class="bg-gray-800 text-white">
            <Header cart ={cart}/>

            <main class="flex flex-col md:flex-row container mx-auto max-w-6xl">
            <div class="space-y-4 p-2 w-full md:max-w-[10rem]">
                <h2 class="text-2xl">Filters</h2>
                <h3 class="text-xl mb-2">Category</h3>
                <div id="filters-container" class="text-xl space-y-2">
                <div>
                    <input type="checkbox" class="check" id="cameras" />
                    <label for="cameras">Cameras</label>
                </div>
                <div>
                    <input type="checkbox" class="check" id="smartphones" />
                    <label for="smartphones">Smartphones</label>
                </div>
                <div>
                    <input type="checkbox" class="check" id="games" />
                    <label for="games">Games</label>
                </div>
                <div>
                    <input type="checkbox" class="check" id="televisions" />
                    <label for="televisions">Televisions</label>
                </div>
                </div>
            </div>

            <div
                id="products-wrapper"
                class="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 place-content-center p-4"
            >
                {
                    products.map((v,i) => {
                        return(
                            <ProductCard products = {v} key={i} cart = {cart} setCart = {setCart}/>
                        )
                    })
                }
                
            </div>
            </main>
        </div>
    </>
  )
}
