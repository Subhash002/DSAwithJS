function split(head) {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondHalf = slow.next;
  slow.next = null;
  return secondHalf;
}

function merge(right, left) {
  if (!left) return right;
  if (!right) return left;
  let result = null;
  if (right.val <= left.val) {
    result = right;
    result.next = merge(right.next, left);
  } else {
    result = left;
    result.next = merge(right, left.next);
  }
  return result;
}

var sortList = function (head) {
  if (!head || !head.next) return head;
  let second = split(head);
  head = sortList(head);
  second = sortList(second);
  return merge(head, second);
};
