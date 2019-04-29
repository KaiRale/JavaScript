console.log('test Game');

//достали канву
let canvas=document.getElementsByTagName('canvas')[0];
canvas.width=500;
canvas.height=500;

//раскрасили канву
let context=canvas.getContext('2d');
context.fillStyle='lightgreen';
context.fillRect(0,0,500,500);


//отрисовали кошку
let cat=new Cat(20,15,70,80,'cat.png');
cat.showImg();

//добавляем событие
document.addEventListener("keypress", function (event) {
    cat.moveCat(event.code);
    cat.catEat(cat.x,cat.y)
});

//просто одна мышка, чтобы не бесили прыгающие
/*let mouse=new Mouse(" "," ",60,60,'mouse.png');
mouse.showImg();*/

//мыши прыгают
let mouse=[];

//можно ли как то сделать чтобы мыши не затирали кошку при перерисовке?
setInterval(function mouseJump() {
    for (let i = 0; i <= 3; i++) {
        mouse[i] = new Mouse('', '',60,60,'mouse.png');
            setTimeout(function () {
                mouse[i].showImg();
            }, 1000);
            setTimeout(function () {
                mouse[i].jump();
            }, 5000);
    }
    console.log(mouse)
},6000);




/*
//ищем мышей
let imageData=context.getImageData(50,50,1,1).data;

*/
