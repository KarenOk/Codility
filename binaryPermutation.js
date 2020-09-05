// MAY or MAY NOT contain wildcards - 0 or more wildcards
// Check that string has a wildcard, if not return string like that
// split string at all wildcards to know how many
// Store wildcard indexes to access positions at O(1) later? How?
// Generate binary numbers according to no of wildcards
// Loop through generated binary strings and insert in wildcard positions per position

function binaryPermutation(binaryStr) {
  var splitStr = binaryStr.split("?");
  if (splitStr.length < 2) return [binaryStr];

  //No of wildcards = splitStr - 1
  var combos = getBinary(splitStr.length - 1);
  var permutations = [];
  var splitCopy; // stores a copy of the split array
  var count; // keeps track of increase in size of splitCopy as elements are added

  for (var combo of combos) {
    splitCopy = [...splitStr];
    count = 0;
    for (var i = 0; i < combo.length; i++) {
      splitCopy.splice(i + 1 + count, 0, combo[i]);
      count++;
    }

    permutations.push(splitCopy.join(""));
  }

  console.log(permutations);
  return permutations;
}


function getBinary(bits) {
  // bits = no of bits
  // getBinary(2) returns  ["00", "01", "10", "11"]

  let binary = [];
  let temp = Array(bits).fill(0);
  let pointer;

  for (var i = (2 ** bits) - 1; i >= 0; i--) {
    binary.push(temp.join(""));
    pointer = bits - 1;
    temp[bits - 1]++;
    while (temp[pointer] >= 2) {
      temp[pointer] = 0;
      pointer--;
      temp[pointer]++;
    }
  }

  return binary;
}

binaryPermutation("??1");