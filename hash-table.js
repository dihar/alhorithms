class ElList {
    constructor(value, next) {
        this.value = value;
        this.nextEl = nextEl;
    }

    set next(next) {
        this.nextEl = next;
    }

    get next() {
        return this.nextEl;
    }
}

class List {
    constructor() {
        this.firstElement = null;
        this.length = 0;
    }

    add(value) {
        if (this.length === 0) {
            this.firstElement = new ElList(value, null);
            this.length++;
            return true;
        }

        let pointer = this.firstElement;
        while (true) {
            if (!pointer.next) {
                pointer.next = new ElList(value, null);
                this.length++;
                break;
            }
        }
    }
}

class HashTable {
    constructor() {
        this.arr = [];
    }

    add(key, value) {

    }
}

module.exports = HashTable;
