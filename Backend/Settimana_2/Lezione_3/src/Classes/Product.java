package Classes;



public class Product {
    private long id;
    private String name;
    private String category;
    private double price;

    public Product(long id, String name, String category, double price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public double getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "\nProduct" +
                " id = " + id +
                ", name = '" + name + '\'' +
                ", category = '" + category + '\'' +
                ", price = " + price;
    }
}
