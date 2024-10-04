import React, { useState } from 'react'
import { data, data1 } from './data.js'

export default function Home() {

    const [product,setProduct] = useState(data1);

  return (
    <>
        <div className='heading'> Home Page</div>

        <div className='main'>
            <div className='row'>
                
                {
                    product.map((value,index) => {
                        return(
                            <div className='column'>
                    <div className='image'>
                        <img src={ value.image } />
                    </div>
                    <h2>{ value.title }</h2>
                    <p>{ value.description }</p>
                </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
