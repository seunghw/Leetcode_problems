// 어으졸려
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor(high - low);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

// 이번문제도 binary search이다.
// 아래는 베스트솔인데 되게 깔끔해서 가져와봤다.

function searchInsert(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
}

function binarySearch(array, target, start, end) {
  // If the target is less then the very last item then insert it at that item index
  // because anything index less then that has already been confirmed to be less then the target.
  // Otherwise insert it at that item index + 1
  // because any index grater then that has already been confirmed to be greater then the target
  if (start > end) return start;

  const midPoint = Math.floor((start + end) / 2);

  // found target
  if (array[midPoint] === target) return midPoint;

  // search the left side
  if (array[midPoint] > target)
    return binarySearch(array, target, start, midPoint - 1);
  // search the right side
  if (array[midPoint] < target)
    return binarySearch(array, target, midPoint + 1, end);
}
