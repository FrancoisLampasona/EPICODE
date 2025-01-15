package Backend.Settimana_2.Lezione_3;

import java.util.List;
import java.util.stream.Collectors;

import Backend.Settimana_2.Lezione_3.Classes.Order;
import Backend.Settimana_2.Lezione_3.Classes.Product;

public class Esercizio_4 {
    public static void trovaListaClientiTia(Order order) {

        List<Product> books = order.getProducts().stream()
                .filter(product -> "Book".equals(product.getCategory()) && product.getPrice() > 100)
                .collect(Collectors.toList());

        System.out.print("Prodotti nella categoria 'Book':");
        books.forEach(book -> System.out.print(book));
    }
}
