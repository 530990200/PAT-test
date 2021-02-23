/*

设计函数求一元多项式的导数。（注：x
​n
​​ （n为整数）的一阶导数为nx
​n−1
​​ 。）

输入格式:
以指数递降方式输入多项式非零项系数和指数（绝对值均为不超过 1000 的整数）。数字间以空格分隔。

输出格式:
以与输入相同的格式输出导数多项式非零项的系数和指数。数字间以空格分隔，但结尾不能有多余空格。注意“零多项式”的指数和系数都是 0，但是表示为 0 0。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(n) {
    let str = '',arr = [],a = []
    n = n.trim().split(' ')
    if(n.length >= 2){
        n.map(item => {
            if(item && item != ''){
                a.push(item * 1)
            }
        })
        for(let i = 0;i < a.length;i +=2){
            if(a[i + 1] != 0){
                arr.push(a[i] * a[i + 1],a[i + 1] - 1)
            }
        }
    }
    arr = arr.length >= 2 ? arr : [0,0]
    str = arr.join(' ').trim()
    console.log(str)
    rl.close();
})
