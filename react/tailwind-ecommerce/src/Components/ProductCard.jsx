import React from 'react'

export default function ProductCard({products,cart, setCart}) {

    const addtoCart = (product) => {
        console.log(product);

        var final = [product,...cart];
        setCart(final);
    }

  return (
    <div className='item space-y-2'>
      <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
        <img
            src={products.url}
            alt={products.name}
            class="w-full h-full object-cover"
        />
        <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0" onClick={() => addtoCart(products)}
            >Add To Cart</button
        >
    </div>
        <p class="text-xl">{products.name}</p>
        <strong>${products.price}</strong>
    </div>
  )
}
