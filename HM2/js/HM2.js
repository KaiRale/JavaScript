
//найти в данном массиве такие два числа M и N, чтобы их сумма была равна 7.
let mass=[3,15,4,7,-4,38,0,5,2,75,11,-2,9];

let attemptCount=13;

for (let i = 0; i <= attemptCount; i++){
    for (let k = i+1; k <= attemptCount; k++){
        if (mass[i]+mass[k]===7){
            console.log(mass[i],mass[k]);
        }
    }

}

//Вывести через console.log все числа от 1 до 100, с двумя исключениями
let masssto=[];
otsch=1;
while (otsch<=100) {
    masssto.push(otsch);
    otsch++;
}
console.log(masssto);

let attemptCount3=100;
for (let i = 0; i <= attemptCount3; i++) {

    if ((masssto[i]%5===0) && (masssto[i]%3!=0)) {
        masssto[i]="Five"
    }
    if((masssto[i]%5===0)&& (masssto[i]%3===0)) {
        masssto[i]="ThreeFive"
    }
    if (masssto[i]%3===0){
        masssto[i]="Three";
    }
}
console.log(masssto);

//Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128
let kvadr=[];
let attemptCount4=19;
firstElem=2;
for (let i = 0; i <= attemptCount4; i++) {
    kvadr[i]=firstElem*2;
    firstElem=kvadr[i];
}
console.log(kvadr);


// Определите, можно ли из отрезков с такими длинами составить треугольник.

let otr = parseInt(prompt("Введите длину первого отрезка"));

let otr2 = parseInt(prompt("Введите длину второго отрезка"));

let otr3 = parseInt(prompt("Введите длину третьего отрезка"));

let massotr=[otr,otr2,otr3];
console.log(massotr);

function compareOtr(a,b) {
    if (a>b) return -1;
    if (b>a) return 1;
}
massotr.sort(compareOtr);
console.log(massotr);
let a= massotr[0];
let b= massotr[1];
let c= massotr[2];

console.log(a);
console.log(b);
console.log(c);


if (((a+b)>c) && ((c+b)>a) && ((a+c)>b)) {
    if ((a*a)===(b*b+c*c)) {
         console.log("Прямоугольный треугольник");
    }
    else if ((a*a)<(b*b+c*c)){
        console.log("остроугольнй треугольник");
    }
    else if ((a*a)>(b*b+c*c)){
        console.log("тупоугольный треугольник");
    }

}
else {
    console.log("треугольник не может быть построен");
}




//треугольник из #

let schet=10;
let str='#';
let prob=' ';

for (let i=1; i<schet; i++) {
    prob+=str;
    console.log(prob);
}
