var numberOfSteps = function (num) {
  let count = 0;

  while (num != 0) {
    if (num % 2 == 0) {
      num /= 2;
      count++;
    } else {
      num -= 1;
      count++;
    }
  }
  return count;
};

// 이번 문제는 숫자를 받아서 짝수면 2로나누고 홀수면 1을 뺀 후 그 횟수를 리턴하는 문제이다.
// 단순하게 while문으로 해결했는데 와중에 bestsol이 조금 신기해서 가져와봤다.
// 다음과 같다.
const numberOfSteps = (num, steps = 0) =>
  num === 0 ? steps : numberOfSteps(num & 1 ? num - 1 : num >> 1, ++steps);

// 삼항연산자와 bit shift를 활용한 듯
// 찾아봐서 알게된건데 어떤수 x에 >> 1하면 2로 나눈값이된다. 비트를 오른쪽으로 밀어서 값이 변하기 때문.
// 반대로하면 두배!

// num = 16
// num >> 1
// = 8

// num = 16
// num << 1
// = 32
