export class Car {
  constructor(private color: string, private year: number) {
    this.color = color;
    this.year = year;
  }

  drive() {
    this.putInGear();
    this.pressPedal();
    this.turnWheel();
  }

  private putInGear() {}
  private pressPedal() {}
  private turnWheel() {}
}
