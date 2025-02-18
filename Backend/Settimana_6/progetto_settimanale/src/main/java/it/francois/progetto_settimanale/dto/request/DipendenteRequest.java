package it.francois.progetto_settimanale.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class DipendenteRequest {

    @NotBlank(message = "Username is mandatory")
    private String username;

    @NotBlank(message = "First name is mandatory")
    private String firstName;

    @NotBlank(message = "Last name is mandatory")
    private String lastName;

    @NotBlank(message = "Email is mandatory")
    private String email;
}
