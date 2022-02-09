const prompt = require('prompt-sync')();

let num = Number(prompt("What is the size of your die? "));

console.log(Math.ceil(Math.random() * num));