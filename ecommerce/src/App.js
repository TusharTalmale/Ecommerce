
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Cart from './customer/components/Cart/Cart';
// import Checkout from './customer/components/CheckOut/Checkout';
import Footer from './customer/components/Footer/footer';
import Navigation from './customer/components/Navigation/Navigation';
import OrderDetails from './customer/components/Order/OrderDetails';
import CostumerRouter from './Router/CostumerRouter';
// import Order from './customer/components/Order/order';
// import HomePage from './customer/pages/HomePage/HomePage';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="">
      <Routes>
      <Route path='/*' element={<CostumerRouter/>}></Route>

      </Routes>
     <div>
      {/* <HomePage/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout /> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
      
      </div>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
