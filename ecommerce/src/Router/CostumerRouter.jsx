import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/footer'
import Navigation from '../customer/components/Navigation/Navigation'
const CostumerRouter = () => {
  return (
    <div>
        <div> <Navigation/>      
        </div>
        <div>
        <Routes>
            <Route  path='/' element={<HomePage/>}> </Route>
            <Route  path='/cart' element={<Cart/>}> </Route>
            <Route  path='/:lavelOne/:levelTwo/:levelTree' element={<Product/>}> </Route>
            {/* <Route  path='/' element={<HomePage/>}> </Route>
            <Route  path='/' element={<HomePage/>}> </Route>
            <Route  path='/' element={<HomePage/>}> </Route> */}

        </Routes>
           
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout /> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
    </div>
    <div><Footer/>
        </div>
    </div>

  )
}

export default CostumerRouter