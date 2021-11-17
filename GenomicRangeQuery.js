// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/* -------- This solution gives a 100% score on codility - */
function solution3(S, P, Q) {
	const result = [];
	const noOfQueries = P.length;

	for (let m = 0; m < noOfQueries; m++) {
		const start = P[m];
		const end = Q[m];

		const sSlice = S.substring(start, end + 1);

		if (sSlice.includes("A")) {
			result.push(1);
		} else if (sSlice.includes("C")) {
			result.push(2);
		} else if (sSlice.includes("G")) {
			result.push(3);
		} else if (sSlice.includes("T")) {
			result.push(4);
		}
	}
	return result;
}

/* -------- This solution gives a 62% score on codility - */
function solution2(S, P, Q) {
	const impactFactors = {
		A: 1,
		C: 2,
		G: 3,
		T: 4,
	};
	const result = [];
	const noOfQueries = P.length;

	S = Array.from(S);

	for (let m = 0; m < noOfQueries; m++) {
		let start = P[m];
		const end = Q[m];

		let min = Math.min(
			...S.slice(start, end + 1).map((nucleotide) => impactFactors[nucleotide])
		);

		result.push(min);
	}
	return result;
}

/* -------- This solution gives a 62% score on codility - */
function solution(S, P, Q) {
	const impactFactors = {
		A: 1,
		C: 2,
		G: 3,
		T: 4,
	};
	const result = [];
	const noOfQueries = P.length;

	for (let m = 0; m < noOfQueries; m++) {
		let start = P[m];
		const end = Q[m];

		let min = Infinity;
		while (start <= end) {
			min = Math.min(min, impactFactors[S[start]]);
			start++;
		}

		result.push(min);
	}
	return result;
}

/* -------  Test case helper functions -------- */

const generateS = () => {
	let s = Array(100000).fill(null);
	s = s.map((_, index) => {
		const mapping = (index % 3) + 1;
		switch (mapping) {
			case 1:
				return "A";
			case 2:
				return "C";
			case 3:
				return "G";
			case 4:
				return "T";
		}
	});
	return s.toString();
};
