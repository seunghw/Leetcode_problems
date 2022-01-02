var maximumWealth = function (accounts) {
  let max = 0;

  for (let i = 0; i < accounts.length; i++) {
    let temp = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      temp += accounts[i][j];
    }
    max = Math.max(max, temp);
  }
  return max;
};

//input : [[1,2,3],[3,2,1]]

// 배열이 주어지고 배열의 덧셈 중 가장 큰 값을 비교하여 출력하는 문제이다.
// 이중 for문을 이제야 써보는 것 같은데 다른 방법을 생각해봤지만 더 떠오르진 않았다.
// 베스트 풀이도 비슷하게 나와 있었다.
