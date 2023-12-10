let startSeasons = () => {
    let monthNumber = () => {
        let a = Number(prompt('введите номер месяца (от 1 до 12)'));
        if (a === 1 || a === 2 || a === 12) {
            return 'зима';
        } else if (a === 3 || a === 4 || a === 5) {
            return 'весна';
        } else if (a === 6 || a === 7 || a === 8) {
            return 'лето';
        } else if (a === 9 || a === 10 || a === 11) {
            return 'осень';
        } else {
            return 'номер месяца введен неверно';
        }
    }
    alert(monthNumber());
}


function filterFruit() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);
    let Guess1 = prompt('Чему равнялся первый элемент массива?');
    let Guess2 = prompt('Чему равнялся последний элемент массива?');
    if (arr[0].toLowerCase() === (Guess1.toLowerCase()) && arr[6].toLowerCase() === (Guess2.toLowerCase())) {
        alert('Поздравляем, Вы угадали!');
    }
    else if
        (arr[0].toLowerCase() === (Guess1.toLowerCase()) || arr[6].toLowerCase() === (Guess2.toLowerCase())) {
        alert('Вы были близки к победе!');
    } else alert('Вы ответили неверно');
}


