const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

const nums = [1, 5, 4, 10, 0, 3];

nums.forEach((el, index) => {
    if (nums[index] == 4) {
        console.log(index);
    };
})

const Nums = [1, 5, 4, 10, 0, 3];
console.log(Nums.indexOf(4));

let numb = [1, 3, 5, 10, 20];
numb = numb.join(' ');
console.log(numb);

let arrs = [];
for (let i = 0; i < 3; i++) {
    arrs[i] = [];
    for (let j = 0; j < 3; j++) {
        arrs[i][j] = 1;
    }
}
console.log(arrs);


let Numb = [1, 1, 1];
Numb.push(2, 2, 2);
console.log(Numb);

let Arr = [9, 8, 7, 'a', 6, 5];
Arr = Arr.sort();
let endArr = Arr.pop();
console.log(Arr);

let guessNum = [9, 8, 7, 6, 5];
let guess = Number(prompt('угадай число'));
guessNum.filter(el => el === guess) > 0 ? alert('Угадал') : alert('Не угадал');

let GuessNum = [9, 8, 7, 6, 5];
let Guess = Number(prompt('угадай число'));
GuessNum.includes(Guess) ? alert('Угадал') : alert('Не угадал');

let string = 'abcdef';
let arrString = string.split('');
arrString = arrString.reverse();
arrString = arrString.join('');
console.log(arrString);

let String = 'abcdef';
console.log(String.split('').reverse().join(''));

let arrNum = [[1, 2, 3,], [4, 5, 6]];
console.log(arrNum.flat());

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

const arrSquare = [2, 3, 4];
function Square(arrSquare) {
    return arrSquare.map(item => item ** 2);
}
console.log(Square(arrSquare));


const getWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function LengthWords() {
    return getWords.map(item => item.length);
}
console.log(LengthWords());

const GetWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const lengthWords = GetWords.map(item => {
    return item.length;
});
console.log(lengthWords);


function filterPositive1(array) {
    let ArrPositive1 = [];
    for (let item of array) {
        if (item < 0) ArrPositive1.push(item);
    }
    return ArrPositive1;
}
console.log(filterPositive1([-1, 0, 5, -10, 56]));



function filterPositive2(array) {
    let ArrPositive2 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) ArrPositive2.push(array[i]);
    }
    return ArrPositive2;
}
console.log(filterPositive2([-25, 25, 0, -1000, -2]));

















