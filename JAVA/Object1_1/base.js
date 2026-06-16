//1
let time = {
    hours: 10,
    minutes: 59,
    seconds: 59,

    display: function() {
        let h = this.hours < 10 ? "0" + this.hours : "" + this.hours;
        let m = this.minutes < 10 ? "0" + this.minutes : "" + this.minutes;
        let s = this.seconds < 10 ? "0" + this.seconds : "" + this.seconds;
        return h + ":" + m + ":" + s;
    },

    addSecond: function() {
        this.seconds = this.seconds + 1;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes = this.minutes + 1;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours = this.hours + 1;
                if (this.hours >= 24) {
                    this.hours = 0;
                }
            }
        }
        return this.display();
    },

    subtractSecond: function() {
        this.seconds = this.seconds - 1;
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes = this.minutes - 1;
            if (this.minutes < 0) {
                this.minutes = 59;
                this.hours = this.hours - 1;
                if (this.hours < 0) {
                    this.hours = 23;
                }
            }
        }
        return this.display();
    },

    showOnPage: function() {
        document.write("<h2>Поточний час: " + this.display() + "</h2>");
    }
};

console.log("Початковий час: " + time.display());
console.log("Додаємо секунду: " + time.addSecond());
console.log("Додаємо ще одну: " + time.addSecond());
console.log("Віднімаємо секунду: " + time.subtractSecond());

time.showOnPage();
//2
let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    averageSpeed: 90,

    displayInfo: function() {
        let info = "Інформація про автомобіль:\n";
        info = info + "Виробник: " + this.manufacturer + "\n";
        info = info + "Модель: " + this.model + "\n";
        info = info + "Рік випуску: " + this.year + "\n";
        info = info + "Середня швидкість: " + this.averageSpeed + " км/год\n";
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
        console.log("Час у дорозі з перервами: " + result);
        
        return result;
    }
};

car.displayInfo();
car.calculateTime(500);
car.calculateTime(1000);