class BurgerDecorator implements Burger {
  //Декоратор-позволява добавянето на допълнителната информация за бургера
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
  //Тези четири функции отговарят за конкретната информация която предоставяме.
}

class KetchupDecorator extends BurgerDecorator {
  //Допълнителен декоратор , наследява предходния . Отговаря за кетчуп соса
  public addSauce(sauce: string): void {
    if (sauce === "кетчуп") {
      this.burger.addSauce(sauce);
    } else {
      console.log("Невъзможно добавяне на кетчуп към бургер!");
    }
  }
}

class GarlicSauceDecorator extends BurgerDecorator {
  //Също допълнителен декоратор който наследява главния. Отговаря за чесновия сос.
  public addSauce(sauce: string): void {
    if (sauce === "чеснов сос") {
      this.burger.addSauce(sauce);
    } else {
      console.log("Невъзможно добавяне на чеснов сос към бургер!");
    }
  }
}
