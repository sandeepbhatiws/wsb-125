import React, { useEffect, useState } from 'react'
import Product from './Product';
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'

export default function RightSide() {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('https://wscubetech.co/ecommerce-api/products.php')
        .then(res => res.json())
        .then((success) => {
            setProducts(success.data)
        });
    },[]);

  return (
    <Col lg={10} style={{ backgroundColor: "#fafafa" }}>
            <Row className='row row-cols-6'>
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
