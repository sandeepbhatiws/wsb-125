import React, { useEffect, useState } from 'react'
import Product from './Product';
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import axios from 'axios';

export default function RightSide({page, sorting, checkedCategories}) {

    const [products,setProducts] = useState([]);

    useEffect(() => {

        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                page : page,
                limit : 12,
                sorting : sorting,
                name : '',
                price_from : '',
                price_to : '',
                discount_from : '',
                discount_to : '',
                rating: '',
                brands : '',
                categories : JSON.stringify(checkedCategories)
            }
        })
        .then((success) => {
            setProducts(success.data.data)
        })
        .catch((error) => {

        });
    },[sorting,checkedCategories]);

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
