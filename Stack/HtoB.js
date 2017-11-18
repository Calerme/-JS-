/***********************
 * 使用栈解决从十进制到二进制
 ***********************/

function htob(n) {
    if (isNaN(n)) {
        throw new Error(`${n}不是一个有效数字`);
    }

    let stack = [];
    let nB = '';

    if (n<0) {
        nB = '-';
        n = Math.abs(n);
    }

    while(n>0) {
        stack.push(n%2);
        n = Math.floor(n / 2);
    }

    while(stack.length) {
        nB += stack.pop();
    }

    return nB;
}
