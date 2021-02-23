/*

宋代史学家司马光在《资治通鉴》中有一段著名的“德才论”：“是故才德全尽谓之圣人，才德兼亡谓之愚人，德胜才谓之君子，才胜德谓之小人。凡取人之术，苟不得圣人，君子而与之，与其得小人，不若得愚人。”

现给出一批考生的德才分数，请根据司马光的理论给出录取排名。

输入格式：
输入第一行给出 3 个正整数，分别为：N（≤10
​5
​​ ），即考生总数；L（≥60），为录取最低分数线，即德分和才分均不低于 L 的考生才有资格被考虑录取；H（<100），为优先录取线——德分和才分均不低于此线的被定义为“才德全尽”，此类考生按德才总分从高到低排序；才分不到但德分到线的一类考生属于“德胜才”，也按总分排序，但排在第一类考生之后；德才分均低于 H，但是德分不低于才分的考生属于“才德兼亡”但尚有“德胜才”者，按总分排序，但排在第二类考生之后；其他达到最低线 L 的考生也按总分排序，但排在第三类考生之后。

随后 N 行，每行给出一位考生的信息，包括：准考证号 德分 才分，其中准考证号为 8 位整数，德才分为区间 [0, 100] 内的整数。数字间以空格分隔。

输出格式：
输出第一行首先给出达到最低分数线的考生人数 M，随后 M 行，每行按照输入格式输出一位考生的信息，考生按输入中说明的规则从高到低排序。当某类考生中有多人总分相同时，按其德分降序排列；若德分也并列，则按准考证号的升序输出。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let studentFliter = function(list){
    list.map(item => {
        if(item.cai >= min && item.de >= min){
            studentList[4].push(item)
        }
    })
}
let studentSort = function(list){
    list.map(item => {
        if(item.cai >= priority && item.de >= priority){
            studentList[0].push(item)
        }else if(item.de >= priority){
            studentList[1].push(item)
        }else if(item.de >= item.cai){
            studentList[2].push(item)
        }else{
            studentList[3].push(item)
        }
    })
    for(let i = 0;i < 4;i++){
        studentList[i].sort(sortFun)
    }
}
let i = -1,
    priority = 0,
    min = 0,
    totalList = [],
    studentList = {
        '0':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[]
    }
let sortFun = function(a,b){
    if(a.total == b.total && a.de == b.de){
        return a.id - b.id
    }else if(a.total == b.total){
        return b.de - a.de
    }else{
        return b.total - a.total
    }
}
rl.on('line', function(n) {
    if(i == -1){
        i = n.split(' ')[0] * 1
        priority = n.split(' ')[2] * 1
        min = n.split(' ')[1] * 1
    }else{
        totalList.push({
            id: n.split(' ')[0] * 1,
            de: n.split(' ')[1] * 1,
            cai: n.split(' ')[2] * 1,
            total: n.split(' ')[1] * 1 + n.split(' ')[2] * 1
        })
        i--
    }
    if(i == 0){
        studentFliter(totalList)
        studentSort(studentList[4])
        console.log(studentList[4].length)
        for(let i = 0;i < 4;i++){
            studentList[i].map(item => {
                console.log(`${item.id} ${item.de} ${item.cai}`)
            })
        }
        rl.close();
    }
})