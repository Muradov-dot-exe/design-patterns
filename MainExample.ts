const restaurant = Restaurant.getInstance();

const order1: Order = { execute: () => {} };
const order2: Order = { execute: () => {} };
const order3: Order = { execute: () => {} };

restaurant.takeOrder(order1);
restaurant.takeOrder(order2);
restaurant.takeOrder(order3);
