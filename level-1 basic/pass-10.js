// write a program to calculate average of five subj.

const prompt = require("prompt-sync")();


prompt("enter the markes of 5 subjects :");


var s1 = parseInt(prompt("enter the markes of 1 subjects :"));
var s2 = parseInt(prompt("enter the markes of 2 subjects :"));
var s3 = parseInt(prompt("enter the markes of 3 subjects :"));
var s4 = parseInt(prompt("enter the markes of 4 subjects :"));
var s5 = parseInt(prompt("enter the markes of 5 subjects :"));

console.log(`average of markes is : ${(s1+s2+s3+s4+s5)/5}`);