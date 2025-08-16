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
