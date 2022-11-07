function leapYears(num) {

    year = parseInt(num);

    if (year % 4 === 0 && year % 100 != 0 || year % 400===0) {
        return true
    }
    else{
        return false
    }
};

//console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;

//console.log(leapYears(1996));