import java.util.List;
import java.util.stream.Collectors;

import Classes.Order;
import Classes.Product;




public class Esercizio_2 {
    public static void trovaBaby(Order order) {

        List<Product> babys = order.getProducts().stream()
                .filter(product -> "Baby".equals(product.getCategory()))
                .collect(Collectors.toList());

        System.out.print("\n\nProdotti nella categoria 'Baby':");
        babys.forEach(book -> System.out.print(book));
    }
}
