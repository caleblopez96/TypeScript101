class Car {
  constructor(public make: string, public model: string, public year: number) {}

  describe() {
    console.log(
      `Car Make: ${this.make}, Car Model: ${this.model}, Car Year: ${this.year}`
    );
  }
}

const car1 = new Car("Honda", "Civic", 2018);
console.log(car1.describe());
