import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ProductListing from './ProductListing.jsx';
import CommonRoute from './CommonRoute.jsx';
import MainContext from './MainContext/MainContext.jsx';
import Cart from './Cart.jsx';

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Home/>,
//   },
//   {
//     path : 'about-us',
//     element : <AboutUs/>
//   },
//   {
//     path : 'categories/:name?/:productName?',
//     element : <ProductListing/>
//   },
//   {
//     path : 'product-details/:id?',
//     element : <ProductListing/>
//   },
//   // {
//   //   path : 'categories/women',
//   //   element : <AboutUs/>
//   // },
//   // {
//   //   path : 'categories/kids',
//   //   element : <AboutUs/>
//   // },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<CommonRoute/>}>
        <Route path='/' element={<Home />}></Route>
      </Route>

      <Route path="carts" element={<CommonRoute/>}>
        <Route path='/carts' element={<Cart />}></Route>
      </Route>

      <Route path="categories/:name" element={<CommonRoute/>} >
        <Route path='/categories/:name' element={<ProductListing/>}></Route>
      </Route>


      <Route path='admin-panel'>
        <Route path='categories'>
          <Route path='add' element={<Home />}></Route>
          <Route path='view' element={<Home />}></Route>
          <Route path='delete' element={<Home />}></Route>
          <Route path='update' element={<Home />}></Route>
        </Route>

        {/* <Route path='products'>
          <Route path='/products'>
            <Route path='/add'></Route>
            <Route path='/view'></Route>
            <Route path='/delete'></Route>
            <Route path='/update'></Route>
          </Route>
        </Route>

        <Route path='sliders'>
          <Route></Route>
        </Route> */}
      </Route>
    </>    
  )
)


createRoot(document.getElementById('root')).render(
  <MainContext>
    <RouterProvider router={router} />
  </MainContext>
)
