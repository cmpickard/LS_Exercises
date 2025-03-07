"use strict";
// Given the head of a sorted singly linked list, eliminate any
// duplicate elements, ensuring each value in the list is unique. The
// resulting linked list must remain sorted. Modify the linked list and
// return the head of the revised, duplicate-free list.

// Example test cases:
class LinkedList {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLinkedList(arr) {
  let dummy = new LinkedList();
  let curr = dummy;
  arr.forEach(el => {
    curr.next = new LinkedList(el);
    curr = curr.next;
  });

  return dummy.next;
}

function printLinkedList(head) {
  let result = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  result.push('null');
  console.log(result.join(' -> '));
}

function deleteDuplicates(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

let list1 = createLinkedList([1, 1, 2]);
let list2 = createLinkedList([1, 1, 2, 3, 3]);
let list3 = createLinkedList([1, 2, 3, 3, 4]);
let list4 = createLinkedList([2, 2, 2, 3, 3]);
let list5 = createLinkedList([5]);

printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"

