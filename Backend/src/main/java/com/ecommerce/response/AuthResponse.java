package com.ecommerce.response;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
public class AuthResponse {
    private String Jwt;
    private boolean Status;

    public AuthResponse() {

    }
}
