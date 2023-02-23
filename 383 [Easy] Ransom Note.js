// Input: ransomNote = "a", magazine = "b"
// Output: false

const canConstruct = (ransomNote, magazine) => {
  for (let n = 0; n < ransomNote.length; n++) {
    if (magazine.indexOf(ransomNote[n]) == -1) {
      return false;
    }
    if (magazine.indexOf(ransomNote[n]) !== -1) {
      let test = magazine;
      test = test.replace(new RegExp(`\\${ransomNote[n]}`), "");
      magazine = test;
    }
  }
  return true;
};
