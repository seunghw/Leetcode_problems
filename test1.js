function solution(k, m, names, amounts) {
  // 대소문자가 조금씩 달라도 같은 사람이므로 조건 체크를 위해 소문자로 변환
  let who = names.join().toLowerCase().split(",");
  let answer = 0;
  let count = 0; //카운트를 하기 위해서 변수 생성
  let temp = who[0]; // 초기값은 시작점

  for (let i = 0; i < who.length; i++) {
    console.log(who[i]);
    console.log(m, amounts[i]);

    if (temp == who[i]) {
      count++;
      console.log(`${count}회 중복`);
    } else {
      count = 1;
    }

    temp = who[i];
    if (count >= k) {
      console.log(who[i] + `${count}번 이상이므로 문자 발송`);
      answer += 1;
      continue; // 두가지 조건 중 하나를 만족했으므로 아래까지 볼 필요가 없음
    }

    if (amounts[i] >= m) {
      console.log(who[i] + `금액이 ${m} 이상이므로 문자 발송`);
      answer += 1;
    }
  }
  console.log(answer);
  return answer;
}

solution(
  3,
  50000,
  [
    "msLEE",
    "jsKim",
    "jsKIM",
    "jskiM",
    "jskim",
    "John",
    "john",
    "John",
    "msLEE",
    "msLEE",
    "jsKIM",
    "roy",
  ],
  [950, 52524, 1400, 6055, 10000, 4512, 512, 52000, 9000, 49000, 1400, 50000]
);
