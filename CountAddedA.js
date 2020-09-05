// Count the number of "a" to be added to make it have "aa" before and after every other layer
let str = "aabcdaahga";
let noOfA = 0;


function countAddedA (str){
  str = str.toLowerCase(); // Make it lower case just in case

 if (str.search(/aaa/g) < 0) {
   noOfA = (str.split("a").length) - 1;
   noOfA = (str.split("a").length) - 1;
   let strippedString = str.replace(/a/g, "");
   let addedA = ((strippedString.length + 1)  * 2) - noOfA ; // No of As that were actually added to make aa 
   console.log(addedA);
 } else {
   console.log (-1);
 }
}

countAddedA (str);
