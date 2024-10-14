import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'

export default function FilterLeft() {

    const [categories,setCategories] = useState([]);
    const [brands,setBrands] = useState([]);
    

    useEffect(() => {
        fetch('https://wscubetech.co/ecommerce-api/categories.php')
        .then(res => res.json())
        .then((success) => {
            setCategories(success.data)
        });
    },[]);

    useEffect(() => {
        fetch('https://wscubetech.co/ecommerce-api/brands.php')
        .then(res => res.json())
        .then((success) => {
            setBrands(success.data)
        });
    },[]);

  return (
    <Col className='categories' lg={2}>

            <div className='cat_items'>
              <h2>categories</h2>
              <ul>
                {
                    categories.map((v,i) => {
                        return(
                            <li key={i}>
                                <input type='checkbox' />{v.name}</li>
                        );
                    })
                }
              </ul>
            </div>

            <div className='cat_items'>
              <h2>BRAND</h2>
              <ul>
              {
                    brands.map((v,i) => {
                        return(
                            <li key={i}>
                                <input type='checkbox' />{v.name}</li>
                        );
                    })
                }
              </ul>
            </div>

            <div className='cat_items'>
              <h2>PRICE</h2>
              <ul>
                <li><input type='checkbox' />Rs. 0 to Rs. 250</li>
                <li><input type='checkbox' />Rs. 251 to Rs. 500</li>
                <li><input type='checkbox' />Rs. 501 to Rs. 1000</li>
                <li><input type='checkbox' />Rs. 1000 and above </li>
              </ul>
            </div>

            <div className='cat_items'>
              <h2>DISCOUNT RANGE</h2>
              <ul>
                <li><input type='radio' />30% and above</li>
                <li><input type='radio' />40% and above</li>
                <li><input type='radio' />50% and above</li>
                <li><input type='radio' />60% and above</li>
              </ul>
            </div>

            <div className='cat_items'>
              <h2>COLOR</h2>
              <ul>
                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "black" }}>
                  </span>Black<span className='item_count'>(275)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(0, 116, 217)" }}>
                  </span>Blue<span className='item_count'>(246)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "white" }}>
                  </span>White<span className='item_count'>(227)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(60, 68, 119)" }}>
                  </span>Navy Blue<span className='item_count'>(198)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(234, 220, 50)" }}>
                  </span>Yellow<span className='item_count'>(104)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(94, 177, 96)" }}>
                  </span>Green <span className='item_count'>(83)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(241, 169, 196)" }}>
                  </span>Pink <span className='item_count'>(80)</span>
                </li>

              </ul>
            </div>

          </Col>
  )
}
