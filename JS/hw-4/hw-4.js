const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for(let key in obj) {
    console.log(`Имя сотрудника ${key} - зарплата ${obj[key]} доларов`);
}