console.log('test Unit');


class Unit {
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
            //не хочет понимать такую запись context.drawImage(img,this._x,this._y,this._width,this._height)
            context.drawImage(img, x, y, width, height)
        };
    }
}

class Deth extends Unit {
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


class Cat extends Deth {

    moveCat() {
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


    //Шторм настаивает чтобы я catEat сделала static, но я не понимаю зачем
   /* catEat(x,y) {

               //стоит ли заморачиваться по цыетам делая, или лучше коллизией?
               let arrFeedColor=[144, 238, 144, 255];
               let firstAngle,secondAngle,thirdAngle,fourthAngle;

               //углы кошки
               firstAngle=context.getImageData((x-1),(y-1),1,1).data;
               secondAngle=context.getImageData((x+cat._width+1),(y-1),1,1).data;
               thirdAngle=context.getImageData((x-1),(y+cat._height+1),1,1).data;
               fourthAngle=context.getImageData((x+cat._width+1),(y+cat._height+1),1,1).data;

               firstAngle=Object.values(firstAngle);

               secondAngle=Object.values(secondAngle);
               thirdAngle=Object.values(thirdAngle);
               fourthAngle=Object.values(fourthAngle);


               for (let i=0; i<firstAngle.length; i++) {
               if (firstAngle[i]!==arrFeedColor[i]){
                   return 'true';
               }
               }

               for (let i=0; i<secondAngle.length; i++) {
                   if (secondAngle[i]!==arrFeedColor[i]){
                       return 'true';
                   }
               }


               for (let i=0; i<thirdAngle.length; i++) {
                   if (thirdAngle[i]!==arrFeedColor[i]){
                       return 'true';
                   }
               }


               for (let i=0; i<fourthAngle.length; i++) {
                   if (fourthAngle[i]!==arrFeedColor[i]){
                       return 'true';
                   }
               }

    }*/
}




class Mouse extends Unit {
    static keisX;
    static keisY;
    static keisW;
    static keisH;
    static generate() {
        return Math.floor(Math.random() * (420 - 2)) + 2;
    }


    x(){
        this._x=Mouse.generate();
        Mouse.keisX=this._x;
    }
    y() {
        Mouse.keisH=this._height;
        Mouse.keisW=this._width;
        function generateY() {
            let rand;
            rand = Mouse.generate();
            Mouse.keisY=rand;
            if (check()) {
                return generateY();
            }
            return rand;
        }

        function check() {
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
        this._y=generateY();
     }

    get gx() {
        return this._x;
    }

    get gy(){
        return this._y;
    }
    jump (){
        context.fillStyle = 'lightgreen';
        context.fillRect(this._x,this._y, 90, 80);
    }
}

class MouseDie {
    //static check=false;
    constructor(){
        this._check = false;
    }
    static interval;
    checkFunck(mouse){

            let XColl = false;
            let YColl = false;

            if ((mouse.gx + mouse.width >= cat._x) && (mouse.gx <= cat._x + cat._width)) {
                XColl = true;
            }
            if ((mouse.gy + mouse.height >= cat._y) && (mouse.gy <= cat._y + cat._height)) {
                YColl = true;
            }
            if (XColl && YColl) {
                // MouseDie.check = !MouseDie.check;
                this._check=!this._check;
                console.log('зашел');
                let grob=new Deth(80,80,'deth.png');
                grob.x=mouse.gx;
                grob.y=mouse.gy;
                context.fillStyle = 'lightgreen';
                context.fillRect(grob.x,grob.y, 90, 80);
                grob.showImg();
                clearTimeout(MouseDie.interval);
            }

    }
    checkPerim(mouse) {
            setInterval(this.checkFunck.bind(this, mouse),100)
    }
    mouseJump (mouse) {
    console.log('прыг');

        console.log(MouseDie.check);
        MouseDie.interval=setTimeout(function trying() {
             {
            if (MouseDie.check) {
                console.log(MouseDie.check);
                clearTimeout(MouseDie.interval);
            }
            else {
                mouse.x();
                mouse.y();
                setTimeout(function () {
                    mouse.showImg();
                }, 1000);
                let timeout=setTimeout(function () {
                    if (MouseDie.check) {
                        clearTimeout(timeout);

                    }
                    else {
                        mouse.jump();
                    }}, 5000);
                MouseDie.interval=setTimeout(trying,6000);
            }}},6000);
    }

}
