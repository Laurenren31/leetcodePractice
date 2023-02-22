// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

const numberOfSteps = (num) => {
  let n = 0;
  const isEven = () => {
    if (num == 0) {
      console.log(n);
      return n;
    }
    if (num % 2 == 0) {
      n++;
      num = num / 2;
      isEven();
    }
    if (num % 2 == 1) {
      n++;
      num = num - 1;
      isEven();
    }
  };
  isEven();
  return n;
};
