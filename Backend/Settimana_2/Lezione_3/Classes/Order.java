package Backend.Settimana_2.Lezione_3.Classes;

import java.time.LocalDate;
import java.util.ArrayList;

public class Order {
    private long id;
    private String status;
    private LocalDate orderDate;
    private LocalDate deliveryDate;
    private ArrayList<Product> prodotti;
    private Customer cliente;

    public Order(long id, String status, LocalDate orderDate, LocalDate deliveryDate, ArrayList<Product> prodotti,
            Customer cliente) {
        this.id = id;
        this.status = status;
        this.orderDate = deliveryDate;
        this.deliveryDate = deliveryDate;
        this.prodotti = prodotti;
        this.cliente = cliente;
    }

    public Order(long id, String status, LocalDate deliveryDate, ArrayList<Product> prodotti,
            Customer cliente) {
        this.id = id;
        this.status = status;
        this.orderDate = LocalDate.now();
        this.deliveryDate = deliveryDate;
        this.prodotti = prodotti;
        this.cliente = cliente;
    }

    public ArrayList<Product> getProducts() {
        return prodotti;
    }

    public LocalDate getDataOrdine() {
        return orderDate;
    }

    public LocalDate getArrivoOrdine() {
        return deliveryDate;
    }

    public Customer getCliente() {
        return cliente;
    }

    @Override
    public String toString() {
        return "Order : " +
                "\nid = " + id +
                ", status = '" + status + '\'' +
                ", orderDate = " + orderDate +
                ", deliveryDate = " + deliveryDate +
                ",\nprodotti = " + prodotti +
                ",\ncliente = " + cliente;
    }
}
