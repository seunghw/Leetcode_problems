// // 내 풀이
// 문제점 : 작은 값이 떴을 경우 판별을 못하고 값 그대로 탐색을 진행한다.
// const s = "MCMXCIV";

// let data = s.split("");

// console.log(data);

// let result = 0;

// console.log(data.length);
// console.log(s.length);

// for (let i = 0; i < data.length; i++) {
//   if ("M" == data[i]) {
//     result += 1000;
//     continue;
//   }
//   if ("D" == data[i]) {
//     result += 500;
//     continue;
//   }
//   if ("C" == data[i]) {
//     result += 100;
//     continue;
//   }
//   if ("L" == data[i]) {
//     result += 50;
//     continue;
//   }
//   if ("X" == data[i]) {
//     result += 10;
//     continue;
//   }
//   if ("V" == data[i]) {
//     result += 5;
//     continue;
//   }
//   if ("I" == data[i]) {
//     result += 1;
//     continue;
//   }
// }

// console.log(result);

//best sol

symbols = {
  //객체를 활용하여 작성
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    // input값을 순서대로 체크
    symbols[s[i]] < symbols[s[i + 1]] // 바로 앞 단어와 비교
      ? (value -= symbols[s[i]]) // 참일 경우  현재 단어를 value에서 빼준다
      : (value += symbols[s[i]]); // 거짓일 경우 현재 단어를 value에서 더해준다
  }
  return value; // value 값을 반환
};

romanToInt("MCMXCIV"); // test

// 사용

// 객체

// 베스트 코드를 참고하여 작성하였다. 처음 봤을 때 풀이는 오류가 있었다. 문제점 : 작은 값이 떴을 경우 판별을 못하고 값 그대로 탐색을 진행한다.
// 이 솔루션은 현재와 앞의 값을 비교해서 체크한다. 코드까지 간결함.
