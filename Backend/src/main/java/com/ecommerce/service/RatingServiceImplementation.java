package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Product;
import com.ecommerce.model.Rating;
import com.ecommerce.model.User;
import com.ecommerce.repository.RatingRepo;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.request.RatingRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class RatingServiceImplementation implements RatingService{
    @Autowired
    RatingRepo ratingRepo;

    @Autowired
    ProductService productService;

    @Override
    public Rating createRating(RatingRequest req, User user) throws ProductException {
        Product product =productService.findProductById(req.getProductId());
        Rating rating = new Rating();
        rating.setProduct(product);
        rating.setRating(req.getRating());
        rating.setUser(user);
        rating.setCreatedAt(LocalDateTime.now());
       return ratingRepo.save(rating);
    }


    @Override
    public List<Rating> getProductsRating(Long productId) {
        return ratingRepo.getAllProductsRating(productId);
    }
}
