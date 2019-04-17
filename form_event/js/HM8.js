let form=document.forms.lesson;


//смена цвета
let color=form.elements.color;

for (let i=0; i<color.length; i++) {
    color[i].addEventListener('click', showColor);

    function showColor() {
        form.elements.checkbox_fieldset.style.background=color[i].value;
    }
}

//вывод языков
let lang=form.elements['lang[]'];

//проверили отмеченные заранее языки //надо было просто удалить checked, ну да ладно...
let arrCheck=[];
for (let i=0; i<lang.length; i++){
    if (lang[i].hasAttribute('checked')) {
         arrCheck.push(lang[i].value);
    }
}

for (let i=0; i<lang.length; i++) {
    lang[i].addEventListener('click', consLang);
}
    function consLang(event) {
        let elemLang = event.target.value;
        let consoleArr;
            if (arrCheck.indexOf(elemLang)!== (-1)) {
                let k=arrCheck.indexOf(elemLang);
                arrCheck.splice(k,1);
                consoleArr=arrCheck.join(' ');
            }
            else {
                arrCheck.push(elemLang);
                consoleArr=arrCheck.join(' ');
            }
        console.log(consoleArr);
}

//активация поля

let elem=form.elements.disabledOnOff;
elem.addEventListener("click", activated);

function activated(event) {
    if (event.target.checked) {
        form.elements.disable.removeAttribute('disabled');
    }
    
}
/* let allInput=document.querySelectorAll('input');
console.log(allInput);
почему так не работает?
for (let i=0; i<allInput; i++) {
    if (allInput[i].hasAttribute('disabled')) {
        console.log(allInput[i]);
    }
}*/
