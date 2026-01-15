// 200
let obj = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj);       // ['a', 'b', 'c']

//201
let prod = 1;
for (let digit of String(num)) {
    prod *= Number(digit);
}

//202
function sayName() {
    console.log("Name");
}

function sumTo100() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);        // 5050
    // или формула: console.log(100 * 101 / 2);
}

//203
function cube(num) {
    console.log(num ** 3);
    // или Math.pow(num, 3)
}

function sign(num) {
    if (num > 0) {
        console.log("+++");
    } else if (num < 0) {
        console.log("---");
    } else {
        console.log("ноль");   // опционально
    }
}

//204
function sumThree(a, b, c) {
    console.log(a + b + c);
}

//205
function func(a, b, c) {
    console.log(a + b + c);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);      // 6

//206
function func(num = 5) {
    console.log(num * num);
}
func(2);   // 4
func(3);   // 9
func();    // 25   (использовалось значение по умолчанию)

function func(num1 = 0, num2 = 0) {
    console.log(num1 + num2);
}
func(2, 3);   // 5
func(3);      // 3 + 0 = 3
func();       // 0 + 0 = 0

//207
function cube(num) {
    return num ** 3;
}
let res = cube(3);   // 27

function sqrt(num) {
    return Math.sqrt(num);
}
let res = sqrt(3) + sqrt(4);   // ≈1.732 + 2 = 3.732
console.log(res);

//208
function sqrt(num) { return Math.sqrt(num); }
function round(num) { return Number(num.toFixed(3)); }   // лучше Number, а не строка
let res = round(sqrt(2));   // 1.414

let res = sqrt(2) + sqrt(3) + sqrt(4);   // ≈ 1.414 + 1.732 + 2 = 5.146

let res = round(sqrt(2) + sqrt(3) + sqrt(4));   // "5.146" или 5.146 — зависит от реализации round

//209
function func(num) {
    return num;               // ← return срабатывает сразу
    let res = num ** 2;       // эта строка никогда не выполняется
    return res;
}
console.log(func(3));         // → 3

console.log(func(10));   // 100   (10²)
console.log(func(-5));   // 5    (Math.abs(-5))

console.log(func(10));   // 100
console.log(func(-5));   // 5

//210
function func(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;               // return после цикла
}