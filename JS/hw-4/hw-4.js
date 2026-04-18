function age() {
    let userAge = Number(prompt('Сколько вам лет?'));
    if(userAge < 0){
        alert('Вы ввели неправильное значение');
    } else if(userAge >= 0 && userAge <= 12){
        alert('Привет, друг!');
    } else if(userAge >= 13) {
        alert('Добро пожаловать!');
    }
}
age();