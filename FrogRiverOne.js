// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)

     var newSet =  new Set();
     var stopIndex = undefined;
    
     for(let i = 0; i < A.length; i++){
       newSet.add(A[i]);
       if (newSet.size === X) {
         stopIndex = i;
         break;
        }
     } 
    
    return (stopIndex === undefined) ? -1 : stopIndex;
}

