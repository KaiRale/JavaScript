class Library {
    constructor(libTitle, size){
        this._libTitle = libTitle;
        this._maxSize = size;
        this._books = [];
    }

    addToLibrary(book) {
        if (!(book instanceof Book)) {
            console.log("объект не является объектом Book");
            return;
        }

        if (this._books.length === this._maxSize) {
            console.log("нет места для", book.title);
            return;
        }

        this._books.push(book);
    }

    showAllBooks() {
        if (!this._books.length) {
            console.log("Нет книг в библиотеке");
            return;
        }
        for(let i = 0; i < this._books.length; i++) {
            console.log(this._books[i].title,
                this._books[i].page);
        }
    }


}