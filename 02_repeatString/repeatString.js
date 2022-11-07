function repeatString(string, num) {

   if (num >= 0) {
       let newString="";
            for (let i = 0; i < num; i++) {
            newString = newString + string;
            }
            return newString;
      }
   else {
            return "ERROR"
      }
  };

 
// Do not edit below this line
module.exports = repeatString;
