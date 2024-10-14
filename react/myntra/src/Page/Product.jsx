import React from 'react'
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'

export default function Product({ data }) {
  return (
    <div className='product_items py-3 m-2'>
        <Card>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
                <p>{data.description}</p>
                <span className='product-discountedPrice'>Rs. {data.price}</span>
                <span className='product-strike'>Rs. 1499</span>
                <span className='product-discountPercentage'>(56% OFF)</span>
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
  )
}
