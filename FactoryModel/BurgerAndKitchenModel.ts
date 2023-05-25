interface Burger {
  getDescription(): string;
  addSauce(sauce: string): void;
  getBurgerType(): string;
  isForHome(forHome: boolean): boolean;
}

class RoyalBurger implements Burger {
  private description: string;
  private sauces: string[];
  private burgerType: string;
  private forHome: boolean;

  constructor() {
    this.description = "Кралски бургер";
    this.sauces = [];
    this.burgerType = "кралски";
    this.forHome = false;
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

  public isForHome(): boolean {
    return this.forHome;
  }
}

class ClassicBurger implements Burger {
  private description: string;
  private sauces: string[];
  private burgerType: string;
  private forHome: boolean;

  constructor() {
    this.description = "Класически бургер";
    this.sauces = [];
    this.burgerType = "класически";
    this.forHome = false;
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

  public isForHome(): boolean {
    return this.forHome;
  }
}

class VegetarianBurger implements Burger {
  private description: string;
  private sauces: string[];
  private burgerType: string;
  private forHome: boolean;

  constructor() {
    this.description = "Вегетариански бургер";
    this.sauces = [];
    this.burgerType = "вегетариански";
    this.forHome = false;
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

  public isForHome(): boolean {
    return this.forHome;
  }
}

class Kitchen {
  static createBurger(burgerType: string): Burger {
    throw new Error("Method not implemented.");
  }
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
