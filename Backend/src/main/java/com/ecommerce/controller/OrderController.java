package com.ecommerce.controller;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Address;
import com.ecommerce.model.Order;
import com.ecommerce.model.User;
import com.ecommerce.service.OrderService;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private OrderService orderService;
    private UserService userService;

    @Autowired
    public OrderController(OrderService orderService, UserService userService) {
        this.orderService = orderService;
        this.userService = userService;
    }

    @PostMapping("/")
    public ResponseEntity<Order> createOrderHandler(@RequestBody Address shippingAdress,
                                                    @RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Order orders = orderService.createOrder(user, shippingAdress);
        return new ResponseEntity<Order>(orders, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity< List<Order>> usersOrderHistoryHandler(@RequestHeader("Authorization") String jwt) throws OrderException, UserException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Order> orders = orderService.usersOrderHistory(user.getId());
        return new ResponseEntity<List<Order>>(orders, HttpStatus.OK);


    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Order> findOrderHandler(@PathVariable Long orderId ,@RequestHeader("Authorization") String jwt) throws UserException , OrderException{
        User user=userService.findUserProfileByJwt(jwt);
        Order orders=orderService.findOrderById(orderId);
        return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);
    }

}


