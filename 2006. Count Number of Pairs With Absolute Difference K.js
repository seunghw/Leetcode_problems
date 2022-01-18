var countKDifference = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        count++;
      }
    }
  }

  return count;
};

// 이번 문제는 이중 포문을 이용해서 정수가 주어지면 해당하는 배열 쌍의 수를 반환.
