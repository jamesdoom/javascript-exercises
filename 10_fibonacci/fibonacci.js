function fibonacci(num) {
let num1 = 0, num2 = 1, nextNum;

if(num < 0){
    return "OOPS"
}
else{
    for (i = 1; i <= num; i++) {
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
    }
return num1;
}}


// Do not edit below this line
module.exports = fibonacci;
