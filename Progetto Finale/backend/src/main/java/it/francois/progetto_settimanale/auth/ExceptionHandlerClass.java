package it.francois.progetto_settimanale.auth;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ExceptionHandlerClass extends ResponseEntityExceptionHandler {
	@ExceptionHandler (value = EntityNotFoundException.class)
	protected ResponseEntity<String> entityNotFound (@NotNull EntityNotFoundException ex) {
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler (value = SecurityException.class)
	protected ResponseEntity<String> entityNotFound (@NotNull SecurityException ex) {
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler (value = EntityExistsException.class)
	protected ResponseEntity<String> entityNotFound (@NotNull EntityExistsException ex) {
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
	}


	@ExceptionHandler (value = AccessDeniedException.class)
	protected ResponseEntity<String> AccessDenied (@NotNull AccessDeniedException ex) {
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.FORBIDDEN);
	}

	@ExceptionHandler (value = JwtTokenMissingException.class)
	protected ResponseEntity<String> JwtTokenMissingException (@NotNull JwtTokenMissingException ex) {
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.UNAUTHORIZED);
	}


	@ExceptionHandler (ConstraintViolationException.class)
	public ResponseEntity<Map<String, String>> handleConstraintViolationException (@NotNull ConstraintViolationException ex) {
		Map<String, String> errors = new HashMap<>();
		for (ConstraintViolation<?> violation : ex.getConstraintViolations()) {
			String fieldName = violation.getPropertyPath().toString();
			if (fieldName.contains(".")) {
				fieldName = fieldName.substring(fieldName.lastIndexOf('.') + 1);
			}
			errors.put(fieldName, violation.getMessage());

		}
		return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
	}
}