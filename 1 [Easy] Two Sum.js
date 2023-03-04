// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

const twoSum = (nums, target) => {
  let result = [];
  for (let n = 0; n < nums.length; n++) {
    for (let m = 1; m < nums.length; m++) {
      if (n === m) {
        continue;
      }
      if (nums[n] + nums[m] === target) {
        result.push(n);
        result.push(m);
        return result;
      }
    }
  }
};
