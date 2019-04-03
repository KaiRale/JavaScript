//Написать функцию поиска в строке указанной подстроки и замены ее на новую.
// Строку, ее подстроку для замены и новую подстроку вводит пользователь.


function repl(str,podStr,zamStr) {
    str = prompt('Введите строку');
    podStr = prompt('что заменять?');
    zamStr = prompt('на что заменять?');
    let newStr=str;
    for (let i = 0; i <= str.length; i++) {
        newStr=newStr.replace(podStr, zamStr);
    }
    console.log(newStr);
}
repl();
