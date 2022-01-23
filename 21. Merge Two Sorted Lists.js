var mergeTwoLists = function (l1, l2) {
  var mergedHead = { val: -1, next: null },
    crt = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
};

var mergeTwoLists = function (l1, l2) {
  // initialize a dummy head node
  // initialize a crtNode variable to keep track of the current node, starting with the dummy head node
  // while there are still nodes to compare in two lists
  // if value of 2nd node is less than value of 1st node
  // set the current node's link to l2 node
  // set the l2 node to l2's next node
  // else
  // set the current node's link to l1 node
  // set the l1 node to l1's next node
  // move on to the next node
  // if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
  // if both lists are empty, point crt's link to null
  // return merged linked list
};

// 연결리스트에대해 완벽하게 알고있지 않아서 난이도가 높지 않음에도 불구하고 나에겐 시간이 많이 걸렸다.
// bestsol중에 가장 표를 많이 받은 솔인데 친절한 누군가가 해설까지 붙여줬다. 참고해서 다음 문제들은 잘 풀어봐야겠다.
