import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import { getCart, removeCartItem, updateCartItem } from "../../../Redux/Customers/Cart/Action";

const CartItem = ({ item,showButton }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?.id, jwt };
    dispatch(removeCartItem(data)).then(() => {
      dispatch(getCart(jwt)); // 👈 Refresh cart
    });
  };
  const [c, setc] = useState(1);
  
  const handleUpdateCartItem = (num) => {
    const newQuantity = item.quantity + num;
    if (newQuantity < 1) return;
  setc(newQuantity)
    const data = {
      data: { quantity: newQuantity },
      cartItemId: item?.id,
      jwt,
    };
    dispatch(updateCartItem(data)).then(() => {
      dispatch(getCart(jwt)); // 👈 Refresh cart
    });
  };
  
 return (
  <>
  {item?.quantity > 0 &&  <div className="p-5 shadow-lg border rounded-md">
     <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product?.title}</p>
          <p className="opacity-70">Size: {item?.size},{item?.color}</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹{item?.product.price}</p>
            <p className="font-semibold text-lg">
              ₹{item?.product.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
              {item?.product.discountPersent}% off
            </p>
          </div>
          
        </div>
        
        <div className="ml-auto text-right space-y-1">
  <p className="font-medium">  Exact Price : ₹{item?.product.price * c}</p>
  <p className="font-medium">
    Exact Discount: ₹
    {(item?.product.price - item?.product.discountedPrice) * c}
  </p>
  <p className="font-medium">
    Final Price: ₹{item?.product.discountedPrice * c}
  </p>
</div>
      </div>
     {showButton&& <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton 
          onClick={()=>handleUpdateCartItem(-1)} 
          disabled={item?.quantity<=1} 
          color="primary" 
          aria-label="add an alarm"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">
            {item?.quantity}
            </span>
          <IconButton 
          onClick={()=>handleUpdateCartItem(1)} 
          color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button onClick={handleRemoveItemFromCart} variant="text">
            Remove{" "}
          </Button>

        </div>
     
      </div>
    }
    
  
    </div>}
    </>);
};

export default CartItem;
