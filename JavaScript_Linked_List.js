/*******************************************************
**  Description: Linked list stack ADT in JavaScript
*******************************************************/

// Node structure
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// List structure
class List {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    isEmpty() {
        if (this.size === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    add(element) {
        let node = new Node(element);
        let current;

        if (this.isEmpty()) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }

    top() {
        console.log(this.head.element);
    }

    pop() {
        if (this.size > 0) {
            let current = this.head;
            this.head = current.next;
            current.element = null;    
            this.size--;
        }
    }

    printList() {
        let current = this.head;

        while (current !== null) {
            console.log(current.element);
            current = current.next;
        }
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (current.element === element) {
                if (prev === null) {
                    prev = current;
                    this.head = prev.next;
                    return prev;
                } else {
                    let temp = current;
                    prev.next = current.next;
                    return temp;
                }
            } else {
                prev = current;
                current = current.next;
            }
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        
        while (current !== null) {
            next = current.next;
            current.next = prev;

            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

// Driver program to test the list
let list = new List();

list.add(7);
list.add(3);
list.add(1);
list.add(5);
list.add(11);
list.add(157);
list.add(-9);
list.add(7);

console.log('\nInitial list');
list.printList();

list.reverse();
console.log('\nReversed list');
list.printList();

list.removeElement(7);

console.log('\nRemove instance of 7 from list');
list.printList();

list.pop();

console.log('\nPop list');
list.printList();