function palindromes(n) {
    let punc = n.replace(/[^\w\s]/g,'').toLowerCase();
    let space = punc.replaceAll(" ","");
    let reversed = space.split("").reverse().join("");
       if (reversed === space){
           return true;
       }else{
           return false;
}};

// Do not edit below this line
module.exports = palindromes;
