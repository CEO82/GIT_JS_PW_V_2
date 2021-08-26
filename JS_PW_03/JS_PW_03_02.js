alert('JS_PW_03_02')

let basketArray_element_price = [777, 17500, 43000, 287]

function countBasketPrice(incomeArr) {
    let arrSum = 0
    for (let i in incomeArr) {
        arrSum = arrSum + incomeArr[i]
        console.log(incomeArr[i])

    }

    return arrSum

}


let basketSumm = countBasketPrice(basketArray_element_price);
console.log(basketSumm)
alert('Сумма заказа = ' + basketSumm + ' рублей')

// for (let i in basketArray_element_price) {
//     console.log(i)

// }


