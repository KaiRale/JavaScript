(function () {
    'use strict';

//Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их
// и возвращает true, если массивы равны и false, если не равны.


let Arr=[1,2,3,4,5,6,7];
let Arr2=[1,2,3,4,5,6,7];
let Arr3=[1,3,5,7,9];
let ArrName=["misha",'ivan','kolya'];
let ArrName2=["misha",'ivan','kolya'];
let ArrName3=["misha",'ivan'];


function compareArr(arr1,arr2) {
    let chek;
    for (let i = 0; i <= arr1.length; i++) {
        if ((typeof arr1[i])!==(typeof arr2[i])){
            chek=('false');
        return chek;}
    }
   if(arr1.length!==arr2.length) {
       chek=("false");
       return chek;
   }
   for (let i = 0; i <= arr1.length; i++) {
       if(arr1[i]!==arr2[i]) {
           chek=("false");
           return chek;
       }
   }
    if (chek!=="false"){chek="true";return chek;}

   }

let chekMass=compareArr(Arr,Arr2);
console.log(chekMass);

//Дано натуральное число N. Вычислите сумму его цифр, использую рекурсию (строки, массивы и циклы использовать запрещено).

function sumNumb(num) {
    if (num<10) {
        return num;
    }
    else {
        return (num%10+sumNumb(Math.trunc(num/10)));
    }

}
let sum=sumNumb(12413);
console.log(sum);

//Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, третий аргумент - необязательный
//(если он не задан, шаг равен единице) – шаг для построения массива. Функция возвращает массив, который содержит все числа из него,
// включая начальное и конечное. Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].


function range(a,b,c) {
    let arr=[a];
    if ((typeof c)=="undefined") {
        for (let i = a; i < b;) {
            arr.push(a + 1);
            a = a + 1;
            i++;
        }
        return arr;
    }

    else {
        for (let i = a; i < (b-c); ) {
        arr.push(a + c);
        a += c;
        i+=c;
    }
        return arr;}
}

let rangeResult=range(1,20,4);
console.log(rangeResult);

//Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
//будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд).

function tovar(quantity) {
    if((quantity%10)===1) {
        console.log(quantity+" Товар");
        return;
    }
    else if (((quantity%10)===2) || ((quantity%10)===3) || ((quantity%10)===4)) {
        console.log(quantity+' Товара');
        return;
    }
    else  {
        console.log(quantity+" Товаров");
        return;
    }
}

let quant=parseInt(prompt("введите колличество"));
tovar(quant);

//вы вроде говорили, что проверку на типы пока не обязательно делать,
// так что где можно было без нее обойтись я добавлять не стала

} ());


