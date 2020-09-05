var A = [];
A[0] = 3
A[1] = 1
A[2] = 2
A[3] = 4
A[4] = 3

var diffs = [];

for (let i = 1; i <= A.length - 1; i++) {
  var firstSum, secondSum;
  var firstHalf = A.slice(0, i);
  var secondHalf = A.slice(i);
  firstSum = firstHalf.reduce((total, value) => total + value, 0);
  secondSum = secondHalf.reduce((total, value) => total + value, 0);
  diffs.push(Math.abs(firstSum - secondSum));
};

console.log(Math.min(...diffs));


/*

  UPDATE

*/


var arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;

var diff = [];


// First find the total of the array
var overallSum = arr.reduce((acc, value) => {
  return acc += value;
}, 0);

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var tempSum = 0;
  // loop through 1 to index - 1 of A and sum as I step through
  if (A.length > 1) {
    for (var i = 0; i < A.length - 1; i++) {
      tempSum += A[i];
      // push the diff between the sum and overall sum into an array
      diff.push(Math.abs(tempSum - (overallSum - tempSum)));
    }
    // find the min of that array
    return Math.min(...diff);

  } else {
    return 0;
  }
}


console.log(solution(arr));

// Edge case: No input. That won't happen, we've been told.
// Edge case: What happens with only one input.

