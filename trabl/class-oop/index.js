let book = new Book();
book.title = "Книга";
book.page = 45;

let alphabet = new Book();
alphabet.title = "Алфавит";
alphabet.page = 23;

let tails = new ChildBook();
tails.title = "Сказки";
tails.page = 145;

let library = new Library("Библиотека", 2);
library.showAllBooks();
library.addToLibrary(tails);
library.addToLibrary(alphabet);
library.addToLibrary(book);
library.showAllBooks();

console.log(book);
console.log(tails);