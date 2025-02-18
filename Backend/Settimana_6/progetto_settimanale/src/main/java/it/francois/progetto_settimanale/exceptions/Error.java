package it.francois.progetto_settimanale.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Error {

    private String message;
    private String details;
    private String statusCode;
}
