package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Product;
import com.ecommerce.model.Review;
import com.ecommerce.model.User;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.repository.RatingRepo;
import com.ecommerce.repository.ReviewRepo;
import com.ecommerce.request.ReviewRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImplementation implements ReviewService{
    @Autowired
    private ReviewRepo reviewRepo;
    @Autowired private ProductService productService;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private RatingRepo ratingRepo;

    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {
        Product product = productService.findProductById(req.getProductId());
        Review review=new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReview(req.getReview());
        review.setCreatedAt(LocalDateTime.now());


        productRepository.save(product);
        return reviewRepo.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {
        return reviewRepo.findByProductId(productId);
    }


}
