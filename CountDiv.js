/* 
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
*/

// Check and subtract the quotients after dividing by K on both ends;
// Specifically check if A is a whole number and add 1 to the result if it is.

function solution(A, B, K) {
	let bQuotient = Math.floor(B / K);
	let resolvedA = A % K === 0 ? A / K - 1 : Math.floor(A / K);
	let result = bQuotient - resolvedA;

	return result;
}
