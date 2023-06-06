/*
To run javascript on terminal:
1. npm install js
If node_modules already exists, you can just run the step below
2. node introjs.js
*/

function print() {
    console.log('Hello, World');
    console.log('The quick brown fox jumps over the lazy dog.');
    console.log("Haikus are easy \nBut sometimes they don't make sense \nRefridgerator");
    console.log(fToC(5));
}

/* 
let <variable-name> = <value>;
*/

function fToC(temperature) {
	return 5 * (temperature - 32) / 9;
}

/*
Exercises 
*/

function recPrism(length, width, height) {
    return length * width * height;
}

console.log(recPrism(1,2,3));

// Math.sqrt(n) returns the square root of n. 
// To find the distance of the longest side of the right triangle.
function mystery(a, b, c, d) {
	let e = c - a;
	let f = d - b; return Math.sqrt(e * e + f * f);
}

let a = 4;

function mystery1(a) {
	let b = a * -8;
	return (a - b) / a;
}

function mystery2(a, b) {
	let c = mystery1(b);
	b = a;
	a = mystery1(a);
	return a + b + c;
}

console.log(mystery2(mystery1(3)));

/*
for (<initial expression>; <condition>; <step expression>) {
	// code to be executed per step
}

while (<condition>) {
	// code to be executed per step
}

How many perfect squares are there between 0 and 100? What about between 30 and 60,000?
*/
let count = 0;
for (let i = 0; i <= 100; i++) {
    if (i * i <= 100) {
        count++;
    } else {
        break;
    }
}

console.log(count)

count = 0;
i = 0;
while (i*i < 60000) {
    
}