/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let result = nums.map((x) => {
    nums.reduce((acc, cur, j) => {
      if (x > cur) {
        acc++;
        console.log(acc);
      }
    }, 0);
  }, 0);

  return result;
};

//아래는 베스트 숏코드

var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((num) => sorted.indexOf(num));
};
// 일단 내 방식대로 풀다가 베스트솔루션보고 이마 탁 쳤다..
// 가만보면 얕은복사는 거의 필수인 것 같다.
