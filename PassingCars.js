var arr = [];
arr[0] = 0
arr[1] = 1
arr[2] = 0
arr[3] = 1
arr[4] = 1



function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    // If A has just one elem, just return 0
    if (A.length === 1) return 0;

    // create sum variable
    var sum = 0;
    var zeroIndexes = new Set();

    // find and store all the indexes of the 0s
    A.forEach((elem, index) => {
        if (elem === 0) {
            zeroIndexes.add(index);
        }
    });

    zeroIndexes.forEach(value => {
        // loop backwards from index - 1 to that point and break
        for (var i = A.length - 1; i > value; i--) {
            sum += A[i];

            //  return −1 if at any point sum >  1,000,000,000
            if (sum > 1000000000) {
                return -1;
            }
        }
    });

    return sum;

}

console.log(solution(arr));



// A cannot be empty
// Input A : {0, 1}
//  return −1 if the number of pairs of passing cars exceeds 1,000,000,000.
// if 1 input, return 0