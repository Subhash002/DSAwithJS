class LinkList {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
var mergeTwoLists = function (list1, list2) {
  let arr = [];
  let current = list1;
  while ((current = null)) {
    arr.push(current);
    current = current.next;
  }
  let ncurrent = list2;
  while ((ncurrent = null)) {
    arr.push(ncurrent);
    ncurrent = ncurrent.next;
  }
  arr = arr.sort((a, b) => a - b);
  let dummy = new ListNode();
  const temp = dummy;
  for (let i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    dummy.next = node;
    dummy = dummy.next;
  }
};

var mergeTwoLists2 = function (list1, list2) {};

//
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      fast = head;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      slow.next = null;
    }
  }
  return null;
};

//
var getDecimalValue = function (head) {
  let decimal = 0;
  let current = head;
  while (current !== null) {
    decimal = decimal + current.value;
    current = current.next;
  }
  return decimal;
};
