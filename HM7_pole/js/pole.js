
let pole=parseInt(prompt('введите количество столбцов поля'));

//создать массив
let valueCell=['Поездка на море','Машина','Шоколадка'];
for (let i=2; i<(pole*pole-1); i++){
    valueCell.push('пусто');
}
//перемешать массив
function shuffle(arr){
    let j, temp;
    for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
let randomValueCell=shuffle(valueCell);
console.log(randomValueCell);


//создать таблицу
let poleGenerated= {

    init: function (n) {
        let arg=n;
        this.arg=parseInt(n);
        this.table = document.createElement("table");
        this.table.setAttribute('border', '1');
    },

    createRow: function (){
        let m=0;
        for (let i=0; i<this.arg; i++){
           let row=this.table.insertRow();
           for(let k=0; k<this.arg; k++) {
               let cell=row.insertCell();
               cell.classList.add('cell');
               cell.setAttribute('data-name',randomValueCell[m]);
               m++;
           }
        }
    },

    getTable: function (n) {
        this.init(n);
        this.createRow();
        return this.table;
    }
};

let poleTable=document.getElementById('for_pole');
poleTable.appendChild(poleGenerated.getTable(pole));


let eventClick=document.getElementById('for_pole');
eventClick.addEventListener('click', showPresent);


function showPresent(event) {

        let clickElem = event.target;
        console.log('сработало на: ', clickElem);

        let present = clickElem.dataset.name;
        console.log(present);


        if (present !== 'пусто') {
            clickElem.innerText = [present];
            clickElem.classList.add('present');
        }
        if (present === 'пусто') {
            clickElem.innerText = [present];
            clickElem.classList.add('fail');
        }

   // this.removeEventListener('click', showPresent);
}
let count=3;
let element=document.getElementById('counter');
element.innerText='Осталось попыток: '+count;
poleTable.onclick=function () {
    count-=1;
    element.innerText='Осталось попыток: '+count;
    console.log(count);
    if (count<=0){
        element.innerText='Осталось попыток: 0';
        eventClick.removeEventListener('click', showPresent);
    }
}



