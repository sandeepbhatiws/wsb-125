import React from 'react'

export default function Product({value,index}) {

  //  let {title, description, children} = props;

  // console.log(props);

  return (
    <>
      <div className='column' key={index}>
            <div className='image'>
                <img src={value.image} />
            </div>
            <h2>{value.title}</h2>
            <p>{value.description}</p>
        </div>
    </>
  )
}
