class Cashier {
  private static instance: Cashier;

  private constructor() {}

  public static getInstance(): Cashier {
    if (!Cashier.instance) {
      Cashier.instance = new Cashier();
    }
    return Cashier.instance;
  }

  public processOrder(burger: Burger): void {
    const order = new BurgerOrder(burger);
    order.execute();
  }
}
