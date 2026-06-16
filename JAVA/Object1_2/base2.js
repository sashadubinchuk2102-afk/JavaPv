console.log("========== ЗАВДАННЯ 1 ==========");

let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    averageSpeed: 90,

    displayInfo: function() {
        let info = "Інформація про автомобіль:\n";
        info += "Виробник: " + this.manufacturer + "\n";
        info += "Модель: " + this.model + "\n";
        info += "Рік випуску: " + this.year + "\n";
        info += "Середня швидкість: " + this.averageSpeed + " км/год\n";
        console.log(info);
        alert(info);
    },

    calculateTime: function(distance) {
        let timeHours = distance / this.averageSpeed;
        let breaks = Math.floor(timeHours / 4);
        let totalHours = timeHours + breaks;
        let hours = Math.floor(totalHours);
        let minutes = Math.round((totalHours - hours) * 60);
        let result = hours + " год " + minutes + " хв";
        
        console.log("Відстань: " + distance + " км");
        console.log("Кількість перерв: " + breaks);
        console.log("Загальний час: " + result);
        return result;
    }
};

car.displayInfo();
car.calculateTime(500);

console.log("\n========== ЗАВДАННЯ 2 ==========");

let shoppingList = [
    { name: "Молоко", quantity: 2, bought: false },
    { name: "Хліб", quantity: 1, bought: true },
    { name: "Яблука", quantity: 5, bought: false }
];
function displayShoppingList(list) {
    let result = "Список покупок:\n";
    
    result += "--- НЕКУПЛЕНІ ---\n";
    for (let i = 0; i < list.length; i++) {
        if (list[i].bought === false) {
            result += list[i].name + " - " + list[i].quantity + " шт.\n";
        }
    }
    
    result += "--- КУПЛЕНІ ---\n";
    for (let i = 0; i < list.length; i++) {
        if (list[i].bought === true) {
            result += list[i].name + " - " + list[i].quantity + " шт.\n";
        }
    }
    
    console.log(result);
    alert(result);
}
function addProduct(list, name, quantity) {
    let found = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === name) {
            list[i].quantity += quantity;
            found = true;
            break;
        }
    }
    if (found === false) {
        list.push({ name: name, quantity: quantity, bought: false });
    }
}

function buyProduct(list, name) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === name) {
            list[i].bought = true;
            console.log(name + " позначено як куплений");
            return;
        }
    }
    console.log("Продукт " + name + " не знайдено");
}

displayShoppingList(shoppingList);
addProduct(shoppingList, "Молоко", 1);
addProduct(shoppingList, "Сир", 2);
displayShoppingList(shoppingList);
buyProduct(shoppingList, "Яблука");
displayShoppingList(shoppingList);


console.log("\n========== ЗАВДАННЯ 3 ==========");

let styles = [
    { name: "color", value: "blue" },
    { name: "font-size", value: "24px" },
    { name: "text-align", value: "center" },
    { name: "text-decoration", value: "underline" },
    { name: "font-weight", value: "bold" }
];

function applyStyles(stylesArray, text) {
    let styleString = "";
    for (let i = 0; i < stylesArray.length; i++) {
        styleString += stylesArray[i].name + ":" + stylesArray[i].value + ";";
    }
    document.write("<p style='" + styleString + "'>" + text + "</p>");
}

applyStyles(styles, "Це текст із застосованими стилями");