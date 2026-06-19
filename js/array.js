// ARRAYS

//  1
let arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Array:", arr);

// 2
arr.forEach((elem, index) => {
    console.log(`[${index}] - ${elem}`);
});

// 3
let multiple7 = arr.some(elem => elem % 7 === 0);
console.log(`Is there a number divisible by 7: ${multiple7 ? "Yes" : "No"}`);

// 4
arr.sort((a, b) => b - a);
console.log("Sorted in descending order:", arr);

// 5
let half = Math.floor(arr.length / 2);
for (let i = half; i < arr.length; i++) {
    arr[i] = 0;
}
console.log("After filling the second half with zeros:", arr);

// 6
arr.splice(0, 3);
console.log("After removing the first 3 elements:", arr);

// 7
let hasDuplicates = arr.length !== new Set(arr).size;
console.log(`Are there duplicate elements: ${hasDuplicates ? "Yes" : "No"}`);

// 8
let withoutEdges = arr.slice(1, arr.length - 1);
console.log("Array without edge elements:", withoutEdges);


// STRING

// 1
function countSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') count++;
    }
    return count;
}
console.log(`Spaces: ${countSpaces("Hello world from Ukraine")}`);

// 2
function firstLetterUpper(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(firstLetterUpper("hello world"));

// 3
function countWords(str) {
    let words = str.trim().split(/\s+/);
    return words[0] === "" ? 0 : words.length;
}
console.log(`Words: ${countWords("Hello world from Ukraine")}`);

// 4
function makeAbbreviation(phrase) {
    let words = phrase.split(' ');
    let abbr = "";
    for (let i = 0; i < words.length; i++) {
        abbr += words[i][0].toUpperCase();
    }
    return abbr;
}
console.log(makeAbbreviation("cascading style sheets"));
console.log(makeAbbreviation("object relational mapping"));

// 5
function isPalindrome(str) {
    let clean = str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
    let reversed = clean.split('').reverse().join('');
    return clean === reversed;
}
console.log(isPalindrome("Rose decorates a red roses"));
console.log(isPalindrome("hello"));

// 6
function parseURL(url) {
    let protocol = url.split("://")[0];
    let rest = url.split("://")[1];
    let domain = rest.split("/")[0];
    let path = "/" + rest.split("/").slice(1).join("/");
    
    console.log(`protocol: ${protocol}`);
    console.log(`domain: ${domain}`);
    console.log(`path: ${path}`);
}
parseURL("https://itstep.org/ua/about");