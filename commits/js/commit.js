
let form=document.forms.for_commit;
let autor=form.elements.autor;
let textArea=form.elements.text;

let parentElem=form.parentNode;
//дата
let date=new Date;
let Time=[date.getHours(),date.getMinutes()];
let Data=[date.getDate(),date.getMonth(),date.getFullYear()];
let timeCommit=(Time.join(':'))+' ' +(Data.join('.'));
console.log(timeCommit);



//кликер
let getCommit=form.elements.knopka;
getCommit.addEventListener("click", addCommit);

let error=document.getElementById('error');
let correctly=document.getElementById('correctly');

function addCommit() {
    console.log('нажато');
    console.log(textArea.value.length);

    if (textArea.value.length<12) {
        error.style.display='block';
        correctly.style.display='none';
    }
    if (textArea.value.length>=12) {
        error.style.display='none';
        correctly.style.display='block';

        //заполняем div
        let div=document.createElement("div");
        let p=document.createElement("p");
        let pTime=document.createElement('p');
        pTime.setAttribute('id','pTime');
        pTime.innerHTML=timeCommit;

        let pAut=document.createElement("p");
        pAut.setAttribute('id','pAut');
        pAut.innerHTML=autor.value;

        let img=document.createElement('img');
        img.setAttribute('src','img/pic1.jpg');
        div.setAttribute('id','com');
        p.innerHTML=textArea.value;

        div.appendChild(img);
        div.appendChild(pAut);
        div.appendChild(p);
        div.appendChild(pTime);

        parentElem.insertBefore(div, form.nextSibling);

        textArea.value='';
        autor.value='';
    }

}

