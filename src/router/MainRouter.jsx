import React, { lazy } from 'react'
import { Route, Routes } from 'react-router'
import Product from '../pages/Product/Product';

const Home = lazy(() => import ('../pages/Home/Home'));

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Product />}/>
    </Routes>
  )
}

export default MainRouter