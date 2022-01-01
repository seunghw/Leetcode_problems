// 밥먹을 동안 생각해보기.
// 1. 문자 전체를 바꾸는 것보다 indexOf 써서 총 띄어쓰기 갯수 + 1하면 문자의 개수라고 생각하고

// 2차 생각
// 그냥 문장 하나씩 공백 개수 카운트해서 저장하고 그중에 가장 큰 값 출력하는게 좋을 것 같아서 아래처럼 코드를 짰다.

var mostWordsFound = (sentences) => {
  let max = 0;

  for (let i of sentences) {
    const words = i.split(" ");
    max = Math.max(max, words.length);
  }

  return max;
};
