import React, { useState } from 'react'
import { data, data1 } from './data.js'
import Product from './Product.jsx';

export default function Home() {

    const [product,setProduct] = useState(data);

    var productData = product.map((value,index) => {
        return(
            <div className='column' key={index}>
                <div className='image'>
                    <img src={ value.image } />
                </div>
                <h2>{ value.title }</h2>
                <p>{ value.description }</p>
            </div>
        )
    });

  return (
    <>
        <div className='heading'> Home Page</div>

        <div className='main'>
            <div className='row'>
                {
                    product.map((value,index) => {
                        return(
                            <Product value = {value} index={index}>
                                Don’t Just Upskill, Get Career-ready, Get Hired
                            </Product>
                        )
                    })
                }

                    {/* <ProductSingle title = 'This is a title' description = "this is a description"/>
                    <Product title = 'This is a title' description = "this is a description"/> */}
                {/* {
                    productData
                } */}
            </div>
        </div>
    </>
  )
}


function ProductSingle(props){

    console.log(props);

    return(
        <div className='column'>
            <div className='image'>
                <img src='https://assets.codepen.io/652/marcella-marcella-hn6CC9aosEk-unsplash.jpg' />
            </div>
            <h2>{props.title}</h2>
            <p>description</p>
        </div>
    )
}