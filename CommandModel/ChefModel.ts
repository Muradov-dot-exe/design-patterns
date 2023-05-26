class Chef {
  //Приема поръчката и приготвя бургера с "Kitchen"
  [x: string]: any;
  private static instance: Chef;

  private constructor() {}

  public static getInstance(): Chef {
    //Създаваме нова истанция на готвач
    if (!Chef.instance) {
      Chef.instance = new Chef();
    }
    return Chef.instance;
  }

  public prepareBurger(order: Order): Burger {
    //Създаваме нова истанция на класа за приготвяне на бургера
    const kitchen = new Kitchen();
    const burger = kitchen.createBurger(order);
    return burger;
  }
}
