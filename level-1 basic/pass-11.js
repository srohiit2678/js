// write a program to swap integer two number using 3rd variable and without 3rd variable

const prompt = require("prompt-sync")();


console.log("enter the 2 numbers :");


var s1 = parseInt(prompt("enter the number 1 :"));
var s2 = parseInt(prompt("enter the number 2 :"));

console.log("swapping using 3rd variable :");

console.log(`number 1 before swapping ${s1}`);
console.log(`number 2 before swapping ${s2}`);

var temp = s1;
    s1=s2;
    s2=temp;

    
console.log(`number 1 after swapping ${s1}`);
console.log(`number 2 after swapping ${s2}`);

console.log("swapping withot 3rd variable :");

s1 = s1+s2;  // 2   3  = 5
s2 = s1-s2;  // 
s1 = s1-s2;


console.log(`number 1 after swapping ${s1}`);
console.log(`number 2 after swapping ${s2}`);
