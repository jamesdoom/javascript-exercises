function add(num1, num2) {
	addTotal=num1+num2;
  return addTotal;
};

function subtract(num1, num2) {
	subTotal=num1-num2;
  return subTotal;
};

function sum(nums) {
  const initial = 0;
  const sumTotal = initial + nums.reduce(
    (previous, current) => previous + current,
    initial)
  return sumTotal;
};

function multiply(nums) {
  const mulTotal = nums.reduce(
    (previous, current) => previous * current)
    return mulTotal;
};

function power(num1, num2){
  const powTotal = num1 ** num2;
    return powTotal;
};

function factorial(num) {
  if (num === 0 || num === 1)
  return 1;
  for (i = num - 1; i >= 1; i--){
    num *= i;
  }
return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
