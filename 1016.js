/*

正整数 A 的“D
​A
​​ （为 1 位整数）部分”定义为由 A 中所有 D
​A
​​  组成的新整数 P
​A
​​ 。例如：给定 A=3862767，D
​A
​​ =6，则 A 的“6 部分”P
​A
​​  是 66，因为 A 中有 2 个 6。

现给定 A、D
​A
​​ 、B、D
​B
​​ ，请编写程序计算 P
​A
​​ +P
​B
​​ 。

输入格式：
输入在一行中依次给出 A、D
​A
​​ 、B、D
​B
​​ ，中间以空格分隔，其中 0<A,B<10
​10
​​ 。

输出格式：
在一行中输出 P
​A
​​ +P
​B
​​  的值。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let result,mainFunction = function(a,b,c,d){
    let e = '',eLength = a.split(b).length - 1
    for(let i = 0;i < eLength;i++){
        e = e + b
    }
    let f = '',fLength = c.split(d).length - 1
    for(let i = 0;i < fLength;i++){
        f = f + d
    }
    result = e * 1 + f * 1
}
rl.on('line', function(n) {
    n = n.split(' ')
    mainFunction(n[0],n[1],n[2],n[3])
    console.log(result)
    rl.close();
})