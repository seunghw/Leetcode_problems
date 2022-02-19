function solution(research, n, k) {
  var answer = "";
  console.log(research[0]);
  let resultBox = {};

  for (let i = 0; i < research.length; i++) {
    const data = Array.from(research[i]);
    const unique = [...new Set(data)];
    console.log(data);
    console.log(unique);
    for (let j = 0; j < unique.length; j++) {
      resultBox[unique[j]] = research[i].split(unique[j]).length - 1;
      console.log(resultBox);
    }
  }

  return answer;
}

solution(["abaaaa", "aaa", "abaaaaaa", "fzfffffffa"], 2, 2);
