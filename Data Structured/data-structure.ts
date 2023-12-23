//* Line
let list: number[] = [1, 2, 3];
// Tuples
let tuple: [number, string] = [1, "TypeScript"]


//* stack
class Stack<T> {
    private items: T[];
    constructor() {
        this.items = [];
    }

    push(e: T) {
        this.items.push(e);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {  // 查看栈顶元素
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

const stack = new Stack<number>();
stack.push(1)
stack.push(2)


//* Queue
class Queue<T> {
    private items: T[]
    constructor() {
        this.items = []
    }

    enqueue(e: T) {
        this.items.push(e)
    }

    dequeue(): T | undefined {
        return this.items.shift()
    }

    front(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const queue = new Queue<string>();
queue.enqueue('apple')
queue.enqueue('banana')
queue.front()


//* ListNode
class ListNode<T> {
    public data: T;
    public next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null;
    constructor() {
        this.head = null;
    }
    // 添加元素到链表头部
    public insertAtBeginning(data: T): LinkedList<T> {
        const newNode = new ListNode(data);
        newNode.next = this.head;  // next=null
        this.head = newNode;
        return this;
    }

    // 添加元素到链表尾部
    public insertAtEnd(data: T): LinkedList<T> {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this;
    }

    // 查找
    public find(data: T): ListNode<T> | null {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return current
            }
            current = current.next;
        }
        return null;
    }
}