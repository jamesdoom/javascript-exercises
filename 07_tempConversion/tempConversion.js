function ftoc(num) {

  cTemp=(num-32)*(5/9)

  return Math.round(cTemp*10)/10

};

function ctof(num){

  fTemp=(num*9/5)+32

  return Math.round(fTemp*10)/10

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
