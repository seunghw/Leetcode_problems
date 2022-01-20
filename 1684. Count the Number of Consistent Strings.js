var countConsistentStrings = function (allowed, words) {
  let count = 0;

  words.forEach((word) => {
    // 매  word를 돌면서 단어를 비교
    for (let j = 0; j < word.length; j++) {
      const char = word[j];

      if (!allowed.includes(char)) break;
      //만약 다르면 끝내고
      else if (j === word.length - 1) count++; //있다면 카운트 증가
    }
  });

  return count;
};
