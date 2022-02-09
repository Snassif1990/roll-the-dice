const prompt = require('prompt-sync')();

let num1 = Number(prompt("How many sides would you like your die to have? "));

let num2 = Number(prompt("What number would you like your die to land on? "))

console.log(Math.ceil(Math.random() * num1));