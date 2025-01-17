/*
 * Esercizio #3
 * - perimetroRettangolo che accetta la lunghezza decimale dei due lati di un rettangolo e ne calcola il perimetro
 * - pariDispari che accetta un numero intero e restitutisce 0 se il numero è pari e 1 se è dispari
 * - perimetroTriangolo che accetta le lunghezze decimali dei lati di un triangolo e ne restituisca l'area (è possibile usare la formula di Erone)
 */

package Lezione_1;

public class Esercizio_3 {

    public static void perimetroRettangolo(float base, float altezza) {
        System.out.println((base * 2) + (altezza * 2));
    }

    public static int pariDispari(int numero) {
        return numero % 2 == 0 ? 1 : 0;
    }

    public static double perimetroTriangolo(double lato1, double lato2, double lato3) {
        double s = (lato1 + lato2 + lato3) / 2;

        double area = Math.sqrt(s * (s - lato1) * (s - lato2) * (s - lato3));

        return area;
    }
}