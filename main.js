class SLLNode {
    constructor(num) {
        this.value = num;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    removeHead() {
        if (this.head === null) {
            return null;
        } else {
            let currentHead = this.head;
            this.head = currentHead.next;
            return this.head;
        }
    }

    getHeadValue() {
        if (this.head === null) {
            return null;
        } else {
            return this.head.value;
        }
    }

    display() {
        let listString = "";
        let runner = this.head;
        while (runner) {
            listString += runner.value;
            if (runner.next) {
                listString += ", ";
            }
            runner = runner.next;
        }
        return `[${listString}]`;
    }
}

var mySLL = new SLL();
mySLL.addFront(60);
mySLL.addFront(70);
mySLL.addFront(80);
console.log(mySLL.display());


