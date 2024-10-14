import React from 'react'
import Header from './Header'
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import '../Custom.css';
import Footer from './Footer';
import FilterLeft from './FilterLeft';
import RightSide from './RightSide';

export default function Comman() {
  return (
    <>
      <Header />
      <Container fluid>
        <div className='breadcrumbs-base'>
          <ul>
            <li>Home</li>/
            <li>Clothing</li>/
            <li><strong>Men T-shirts</strong></li>
          </ul>
        </div>
        <div className='item'>
          <p><strong>Men T-shirts</strong></p>&nbsp;-<span> 126446 items</span>
        </div>
      </Container>

      <Container fluid>
        <Row>
          <div className='categories-text col-lg-2'>

            <ul>
              <li>FILTERS</li>
              <li>CLEAR ALL</li>
            </ul>
          </div>

          <div className='col-lg-9 d-flex justify-content-between'>
       
            <div></div>
            <Dropdown>
              <DropdownButton
          align={{ lg: 'end' }}
          title="Sort by : Recommended"
          id="dropdown-menu-align-responsive-1"
          className="sort_button"
        >
                <Dropdown.Item>Name :  A to Z</Dropdown.Item>
                <Dropdown.Item>Name : Z to A</Dropdown.Item>
                <Dropdown.Item>Price : Low to High</Dropdown.Item>
                <Dropdown.Item>Price : High to Low</Dropdown.Item>
                <Dropdown.Item>Discounted Price : Low to High</Dropdown.Item>
                <Dropdown.Item>Discounted Price : High to Low</Dropdown.Item>
                <Dropdown.Item>Rating : Low to High</Dropdown.Item>
                <Dropdown.Item>Rating : High to Low</Dropdown.Item>
            
              </DropdownButton>
            </Dropdown>
           
          </div>
        </Row>
      </Container>

      <Container fluid className='lift_sidebar pb-3'>
        <Row className='products_container'>
        
        <FilterLeft/>
        <RightSide/>
          
        </Row>
      </Container>

      <Footer />
    </>
  )
}
