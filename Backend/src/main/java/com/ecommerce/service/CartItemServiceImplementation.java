package com.ecommerce.service;


import com.ecommerce.exception.CartItemException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.Product;
import com.ecommerce.model.User;
import com.ecommerce.repository.CartItemRepository;
import com.ecommerce.repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class CartItemServiceImplementation implements CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired private UserService userService;
    @Autowired private CartRepository cartRepository;

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        int qty = cartItem.getQuantity() > 0 ? cartItem.getQuantity() : 1;

        cartItem.setQuantity(qty);
        cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
        cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());

        CartItem createdCartItem=cartItemRepository.save(cartItem);

        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
        CartItem item = findCartItemById(id);
        User user = userService.findUserById(item.getUserId());
        if(user.getId().equals(userId)){
            item.setQuantity(cartItem.getQuantity());
            item.setDiscountedPrice(item.getQuantity()*item.getProduct().getDiscountedPrice());
            return cartItemRepository.save(item);
        }
        else{
            throw new CartItemException("You cant update another users cart-item");

        }
    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
        CartItem cartItem = cartItemRepository.isCartItemExist(cart,product,size,userId);
        return cartItem;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {

        System.out.println("userId- " + userId + " cartItemId " + cartItemId);

        // Step 1: Cart item find karo
        CartItem cartItem = findCartItemById(cartItemId);

        // Step 2: CartItem se uska userId nikalo
        User itemOwner = userService.findUserById(cartItem.getUserId());

        // Step 3: Request bhejne wala user verify karo
        User reqUser = userService.findUserById(userId);

        // Step 4: Compare karo dono users same hai ya nahi
        if (itemOwner.getId().equals(reqUser.getId())) {
            cartItemRepository.deleteById(cartItem.getId());
        } else {
            throw new UserException("You can't remove another user's cart item");
        }
    }


    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {
        Optional<CartItem> opt=cartItemRepository.findById(cartItemId);
        if(opt.isPresent()){

        return opt.get();
        }
        throw new CartItemException("cartItem Not Found With Id : " + cartItemId);
    }
}
