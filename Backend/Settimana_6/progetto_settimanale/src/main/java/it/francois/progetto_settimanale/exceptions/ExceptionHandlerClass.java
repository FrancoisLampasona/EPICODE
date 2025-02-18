package it.francois.progetto_settimanale.exceptions;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandlerClass {

    @ExceptionHandler(value = EntityNotFoundException.class)
    protected ResponseEntity<Error> handleEntityNotFound(EntityNotFoundException ex) {

        Error error = new Error(
                "Entity not found",
                ex.getMessage(),
                "404");

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = EntityExistsException.class)
    protected ResponseEntity<Error> handleEntityAlreadyExists(EntityExistsException ex) {

        Error error = new Error(
                "Entity already exists",
                ex.getMessage(),
                "409");

        return new ResponseEntity<>(error, HttpStatus.CONFLICT);
    }

}
