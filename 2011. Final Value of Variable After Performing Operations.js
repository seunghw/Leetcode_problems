var finalValueAfterOperations = function (operations) {
  let result = 0;
  const map = {
    "++X": 1,
    "X++": 1,
    "--X": -1,
    "X--": -1,
  };

  for (let i = 0; i < operations.length; i++) {
    result += map[operations[i]];
  }

  return result;
};

// 단순히 배열의 특정 원소일때 덧셈 뺄셈을 적용하면 된다. 이전에 객체에 대해서 익혀서 객체를 가지고 풀어보았다.
