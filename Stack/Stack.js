const items = new WeakMap();
export class Stack {
    constructor() {
        items.set(this, []);
    }

    push() {
        const arr = items.get(this);
        [].forEach.call(arguments, function (item) {
            arr.push(item);
        });

        return arr.length;
    }

    pop() {
        const arr = items.get(this);
        return arr.pop();
    }

    peek() {
        const arr = items.get(this);
        return arr[arr.length-1];
    }

    isEmpty() {
        return items.get(this).length === 0;
    }

    clear() {
        items.get(this).length = 0;
    }

    size() {
        return items.get(this).length;
    }

    print() {
        /* eslint-disable */
        console.log(items.get(this).join(' - '));
        /* eslint-enable */
    }
}

