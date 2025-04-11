package com.ecommerce.request;

import com.ecommerce.model.Address;
import com.ecommerce.model.PaymentInformation;
import com.ecommerce.user.domain.UserRole;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String mobile;
    private UserRole role;
    private List<Address> addresses; // optional - can be converted to AddressDTO if needed
    private List<PaymentInformation> paymentInformation;
}