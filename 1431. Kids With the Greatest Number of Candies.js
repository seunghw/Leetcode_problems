var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    let temp = candies[i] + extraCandies;
    if (max <= temp) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);

// 비교적 간단하게 풀 수 있는 문제였다.
// 하지만 배열 전체의 최대값을 한 줄에 뽑아내려고 스프레드를 사용하는 방법을 까먹고 있다가 다시 쓰게 되었다.
