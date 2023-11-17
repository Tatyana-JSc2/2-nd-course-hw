let password = 'пароль';
let checkPassword = prompt('Введите пароль');
if (password === checkPassword) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

let c = Number(prompt('введите любое число'));
if (c > 0 && c < 10) {
    alert('верно');
} else {
    alert('не верно');
}
let d = Number(prompt('введите первое число'));
let e = Number(prompt('введите второе число'));
if (d > 100 || e > 100) {
    alert('верно');
} else {
    alert('не верно');
}

let a = Number('2');
let b = Number('3');
alert(a + b);

let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('зима')
        break;
    case 3:
    case 4:
    case 5:
        alert('весна')
        break;
    case 6:
    case 7:
    case 8:
        alert('лето')
        break;
    case 9:
    case 10:
    case 11:
        alert('осень')
        break;
    default:
        alert('такого месяца не существует')
        break;
}



