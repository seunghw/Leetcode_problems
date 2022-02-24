var numberOfMatches = function (n) {
  let totalMatches = 0;
  while (n > 1) {
    if (n % 2 == 0) {
      n = n / 2;
      totalMatches += n;
    } else {
      n = (n - 1) / 2 + 1;
      totalMatches += n - 1;
    }
  }
  return totalMatches;
};

// 진짜 야매로 풀 수 있는 문제긴한데 정석대로 풀어봤다.
// 야매로 풀면 항상 1개 적은 경기 패턴이므로 1을 빼면 된다..
