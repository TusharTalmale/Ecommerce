package com.ecommerce.controller;

import com.ecommerce.exception.ProductException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.User;
import com.ecommerce.request.AddItemRequest;
import com.ecommerce.response.ApiResponse;
import com.ecommerce.service.CartService;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired private CartService cartService;
    @Autowired private UserService userService;

    @GetMapping("/")
    public ResponseEntity<Cart> findUserCartHandler(@RequestHeader("Authorization") String jwt) throws UserException {
      User user = userService.findUserProfileByJwt(jwt);
      Cart cart = cartService.findUserCart(user.getId());
      return new ResponseEntity<>(cart, HttpStatus.OK);
    }
//
//    public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,@RequestHeader("Authorization") String jwt) throws UserException, ProductException {
//        User user = userService.findUserProfileByJwt(jwt);
//        cartService.addCartItem(user.getId(), req);
//        ApiResponse res= new ApiResponse("Item Added To Cart Successfully",true);
//
//        return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
//    }
    @PutMapping("/add")
    public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req, @RequestHeader("Authorization") String jwt) throws UserException, ProductException{

        User user=userService.findUserProfileByJwt(jwt);

        cartService.addCartItem(user.getId(), req);

        ApiResponse res= new ApiResponse("Item Added To Cart Successfully",true);

        return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);

    }
}
