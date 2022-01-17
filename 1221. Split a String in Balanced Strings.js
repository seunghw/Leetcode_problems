var balancedStringSplit = function (s) {
  let valance = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      valance -= 1;
    } else if (s[i] === "L") {
      valance += 1;
    }

    if (valance === 0) {
      result += 1;
    }
  }

  return result;
};

// 스택기반으로 문제를 해결하면 된다.
