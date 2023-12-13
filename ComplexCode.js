/*
 Filename: ComplexCode.js
 Description: This code demonstrates a complex web application for managing a restaurant's order system. It includes features such as menus, ordering, reservations, and user authentication.

 Disclaimer: This code is for demonstrative purposes only and may not be fully functional or optimized.
*/

// Constants for menu items
const MENU_ITEMS = {
  PIZZA: { name: 'Pizza', price: 12 },
  BURGER: { name: 'Burger', price: 8 },
  PASTA: { name: 'Pasta', price: 10 },
};

// Define a class for a restaurant order
class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    this.items.forEach(item => {
      total += MENU_ITEMS[item].price;
    });
    return total;
  }
}

// Define a class for managing reservations
class Reservation {
  constructor(name, date, table) {
    this.name = name;
    this.date = date;
    this.table = table;
  }

  displayDetails() {
    console.log(`Reservation: ${this.name} on ${this.date} at Table ${this.table}`);
  }
}

// User authentication module
const UserAuth = (() => {
  let loggedInUser = null;

  const login = (username, password) => {
    // Perform login logic
    loggedInUser = { username };
    console.log(`User '${username}' logged in.`);
  };

  const logout = () => {
    console.log(`User '${loggedInUser.username}' logged out.`);
    loggedInUser = null;
  };

  const getLoggedInUser = () => {
    return loggedInUser;
  };

  return {
    login,
    logout,
    getLoggedInUser,
  };
})();

// Usage Example:
UserAuth.login('john_doe', 'password');
const currentUser = UserAuth.getLoggedInUser();
console.log(`Current User: ${currentUser.username}`);

const sampleOrder = new Order();
sampleOrder.addItem('PIZZA');
sampleOrder.addItem('BURGER');

console.log(`Total: $${sampleOrder.calculateTotal()}`);

const sampleReservation = new Reservation('John Doe', '2022-01-01', 5);
sampleReservation.displayDetails(); 

UserAuth.logout();
