// 1 
console.log("--1--");
const CURRENT_YEAR = 2026;
let birthYear = prompt("Your birth year:");
let age = CURRENT_YEAR - parseInt(birthYear);
alert(`You are ${age} years old`);

let flashGB = prompt("Flash drive capacity in GB:");
let flashMB = flashGB * 1024;
let files = Math.floor(flashMB / 820);
alert(`Will fit ${files} files of 820 MB each`);


// 2
console.log("--2--");
let numKey = prompt("Enter a number 0-9:");
switch(numKey) {
    case "0": alert(")"); break;
    case "1": alert("!"); break;
    case "2": alert("@"); break;
    case "3": alert("#"); break;
    case "4": alert("$"); break;
    case "5": alert("%"); break;
    case "6": alert("^"); break;
    case "7": alert("&"); break;
    case "8": alert("*"); break;
    case "9": alert("("); break;
    default: alert("Error: not a digit");
}

let yearY = prompt("Enter a year:");
if (yearY % 400 == 0 || (yearY % 4 == 0 && yearY % 100 != 0)) {
    alert(`${yearY} - leap year`);
} else {
    alert(`${yearY} - not a leap year`);
}

let d = prompt("Day:");
let m = prompt("Month:");
let y = prompt("Year:");
d = parseInt(d);
m = parseInt(m);
y = parseInt(y);

let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (m == 2 && ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0))) daysInMonth[1] = 29;

d++;
if (d > daysInMonth[m-1]) {
    d = 1;
    m++;
    if (m > 12) {
        m = 1;
        y++;
    }
}
alert(`Next date: ${d}.${m}.${y}`);


// 3
console.log("--3--");
let a = parseInt(prompt("Start:"));
let b = parseInt(prompt("End:"));
let sum = 0;
for (let i = a; i <= b; i++) {
    sum += i;
}
alert(`Sum = ${sum}`);

let numW = Math.abs(parseInt(prompt("Enter a number:")));
let count = 0;
while (numW > 0) {
    count++;
    numW = Math.floor(numW / 10);
}
alert(`Number of digits: ${count}`);

let pos = 0, neg = 0, zero = 0, evenC = 0, oddC = 0;
let i = 0;
do {
    let x = parseInt(prompt(`Number ${i+1}:`));
    if (x > 0) pos++;
    else if (x < 0) neg++;
    else zero++;
    if (x % 2 == 0) evenC++;
    else oddC++;
    i++;
} while (i < 10);
alert(`Positive: ${pos}\nNegative: ${neg}\nZero: ${zero}\nEven: ${evenC}\nOdd: ${oddC}`);

let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
let idx = 0;
while (true) {
    let ok = confirm(`Today is ${days[idx]}. Continue?`);
    if (!ok) break;
    idx = (idx + 1) % days.length;
}


//  4 
console.log("--4--");
function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n-1);
}
console.log(fact(5));

function makeNum(x, y, z) {
    return x*100 + y*10 + z;
}
console.log(makeNum(1,4,9));


function area(w, h) {
    if (h === undefined) return w * w;
    return w * h;
}
console.log(area(5,3));
console.log(area(4));

function time(h, m, s) {
    if (m === undefined) m = 0;
    if (s === undefined) s = 0;
    let hh = (h < 10) ? "0" + h : "" + h;
    let mm = (m < 10) ? "0" + m : "" + m;
    let ss = (s < 10) ? "0" + s : "" + s;
    return hh + ":" + mm + ":" + ss;
}
console.log(time(9,5,3));
console.log(time(14,30));


function rev(n, r) {
    if (r === undefined) r = 0;
    if (n == 0) return r;
    return rev(Math.floor(n/10), r*10 + n%10);
}
console.log(rev(1234));

function sumDig(n) {
    if (n == 0) return 0;
    return n%10 + sumDig(Math.floor(n/10));
}
console.log(sumDig(1357));