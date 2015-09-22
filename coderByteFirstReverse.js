function reverseString(str){
   var returnString = "";
   for(var index = str.length - 1; index >= 0; index--)
   {
      returnString += str.charAt(index);
   }
   return returnString;
}

var stringToReverse = document.getElementById("Forward String").innerHTML;
document.getElementById("Reversed String").innerHTML = reverseString(stringToReverse);