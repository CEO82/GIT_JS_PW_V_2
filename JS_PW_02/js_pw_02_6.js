alert('PW # 2-6')

/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch). */

let a = Number(prompt('Введите 1-е число')), b = Number(prompt('Введите 2-е число')), index = prompt('Введите арефметическое действие - +, -, *, /');

function mathOperation(x, y, operation) {

    switch (operation) {
        case '*':
            return x * y;
            break;

        case '/':
            return x / y;
            break;

        case '-':
            return x - y;
            break;

        case '+':
            return x + y;
            break;

        default:
            return 'Введено что то не соответствующее условиям задачи'
            break;
    }








};

document.write(mathOperation(a, b, index));
