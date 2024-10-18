import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ProductListing from './ProductListing.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
  },
  {
    path : 'about-us',
    element : <AboutUs/>
  },
  {
    path : 'categories/:name?/:productName?',
    element : <ProductListing/>
  },
  {
    path : 'product-details/:id?',
    element : <ProductListing/>
  },
  // {
  //   path : 'categories/women',
  //   element : <AboutUs/>
  // },
  // {
  //   path : 'categories/kids',
  //   element : <AboutUs/>
  // },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
