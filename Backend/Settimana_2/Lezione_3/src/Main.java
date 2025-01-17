
import java.time.LocalDate;
import java.util.ArrayList;

import Classes.Customer;
import Classes.Order;
import Classes.Product;



public class Main {
    public static void main(String[] args) {

        Customer customer = new Customer(1, "Martino Sempre Bello", 2);

        ArrayList<Product> products = new ArrayList<>();

        // Prodotti Libri !

        products.add(new Product(1, "Il Signore degli Anelli", "Book", 25.99));
        products.add(new Product(2, "1984", "Book", 151.50));
        products.add(new Product(3, "Orgoglio e Pregiudizio", "Book", 110.99));
        products.add(new Product(4, "Il Grande Gatsby", "Book", 112.00));
        products.add(new Product(5, "Harry Potter e la Pietra Filosofale", "Book", 20.00));
        products.add(new Product(6, "La Divina Commedia", "Book", 310.00));

        // Prodotti Casuali !

        products.add(new Product(7, "Laptop Lenovo", "Boys", 1200.00));
        products.add(new Product(8, "Smartphone Samsung", "Boys", 800.00));
        products.add(new Product(9, "Sedia Ergonomica", "Boys", 150.00));
        products.add(new Product(10, "Borraccia Termica", "Boys", 20.00));
        products.add(new Product(11, "Passegino", "Baby", 20.00));
        products.add(new Product(12, "Baby Monitor", "Baby", 20.00));
        products.add(new Product(13, "Bavaglio", "Bby", 20.00));

        Order order = new Order(1, "Completed", LocalDate.now(), LocalDate.now().plusDays(5), products, customer);

        Esercizio_1.trovaBook(order);
        Esercizio_2.trovaBaby(order);
        Esercizio_3.trovaBoysFaiSconto(order);

    }
}
