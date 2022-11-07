function removeFromArray(numbers, ...args) {

  return numbers.filter(x => !args.includes(x));

}




 //console.log(removeFromArray([1,2,3,4], 2,4));




// Do not edit below this line
module.exports = removeFromArray;
