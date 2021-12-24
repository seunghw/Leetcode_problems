/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const data = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in data) {
      return [data[another], i];
    }

    data[nums[i]] = i;
  }

  return null;
};

twoSum([2, 7, 11, 15], 9);
