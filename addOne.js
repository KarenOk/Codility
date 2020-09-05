/* You are given an array of integers digits representing the digits of a positive integer. For example, digits = [1, 2, 3] represents the integer 123.

It is guaranteed that digits does not have any leading zeros.

Assuming that digits represents the integer n, your task is to return an array that represents the integer n + 1.

Example

For digits = [1, 2, 3], the output should be addOne(digits) = [1, 2, 4];
For digits = [1, 2, 9], the output should be addOne(digits) = [1, 3, 0];
For digits = [9, 9, 9], the output should be addOne(digits) = [1, 0, 0, 0].
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer digits

An array with integer digits from 0 to 9.

Guaranteed constraints:
1 ≤ digits.length ≤ 104,
0 ≤ digits[i] ≤ 9 .

[output] array.integer

Return an array that represents the digits of n + 1.
 */


function addOne(digits) {
    var carry = 0;
    var tempSum;
    var str;
    
    for (var i = digits.length - 1; i >= 0; i--){
        tempSum = (i === digits.length - 1) ? digits[i] + carry + 1 : digits[i] + carry;
        
        if ( tempSum > 9){
            str = `${tempSum}`;
            digits[i] = Number(str[1]);
            carry = Number(str[0]);
            
            // Check if its the first digit
            if (i === 0) {
                digits.unshift(carry);
                break;
            }
        } else {
            digits[i] = tempSum;
            break;
        }
    }
    
    return digits;
}

