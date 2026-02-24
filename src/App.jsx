import { useState } from 'react'
import './App.css'
import About from './components/About.jsx'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Page from './components/Page.jsx'
import Product from './components/Product.jsx'
import Signup from './components/Signup.jsx'
import Footer from './components/Footer.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header/><Page/><Footer/></>
    },
    {
      path: "/home",
      element: <><Header/><Page/><Footer/></>
    },
  {
    path: "/connect",
    element: <><Header/><Contact/><Footer/></>
  },
  {
    path: "/about",
    element: <><Header/><About/><Footer/></>
  },

  {
    path: "/product",
    element: <><Header/><Product/><Footer/></>
  },
  {
    path: "/signup",
    element: <><Header/><Signup/><Footer/></>
  },

]);

  return (
    <>

    <RouterProvider router={router} />
    
    </>
  )
}

export default App
