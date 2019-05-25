console.log('test Unit');


class Unit {  //класс для отрисовки кошки, мыши и гроба. Нужен чтобы гроб отрисовывался нормально
    constructor(width,height,titleImg) {
        this._width=width;
        this._height=height;
        this._img=titleImg;
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get img(){
        return this._img;
    }

    showImg() {
        let img = new Image();
        img.src = "img/" + this._img;
        let x = this._x, y = this._y, width = this._width, height = this._height;
        img.onload = function () {
            context.drawImage(img, x, y, width, height)
        };
    }

   /* draw(img, x, y, width, height ){
        img.onload = function () {
            context.drawImage(img, x, y, width, height)
        }
    }*/
}

class Coord extends Unit { //класс для задания координат, нужен потому что для мыши координаты генерируются рандомно

        set x(x) {
        this._x = x;
    }

    set y(y) {
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
}


class Cat extends Coord {//кошка

    moveCat() { //метод движения кошки
        let img = new Image();
        img.src = 'img/' + this._img;

        context.fillStyle = 'lightgreen';
        context.fillRect(this._x, this._y, this._width, this._height);
        if (event.code === 'KeyD') {
            this._x += 8;
        }
        if (event.code === 'KeyA') {
            this._x -= 8;
        }
        if (event.code === 'KeyW') {
            this._y -= 8;
        }
        if (event.code === 'KeyS') {
            this._y += 8;
        }
        context.drawImage(img, this._x, this._y, this._width, this._height);
    }
}




class Mouse extends Unit {
    static keisX;
    static keisY;
    static keisW;
    static keisH;
    static generate() {
        return Math.floor(Math.random() * (420 - 2)) + 2;
    }




    x(){ //генерируем X
        this._x=Mouse.generate();
        Mouse.keisX=this._x; //запоминаем что нагенерировалось
    }
    y() {
        Mouse.keisH=this._height;
        Mouse.keisW=this._width;
        function generateY() { //генерируем рандомный Y
            let rand;
            rand = Mouse.generate();
            Mouse.keisY=rand; //запоминаем что нагенерировали
            if (check()) {
                return generateY(); //если проверка пройдена, то возвращаем этот рандомный Y
            }
            return rand;
        }

        function check() {  //проверка на пересечение сгенерированных значений
                            // X и Y на принадлежность кошачьим координатам
            let XColl = false;
            let YColl = false;

            if ((Mouse.keisX + Mouse.keisW >= cat._x) && (Mouse.keisX <= cat._x + cat._width)) {
                XColl = true;
            }
            if ((Mouse.keisY + Mouse.keisH >= cat._y) && (Mouse.keisY <= cat._y + cat._height)) {
                YColl = true;
            }
            return XColl && YColl;
        }
        this._y=generateY(); //если имеет место коллизия, то заново генерируем Y
     }

    get gx() { //нужно чтобы в MouseDie был доступ к сгенерированным значениям
        return this._x;
    }

    get gy(){
        return this._y;
    }
    jump (){ //метод который закрашивает поле после того как мышь упрыгала
        context.fillStyle = 'lightgreen';
        context.fillRect(this._x,this._y, 45, 40);
    }
}

class MouseDie {

    constructor(){
        this._interval;
    }
    checkFunck(mouse){ //навешиваем на мышей проверку на коллизию
            this.mouse=mouse; //конкретизируем мышь
            let XColl = false;
            let YColl = false;

            if ((mouse.gx + mouse.width >= cat._x) && (mouse.gx <= cat._x + cat._width)) {
                XColl = true;
            }
            if ((mouse.gy + mouse.height >= cat._y) && (mouse.gy <= cat._y + cat._height)) {
                YColl = true;
            }
            if (XColl && YColl) { //если имеет место коллизия
                console.log('зашел');
                let grob=new Coord(80,80,'deth.png'); // создаем гроб
                grob.x=mouse.gx;    //берем место нахождение мыши
                grob.y=mouse.gy;
                context.fillStyle = 'lightgreen'; //закрашиваем мышь
                context.fillRect(grob.x,grob.y, 45, 40);
                grob.showImg(); //отрисовываем гроб
                /*clearTimeout(this._interval);
                return this._check=1;*/
                this.mouseJump(this.mouse,true); //вызываем прерывание прыжков конкретной
                // мыши и передаем переключатель check

            }

    }
    checkPerim(mouse) { //этот метод нужен чтобы постоянно проверять не наехала ли кошка на мышь,
        // и чтобы кошка не затирала гроб(он постоянно заново отрисовывается пока кошка по нему бродит)
            setInterval(this.checkFunck.bind(this, mouse),100)
    }
    mouseJump (mouse,check) { //метод прыганья мышей по полю через каждые сколько то там секунд
        let key=check;
        console.log('прыг');
        this._interval=setTimeout(function trying() {
            {
                console.log(key); //сюда check приходит пустышкой
            if (key) { //но идея в том чтобы по переключателю останавливалось выполнение прыжков
                clearTimeout(this._interval);
            }
            else {
                mouse.x(); //вызываем генерацию рандомного значения
                mouse.y();
                setTimeout(function () { //через секунду отрисовывается мышь
                    mouse.showImg();
                }, 1000);
                let timeout=setTimeout(function () {
                    if (key) { //тут еще раз проверяется ключ, чтобы если его значение
                                       // изменилось приостанавливались прыжки
                        clearTimeout(timeout);
                    }
                    else { //если check=false мышь дальше прыгает
                        mouse.jump();
                    }}, 5000);
                this._interval=setTimeout(trying,6000); //и вся эта байдота повторяется каждые 6 секунд
            }}},6000);
    }

}
