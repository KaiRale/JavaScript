

let articles = [
    {
        id: 1,
        title: "JS",
        description: "Описание 3",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание 2",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание 4",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание 1",
        author: "Peter"
    }
];


function tableOfArticle(arr) {
    let divTable=document.getElementById('table');
    let table=document.createElement('table');
    divTable.appendChild(table);
    table.setAttribute('id','tbl');
    table.setAttribute('border','1');
    table.setAttribute('cellpadding','5px');
    let tr=document.createElement('tr');
    table.appendChild(tr);


    for ( let key in arr[0]){
        let th=document.createElement('th');
        th.innerText=key;
        th.setAttribute('style', 'text-transform: capitalize');

        tr.appendChild(th);
    }

    for (let i=0; i<=(arr.length-1); i++) {

        let tr=document.createElement('tr');
        for (let key in arr[i]){
            let td=document.createElement('td');
            td.innerText=arr[i][key];
            tr.appendChild(td);
        }
        tr.setAttribute('id',i);
        table.appendChild(tr);
    }

    //дабвляем соритровку

    let sortColumn=document.querySelectorAll('th');
    console.log(sortColumn);

    //вешаем кликер на заголовки столбцов
    for (let i=0; i<sortColumn.length; i++) {
        sortColumn[i].addEventListener('click', sortRow);
    }

    //отслеживаем кликер
    function sortRow(event) {
        let clickElem = event.target;
        console.log(clickElem);
        let clickPuk = clickElem.innerHTML;
        console.log(clickPuk);

        //в новый массив перезаписываем
        let sortTable = arr.slice(0);
        sortTable.sort(function (a, b) {
            let x = a[clickPuk];
            let y = b[clickPuk];
            return x < y ? (-1) : x > y ? 1 : 0;
        });


        //сортируем
        for (let i=0; i<=(sortTable.length-1); i++) {
            let tr=document.createElement('tr');
            //самовыпил строк
            let removeTr=document.getElementById(i);
            removeTr.remove();

            for (let key in sortTable[i]){
                let td=document.createElement('td');
                td.innerText=sortTable[i][key];
                tr.appendChild(td);
            }
            tr.setAttribute('id',i);
            table.appendChild(tr);
        }
    }
}

tableOfArticle(articles);

