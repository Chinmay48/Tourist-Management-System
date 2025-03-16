import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Contact from './components/Contact/Contact.jsx'
import Explore from './components/Explore/Explore.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<HomePage/>
    },
    {
      path:"/aboutus",
      element:<AboutUs/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/explore",
      element:<Explore/>
    }
    
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
