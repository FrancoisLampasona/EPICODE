import java.util.Scanner;

import Progetto_Settimanale.AbstractClasses.ElementoMultimediale;
import Progetto_Settimanale.ConcrateClasses.Immagine;
import Progetto_Settimanale.ConcrateClasses.RegistrazioneAudio;
import Progetto_Settimanale.ConcrateClasses.Video;

public class Main {
    public static void main(String[] args) {

        // Esercizi Lezione 1 :

        // Lezione_1_Esercizio_1();
        // Lezione_1_Esercizio_2();
        // Lezione_1_Esercizio_3();

        // Esercizi Lezione 2 :

        // Lezione_2_Esercizio_1();
        // Lezione_2_Esercizio_2();
        // Lezione_2_Esercizio_3();
        // Lezione_2_Esercizio_4();

        // Esercizi Lezione 3 :

        // Lezione_3_Esercizio_1();
        // Lezione_3_Esercizio_2();
        // Lezione_3_Esercizio_3();

        // Esercizi Lezione 4 :

        // Lezione_4_Esercizio_1();
        // Lezione_4_Esercizio_2();
        // Lezione_4_Esercizio_3();

        // Progetto Settimanale :

        Progetto_Settimanale();

    }

    // Lezione 1 :

    public static void Lezione_1_Esercizio_1() {
        System.out.println("// Lezione 1 - Esercizio 1 :");

        System.out.println(Lezione_1.Esercizio_1.Moltiplica(2, 5));

        System.out.println(Lezione_1.Esercizio_1.Concatena("Cane", 5));

        String[] array = { "A", "B", "C", "D", "E" };
        String parola = "X";

        String[] return_Array = Lezione_1.Esercizio_1.InserisciInArray(array, parola);

        System.out.println("Nuovo Array:");
        for (String elemento : return_Array) {
            System.out.print(elemento + " ");
        }
        System.out.println("\n");
    }

    public static void Lezione_1_Esercizio_2() {
        System.out.println("// Lezione 1 - Esercizio 2 :");
        Lezione_1.Esercizio_2.main();
        System.out.println("\n");
    }

    public static void Lezione_1_Esercizio_3() {
        System.out.println("// Lezione 1 - Esercizio 3 :");

        Lezione_1.Esercizio_3.perimetroRettangolo(2, 4);

        int pari_dispari = Lezione_1.Esercizio_3.pariDispari(5);

        if (pari_dispari == 0) {
            System.out.println("Dispari");
        } else {
            System.out.println("Pari");
        }

        System.out.println(Lezione_1.Esercizio_3.perimetroTriangolo(3, 3, 5));
        System.out.println("\n");
    }

    // Lezione 2 :

    public static void Lezione_2_Esercizio_1() {
        System.out.println("// Lezione 2 - Esercizio 1 :");

        if (Lezione_2.Esercizio_1.stringaPariDispari("ciaone")) {
            System.out.println("La Stringa ha un numero di caratteri pari");
        } else {
            System.out.println("La Stringa ha un numero di caratteri dispari");
        }

        int anno = 2050;

        if (Lezione_2.Esercizio_1.annoBisestile(anno)) {
            System.out.println(anno + " e' un anno bisestile.");
        } else {
            System.out.println(anno + " non e' un anno bisestile.");
        }
        System.out.println("\n");
    }

    public static void Lezione_2_Esercizio_2() {
        System.out.println("// Lezione 2 - Esercizio 2 :");
        Lezione_2.Esercizio_2.switchState();
        System.out.println("\n");
    }

    public static void Lezione_2_Esercizio_3() {
        System.out.println("// Lezione 2 - Esercizio 3 :");
        Lezione_2.Esercizio_3.inserisciStringa();
        System.out.println("\n");
    }

    public static void Lezione_2_Esercizio_4() {
        System.out.println("// Lezione 2 - Esercizio 4 :");
        Lezione_2.Esercizio_4.countDown();
        System.out.println("\n");
    }

    // Lezione 3 :

    public static void Lezione_3_Esercizio_1() {
        System.out.println("// Lezione 3 - Esercizio 1 :");
        Lezione_3.Esercizio_1.RettangoloInAzione();
        System.out.println("\n");
    }

