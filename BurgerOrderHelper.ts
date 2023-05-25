interface Order {
  execute(): void;
}

class BurgerOrder implements Order {
  [x: string]: any;
  private burger: Burger;
  private forHome: boolean;

  constructor(burger: Burger, forHome: boolean) {
    this.burger = burger;
    this.forHome = forHome;
  }

  public execute(): void {
    console.log(
      `Приготвяне на ${this.burger.getBurgerType()} бургер с информация:`,
      this.burger.getDescription()
    );
    this.burger.addSauce("кетчуп");
    this.burger.addSauce("чеснов сос");
    if (this.forHome) {
      console.log("Бургерът е за вкъщи.");
    } else {
      console.log("Бургерът не е за вкъщи.");
    }
    console.log("Бургерът е готов.");
  }
}
