
console.log("========== ЗАВДАННЯ 1 ==========");

class Marker {
    #color;
    #ink;

    constructor(color, inkPercent) {
        this.#color = color;
        this.#ink = inkPercent;
    }
    get color() {
        return this.#color;
    }

    get ink() {
        return this.#ink;
    }

    print(text) {
        let result = "";
        let inkUsed = 0;

        for (let i = 0; i < text.length; i++) {
            if (text[i] !== ' ') {
                inkUsed += 0.5;
            }
        }

        if (inkUsed > this.#ink) {
            console.log("Не вистачає чорнил для друку цього тексту!");
            return;
        }

        this.#ink -= inkUsed;
        console.log(`%c${text}`, `color: ${this.#color}; font-size: 20px;`);
        console.log(`Залишилось чорнил: ${this.#ink.toFixed(1)}%`);
    }

    refill(amount) {
        this.#ink = Math.min(100, this.#ink + amount);
        console.log(`Маркер заправлено. Чорнил: ${this.#ink}%`);
    }
}

class RefillableMarker extends Marker {
    constructor(color, inkPercent) {
        super(color, inkPercent);
    }

    refill(amount) {
        super.refill(amount);
    }
}

let marker = new Marker("red", 15);
marker.print("Hello World!");
marker.print("This is a test message");

let refillable = new RefillableMarker("blue", 5);
refillable.print("Short text");
refillable.refill(30);
refillable.print("Long text with many symbols");


console.log("\n========== ЗАВДАННЯ 2 ==========");

class ExtendedDate extends Date {
    constructor(year, month, day) {
        super(year, month - 1, day);
    }

    getMonthName() {
        const months = [
            "Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня",
            "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"
        ];
        return months[this.getMonth()];
    }

    getDayName() {
        const days = [
            "Неділя", "Понеділок", "Вівторок", "Середа",
            "Четвер", "П'ятниця", "Субота"
        ];
        return days[this.getDay()];
    }

    getDateText() {
        return `${this.getDate()} ${this.getMonthName()} ${this.getFullYear()}`;
    }

    isPast() {
        let now = new Date();
        return this.getTime() < now.getTime();
    }

    isFutureOrCurrent() {
        let now = new Date();
        return this.getTime() >= now.getTime();
    }

    isLeapYear() {
        let year = this.getFullYear();
        return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
    }

    getNextDate() {
        let next = new Date(this.getTime());
        next.setDate(next.getDate() + 1);
        return next;
    }

    printInfo() {
        console.log(`Дата: ${this.getDateText()}`);
        console.log(`День тижня: ${this.getDayName()}`);
        console.log(`Дата ${this.isPast() ? 'вже минула' : 'ще не настала'}`);
        console.log(`${this.isLeapYear() ? 'Високосний' : 'Не високосний'} рік`);
        let next = this.getNextDate();
        console.log(`Наступна дата: ${next.getDate()} ${this.getMonthName()} ${next.getFullYear()}`);
    }
}

let myDate = new ExtendedDate(2025, 6, 15);
myDate.printInfo();

let currentDate = new ExtendedDate(2026, 6, 19);
console.log(`\nПоточна дата: ${currentDate.getDateText()}`);
console.log(`Це майбутня дата? ${currentDate.isFutureOrCurrent() ? "Так" : "Ні"}`);

console.log("\n========== ЗАВДАННЯ 3 ==========");

class Employee {
    constructor(firstName, lastName, position, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
let bankEmployees = [
    new Employee("Іван", "Петренко", "Менеджер", 25000),
    new Employee("Олена", "Коваленко", "Касир", 18000),
    new Employee("Сергій", "Іваненко", "Кредитний спеціаліст", 30000),
    new Employee("Марія", "Шевченко", "Старший касир", 22000),
    new Employee("Андрій", "Бондаренко", "Начальник відділу", 45000)
];

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = "<table border='1' cellpadding='5'>";
        html += "<tr>";
        html += "<th>Ім'я</th>";
        html += "<th>Прізвище</th>";
        html += "<th>Посада</th>";
        html += "<th>Зарплата (грн)</th>";
        html += "</tr>";

        for (let i = 0; i < this.employees.length; i++) {
            let emp = this.employees[i];
            html += "<tr>";
            html += "<td>" + emp.firstName + "</td>";
            html += "<td>" + emp.lastName + "</td>";
            html += "<td>" + emp.position + "</td>";
            html += "<td>" + emp.salary + "</td>";
            html += "</tr>";
        }

        html += "</table>";
        return html;
    }
}

let empTable = new EmpTable(bankEmployees);
document.write("<h2>Список працівників банку</h2>");
document.write(empTable.getHtml());


console.log("\n========== ЗАВДАННЯ 4 ==========");

class StyledEmpTable extends EmpTable {
    getStyles() {
        return `
            <style>
                table {
                    border-collapse: collapse;
                    width: 80%;
                    margin: 20px auto;
                    font-family: Arial, sans-serif;
                }
                th {
                    background-color: #4CAF50;
                    color: white;
                    padding: 12px;
                    text-align: left;
                }
                td {
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                }
                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
                tr:hover {
                    background-color: #ddd;
                }
            </style>
        `;
    }

    getHtml() {
        let styles = this.getStyles();
        let tableHtml = super.getHtml();
        return styles + tableHtml;
    }
}

let styledTable = new StyledEmpTable(bankEmployees);
document.write("<h2>Стилізована таблиця працівників банку</h2>");
document.write(styledTable.getHtml());