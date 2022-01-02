var shuffle = function (nums, n) {
  let arr = [];
  for (i = 0; i < n; i++) {
    arr.push(nums[i], nums[i + n]);
    console.log(arr);
  }
  return arr;
};

// [2,5,1,3,4,7]
// 3

// 단순한 배열 섞기 문제.
