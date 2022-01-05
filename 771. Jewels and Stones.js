var numJewelsInStones = function (jewels, stones) {
  let jew = jewels.split("");
  let st = stones.split("");
  console.log(jew);
  let count = 0;

  for (let i of st) {
    for (let j of jew) {
      if (i == j) {
        count++;
        console.log(count);
      }
    }
  }
  return count;
};

numJewelsInStones("aA", "aAAbbbb");

// 배열 문제.
// 각각 보석과 원석을 배열에 넣어준 후에
// 원석 반복문을 돌려서 값마다 그 값이 보석의 값들과 같으면 count를 증가시켜주고 그 값을 return 했다.
// 이문제 또한 이렇게 풀고 베스트 솔루션을 찾아봤다. 그중에 가장 짧고 많은 지지를 받은 코드가 있는데 다음과 같다.

const numJewelsInStones = (J, S) => {
  const jewels = new Set(J);
  return S.split("").reduce((res, s) => res + jewels.has(s), 0);
};

// 미친것같다. 어떻게 이렇게 생각하지. reduce전까지는 생각을 하긴했지만.. 확실히 reduce가 좋은 것 같다. 익숙해져야지..

// map
// 배열.map((요소, 인덱스, 배열) => { return 요소 });

// const oneTwoThree = [1, 2, 3];
// let result = oneTwoThree.map((v) => {
//   console.log(v);
//   return v;
// });
// // 콘솔에는 1, 2, 3이 찍힘
// oneTwoThree; // [1, 2, 3]
// result; // [1, 2, 3]
// oneTwoThree === result; // false

// reduce
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

// result = oneTwoThree.reduce((acc, cur, i) => {
//     console.log(acc, cur, i);
//     return acc + cur;
//   }, 0);
//   // 0 1 0
//   // 1 2 1
//   // 3 3 2
//   result; // 6
