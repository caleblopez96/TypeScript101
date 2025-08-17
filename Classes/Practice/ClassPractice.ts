// Create a class that represents a book in a library.

// ## Requirements

// ### Class Name
// - `LibraryBook`

// ### Properties
// - `title` (string)
// - `author` (string)
// - `year` (number)
// - `isCheckedOut` (boolean, default: `false`)

// ### Constructor
// - Initializes `title`, `author`, and `year`
// - `isCheckedOut` should default to `false` and **not** be passed to the constructor

// ### Methods
// 1. `checkOut()`
//    - Sets `isCheckedOut` to `true`
//    - Prints: `"The book [title] has been checked out."`

// 2. `returnBook()`
//    - Sets `isCheckedOut` to `false`
//    - Prints: `"The book [title] has been returned."`

// 3. `describe()`
//    - Prints the book’s details in one line:
//      ```
//      Title: [title], Author: [author], Year: [year], Checked Out: [true/false]
//      ```

// ### Tasks to Practice
// - Create at least **two book objects**
// - Call `describe()` on each object
// - Call `checkOut()` and `returnBook()` on one object, then show updated state with `describe()`

// ## Hints / Tips
// - Use TypeScript type annotations: `title: string`, `year: number`, etc.
// - Use `this.property` inside methods to refer to the instance’s properties
// - Use `new LibraryBook(...)` to create instances

class LibraryBook {
  constructor(
    public title: string,
    public author: string,
    public year: number,
    public isCheckedOut: boolean = false
  ) {}

  checkOut() {
    this.isCheckedOut = true;
    console.log(`The book ${this.title} has been checked out.`);
  }

  returnBook() {
    this.isCheckedOut = false;
    console.log(`The book ${this.title} has been returned.`);
  }

  describe() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Checked Out: ${this.isCheckedOut}`
    );
  }
}

// create two books
const book1 = new LibraryBook("Harry Potsmoker", "Jk Rowling", 2005);
const book2 = new LibraryBook("Book Title 2", "Author Name 2", 2010);

// show initial state
book1.describe();
book2.describe();

// call checkOut and returnBook
book1.checkOut();
book1.describe();
book1.returnBook();
book1.describe();

//--------------------------------------------------------------------------------
// Requirements:

// Class Name: Student

// Properties:

// name (string)
// grades (array of numbers, default: empty array [])

// Constructor:
// Initializes name
// grades should default to an empty array

// Methods:
// addGrade(grade: number) → adds a grade to the grades array
// getAverage() → returns the average of all grades
// describe() → prints:
// Student: [name], Grades: [grade1, grade2, ...], Average: [average]

// Tasks to Practice:
// Create at least two student objects
// Add grades using addGrade()
// Call describe() to show each student’s grades and average

class Student {
  constructor(public name: string, public grades: Array<number> = []) {}

  displayGrades() {
    this.grades.forEach((grade) => console.log(grade));
  }

  addGrade(newGrades: number | number[]) {
    if (Array.isArray(newGrades)) {
      this.grades.push(...newGrades);
    } else {
      this.grades.push(newGrades);
    }
  }

  getAverage() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, curVal) => acc + curVal, 0);
    return sum / this.grades.length;
  }

  describe() {
    console.log(
      `Student: ${this.name}, Grades: ${this.grades.join(
        ", "
      )}, Average: ${this.getAverage()}`
    );
  }
}

const student1 = new Student("Bob", [90, 75, 80, 100]);
const student2 = new Student("Sally", [75, 80, 60, 95]);

student1.addGrade([90, 30]);
student2.addGrade(85);

student1.describe(); // Student: Bob, Grades: 90, 75, 80, 100, 90, 30, Average: 77.5
student2.describe(); // Student: Sally, Grades: 75, 80, 60, 95, 85, Average: 79
