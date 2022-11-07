function sumAll(num1, num2) {

  let array = []

  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
  array.push(i);
  }

  if (Math.sign(num1, num2) === -1) {
    return 'ERROR';

  } else if (Number.isInteger(num2) === false) {
    return 'ERROR';

  }

  else {
      return array.reduce((accumulator, value) => {
          return accumulator + value;
        }, 0);
}

}
 // Do not edit below this line
module.exports = sumAll;