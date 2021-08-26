alert('PW # 2-5')

/* Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return. */


let a = Number(prompt('Введите 1-е число')), b = Number(prompt('Введите 2-е число'));

function summF(x, y) {

    return x + y

}

function subtractionF(x, y) {

    return x - y

}

function multF(x, y) {

    return x * y

}

function divF(x, y) {

    return x / y

}

document.write(' ' + summF(a, b) + ' / ')
document.write(' ' + subtractionF(a, b) + ' / ')
document.write(' ' + multF(a, b) + ' / ')
document.write(' ' + divF(a, b) + ' / ')