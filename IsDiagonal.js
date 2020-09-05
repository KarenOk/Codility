// Check for diagonal matrix

// In linear algebra, a square matrix is called a diagonal matrix if all entries outside the main diagonal are zero.

/*
Check if the given matrix is diagonal.

Example

  For

  matrix = [[1, 0, 0], 
            [0, 5, 0], 
            [0, 0, 3]]
  the output should be
  isDiagonalMatrix(matrix) = true;

  For

  matrix = [[1, 0, 0], 
            [0, 5, 0], 
            [2, 0, 3]]
  the output should be
  isDiagonalMatrix(matrix) = false.

Input/Output

  [execution time limit] 4 seconds (js)

  [input] array.array.integer matrix

  2-dimensional array of integers representing a square matrix.

Guaranteed constraints:
  1 ≤ matrix.length ≤ 10,
  matrix[i].length = matrix.length,
  0 ≤ matrix[i][j] ≤ 1000.

[output] boolean

true if matrix is a diagonal matrix, false otherwise.

*/


function isDiagonalMatrix(matrix) {
  var pointer = 0;

  for (var i = 0; i < matrix.length; i++) {

    for (var j = 0; j < matrix[i].length; j++) {
      if (j === pointer) break;
      if (matrix[i][j] !== 0) return false;
    }

    pointer++;

  }

  return true;

}

