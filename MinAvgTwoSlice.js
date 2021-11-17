// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/* -------- This solution gives a 60% score on codility - */
function solution(A) {
	let minAvg = Infinity;
	let minPointer = 0;

	for (let window = 2; window <= A.length; window++) {
		// Initial sum and window
		let sum = A.slice(0, window).reduce((acc, elem) => acc + elem, 0);
		let avg = sum / window;

		minAvg = Math.min(avg, minAvg);
		if (minAvg === avg) minPointer = 0;

		let p = 1;
		let q = p + window - 1;

		// Moving window
		while (p < A.length - window + 1) {
			sum = sum - A[p - 1] + A[q];
			avg = sum / window;

			minAvg = Math.min(avg, minAvg);
			if (minAvg === avg) minPointer = p;

			p++;
			q++;
		}
	}

	return minPointer;
}
