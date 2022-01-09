var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

[-1, 0, 3, 5, 9, 12];
9;

search([-1, 0, 3, 5, 9, 12], 9);

// 아 Math.floor로 풀었다... 왜 안되나했네 2.5로 소수점걸려버려서 그런듯..
