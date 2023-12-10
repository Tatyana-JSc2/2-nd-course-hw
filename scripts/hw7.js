
//Задание 1
const string = 'js';
console.log(string.toUpperCase());

//Задание 2
function searchStart(array, string) {
    let result = [];
    for (let item of array) {
        if (item.toLowerCase().startsWith(string.toLowerCase())) result.push(item);
    }
    return result;
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], "ко"));

//Задание 3
function roundDown(Value) {
    return Math.floor(Value);
}
console.log(roundDown(32.58884));


function roundUp(Value) {
    return Math.ceil(Value);
}
console.log(roundUp(32.58884));


function roundNear(Value) {
    return Math.round(Value);
}
console.log(roundNear(32.58884));

//Задание 4
function selectNum(a, s, d, f, g, h) {
    console.log(Math.max(a, s, d, f, g, h));
    console.log(Math.min(a, s, d, f, g, h));
}
selectNum(52, 53, 49, 77, 21, 32);

//Задание 5
function getRandom(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandom(1, 10));

//Задание 6
function getRandomArrNumbers(Value) {
    let RandomArr = [];
    for (let i = 0; i < Math.floor(Value / 2); i++) {
        RandomArr.push(Math.round(Math.random() * (Value)));
    }
    return RandomArr;
}
console.log(getRandomArrNumbers(9));

//Задание 7
function RandomNumber(Value1, Value2) {
    return Math.round(Math.random() * (Value2 - Value1)) + Value1;
}
console.log(RandomNumber(12, 52));

//Задание 8
let myDate1 = new Date();
console.log(myDate1);

//Задание 9

/*let currentDate1;
currentDate1 = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate1 + days73;
let days1Before73 = new Date(searchDate);
console.log(days1Before73);

let currentDate2 = new Date();
let daysBefore73 = new Date(+currentDate2 + (73 * 24 * 60 * 60 * 1000));
console.log(daysBefore73);*/

let currentDate = new Date();
currentDate.getDate(currentDate.setDate(73));
console.log(currentDate);


//Задание 10
let myDate = new Date();
const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + ".";
let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
console.log(fullDate);
console.log(fullTime);




