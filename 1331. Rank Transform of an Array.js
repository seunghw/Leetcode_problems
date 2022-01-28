var arrayRankTransform = function (arr) {
  let sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
  console.log(sorted);

  return arr.map((x) => sorted.indexOf(x) + 1);
};

// 2089 연계 문제여서 같이 풀었다. 이것도 배열로 정리한 뒤에 문제를 해결해야한다.
// 복사한 배열을 정렬한 후에 기존의 값과 정렬한 배열의 indexOf 값을 가져와서 비교한 후에 넣어준다.
// 여기서 순위는 정렬된 배열에서 +1 해준 것과 같다.
