var runningSum = function (nums) {
  let result = [];
  let data = 0;

  for (let i = 0; i < nums.length; i++) {
    data += nums[i];
    result.push(data);
  }

  return result;
};

// 단순한 배열 덧셈이라 금방 풀었다. 새로 익힌건 딱히 없는 듯.

// 이것은 바로 리듀서를 쓴 솔루션! 신기해서 가져왔다.

const runningSum = (nums) => {
  nums.reduce((a, c, i, arr) => (arr[i] += a));
  return nums;
};

// reduce()는 다음과 같다.
// a: 누산기
// c: 현재 값
// i: 인덱스
// arr: 소스 배열

// c값은 사용되지 않지만 _와 같다고 생각해도 된다고 한다.
