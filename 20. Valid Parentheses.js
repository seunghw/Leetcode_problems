// 일단! 스택을 사용해야할듯. 재귀적으로 접근해야하니까

var isValid = function (s) {
  const stack = []; // 스택 생성
  const map = {
    // 객체에 넣는다.
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let c = s[i]; // 입력값의 순서대로 c라고 지정한다.
    console.log(c);
    console.log(map[c]);
    if (map[c]) {
      // 만약에 참이면 즉, 객체의 키 값이 있으면
      //
      stack.push(map[c]); //스택에 추가
      console.log(stack);
    } else if (c !== stack.pop()) {
      // c의 값과 pop한 값이 같지 않으면
      return false; // false 반환
    }
  }

  return !stack.length; // 스택의 길이가 0이면 참 0이 아니면 1로 반환한다. 스택에 남은게 없다는 뜻은 짝이 다 맞춰졌다는 뜻이기 때문에 이렇게 작성한 듯
};

isValid("()[]{}");
