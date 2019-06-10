class Mouse {
    constructor(path, coord, interval) {
        this._path = path;
        this._coord = coord;
        this._interval = interval;
        this._deth = 'img/deth.png'; // можно задать, как остальные свойства
        this._eaten = false;

    }

    regenerateCoord(enemy){
        if(!this.eaten){
            enemy.coord[0] = this.getRandom(20, 900);
            enemy.coord[1] = this.getRandom(20, 900);
        }
    }

    getRandom(min, max) {
        return Math.random() * (max-min) + min;
    }
    get eaten() {
        return this._eaten;
    }

    set eaten(value) {
        this._eaten = value;
    }

    get deth() {
        return this._deth;
    }

    set deth(value) {
        this._deth = value;
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

    get interval() {
        return this._interval;
    }

    set interval(value) {
        this._interval = value;
    }
}