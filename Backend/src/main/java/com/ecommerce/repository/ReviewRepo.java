package com.ecommerce.repository;

import com.ecommerce.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface ReviewRepo extends JpaRepository<Review, Long> {

    public List<Review> findByProductId( Long productId);
}
