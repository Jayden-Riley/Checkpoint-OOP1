// Product Class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem Class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price of this item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart Class
class ShoppingCart {
  constructor() {
    this.items = []; // Array to hold shopping cart items
  }

  // Method to add an item to the cart
  addItem(product, quantity) {
    let item = new ShoppingCartItem(product, quantity);
    this.items.push(item);
  }

  // Method to remove an item from the cart by product id
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Method to get the total of all items in the cart
  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Method to display all items in the cart
  displayCart() {
    if (this.items.length === 0) {
      console.log("Your cart is empty.");
    } else {
      this.items.forEach((item) => {
        console.log(
          `Product: ${item.product.name}, Quantity: ${
            item.quantity
          }, Total Price: ${item.getTotalPrice()}`
        );
      });
    }
  }
}

// Test the Shopping Cart

// Create products
let product1 = new Product(1, "Laptop", 1000);
let product2 = new Product(2, "Phone", 500);
let product3 = new Product(3, "Headphones", 150);

// Create a shopping cart
let cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2); // 2 Laptops
cart.addItem(product2, 3); // 3 Phones
cart.addItem(product3, 1); // 1 Headphones

// Display cart items
console.log("Shopping Cart Items:");
cart.displayCart();

// Get total price of items in the cart
console.log("Total Price: " + cart.getTotal());

// Remove an item from the cart
cart.removeItem(2); // Removing the Phone from the cart

// Display cart items after removal
console.log("Shopping Cart Items after removal:");
cart.displayCart();

// Get total price after removal
console.log("Total Price after removal: " + cart.getTotal());
