// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position
// moves to indices[i] in the shuffled string.

// Return the shuffled string.
// for문
var restoreString = function (s, indices) {
  let data = s.split("");
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result[indices[i]] = data[i];
  }

  return result.join("");
};
// reduce문
var restoreString = function (s, indices) {
  let result = s
    .split("")
    .reduce((acc, cur, i) => {
      acc[indices[i]] = cur;
      return acc;
    }, [])
    .join("");

  return result;
};

//   이번 문제는 두가지버전으로 풀어보았다. 사실 내가 봤을 때
//   편한건 for문을 사용하는 건데 reduce를 사용하는편이 메서드 체이닝에 도움이 된다고해서
//   손에 익혀놓을겸 이렇게 두가지 버전으로 만들었다.
