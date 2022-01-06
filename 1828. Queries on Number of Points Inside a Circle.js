function countPoints(points, queries) {
  // For each query, check all points and calculate
  // number of points having distance <= radius.
  return queries.map(([qx, qy, qr]) => {
    return points.reduce((acc, [px, py]) => {
      if (isInside(px, py, qx, qy, qr)) ++acc;
      return acc;
    }, 0);
  });
}

function isInside(px, py, cx, cy, radius) {
  return distance(px, py, cx, cy) <= radius;
}

// Euclidean distance
// https://en.wikipedia.org/wiki/Euclidean_distance#Two_dimensions
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

// 브루트포스를 사용하여서 해결한 문제
// 아직 내겐 어려운 문제같다. 하루정도 고민한 끝에 best sol을 올린다.
// 브루트포스까진 접근했는데 그 이후 수학적 계산에서 진행이 어려웠다.
// 나중에 알고리즘이 손에 익었을 때 다시 와서 풀어봐야겠다.
