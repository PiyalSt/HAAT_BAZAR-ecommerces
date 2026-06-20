import React from 'react'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Products from './pages/Products'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='products' element={<Products />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
