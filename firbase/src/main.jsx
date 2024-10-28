import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Common from './components/Common'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import EnquiryData from './components/EnquiryData'
import 'react-toastify/dist/ReactToastify.css';


  const router = createBrowserRouter(
  createRoutesFromElements(

    <>
     <Route path="/" element={<Common />}>
      <Route path='/' element={<Home/>}></Route>
    </Route>
    <Route path="/veiw-data" element={<Common />}>
      <Route path='/veiw-data' element={<EnquiryData/>}></Route>
    </Route>
    </>
   
    
    
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
