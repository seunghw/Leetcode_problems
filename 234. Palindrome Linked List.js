var isPalindrome = function (head) {
  // lists with 0 or 1 node will automatically be palindrome
  // 0 또는 1 노드가 있는 목록은 자동으로 회문이 됩니다.
  if (head == null || head.next == null) return true;
  // add two indices, slow will eventually point to the mid node of the palindrome
  // 두 개의 인덱스를 추가합니다. slow는 결국 회문(palindrome)의 중간 노드를 가리킵니다.
  var slow = head;
  // fast is a helper, it will be assigned some conditions to help make sure that slow point to the mid node
  // fast는 도우미이며, 느린 지점이 중간 노드를 가리키는지 확인하는 데 도움이 되는 몇 가지 조건이 할당됩니다.
  var fast = head;

  // both slow and fast point to first node at the beginning
  // while both of the next two nodes of fast exist, slow takes 1 step and fast takes 2 steps forward
  // in this way, slow will definately point to the mid node (or the first of the 2 mid nodes if there are even number of nodes in the list) at the end of the loop
  // 느린 속도와 빠른 속도 모두 처음에 첫 번째 노드를 가리킵니다.
  // fast의 다음 두 노드가 모두 존재하는 동안 slow는 1보, fast는 2보 전진합니다.
  // 이런 식으로, slow는 루프의 끝에서 분명히 중간 노드(또는 목록에 짝수의 노드가 있는 경우 2개의 중간 노드 중 첫 번째 노드)를 가리킵니다.
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse all the ndoes after the slow node, then assign the reversed list back to it
  // 느린 노드 뒤의 모든 ndoes를 역전시킨 다음 역방향 목록을 다시 할당합니다.
  slow.next = reverseList(slow.next);
  slow = slow.next;

  // after the reverse, compare the reverse list with the original list from the beginning
  // 역순 후, 역순 목록을 처음부터 원래 목록과 비교
  while (slow != null) {
    // if any pair of nodes are not equal, return false
    // 노드 쌍이 같지 않으면 false를 반환합니다.
    if (head.val != slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

var reverseList = function (head) {
  // pre will hold the reversed list
  // pre는 반전된 목록을 유지합니다.
  var pre = null;
  // next will be a temporary variable to store the remaining nodes in the list at each loop
  // next는 각 루프에서 목록의 나머지 노드를 저장하기 위한 임시 변수
  var next = null;

  // while there are nodes remaining in the list
  // 목록에 노드가 남아 있는 동안
  while (head != null) {
    // temporarily store the remaining list without the current node
    next = head.next;
    // 현재 노드 없이 나머지 목록을 임시로 저장
    // take the current node of the list, append the reversed nodes to it, then assign it back to the reversed list
    // 목록의 현재 노드를 가져와 역방향 노드를 추가한 다음 역방향 목록에 다시 할당합니다.
    head.next = pre;
    pre = head;
    // assign the remaining list back so head points to the new current node, repeat until there are nodes remaining in the list
    // 헤드가 새로운 현재 노드를 가리키도록 나머지 목록을 다시 할당하고 목록에 노드가 남을 때까지 반복합니다.
    head = next;
  }

  return pre;
};
