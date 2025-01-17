

import java.util.List;
import java.util.stream.Collectors;

import Classes.Order;
import Classes.Product;





public class Esercizio_4 {
    public static void trovaListaClientiTia(Order order) {

        List<Product> books = order.getProducts().stream()
                .filter(product -> "Book".equals(product.getCategory()) && product.getPrice() > 100)
                .collect(Collectors.toList());

        System.out.print("Prodotti nella categoria 'Book':");
        books.forEach(book -> System.out.print(book));
    }
}
