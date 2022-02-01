var checkIfPangram = function (sentence) {
  return new Set(sentence.split("")).size == 26;
};

// 이번 문제를 풀면서 pangram에 대해서 처음 들어봤다
// 모든 영단어가 들어간 문장을 pangram이라고 한다.
// 단순히 set에 넣어주어 중복을 없애고 쪼갠뒤에 set객체의 길이가 알파벳의 갯수인 26인지 확인하면 되는문제이다.
