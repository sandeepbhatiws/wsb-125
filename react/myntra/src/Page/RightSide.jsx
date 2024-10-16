import React, { useEffect, useState } from 'react'
import Product from './Product';
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import axios from 'axios';

export default function RightSide({page, sorting, checkedCategories, priceFrom, priceTo}) {

    const [products,setProducts] = useState([]);

    useEffect(() => {

        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                page : page,
                limit : 12,
                sorting : sorting,
                name : '',
                price_from : priceFrom,
                price_to : priceTo,
                discount_from : '',
                discount_to : '',
                rating: '',
                brands : '',
                categories : checkedCategories.join(',')
            }
        })
        .then((success) => {
            setProducts(success.data.data)
        })
        .catch((error) => {

        });
    },[sorting,checkedCategories,priceTo,priceFrom]);

  return (
    <Col lg={10} style={{ backgroundColor: "#fafafa" }}>
            <Row className='row row-cols-5'>
                {
                    products.map((v,i) => {
                        return(
                            <Product data={v}/>
                        )
                    })
                }
            </Row>
          </Col>
  )
}
