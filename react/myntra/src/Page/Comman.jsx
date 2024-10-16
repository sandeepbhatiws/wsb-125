import React, { useState } from 'react'
import Header from './Header'
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import '../Custom.css';
import Footer from './Footer';
import FilterLeft from './FilterLeft';
import RightSide from './RightSide';

export default function Comman() {

  const [page,setPage] = useState(1);
  const [sorting,setSorting] = useState(3);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const filterSorting = (value) => {
    setSorting(value);
  }

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
                <Dropdown.Item onClick={ () => filterSorting(1)}>Name :  A to Z</Dropdown.Item>
                <Dropdown.Item onClick={ () => filterSorting(2)}>Name : Z to A</Dropdown.Item>
                <Dropdown.Item onClick={ () => filterSorting(3)}>Price : Low to High</Dropdown.Item>
                <Dropdown.Item onClick={ () => filterSorting(4)}>Price : High to Low</Dropdown.Item>
                <Dropdown.Item onClick={ () => filterSorting(5)}>Discounted Price : Low to High</Dropdown.Item>
                <Dropdown.Item onClick={ () => filterSorting(6)}>Discounted Price : High to Low</Dropdown.Item>
                <Dropdown.Item onClick={ () => filterSorting(7)}>Rating : Low to High</Dropdown.Item>
                <Dropdown.Item onClick={ () => filterSorting(8)}>Rating : High to Low</Dropdown.Item>
            
              </DropdownButton>
            </Dropdown>
           
          </div>
        </Row>
      </Container>

      <Container fluid className='lift_sidebar pb-3'>
        <Row className='products_container'>
        
        <FilterLeft checkedCategories = { checkedCategories } setCheckedCategories = {setCheckedCategories} setPriceFrom = { setPriceFrom} setPriceTo= {setPriceTo}/>
        <RightSide page={page} sorting={sorting} checkedCategories = { checkedCategories } priceFrom = { priceFrom} priceTo= {priceTo}/>
          
        </Row>
      </Container>

      <Footer />
    </>
  )
}
