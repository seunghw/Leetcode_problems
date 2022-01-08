var decode = function (encoded, first) {
  const result = encoded.reduce(
    (acc, cur, i) => {
      acc.push(acc[i] ^ cur);
      return acc;
    },
    [first]
  );

  return result;
};

// 이번문제는 xor 문제이다. ^를 까먹어서 검색해보고 풀었다.
// bestsol이 내꺼랑 비슷해서 기분이 좋았다.
