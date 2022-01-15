var arrayPairSum = function (nums) {
  let result = nums
    .sort((a, b) => a - b)
    .reduce((sum, cur, i) => (i % 2 === 0 ? (sum += cur) : sum), 0);

  return result;
};
arrayPairSum([1, 4, 3, 2]);

// 정렬 후에 짝수번째 수들을 합치기
