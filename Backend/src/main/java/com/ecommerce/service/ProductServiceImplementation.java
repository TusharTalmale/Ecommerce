package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Category;
import com.ecommerce.model.Product;
import com.ecommerce.repository.CategoryRepository;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.request.CreateProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class ProductServiceImplementation implements ProductService {
    @Autowired
    private ProductRepository productRepo;
    @Autowired
    private UserService userService;
    @Autowired
    private CategoryRepository categoryRepo;

    @Override
    public Product createProduct(CreateProductRequest req) {
        Category topLevel = categoryRepo.findByName(req.getTopLavelCategory());
        if (topLevel == null) {
            Category topLevelCategory = new Category();
            topLevelCategory.setName(req.getTopLavelCategory());
            topLevelCategory.setLevel(1);
            topLevel = categoryRepo.save(topLevelCategory);
        }

        Category secondLevel = categoryRepo.
                findByNameAndParent(req.getSecondLavelCategory(), topLevel.getName());
        if (secondLevel == null) {

            Category secondLavelCategory = new Category();
            secondLavelCategory.setName(req.getSecondLavelCategory());
            secondLavelCategory.setParentCategory(topLevel);
            secondLavelCategory.setLevel(2);

            secondLevel = categoryRepo.save(secondLavelCategory);
        }

        Category thirdLevel = categoryRepo.findByNameAndParent(req.getThirdLavelCategory(), secondLevel.getName());
        if (thirdLevel == null) {

            Category thirdLavelCategory = new Category();
            thirdLavelCategory.setName(req.getThirdLavelCategory());
            thirdLavelCategory.setParentCategory(secondLevel);
            thirdLavelCategory.setLevel(3);

            thirdLevel = categoryRepo.save(thirdLavelCategory);
        }

        Product product = new Product();
        product.setTitle(req.getTitle());
        product.setColor(req.getColor());
        product.setDescription(req.getDescription());
        product.setDiscountedPrice(req.getDiscountedPrice());
        product.setDiscountPersent(req.getDiscountPersent());
        product.setImageUrl(req.getImageUrl());
        product.setBrand(req.getBrand());
        product.setPrice(req.getPrice());
        product.setSizes(req.getSize());
        product.setQuantity(req.getQuantity());
        product.setCategory(thirdLevel);
        product.setCreatedAt(LocalDateTime.now());

        Product savedProduct = productRepo.save(product);
        System.out.println("products - " + product);

        return savedProduct;
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
        Product product = findProductById(productId);
        System.out.println("Deleted product " + product.getId() + " - " + product.getTitle() + " - " + productId);
        product.getSizes().clear();
        productRepo.delete(product);
        return "Product Deleted SuccessFully";
    }

    @Override
    public Product updateProduct(Long productId, Product req) throws ProductException {
        Product product1 = findProductById(productId);
        if (req.getQuantity() != 0) {
            product1.setQuantity(req.getQuantity());
        }
        if (req.getDescription() != null) {
            product1.setDescription(req.getDescription());
        }
        return productRepo.save(product1);
    }


    @Override
    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }

    @Override
    public Product findProductById(Long id) throws ProductException {
        Optional<Product> opt = productRepo.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        }
        throw new ProductException("product not found with id " + id);
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        System.out.println("category --- " + category);
        List<Product> products = productRepo.findByCategory(category);
        return List.of();
    }

    @Override
    public List<Product> searchProduct(String query) {
        List<Product> products = productRepo.searchProduct(query);
        return List.of();
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> colors,
                                       List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount,
                                       String sort, String stock, Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Product> products = productRepo.filterProducts(category,minPrice,maxPrice,minDiscount,sort);

        if (!colors.isEmpty()) {
            products = products.stream()
                    .filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
                    .collect(Collectors.toList());
        }

        if(stock !=null){
            if(stock.equals("in_stock")){
                products=products.stream().filter(p->p.getQuantity()>0).collect(Collectors.toList());
            } else if (stock.equals("out_of_stock")) {
                products = products.stream().filter(p->p.getQuantity()<1).collect(Collectors.toList());
            }
        }
        int startIndex = (int)pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());
        List<Product> pageContent = products.subList(startIndex,endIndex);
        Page<Product> filteredProduct = new PageImpl<>(pageContent,pageable, products.size());
        return filteredProduct;

    }
}
