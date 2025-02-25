package it.francois.progetto_settimanale.auth;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
}
