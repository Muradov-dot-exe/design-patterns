class BurgerDecorator implements Burger {
  protected burger: Burger;

  constructor(burger: Burger) {
    this.burger = burger;
  }
  getBurgerType(): string {
    return this.burger.getBurgerType();
  }

  public getDescription(): string {
    return this.burger.getDescription();
  }

  public addSauce(sauce: string): void {
    this.burger.addSauce(sauce);
  }

  public isForHome(forHome: boolean): boolean {
    return this.burger.isForHome(forHome);
  }
}

class KetchupDecorator extends BurgerDecorator {
  public addSauce(sauce: string): void {
    if (sauce === "кетчуп") {
      this.burger.addSauce(sauce);
    } else {
      console.log("Невъзможно добавяне на кетчуп към бургер!");
    }
  }
}

class GarlicSauceDecorator extends BurgerDecorator {
  public addSauce(sauce: string): void {
    if (sauce === "чеснов сос") {
      this.burger.addSauce(sauce);
    } else {
      console.log("Невъзможно добавяне на чеснов сос към бургер!");
    }
  }
}
