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
    console.log(monthNumber());
}

