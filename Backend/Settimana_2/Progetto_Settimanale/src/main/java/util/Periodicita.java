package util;

public class Periodicita {
    public static final String SETTIMANALE = "SETTIMANALE";
    public static final String MENSILE = "MENSILE";
    public static final String SEMESTRALE = "SEMESTRALE";

    public static boolean isValid(String value) {
        return SETTIMANALE.equals(value) || MENSILE.equals(value) || SEMESTRALE.equals(value);
    }
}
