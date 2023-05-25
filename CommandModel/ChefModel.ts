class Chef {
  private static instance: Chef;

  private constructor() {}

  public static getInstance(): Chef {
    if (!Chef.instance) {
      Chef.instance = new Chef();
    }
    return Chef.instance;
  }

  public prepareBurger(order: Order): Burger {
    const kitchen = new Kitchen();
    const burger = kitchen.createBurger(order);
    return burger;
  }
}
