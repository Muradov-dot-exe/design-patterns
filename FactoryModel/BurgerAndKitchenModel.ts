interface Burger {
  getDescription(): string;
  addSauce(sauce: string): void;
  getBurgerType(): string;
}

class RoyalBurger implements Burger {
  private description: string;
  private sauces: string[];
  private burgerType: string;

  constructor() {
    this.description = "Кралски бургер";
    this.sauces = [];
    this.burgerType = "кралски";
  }

  public getDescription(): string {
    return this.description;
  }

  public addSauce(sauce: string): void {
    this.sauces.push(sauce);
  }
  public getBurgerType(): string {
    return this.burgerType;
  }
}

class ClassicBurger implements Burger {
  private description: string;
  private sauces: string[];
  private burgerType: string;

  constructor() {
    this.description = "Класически бургер";
    this.sauces = [];
    this.burgerType = "класически";
  }

  public getDescription(): string {
    return this.description;
  }

  public addSauce(sauce: string): void {
    this.sauces.push(sauce);
  }
  public getBurgerType(): string {
    return this.burgerType;
  }
}

class VegetarianBurger implements Burger {
  private description: string;
  private sauces: string[];
  private burgerType: string;

  constructor() {
    this.description = "Вегетариански бургер";
    this.sauces = [];
    this.burgerType = "вегетариански";
  }

  public getDescription(): string {
    return this.description;
  }

  public addSauce(sauce: string): void {
    this.sauces.push(sauce);
  }
  public getBurgerType(): string {
    return this.burgerType;
  }
}

class Kitchen {
  public createBurger(order: Order): Burger {
    if (order instanceof BurgerOrder) {
      const burgerType = order.getBurgerType();
      switch (burgerType) {
        case "кралски":
          return new RoyalBurger();
        case "класически":
          return new ClassicBurger();
        case "вегетариански":
          return new VegetarianBurger();
        default:
          throw new Error("Невалиден тип бургер!");
      }
    }
    throw new Error("Невалидна поръчка за бургер!");
  }
}
