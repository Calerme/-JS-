const items = new WeakMap();
class Queue {
    constructor() {
        items.set(this, []);
    }

    enqueue() {
        const arr = items.get(this);
        arr.push.apply(arr, arguments);
        return arr.length;
    }

    dequeue() {
        const arr = items.get(this);
        return arr.shift();
    }

    front() {
        return items.get(this)[0];
    }

    isEmpty() {
        return items.get(this).length === 0;
    }

    size() {
        return items.get(this).length;
    }

    print() {
        console.log(items.get(this).join(' - '));
    }
}

module.exports = Queue;
