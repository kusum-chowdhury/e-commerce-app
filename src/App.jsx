import { useState } from 'react'
import './App.css'
import Button from "@mui/material/Button"
import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from './components/Layout';
import Cart from './pages/Cart';
import Login from './pages/Login';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home /> } />
      <Route path='/cart' element={<Cart /> } />
      <Route path='/login' element={<Login /> } />
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
