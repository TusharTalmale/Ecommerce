import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import cartReducer from "../../../Redux/Customers/Cart/Reducer";


const Cart = () => {
  const dispatch = useDispatch();
  
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const {cart}=useSelector(store=>store.cart);
  console.log("cartdata", cart);
  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt]);

  return (
    <div className="">
       
       {cart?.cartItems?.length > 0 && (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white pb-5">
            <div className="space-y-3">
            {cart.cartItems.map((item) => (
            <>
              <CartItem item={item} showButton={true}/>
            </>
          ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Each 1 item price  </span>
                  <span>₹{cart?.totalPrice} </span>
                </div>
                <div className="flex justify-between pt-3 text-black ">
                  <span>Quantity </span>
                  <span>{cart?.totalItem} item</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-red-700"> - ₹{cart?.discounte}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹{cart?.totalDiscountedPrice}</span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
       )}
    </div>
  );
};

export default Cart;
