console.log('test Game');

//достали канву
let canvas=document.getElementsByTagName('canvas')[0];
canvas.width=800;
canvas.height=800;

//раскрасили канву
let context=canvas.getContext('2d');
context.fillStyle='lightgreen';
context.fillRect(0,0,800,800);


//отрисовали кошку
let cat=new Cat(136,152,'cat1.png');
cat.x=200;
cat.y=200;
cat.showImg();



//добавляем событие
document.addEventListener("keypress", function (event) {
    cat.moveCat(event.code);
    /*if (cat.catEat(cat.x,cat.y)==='true') {
        console.log('есть контакт')
    }*/
});

//просто одна мышка, чтобы не бесили прыгающие

let mouse1=new Mouse(90,80,'mouse.png');
let die1=new MouseDie();
die1.checkPerim(mouse1);
die1.mouseJump(mouse1);

let mouse2=new Mouse(90,80,'mouse1.png');
let die2=new MouseDie();
die2.checkPerim(mouse2);
die2.mouseJump(mouse2);

let mouse3=new Mouse(90,80,'mouse2.png');
let die3=new MouseDie();
die3.checkPerim(mouse3);
die3.mouseJump(mouse3);

