let a = 10;
alert(a);
a = 20;
alert(a);

let year = prompt("год выпуска первого айфона");
alert(year);

let author = prompt("имя создателя языка JavaScript");
alert(author);

let x = 10;
let y = 2;
alert(`10+2=${x + y}; 10-2=${x - y}; 10*2=${x * y}; 10/2=${x / y}`);

let result = 2 ** 5;
alert(`2 в степени 5 =${result}`);

let aa = 9;
let b = 2;
alert(`остаток деления 9 на 2 = ${aa % b}`);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = prompt('сколько Вам лет?');
alert(age);

const user = {
    name: 'Mike',
    age: 18,
    isAdmin: true
};
user['city of residence'] = prompt('введите город проживания');
user.age = 23;
delete user['city of residence'];
let info = prompt("Что вы хотите узнать о пользователе?");
alert(user[info]);

let Name = prompt('введите Ваше имя');
alert(`Привет, ${Name}!`);







