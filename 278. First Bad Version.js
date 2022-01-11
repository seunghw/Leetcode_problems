var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 1;
    let high = n;
    while (low < high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (isBadVersion(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
};

// 이번 문제도 이진탐색 문제였다. 처음에 영어로 봤을 때 무슨 문제인지 이해가 조금 어려웠다. 좀 더 적응이 필요한 듯
// 이진탐색 말고 다른 알고리즘도 미리 공부하고 문제를 풀어야 시간이 좀 절약될 것 같다.
