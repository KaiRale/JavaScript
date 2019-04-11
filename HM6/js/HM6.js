(function () {
    'use strict';

//1я задача
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: 'pic1.jpg'
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: 'pic2.jpg'
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: 'pic3.jpg'
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: 'pic4.jpg'
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: 'pic5.jpg'
    }
};



function createElems(obj) {
    for (let key in obj) {
        console.log(obj[key].title);
        let title = document.createElement("h2");
        title.innerText = obj[key].title;
        title.classList.add('h2');

        console.log(obj[key].img);
        let img = document.createElement("img");
        img.setAttribute("src", "img/" + obj[key].img);
        img.classList.add('img');

        console.log(obj[key].price);
        let price=document.createElement('p');
        price.innerText = obj[key].price;
        price.classList.add('p');

        let div = document.createElement('div');
        div.classList.add('border', 'boxShadow');
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(price);


        let goodsDiv = document.getElementById("goods");
        goodsDiv.appendChild(div);
    }
}

createElems(goods);

//2я задача
let articles = [
    {
        id: 1,
        title: "JS",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание",
        author: "Peter"
    }
];


function tableOfArticle(arr) {
        let divTable=document.getElementById('table');
        let table=document.createElement('table');
        divTable.appendChild(table);
        table.setAttribute('id','tbl');
        table.setAttribute('border','1');
        table.setAttribute('cellpadding','5px')
        let tr=document.createElement('tr');
        table.appendChild(tr);

        for ( let key in arr[0]){
            let th=document.createElement('th');
            th.innerText=key;
            th.setAttribute('style', 'text-transform: capitalize');
            tr.appendChild(th);
        }

        for (let i=1; i<=arr.length; i++) {
            let tr=document.createElement('tr');
            for (let key in arr[i]){
                let td=document.createElement('td');
                td.innerText=arr[i][key];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
}

tableOfArticle(articles);

}());