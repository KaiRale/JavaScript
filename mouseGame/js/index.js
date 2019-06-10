//осталось реализовать проверку перед перерисовкой мышки
// и  размеры персонажей задавать из конструктора

let cat = new Cat('img/cat.png', [0, 0]);

let mouse1 = new Mouse('img/mouse1.png', [50, 50], 5000);
let mouse2 = new Mouse('img/mouse2.png', [400, 400], 6000);
let mouse3 = new Mouse('img/mouse3.png', [100, 500], 7000);


let game =  new Game(cat, [mouse1, mouse2, mouse3]);
game.initStartPos('canvas');
game.start();