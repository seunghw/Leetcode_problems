// var sortedSquares = function (nums) {
//   let result = nums
//     .map((x) => {
//       return x * x;
//     })
//     .sort(function (a, b) {
//       return a - b;
//     });

//   return result;
// };

// // 위는 그냥 투포인터를 쓰지 않은 일반 솔루션이다.
// 아래는 투포인터 적용한 솔루션

var sortedSquares = function (A) {
  let result = [];
  let l = 0;
  let r = A.length - 1;
  let p = r;

  while (l <= r) {
    if (A[l] ** 2 > A[r] ** 2) {
      result[p--] = A[l++] ** 2;
    } else {
      result[p--] = A[r--] ** 2;
    }
  }

  return result;
};

sortedSquares([-4, -1, 0, 3, 10]);
