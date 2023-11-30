const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 10) break;
    console.log(arr[i]);
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

let arrs = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
for (let arrIn of arrs) {
    for (let element of arrIn) {
        console.log(element);
    };
}

let Numb = [1, 1, 1];
Numb.push(2, 2, 2);
console.log(Numb);

let Arr = [9, 8, 7, 'a', 6, 5];
Arr = Arr.sort();
let endArr = Arr.pop();
console.log(Arr);

/*let guessNum = [9, 8, 7, 6, 5];
let guess = Number(prompt('угадай число'));
guessNum.filter(el => el === guess) > 0 ? alert('Угадал') : alert('Не угадал');*/

let GuessNum = [9, 8, 7, 6, 5];
let Guess = Number(prompt('угадай число'));
GuessNum.includes(Guess) ? alert('Угадал') : alert('Не угадал');

let string = 'abcdef';
let arrString = string.split('');
arrString = arrString.reverse();
arrString = arrString.join('');
console.log(arrString);

let arrNum = [[1, 2, 3,], [4, 5, 6]];
console.log(arrNum);
arrNum = arrNum.join(',');
console.log(arrNum);
arrNum = arrNum.split();
console.log(arrNum);

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] == 10) break;
    console.log(arr10[i] + arr10[i + 1]);
};

const arrSquare = [2, 3, 4]
let Square = arrSquare.map(item => item ** 2);
console.log(Square);

const getWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let LengthWords = getWords.map(item => item.length);
console.log(LengthWords);


filterPositive1([-1, 0, 5, -10, 56]);
function filterPositive1(array) {
    for (let item of array) {
        if (item < 0) console.log(item);
    };
};

filterPositive2([-25, 25, 0, -1000, -2]);
function filterPositive2(array) {
    for (let item of array) {
        if (item < 0) console.log(item);
    };
};


/*const filterPositive = [-1, 0, 5, -10, 56];
let Positive = filterPositive.filter(item=>item<0);
console.log(Positive);*/



















