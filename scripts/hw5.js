function setMin(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}
console.log(setMin(8, 4));
console.log(setMin(6, 6));

function evenOdd(a) {
    if (a % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(evenOdd(8));
console.log(evenOdd(5));

function raiseToAPower(a) {
    console.log(a * a);
    return a * a;
}
raiseToAPower(4);

const sayHi = function () {
    let age = Number(prompt('введите свой возраст'));
    if (age > 0 && age < 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}
sayHi();


let multiply = (a, b) => {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        alert('Одно или оба значения не являются числом');
    }
    else {
        console.log(a * b);
        return a * b;
    }
}
multiply('t', 3);

let exponentiation = () => {
    let a = Number(prompt('введите число'));
    if (isNaN(a)) {
        alert('Переданный параметр не является числом');
    }
    else {
        console.log(a ** 3);
        return a ** 3;
    }

}
exponentiation();

function getRectangleArea() {
    return this.radius ** 2 * Math.PI;
}
function getRectanglePerimeter() {
    return this.radius * 2 * Math.PI;
}

const circle1 = {
    radius: 3,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};
const circle2 = {
    radius: 4,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());





