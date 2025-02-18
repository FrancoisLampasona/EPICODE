package it.francois.progetto_settimanale.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DipendenteResponse {
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String avatarUrl;
}
