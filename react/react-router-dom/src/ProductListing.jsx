import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from './MainContext/MainContext';
import { toast, ToastContainer } from 'react-toastify';
  
  export default function ProductListing() {

    const params = useParams();

    let {setCartItems, cartItems} = useContext(CartContext);

    const [products,setProducts] = useState([]);

    useEffect(() => {

        axios.get(`https://dummyjson.com/products/category/${params.name}`)
        .then((result) =>{
            setProducts(result.data.products);
        });
      },[]);

    const addtoCart = (data) => {
      const productData = {
        id : data.id,
        name : data.title,
        price : data.price,
        image : data.thumbnail,
        qty : 1
      }

      const finalData = [productData, ...cartItems];

      setCartItems(finalData);
      toast.success('Product successfully added to cart !!')

    }

    return (
      <div className="bg-white">
        <ToastContainer/>
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.title}
                    src={product.thumbnail}
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={ `/product-details/${product.id}` }>
                        
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <button className='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]' onClick={() => addtoCart(product) }>Add To Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }