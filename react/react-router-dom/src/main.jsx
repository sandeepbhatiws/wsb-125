import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
  },
  {
    path : 'about-us',
    element : <AboutUs/>
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