    public static void Lezione_3_Esercizio_2() {
        System.out.println("// Lezione 3 - Esercizio 2 :");
        Lezione_3.Esercizio_2.controllaSim();
        System.out.println("\n");
    }

    public static void Lezione_3_Esercizio_3() {
        System.out.println("// Lezione 3 - Esercizio 3 :");
        Lezione_3.Esercizio_3.Ecommerce();
        System.out.println("\n");
    }

    // Lezione 4

    public static void Lezione_4_Esercizio_1() {
        System.out.println("// Lezione 4 - Esercizio 1 :");
        Lezione_4.Esercizio_1.Ufficio();
        System.out.println("\n");
    }

    public static void Lezione_4_Esercizio_2() {
        System.out.println("// Lezione 4 - Esercizio 2 :");
        Lezione_4.Esercizio_2.Ufficio_2();
        System.out.println("\n");
    }

    public static void Lezione_4_Esercizio_3() {
        System.out.println("// Lezione 4 - Esercizio 3 :");
        Lezione_4.Esercizio_3.Ufficio_3();
        System.out.println("\n");
    }

    // Progetto Settimanale

    public static void Progetto_Settimanale() {

        Scanner scanner = new Scanner(System.in);

        ElementoMultimediale[] player = new ElementoMultimediale[5];

        System.out.println("Inserisci 5 Elementi Mulimediali a tua scelta !\n");

        String input;

        // Switch Case - Inserisci i dati con Input (metodo lento, solo per proggetto)
        /*
         * int indice = 0;
         * 
         * while (indice < player.length) {
         * 
         * System.out.println("\n1 = Registrazione Audio");
         * System.out.println("2 = Video");
         * System.out.println("3 = Immagine\n");
         * System.out.print("Cosa vuoi inserire nel Lettore Multimediale : ");
         * 
         * input = scanner.nextLine();
         * 
         * String title;
         * int durata;
         * 
         * switch (input) {
         * case "3":
         * System.out.print("\nImmagine !\nTitolo immagine: ");
         * title = scanner.nextLine();
         * player[indice] = new Immagine(title);
         * break;
         * case "1":
         * System.out.print("\nRegistrazione Audio !\nTitolo Audio : ");
         * title = scanner.nextLine();
         * System.out.print("Durata della registrazione audio : ");
         * durata = scanner.nextInt();
         * scanner.nextLine();
         * player[indice] = new RegistrazioneAudio(title, durata);
         * break;
         * case "2":
         * System.out.print("\nVideo !\nTitolo Video: ");
         * title = scanner.nextLine();
         * System.out.print("Durata del video : ");
         * durata = scanner.nextInt();
         * scanner.nextLine();
         * player[indice] = new Video(title, durata);
         * break;
         * default:
         * System.out.println("\n\nNumero non valido, prova ad inserire 1 o 2 o 3\n");
         * continue;
         * }
         * 
         * System.out.println("\nHai inserito : ");
         * System.out.println(player[indice].toString());
         * indice++;
         * }
         */

        // Senza SwitchCase oggetti creati a mano (metodo veloce, per fare prove)

        player[0] = new RegistrazioneAudio("PokerFace", 21);
        player[1] = new RegistrazioneAudio("Happier", 12);
        player[2] = new Video("IlSignoreDegliAnelli", 10);
        player[3] = new Video("HarryPotter", 5);
        player[4] = new Immagine("VacanzeInAmerica");

        System.out.println("\nMedia inseriti correttamente ! \n");
        input = "";

        while (!input.equals("0")) {
            System.out.println("\nMenu' :");
            System.out.println("1) Vedi tutti i Media");
            System.out.println("2) Riproduci un Elemento Media");
            System.out.println("3) Modifica un Elemento Media");
            System.out.println("4) Esci dal programma");
            System.out.print("\nInserisci scelta (0 per uscire): ");

            input = scanner.nextLine();

            switch (input) {
                case "1":
                    if (player == null || player.length == 0) {
                        System.out.println("Nessun media disponibile.");
                    } else {
                        System.out.println("\nLista dei Media:");
                        for (int i = 0; i < player.length; i++) {
                            System.out.println(i + ") " + player[i].toString());
                        }
                    }
                    break;

                case "2":
                    if (player == null || player.length == 0) {
                        System.out.println("Nessun media disponibile.");
                        break;
                    }

                    System.out.println("\nQuale di questi elementi vuoi riprodurre?\n");
                    for (int i = 0; i < player.length; i++) {
                        System.out.println(i + ") " + player[i].toString());
                    }

                    System.out.print("\nInserisci il numero dell'elemento: ");
                    try {
                        int indexToPlay = Integer.parseInt(scanner.nextLine());

                        if (indexToPlay >= 0 && indexToPlay < player.length) {
                            ElementoMultimediale elemento = player[indexToPlay];

                            if (elemento instanceof Video) {
                                Video video = (Video) elemento;
                                System.out.println("\nTitolo: " + video.getTitolo());
                                System.out.println("Il volume del video e': " + video.getVolume()
                                        + "\nLa luminosita del video e': " + video.getLuminosita());

                                video.playNow();

                            } else if (elemento instanceof RegistrazioneAudio) {
                                RegistrazioneAudio audio = (RegistrazioneAudio) elemento;
                                System.out.println("Il volume della registrazione audio e': " + audio.getVolume());
                                audio.playNow();

                            } else if (elemento instanceof Immagine) {
                                Immagine immagine = (Immagine) elemento;
                                System.out.println("La luminosita dell'immagine e': " + immagine.getLuminosita());
                                immagine.show();
                            } else {
                                System.out.println("Tipo di elemento non riconosciuto.");
                            }
                        } else {
                            System.out.println("Indice non valido. Riprova.");
                        }
                    } catch (NumberFormatException e) {
                        System.out.println("Errore: inserisci un numero valido.");
                    }
                    break;

                case "3":
                    if (player == null || player.length == 0) {
                        System.out.println("Nessun media disponibile.");
                        break;
                    }

                    System.out.println("\nQuale di questi elementi vuoi modificare?\n");
                    for (int i = 0; i < player.length; i++) {
                        System.out.println(i + ") " + player[i].toString());
                    }

                    System.out.print("\nInserisci il numero dell'elemento: ");
                    try {
                        int indexToModify = Integer.parseInt(scanner.nextLine());

                        if (indexToModify >= 0 && indexToModify < player.length) {
                            ElementoMultimediale elemento = player[indexToModify];

                            if (elemento instanceof Video) {
                                Video video = (Video) elemento;
                                System.out.println("\nTitolo: " + video.getTitolo());
                                System.out.print("\nInserisci di quanto vuoi aumentare il volume (0-10): ");
                                int volume = Integer.parseInt(scanner.nextLine());
                                System.out.print("Inserisci la luminosita per il video (0-10): ");
                                int luminosita = Integer.parseInt(scanner.nextLine());

                                video.alzaVolume(volume);
                                video.alzaLuminosita(luminosita);

                            } else if (elemento instanceof RegistrazioneAudio) {
                                RegistrazioneAudio audio = (RegistrazioneAudio) elemento;
                                System.out.print("Inserisci il volume per l'audio (0-10): ");
                                int volume = Integer.parseInt(scanner.nextLine());
                                audio.alzaVolume(volume);

                            } else if (elemento instanceof Immagine) {
                                Immagine immagine = (Immagine) elemento;
                                System.out.print("Inserisci la luminosita per l'immagine (0-10): ");
                                int luminosita = Integer.parseInt(scanner.nextLine());
                                immagine.alzaLuminosita(luminosita);

                            } else {
                                System.out.println("Tipo di elemento non riconosciuto.");
                            }
                        } else {
                            System.out.println("Indice non valido. Riprova.");
                        }
                    } catch (NumberFormatException e) {
                        System.out.println("Errore: inserisci un numero valido.");
                    }
                    break;

                case "4":
                    System.out.println("\nUscita dal programma. Arrivederci!");
                    System.exit(0);
                    break;

                default:
                    System.out.println("Opzione non valida. Inserisci 1, 2, 3 o 4.");
                    break;
            }
        }

        scanner.close();
    }
}
