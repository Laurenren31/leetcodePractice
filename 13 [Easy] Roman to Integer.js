const romanToInt = (s) => {
  let result = 0;
  if (s.includes("CM")) {
    result += 900;
    s = s.replace("CM", "");
  }
  if (s.includes("CD")) {
    result += 400;
    s = s.replace("CD", "");
  }
  if (s.includes("XC")) {
    result += 90;
    s = s.replace("XC", "");
  }
  if (s.includes("XL")) {
    result += 40;
    s = s.replace("XL", "");
  }
  if (s.includes("IX")) {
    result += 9;
    s = s.replace("IX", "");
  }
  if (s.includes("IV")) {
    result += 4;
    s = s.replace("IV", "");
  }
  const getM = () => {
    if (s.includes("M")) {
      result += 1000;
      s = s.replace("M", "");
      getM();
    }
    return;
  };
  const getD = () => {
    if (s.includes("D")) {
      result += 500;
      s = s.replace("D", "");
      getD();
    }
    return;
  };
  const getC = () => {
    if (s.includes("C")) {
      result += 100;
      s = s.replace("C", "");
      getC();
    }
    return;
  };
  const getL = () => {
    if (s.includes("L")) {
      result += 50;
      s = s.replace("L", "");
      getL();
    }
    return;
  };
  const getX = () => {
    if (s.includes("X")) {
      result += 10;
      s = s.replace("X", "");
      getX();
    }
    return;
  };
  const getV = () => {
    if (s.includes("V")) {
      result += 5;
      s = s.replace("V", "");
      getV();
    }
    return;
  };
  const getI = () => {
    if (s.includes("I")) {
      result += 1;
      s = s.replace("I", "");
      getI();
    }
    return;
  };
  getM();
  getD();
  getC();
  getL();
  getX();
  getV();
  getI();

  return result;
};
