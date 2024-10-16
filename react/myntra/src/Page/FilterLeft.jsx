import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'

export default function FilterLeft({setCheckedCategories, checkedCategories, setPriceFrom, setPriceTo}) {

    const [categories,setCategories] = useState([]);
    const [brands,setBrands] = useState([]);
    

    useEffect(() => {

      axios.get('https://wscubetech.co/ecommerce-api/categories.php')
      .then((success) => {
        setCategories(success.data.data)
      })
      .catch((error) => {

      });
    },[]);

    useEffect(() => {
      axios.get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((success) => {
        setBrands(success.data.data)
      })
      .catch((error) => {

      });
    },[]);

    const filterCategories = (value) => {
      
      if(checkedCategories.includes(value)){
        const final = checkedCategories.filter((v,i) => {
          if(v != value){
            return  v;
          }
        })
        setCheckedCategories(final);
        console.log(final);
      } else {
        var final = [value,...checkedCategories];
        setCheckedCategories(final);
        console.log(final);
      }

      
      
    }

    const filterPrice = (from,to) => {
      setPriceFrom(from);
      setPriceTo(to);
    }

  return (
    <Col className='categories' lg={2}>

            <div className='cat_items'>
              <h2>categories</h2>
              <ul>
                {
                    categories.map((v,i) => {
                        return(
                            <li key={i}  onClick={() => filterCategories(v.slug)}>
                                <input type='checkbox' id={v.slug} />
                                <label for={v.slug}>{v.name}</label>
                                </li>
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
                <li onClick={() => filterPrice(0,250) }>
                  <input type='radio' name='price' id='price1'/>
                  <label for="price1">Rs. 0 to Rs. 250</label>
                </li>
                <li onClick={() => filterPrice(251,500) }>
                  <input type='radio' name='price' id='price2'/>
                  <label for="price2">Rs. 251 to Rs. 500</label>
                </li>
                <li onClick={() => filterPrice(501,1000) }>
                  <input type='radio' name='price' id='price3'/>
                  <label for="price3">Rs. 501 to Rs. 1000</label>
                </li>
                <li onClick={() => filterPrice(1000, '') }>
                  <input type='radio' name='price' id='price4'/>
                  <label for="price4">Rs. 1000 and above </label>
                </li>
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
