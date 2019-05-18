 class FormValidator{
     constructor(form) {
         this._form = form;
         this._validate=document.querySelectorAll('.validate');
         this._form.addEventListener('submit',  this.some.bind(this)/*this.clearing()*/);
         this._arr=[];
     }

     addRules(rules){
         this._rules = rules.rules;
         this._messages = rules.messages;

         for (let i = 0; i < this._validate.length; i++) {
             let sp1 = document.createElement('span');
             sp1.setAttribute('class', 'errorText');
             sp1.innerHTML = this._messages[this._validate[i].name];
             let sp2 = this._validate[i];
             let parentElem = sp2.parentNode;
             parentElem.insertBefore(sp1, sp2.nextSibling);
         }
     }

     some (event){
         event.preventDefault();

         for (let i = 0; i < this._validate.length; i++){

             if (!this._rules[this._validate[i].name].test(this._validate[i].value)) {

                 this._validate[i].setAttribute('class', 'invalid');
                 this._validate[i].nextSibling.style.display='inline-block';
                 this._arr.push('true');
             }
             else {
                 this._validate[i].nextSibling.style.display='none';
                 this._validate[i].setAttribute('class', 'valid');
             }

         }
         this.isValid();

     }


     isValid () {
         let err=document.getElementById('error');
         let noErr=document.getElementById('valid');
         console.log(noErr);
         console.log(err);
         if(this._arr.length>0) {
            console.log('есть ошибки');
            this._arr=[];
            err.style.display='block';
            noErr.style.display='none';
         }
         else {
             let noErr=document.getElementsByClassName('noError');
             err.style.display='none';
             noErr.style.display='block';
         }
     }

}


 let newForm = document.forms.someForm;

 let formValidator = new FormValidator(newForm);

 // /login/.test(fieldValue);

 formValidator.addRules({
     rules: {
         login: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
         pwd: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
         email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
     },
     messages: {
         login: "Некоректный login",
         pwd: "Неверно заданный пароль",
         email: "Неверно заданный email"
     }
 });



