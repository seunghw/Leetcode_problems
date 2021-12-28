var defangIPaddr = function (address) {
  let result = address.split("");
  for (let i = 0; i < result.length; i++) {
    if (result[i] == ".") {
      result.splice(i, 1, "[.]");
    }
  }
  return result.join("");
};

//spice()

// 배열 사이에 값을 집어 넣기 위해서 spice()사용.
// spice() 메서드 형태는 다음과 같다
// array.splice(start, deleteCount [, item1 [, item2 [, ...] ] ])

// start: 기준이 되는 배열의 index를 지정합니다.

// deleteCount: start index부터 몇 개의 요소를 제거할지 지정합니다.

// item.. : 삽입할 요소를 지정합니다. 여러개 가능!

// join()

// arr.join(separator) 이게 기본 형태.
// join() 함수는 배열의 모든 값들을 연결한 문자열을 리턴합니다.

// 이때 각각의 값들 사이에는 파라미터로 입력된 구분자(separator)가 들어가게 됩니다.

// 만약, separator를 입력하지 않은 경우, default로 ','가 들어갑니다.
