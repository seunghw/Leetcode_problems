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

var finalValueAfterOperations = function (operations) {
  var X = 0;
  operations.forEach((op) => {
    console.log(eval(op));
    eval(op);

    console.log(X);
  });
  return X;
};

finalValueAfterOperations(["--X", "X++", "X++"]);

// 첫번째가 나의 코드이다. 두번째는 eval을 활용한 풀이고 더 짧다.
// 길이는 더 길지만 런타임이나 매모리는 내 코드가 더 좋다. 만족스럽다.
