'use strict'

alert('JS_PW_04_01')


/* Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью document.write и вернуть пустой объект. */

var max = 999;
var numbClass = {
    number: Number(prompt('Введите число от 0 до 999 ')), // Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
    units: 0,
    dozen: 0,
    hundreds: 0,
};
if (numbClass.number <= 9) {
    numbClass.units = numbClass.number;
} else if (numbClass.number <= 999) {
    numbClass.units = Math.floor(numbClass.number % 10);
    numbClass.dozen = Math.floor(numbClass.number / 10 % 10);
    numbClass.hundreds = Math.floor(numbClass.number / 100 % 10);
} else {
    numbClass.number = 0;
    document.write('Вы ввели число за диапазоном 0 - 999');
}
document.write(numbClass.units);
document.write(numbClass.dozen);
document.write(numbClass.hundreds);
alert(JSON.stringify(numbClass));

















































// let numb = Number(prompt('Введите число от 0 до 999'));

// function numbClass(number) {



// };


// let numbCls = {





// };




/* function NumberClases(num) {
    this.num = num;
    // this.units = 0;
    // this.dozens = 0;
    // this.hundreds = 0;

    if (this.num <= 0) {
        this.units = this.num
    }

    let classes = {

        units: this.units


    };

    return classes
}




let numb = Number(prompt('Введите число от 0 до 999'))
const numClass1 = NumberClases(numb)
document.write(JSON.stringify(numClass1));
document.write(numClass1); */


