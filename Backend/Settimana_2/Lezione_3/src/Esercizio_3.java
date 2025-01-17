
import java.util.List;
import java.util.stream.Collectors;

import Classes.Order;
import Classes.Product;




public class Esercizio_3 {
    public static void trovaBoysFaiSconto(Order order) {

        List<Product> boys = order.getProducts().stream()
                .filter(product -> "Boys".equals(product.getCategory())) 
                .map(product -> new Product(
                        product.getId(),
                        product.getName(),
                        product.getCategory(),
                        product.getPrice() - (product.getPrice() * 0.10)))
                .collect(Collectors.toList());

     
        System.out.print("\n\nProdotti nella categoria 'Boys' con sconto del 10%:");
        boys.forEach(book -> System.out.print(book));
    }
}
