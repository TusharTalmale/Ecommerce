import React from "react";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            // src={item?.product.imageUrl}
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold"> </p>
          <p className="opacity-70">Size: S, White</p>
          <p className="opacity-70 mt-2">Seller: Abba </p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹</p>
            <p className="font-semibold text-lg">₹</p>
            <p className="text-green-600 font-semibold">20% off</p>
          </div>
        </div>
      </div>
      {/* {showButton && ( */}
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton color="primary" aria-label="decrease quantity">
              <RemoveCircleOutlineIcon />
            </IconButton>

            <span className="py-1 px-7 border rounded-sm">20</span>
            
            <IconButton color="primary" aria-label="increase quantity">
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
            <Button variant="text">Remove</Button>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default CartItem;
