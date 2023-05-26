class Cashier {
  //Приема поръчка и създава обект който се връща към Chef
  [x: string]: any;
  private static instance: Cashier;
  private chef: Chef;

  constructor(chef: Chef) {
    this.chef = chef;
  }
  public static getInstance(): Cashier {
    if (!Cashier.instance) {
      Cashier.instance = new Cashier(Chef.getInstance());
    }
    return Cashier.instance;
  }

  public takeOrder(burgerType: string, forHome: boolean): void {
    const burger: Burger = Kitchen.createBurger(burgerType);
    burger.addSauce("кетчуп");
    burger.addSauce("чеснов сос");
    burger.isForHome(forHome);

    this.chef.executeOrder(burger);
  }
}
