interface Order {
  execute(): void;
}

class BurgerOrder implements Order {
  [x: string]: any;
  private burger: Burger;

  constructor(burger: Burger) {
    this.burger = burger;
  }

  public execute(): void {
    console.log(
      `Приготвяне на ${this.burger.getBurgerType()} бургер с информация:`,
      this.burger.getDescription()
    );
    this.burger.addSauce("кетчуп");
    this.burger.addSauce("чеснов сос");

    console.log("Бургерът е готов!");
  }
}
