alert('PW # 2-8')

/*  С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power(val, pow), где val — заданное число, pow –— степень.  */

let num = Number(prompt('Введите число')), pow = Number(prompt('Введите степень в которую нужно возвести число'))



function powerF(val, powF) {
    if (val == 1) {
        return val;
    }
    else {
        return val * powerF(val, powF - 1)
    }


}

// function fiba(n) {
//     if (n <= 2) return 1;

//     document.write(fiba(n - 1) + fiba(n - 2) + ' -/- ')
//     return fiba(n - 1) + fiba(n - 2)


// }

// let fn = Number(prompt('для фибоначи'))

// document.write(fiba(fn))

document.write(powerF(num, pow))