alert('JS_PW_04_02')


/* Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу. */



function Item(product, image, price, quantity, discount = 0) {
    this.product = product;
    this.image = `../img/${image}.png`;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.finalPrice = function () {
        if (this.discount != 0) {
            return this.price - this.price * this.discount / 100;
        } else {
            return this.price;
        }
    }
    this.showMyChart = function () {
        return `${this.product} (количество: ${this.quantity})`;
    }
}

let shoppingCart = []

shoppingCart.push(
    new Item('product_name_1', 'product_imge_1', 195, 2)
);
shoppingCart.push(
    new Item('product_name_2', 'product_imge_2', 137, 5, 10)
);
shoppingCart.push(
    new Item('product_name_3', 'product_imge_3', 7147.5, 6)
);
shoppingCart.push(
    new Item('product_name_4', 'product_imge_4', 2132, 1)
);
shoppingCart.push(
    new Item('product_name_5', 'product_imge_5', 2212, 10, 25)
);

// document.write(shoppingCart)

function finalChart(shoppingCart) {
    document.write('Ваш заказ: ')
    shoppingCart.forEach(val => {
        document.write(`${val.showMyChart()}.
    Цена с учетом скидки: ${val.finalPrice()}.
    Стоимость позиции: ${val.quantity * val.finalPrice()}`);
    });
}
finalChart(shoppingCart);


function finalCost(shoppingCart) {
    return shoppingCart.reduce(function (acc, shoppingCart) {
        return acc + (shoppingCart.finalPrice() * shoppingCart.quantity)
    }, 0)
};
document.write(('Конечная стоимость заказа: ' + finalCost(shoppingCart)).toUpperCase());

document.write