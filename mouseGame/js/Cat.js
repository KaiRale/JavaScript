class Cat {
    constructor(path, coords) {
        this._path = path;
        this._coord = coords;
    }


    get path() {
        return this._path;
    }

    set path(value) {
        this._path = value;
    }

    get coord() {
        return this._coord;
    }

    set coord(value) {
        this._coord = value;
    }
}