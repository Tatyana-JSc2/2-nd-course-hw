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

/*дополнительно*/
let evenOdd = Number(prompt('Пожалуйста, введите любое число'));
alert(evenOdd);
if (isNaN(evenOdd)) {
    alert('Число введено некорректно');
}
else {
    if (evenOdd % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}

let clientOS = Number(prompt('введите 0 - для операционной системы iOS, или 1 - для операционной системы Android'));
if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке')
} else if (clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке')
} else {
    alert('вы ввели что-то не то')
}

let clientOs = Number(prompt('введите 0 - для операционной системы iOS, или 1 - для операционной системы Android'));
if (isNaN(clientOs) || clientOs < 0 || clientOs > 1) {
    alert('операционная система введена некорректно');
} else {
    let clientDeviceYear = Number(prompt('введите год создания вашего телефона'));
    if (isNaN(clientDeviceYear) || clientDeviceYear > 2023 || clientDeviceYear < 2007) {
        alert('год создания вашего телефона введен некорректно');
    } else if (clientOs === 0) {
        let year = clientDeviceYear >= 2015 ? alert('Установите версию приложения для iOS по ссылке') : alert('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        let year = clientDeviceYear >= 2015 ? alert('Установите версию приложения для Android по ссылке') : alert('Установите облегченную версию приложения для Android по ссылке');
    }
}




