/***********************
 * 使用栈解决从十进制到任意进制（最高十六进制）
 ***********************/

function htob(n, base = 2) {
    if (isNaN(n)) {
        throw new Error(`${n}不是一个有效数字`);
    }

    let stack = [];
    let nB = '';
    let map = '0123456789abcdef';

    if (n<0) {
        nB = '-';
        n = Math.abs(n);
    }

    while(n>0) {
        stack.push(n%base);
        n = Math.floor(n / base);
    }

    while(stack.length) {
        nB += map[stack.pop()];
    }

    return nB;
}
