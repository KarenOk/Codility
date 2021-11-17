// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)

	var ASorted = [];
	var min = Math.min(...A);
	var max = Math.max(...A);
	var smlPosInt = undefined;
	var ASorted = A.sort((a, b) => a - b);
	var ASet = new Set();
	ASorted.forEach((value) => {
		ASet.add(value);
	});

	if (max < 0) {
		smlPosInt = 1;
	} else {
		for (let i = 1; i <= max; i++) {
			if (!ASet.has(i)) {
				smlPosInt = i;
				break;
			}
		}
	}

	if (!smlPosInt) {
		smlPosInt = max + 1;
	}
	return smlPosInt;
}

// Updated solution
function solution2(A) {
	A.sort((a, b) => a - b);
	let expectedInt = 1;

	for (let num of A) {
		if (num < expectedInt) {
			// do nothing
		} else if (num === expectedInt) {
			expectedInt++;
		} else {
			return expectedInt;
		}
	}

	return expectedInt;
}
