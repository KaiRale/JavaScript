console.log('test Unit');


class Unit {
    constructor(x,y,width,height,titleImg) {
        this._x=x;
        this._y=y;
        this._width=width;
        this._height=height;
        this._img=titleImg;
    }

    showImg () {
        let img=new Image();
        img.src="img/"+this._img;
        let x=this._x, y=this._y, width=this._width, height=this._height;
        console.log(img.src);
        img.onload=function () {
            //не хочет понимать такую запись context.drawImage(img,this._x,this._y,this._width,this._height)
            context.drawImage(img,x,y,width,height)
        };
    }


    get x(){
        return this._x;
    }
    get y(){
        return this._y;
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
}

class Cat extends Unit {
    moveCat(someCode) {
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
    catEat (x,y) {

        //стоит ли заморачиваться по цыетам делая, или лучше коллизией?
        let arrFeedColor=[144, 238, 144, 255]
        console.log(typeof arrFeedColor);

        let valueCat=context.getImageData((x+cat._width+1),(y+cat._height+1),1,1).data;
        valueCat=Object.values(valueCat);

        console.log(valueCat);

        for (let i=0; i<valueCat.length; i++) {
        if (valueCat[i]!==arrFeedColor[i]){
            return 'true';
        }
        }
}
}




class Mouse extends Unit {
    constructor(xRand,yRand,width,height,titleImg) {
    super(
        (xRand = Math.floor(Math.random() * (420 - 2)) + 2),
        (yRand = Math.floor(Math.random() * (420 - 2)) + 2),

    );
        this._x=xRand;
        this._y=yRand;
        this._width=width;
        this._height=height;
        this._img=titleImg;
    }


    jump (){
        console.log('njaa');
        //почему то, когда писала тут setTimeout, не работало
        /*setTimeout(
            function(){*/
                context.fillStyle = 'lightgreen';
                context.fillRect(this._x, this._y, 60, 60);
                /*},
            3000)*/
    }
}


/*
let mouse=new Mouse;
function getMouse() {
        let x=Math.floor(Math.random()*(420-2))+2;
        let y=Math.floor(Math.random()*(420-2))+2;
        mouse.showImg('mouse.png',x,y,80,80);

        setTimeout(function(){context.fillStyle = 'green';
        context.fillRect(x, y, 80, 80);},3000)
}
setInterval(getMouse,3000);


function collision(obj1,obj2){
    let XColl=false;
    let YColl=false;

    if ((obj1.x + obj1.width >= obj2.x) && (obj1.x <= obj2.x + obj2.width)) {
        XColl = true;
    }
    if ((obj1.y + obj1.height >= obj2.y) && (obj1.y <= obj2.y + obj2.height)) {
        YColl = true;
    }

    if (XColl&&YColl){
        return true;
    }
    return false;
}

*/
