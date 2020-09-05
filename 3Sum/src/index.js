function threeSum(nums) {
  // if num.length < 3, return [];
  // sort nums
  // create vars j,k,sum
  // create result []

  // for i in nums to num.length - 3
  //  j = i+1
  // k = num.length - 1

  // while j<k
  //  sum = nums[i] + nums[j] + nums[k];
  //  if (sum > 0) k--
  //  else if sum < 0 j++
  //  else result.push([i,j,k])

  // return result

  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);

  let j, k, sum;
  let result = [];

  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue; // saves time
    j = i + 1;
    k = nums.length - 1;

    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];

      if (sum > 0) k--;
      else if (sum < 0) j++;
      else {
        result.push([nums[i], nums[j], nums[k]])
        j++;
        k--;
      };
      console.log(i, j, k);
    }
  }

  console.log(nums);
  return removeDuplicates(result);
}

// let answer = threeSum([-4, -1, -1, 0, 1, 2]);
let answer = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(answer);


function removeDuplicates(arr) {
  let temp = [];
  let result;

  result = arr.filter(elem => {
    elem.sort((a, b) => a - b);
    elemStr = elem.toString();
    if (temp.indexOf(elemStr) < 0) {
      temp.push(elemStr);
      return elem;
    }
  });

  return result;
}