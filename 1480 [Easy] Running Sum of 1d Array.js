// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

let nums = [3, 1, 2, 10, 1];

const runningSum = (nums) => {
  let output = [];
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    n += nums[i];
    output.push(n);
  }
  return output;
};

runningSum();
