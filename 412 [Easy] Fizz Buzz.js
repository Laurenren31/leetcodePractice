// Input: n = 3
// Output: ["1","2","Fizz"]

const fizzBuzz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      result.push("FizzBuzz");
    }
    if (i % 5 == 0 && i % 3 !== 0) {
      result.push("Buzz");
    }
    if (i % 3 == 0 && i % 5 !== 0) {
      result.push("Fizz");
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      result.push(i.toString());
    }
  }
  return result;
};
