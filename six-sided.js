const prompt = require('prompt-sync')();

const word = prompt("Would you like to roll the die? (Yes or No?) ")

if(word.includes("Yes")) {
    console.log(Math.ceil(Math.random()*6))
}
if(word.includes("No")) {
    console.log("Well you're boring. ")
}