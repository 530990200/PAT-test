/*

给定一系列正整数，请按要求对数字进行分类，并输出以下 5 个数字：

A
​1
​​  = 能被 5 整除的数字中所有偶数的和；
A
​2
​​  = 将被 5 除后余 1 的数字按给出顺序进行交错求和，即计算 n
​1
​​ −n
​2
​​ +n
​3
​​ −n
​4
​​ ⋯；
A
​3
​​  = 被 5 除后余 2 的数字的个数；
A
​4
​​  = 被 5 除后余 3 的数字的平均数，精确到小数点后 1 位；
A
​5
​​  = 被 5 除后余 4 的数字中最大数字。
输入格式：
每个输入包含 1 个测试用例。每个测试用例先给出一个不超过 1000 的正整数 N，随后给出 N 个不超过 1000 的待分类的正整数。数字间以空格分隔。

输出格式：
对给定的 N 个正整数，按题目要求计算 A
​1
​​ ~A
​5
​​  并在一行中顺序输出。数字间以空格分隔，但行末不得有多余空格。

若其中某一类数字不存在，则在相应位置输出 N。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(n) {
    let str = '',arr = [[],[],[],[],[]]
    n = n.split(' ')
    n.splice(0,1)
    n.map(item => {
        item = item * 1
        if(item % 5 == 0){
            if(item % 2 == 0){
                arr[0].push(item)
            }
        }else{
            arr[item % 5].push(item)
        }
    })
    
    arr.map((item,index) => {
        if(item.length > 0){
            let sum = 0
            switch(index){
                case 0:
                    item.map(arrItem => {
                        sum += arrItem
                    })
                    str += `${sum} `
                    break
                case 1:
                    item.map((arrItem,arrIndex) => {
                        if((arrIndex + 1) % 2 != 0){
                            sum += arrItem
                        }else{
                            sum -= arrItem
                        }
                    })
                    str += `${sum} `
                    break
                case 2:
                    str += `${item.length} `
                    break
                case 3:
                    item.map(arrItem => {
                        sum += arrItem
                    })
                    str += `${(sum / item.length).toFixed(1)} `
                    break
                default:
                    str += `${Math.max(...item)}`
                    break
            }
        }else{
            str += 'N'
            if(index != 4){
                str += ' '
            }
        }
    })
    console.log(str)
    rl.close();
})