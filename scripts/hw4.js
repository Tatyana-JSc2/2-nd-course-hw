let hello = 0
while (hello < 2) {
    console.log("Привет!");
    hello++;
}

let number = 1
do {
    console.log(number);
    number++;
} while (number < 6) {
}

for (let Num = 7; Num < 23; Num++) {
    console.log(Num);
}

const salary = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (let worker in salary) {
    alert(`${worker} — зарплата ${salary[worker]} долларов.`);
}

for (let n = 1000, num = 0; n > 50; num++) {
    n /= 2;
    if (n < 50) {
        console.log(`результат деления = ${n}`);
        console.log(`количество итераций равно ${num}`);
    }
}

let n = 1000, num = 0;
do {
    n /= 2;
    if (n > 50) {
        num++;
    }
} while (n > 50) {
} if (n < 50) {
    console.log(`результат деления = ${n}`);
    console.log(`количество итераций равно ${num}`);
}

let n = 1000, num = 0;
while ((n > 50)) {
    n /= 2;
    if (n > 50) {
        num++;
    }
}
console.log(`результат деления = ${n}`);
console.log(`количество итераций равно ${num}`);

for (let day = Number(prompt('введите число, на которое приходится первая пятница в этом месяце')), fr = 0; day <= 31; day++) {
    if (fr == 0 || day == fr) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
        fr = day + 7;
    }
}





