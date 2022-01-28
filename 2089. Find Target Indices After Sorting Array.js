var targetIndices = function (nums, target) {
  let result = [];

  let data = nums
    .sort((a, b) => a - b)
    .reduce((acc, cur, i) => {
      if (cur == target) result.push(i);
    }, 0);

  return result;
};

// 오름차순으로 정렬한 후에 target값과 같은 게 있으면 배열에 넣어준다.
