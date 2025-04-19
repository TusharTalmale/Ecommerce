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
import PaymentSuccess from '../customer/components/paymentSuccess/PaymentSuccess'
import About from '../customer/pages/About'
import PrivacyPolicy from '../customer/pages/PrivacyPolicy'
import TearmsCondition from '../customer/pages/TearmsCondition'
import Contact from '../customer/pages/Contact'
import NotFound from '../customer/pages/Notfound'




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
            <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TearmsCondition />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

            <Route  path='/cart' element={<Cart/>}> </Route>
            <Route  path='/:lavelOne/:levelTwo/:levelThree' element={<Product/>}> </Route>
            <Route  path='/product/:productId' element={<ProductDetails/>}> </Route>
            <Route  path='/checkout' element={<Checkout/>}> </Route>
            <Route  path='/account/order' element={<Order/>}> </Route>
            <Route  path='/account/order/:orderId' element={<OrderDetails/>}> </Route>
            <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>

        <Route path="*" element={<NotFound />} />

        </Routes>

    </div>
    <div><Footer/>
        </div>
    </div>

  )
}

export default CostumerRouter