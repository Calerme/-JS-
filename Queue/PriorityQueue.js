const items = new WeakMap();
class PriorityQueue {
    constructor () {
        items.set(this, []);
    }

    enqueue (elem, priority) {
        const arr = items.get(this);

        const elemGroup = {
            elem: elem,
            priority: priority
        };

        if (!arr.length) {
            arr.push(elemGroup);
        } else {
            arr.some((elem, i, arr)=>{
                if (elemGroup.priority < elem.priority) {
                    arr.splice(i, 0, elemGroup);
                    return true;
                } else if (i === arr.length - 1) {
                    arr.push(elemGroup);
                    return true;
                }
            });
        }

        return arr.length;
    }

    dequeue() {
        return items.get(this).shift();
    }

    front() {
        return items.get(this)[0];
    }

    size() {
        return items.get(this).length;
    }

    isEmpty() {
        return items.get(this).length === 0;
    }
}

