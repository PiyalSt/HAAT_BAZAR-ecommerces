import React from 'react'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Products from './pages/Products'
import WishList from './pages/WishList'
import ShopingCart from './pages/ShopingCart'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='products' element={<Products />} />
        <Route path='wishlist' element={<WishList />} />
        <Route path='cart' element={<ShopingCart />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
