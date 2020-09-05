/* Given number, an integer represented as a string, your task is to split it into substrings from left to right, in such a way that:

Each substring contains k digits (unless there are fewer than k digits remaining in number)
Leading zeroes are ignored
Return an array containing the substrings of digits.

Example

For number = "12345" and k = 2, the output should be splitNumber(number, k) = ["12", "34", "5"].

We start by removing the substring "12", leaving "345", which can be split into "34" and "5" (since there are fewer than 2 digits remaining now).

For number = "12045" and k = 2, the output should be splitNumber(number, k) = ["12", "45"].

The first substring is "12", and since "04" would have a leading zero, the next substring is "45".

Input/Output

[execution time limit] 4 seconds (js)

[input] string number

The given number represented as a string. It is guaranteed that it contains only digits. Note that it can have leading zeros.

Guaranteed constraints:
1 ≤ number.length ≤ 104.

[input] integer k

An integer representing the (maximum) size of each substring.

Guaranteed constraints:
1 ≤ k ≤ 104.

[output] array.string

The array of numbers after splitting, represented as strings.
 
*/

function splitNumber(number, k) {
    number = trimZeros(number);
    
    var arr = [];
    var counter = 1;
    
    while (number) {
        arr.push(number.substr(0, k));
        number = number.substr(k);
        if (number) {
            number = trimZeros(number);
        }

    }
    
    return arr;
}

function trimZeros (str) {
    if (str.length < 2) return str;
    str = [...str];
    
    while (true) {
        if (str[0] === "0") {
            str.shift();
            if (str.length < 2) return str.join(""); // Make sure to return one 0 in the case of a long string of 0s
        } else break;
    }
    
    return str.join("");
}
