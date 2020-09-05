// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var outOfPlace = undefined;
    var ASorted = [];
    var ACounter = 1;
        
    ASorted =  A.sort((a,b) => a - b );
   for (let i = 0; i < ASorted.length; i++) {
      let value =  ASorted[i];
      if (value !== ACounter) {
        outOfPlace = ACounter;
        break;
      }
      ACounter = ACounter + 1;
    }
    if (!outOfPlace) {
      outOfPlace = A.length + 1;
    }

    return (outOfPlace);
}
