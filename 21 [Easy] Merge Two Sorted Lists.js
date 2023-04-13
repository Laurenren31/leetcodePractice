// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

const mergeTwoLists = (list1, list2) => {
  let result = [];
  result = list1.concat(list2);
  result = result.sort((a, b) => {
    return a - b;
  });
};
