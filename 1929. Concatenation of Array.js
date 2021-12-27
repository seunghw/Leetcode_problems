var getConcatenation = function (nums) {
  const range = nums.length;
  for (let i = 0; i < range; i++) {
    console.log(nums[i]);
    nums.push(nums[i]);
    console.log(nums);
  }
  return nums;
};

getConcatenation([1, 2, 1]);

var getConcatenation = function (nums) {
  nums.forEach((x) => nums.push(x));
  return nums;
};

var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

// 주어진 배열 두개를 붙이는 문제. discuss에 있던 한줄코드는 예전에 배웠던 스프레드 문자를 응용한 것이다.
// 내가 푼 부분은 첫번째와 두번째이며 for와 foreach를 사용하여 반복했다.
