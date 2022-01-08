var subtractProductAndSum = function (n) {
  let data = String(n).split("");

  let sum = 0;
  let pro = 1;
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    pro *= Number(data[i]);
    sum += Number(data[i]);
  }

  result = pro - sum;

  return result;
};

// 여기서 에러가 발생했던게 for문 안에서 덧셈과 곱셈의 값이 누적이 되지 않았다.
// 알고보니 데이터타입때문이였다. data[i]의 타입이 배열이고 pro,sumd의 초기값은 숫자여서 배열로 인식하여 덧셈과
// 곱셉을 진행했던 것이다. 그러므로 Number을 사용하여 타입을 바꿔서 넣어줬다.
// 다음은 reduce를 사용한 bestsol이다. 정말 짧다.

var subtractProductAndSum = function (n) {
  const digits = Array.from(String(n), Number);
  const sum = digits.reduce((a, b) => a + b);
  const product = digits.reduce((a, b) => a * b);
  return product - sum;
};
subtractProductAndSum(234);

// Array.from()

// Array.from() 메서드는 유사 배열 객체(array-like object)나
// 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
