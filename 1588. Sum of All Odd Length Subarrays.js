/*
Suppose N is the length of given array.
Number of subarrays including element arr[i] is
i * (N-i) + (N-i) because there are N-i subarrays with arr[i] as first element
and i * (N-i) subarrays with arr[i] as a not-first element. arr[i] appears in 
(N-i) subarrays for each preceding element and therefore we have i*(N-i).

Suppose i * (N-i) + (N-i) is `total`. Ceil(total / 2) is the number of odd-length subarrays and Floor(total / 2) is the number of even-length subarrays. 
When total is odd, there is one more odd-length subarray because of a single-element subarray.
    
For each number, we multiply its value with the total number of subarrays it appears and
add it to a sum.
*/

// N이 주어진 배열의 길이라고 가정하자.
// arr [ i ] 요소를 포함한 하위 배열의 수는 다음과 같습니다.
// arr [ i ]를 첫 번째 요소로 하는 N - i 하위 배열이 있으므로 i * ( N - i ) + ( N - i )
// 그리고 i * ( N - i )는 ar [ i ]를 첫 번째 요소로 사용하여 하위 배열합니다. ar [ i ]는 에 나타납니다.
// ( N - i )는 앞의 각 원소에 대해 하위 배열하므로 i * ( N - i )가 있다.

// i * ( N - i ) + ( N - i )가 총 ' . Ceil ( total / 2)이 홀수 길이 부분 배열의 수이고 Floor ( total / 2)가 짝수 길이 부분 배열의 수라고 가정하자.
// 합계가 홀수이면 단일 요소 하위 배열로 인해 홀수 길이 하위 배열이 하나 더 생깁니다.

// 각 숫자에 대하여, 우리는 그것의 값을 그것이 나타나는 서브어레이의 총 수에 곱하고 합계에 더합니다.
var sumOddLengthSubarrays = function (arr) {
  let sum = 0,
    N = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let total = i * (N - i) + (N - i);
    sum += Math.ceil(total / 2) * arr[i];
  }
  return sum;
  // T.C: O(N)
  // S.C: O(1)
};
