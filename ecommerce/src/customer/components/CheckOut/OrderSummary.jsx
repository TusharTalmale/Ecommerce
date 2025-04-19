import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import AddressCard from "../AddressCard/AddressCard";
// import AddressCard from "../AddressCard/AdreessCard";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getOrderById } from "../../../Redux/Customers/Order/Action";
import { createPayment } from "../../../Redux/Customers/Payment/Action";




const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
const orderId = searchParams.get("orderId");
const param = useParams;
const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const { order } = useSelector(state => state);

console.log("orderId  hai ? ", orderId)

useEffect(()=>{
  
  dispatch(getOrderById(orderId))
},[orderId])

const handleCreatePayment=()=>{
  const data={orderId:order.order?.id,jwt}
  console.log("datat" , data)
  dispatch(createPayment(data))
}
  

  return (
    <div className="space-y-5">
        <div className="p-5 shadow-lg rounded-md border ">
            <AddressCard address={order.order?.shippingAddress}/>
        </div>
      <div className="lg:grid grid-cols-3 relative justify-between">
        <div className="lg:col-span-2 ">
          <div className=" space-y-3">
            {order.order?.orderItems.map((item) => (
              <>
                <CartItem item={item} showButton={false}/>
              </>
            ))}
          </div>
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price ({order.order?.totalItem} item)</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹{order.order?.discounte}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
              </div>
            </div>

            <Button
              onClick={handleCreatePayment}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};











// const OrderSummary = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const orderId = searchParams.get("order_id");

//   // Dummy order data for now (Replace with API or Redux later)
//   const order = {
//     orderItems: [],
//     shippingAddress: null,
//     totalItem: 0,
//     totalPrice: 0,
//     discount: 0,
//     totalDiscountedPrice: 0,
//   };

//   useEffect(() => {
//     console.log("Fetch order by ID:", orderId);
//     // Fetch order data here when integrating Redux or API
//   }, [orderId]);

//   const handleCreatePayment = () => {
//     console.log("Initiating payment for order:", orderId);
//     // Handle payment logic here when integrating
//   };

//   return (
//     <div className="space-y-5">
//       <div className="p-5 shadow-lg rounded-md border">
//         <AddressCard />
//       </div>

//       <div className="lg:grid grid-cols-3 gap-5">
//         <div className="lg:col-span-2 space-y-3">
//           {/* {order.orderItems.map((item, index) => (
//             <CartItem key={index} item={item} showButton={false} />
//           ))} */}

//             { [1,1,1,1].map((item ) => (
//                  <CartItem />
//                ))}
//             </div>


//         <div className="sticky top-0 h-[100vh] lg:mt-0">
//           <div className="border p-5 bg-white shadow-lg rounded-md">
//             <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
//             <hr />

//             <div className="space-y-3 font-semibold">
//               <div className="flex justify-between pt-3 text-black">
//                 <span>Price ({order.totalItem} item)</span>
//                 <span>₹{order.totalPrice}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Discount</span>
//                 <span className="text-green-700">-₹{order.discount}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Delivery Charges</span>
//                 <span className="text-green-700">Free</span>
//               </div>
//               <hr />
//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total Amount</span>
//                 <span className="text-green-700">₹{order.totalDiscountedPrice}</span>
//               </div>
//             </div>

//             <Button
//               onClick={handleCreatePayment}
//               variant="contained"
//               sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
//             >
//               Payment
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default OrderSummary;
