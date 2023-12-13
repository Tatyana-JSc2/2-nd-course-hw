

//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);


//Задание 2
function isPositive(number) {
    return number > 0;
}
function isMale(user) {
    return user.gender === 'male';
}
function filter(array, callback) {
    let result = [];
    array.forEach((el) => {
        if (callback(el)) {
            result.push(el);
        }
    });
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const People = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(People, isMale));


//Задание 3
const IntervalId = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(IntervalId);
    console.log('прошло 30 сукунд!')
}, 30000);


//Задание 4
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000)
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

//Задание 5
function delaySecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delaySecond(() => sayHi('Глеб'))