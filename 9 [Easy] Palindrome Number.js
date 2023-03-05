// Input: x = 121
// Output: true

const isPalindrome = (x) => {
  let y;
  let z;
  let c = 0;
  if (x.toString().length % 2 == 0) {
    y = x.toString().slice(0, x.toString().length / 2);
    z = x.toString().slice(x.toString().length / 2);
  }
  if (x.toString().length % 2 !== 0) {
    y = x.toString().slice(0, x.toString().length / 2 + 1);
    z = x.toString().slice(x.toString().length / 2);
  }
  for (let n = z.length - 1; n >= 0; n--) {
    c += z[n];
  }
  if (c.slice(1) !== y) {
    console.log(c, y, 1);
    return false;
  }

  return true;
};
