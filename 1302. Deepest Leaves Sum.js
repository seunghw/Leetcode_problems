var deepestLeavesSum = function (root) {
  let q = [root],
    ans,
    qlen,
    curr;
  while (q.length) {
    (qlen = q.length), (ans = 0);
    for (let i = 0; i < qlen; i++) {
      (curr = q.shift()), (ans += curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
  }
  return ans;
};

// bfs를 잘 알고 있으면 쉽게 푸는 문제인 것 같다.
// 하지만 기억이 안나서 여러 글들을 보고 나서야 어렴풋이 기억이 난다.
// 위는 오류난 내 풀이를 뒤로하고 bestsol이다.
// 이후에 bfs를 집중적으로 공부할 때 다시 풀어봐야겠다
