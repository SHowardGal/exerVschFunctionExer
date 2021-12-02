var input1 = window.prompt("Enter a number: ", 0);
var input2 = window.prompt("Enter another number: ", 0);
var input3 = window.prompt("Enter another number: ", 0);
var value1 = parseFloat(input1) + parseFloat(input2);
var value3 = parseFloat(input3);
var sum = sum1(value1 , value3);
document.writeln("<h1> First number: " + value1 + "</h1>");
document.writeln("<h1> Second number: " + value3 + "</h1>");
 document.writeln("<h1> Sum: " + sum + "</h1>");

function sum1 (x,y)
{ 
   return (x+y);
}





const num1 = parseFloat(prompt("Enter first number: -7"));
const num2 = parseFloat(prompt("Enter second number: -5"));
const num3 = parseFloat(prompt("Enter third number: -1"));
let largest;


if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is " + largest);



function isOdd(num) { return num % 2;}
console.log("1 is " + isOdd(1));
console.log("2 is " + isOdd(2));
console.log("3 is " + isOdd(3));
console.log("4 is " + isOdd(4));