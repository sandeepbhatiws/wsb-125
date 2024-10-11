import React, { useState } from 'react'

export default function Home() {

    let [count, setCount] = useState(0);

    var name = 'test';

    const add = () => {
        count++;
        setCount(count);
        console.log(count);
    }

    const minus = () => {
        count--;
        setCount(count);
        console.log(count);
    }


  return (
    <>
        <div>
        Home Page { name }
        </div>

        <div> { count } </div>
        <button onClick={ add } >Add</button>
        <button onClick={ minus }>Minus</button>
    </>
    
    
  )
}
