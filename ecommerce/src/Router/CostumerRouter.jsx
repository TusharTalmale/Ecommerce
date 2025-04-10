import React from 'react'
import { Route, Routes } from 'react-router-dom'


import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/footer'
import Navigation from '../customer/components/Navigation/Navigation'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/CheckOut/Checkout'
import Order from '../customer/components/Order/order'
import OrderDetails from '../customer/components/Order/OrderDetails'




const CostumerRouter = () => {
  return (
    <div>
        <div> <Navigation/>      
        </div>
        <div>
        <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
            <Route  path='/' element={<HomePage/>}> </Route>
            <Route  path='/cart' element={<Cart/>}> </Route>
            <Route  path='/:lavelOne/:levelTwo/:levelTree' element={<Product/>}> </Route>
            <Route  path='/product/:productId' element={<ProductDetails/>}> </Route>
            <Route  path='/checkout' element={<Checkout/>}> </Route>
            <Route  path='/account/order' element={<Order/>}> </Route>
            <Route  path='/account/order/:orderId' element={<OrderDetails/>}> </Route>


        </Routes>

    </div>
    <div><Footer/>
        </div>
    </div>

  )
}

export default CostumerRouter