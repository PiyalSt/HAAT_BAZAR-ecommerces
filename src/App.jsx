import React from 'react'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
