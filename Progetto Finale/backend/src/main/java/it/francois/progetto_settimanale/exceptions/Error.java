package it.francois.progetto_settimanale.exceptions;

public record Error(
	String message,
	String details,
	String status
) {
}
