class Restaurant {
  private static instance: Restaurant;

  private constructor() {}

  public static getInstance(): Restaurant {
    // Създава и връща истанцията на Restaurant(Singleton Model)
    if (!Restaurant.instance) {
      Restaurant.instance = new Restaurant();
    }
    return Restaurant.instance;
  }

  public takeOrder(order: Order): void {
    const chef = Chef.getInstance();
    const cashier = Cashier.getInstance();
    const burger = chef.prepareBurger(order);
    cashier.processOrder(burger);
  }
}
