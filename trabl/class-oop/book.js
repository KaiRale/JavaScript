class Book {

    // сеттеры
    set title(title) {
        if (title.length < 2) {
            return;
        }
        this._title = title;
    }
    set page(pageCount) {
        if (pageCount < 10) {
            return;
        }
        this._page = pageCount;
    }

    // геттеры
    get title() {
        return this._title;
    }

    get page() {
        return this._page;
    }
}

// наследование
class ChildBook extends Book{
    // переопределение метода родителя
    get title(){
        return "Детская книга: " + super.title;
    }
}
