// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10

let g = 0;
const maximumWealth = (accounts) => {
  let n = [];
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      g += accounts[i][j];
    }
    n.push(g);
    g = 0;
  }
  n.sort(function (a, b) {
    return b - a;
  });
  return n[0];
};
