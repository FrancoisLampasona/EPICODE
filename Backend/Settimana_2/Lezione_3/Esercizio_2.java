package Backend.Settimana_2.Lezione_3;

import java.util.List;
import java.util.stream.Collectors;

import Backend.Settimana_2.Lezione_3.Classes.Order;
import Backend.Settimana_2.Lezione_3.Classes.Product;

public class Esercizio_2 {
    public static void trovaBaby(Order order) {

        List<Product> babys = order.getProducts().stream()
                .filter(product -> "Baby".equals(product.getCategory()))
                .collect(Collectors.toList());

        System.out.print("\n\nProdotti nella categoria 'Baby':");
        babys.forEach(book -> System.out.print(book));
    }
}
