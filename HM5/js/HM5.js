(function () {
    'use strict';
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};
/*
Написать функцию со следующими аргументами: объект, from (значение от), to (значение до). Функция должна вернуть объект с товарами,
цены которых лежат в диапазоне от значения from до значения to. Пример вызова функции getGoods(goods, 2000, 3000);
в данном случае функция должна вернуть все товары, у которых цена в диапазоне от 2000 до 3000.
Для проверки функции используйте объект goods из файла с урока.*/

function getGoods(obj,from,to) {
    let tovar={};
    for (let propName in obj){
        if ((obj[propName].price>=from)&&(obj[propName].price<=to)){
            tovar[propName]=(obj[propName]);
        }
    }
    return tovar;
}
console.log(getGoods(goods,2000,3000));
/*
Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект, title - название товара, count - количество товара,
которое нужно добавить в корзину. Функция ищет товар с указанным названием, если количество позволяет, то уменьшает количество
товара на countToCart, если не позволяет, то выводит информацию об этом в консоль и завершает работу.
Для проверки функции используйте объект goods из файла с урока.*/

function addToCart(obj,title,countToCart) {

    for (let propName in obj) {
        if (obj[propName].title === title) {
            if (obj[propName].count >= countToCart) {
                obj[propName].count -= countToCart;
                return obj;
            }
            return 'Недостаточное количество товаров';
        }
        }
}
console.log(addToCart(goods,'Барабаны',6));

//Напишите функцию, которая отсортирует массив объектов books по значению свойства title. Объект в файле с занятия.
let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
];

function sortBooks(arr) {
    arr.sort(function (a,b) {
       if (a.title>b.title){
           return 1;
       }
       if (a.title<b.title){
           return -1;
       }
})
return arr;
}
console.log(sortBooks(books));

/*
Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.).
Выведите на экран текущий день недели.*/

let weekDay={
    первый: "понедельник",
    второй: "вторник",
    третий: "среда",
    четвертый: "четверг",
    пятый: "пятница",
    шестой: "суббота",
    седьмой: "воскресенье",
};

let now=new Date();
if(now.getDay()===0){
    console.log(weekDay.седьмой);
}
if(now.getDay()===1){
    console.log(weekDay.первый);
}
if(now.getDay()===2){
    console.log(weekDay.второй);
}
if(now.getDay()===3){
    console.log(weekDay.третий);
}
if(now.getDay()===4){
    console.log(weekDay.четвертый);
}
if(now.getDay()===5){
    console.log(weekDay.пятый);
}
if(now.getDay()===6){
    console.log(weekDay.шестой);
}

}());