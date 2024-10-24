import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Common from './Components/Common';
import Home from './Components/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Common />}>
      <Route path='/' element={<Home/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
