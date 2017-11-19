/***********************
 * 使用队列实现击鼓传花游戏
 ***********************/
const Queue = require('./Queue');

function hotPotato(nameList, num) {
    const members = new Queue();
    let times = 0;

    nameList.forEach(elem=>{
        members.enqueue(elem);
    });

    while(members.size() > 1) {
        members.enqueue(members.dequeue());
        times++;
        if (times === num) {
            console.log(members.dequeue(),' 被淘汰了！');
            times = 0;
        }
    }

    console.log('胜利者是：', members.front())
    return members.front();
}

let names = ['John', 'Amy', 'Trump', 'Rose', 'Frank'];

hotPotato(names, 5);
