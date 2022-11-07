function reverseString(string) {
    
    let letters = string.split("");
    let reverse = letters.reverse();
    let newString = reverse.join("");

    return newString
};

//console.log(reverseString("Let's see how this thing is formatted."))

// Do not edit below this line
module.exports = reverseString;
