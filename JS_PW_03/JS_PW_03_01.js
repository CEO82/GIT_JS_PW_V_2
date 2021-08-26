alert('JS_PW_03_01')

/* С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */


let count = 100;

let currentNumber = 2;

let simpleNumbArr = [];

cuonter = 0
while (cuonter != count - 1) {
    ++cuonter;
    if (isNatural(currentNumber)) {
        // console.log(currentNumber);
        simpleNumbArr.push(currentNumber)

    }
    currentNumber++;

}

function isNatural(number) {
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(simpleNumbArr)
alert(simpleNumbArr)


