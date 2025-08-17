class Car {
  constructor(public make: string, public model: string, public year: number) {}

  describe() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

const car1 = new Car("Honda", "Civic", 2018);
car1.describe();

// EXAMPLE: Traditional constructor

// EXAMPLE: Traditional property declaration
class Car2 {
  public make: string;
  public model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  describe() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

const car2 = new Car2("Toyota", "Corolla", 2020);
car2.describe();
