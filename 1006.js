/*

让我们用字母 B 来表示“百”、字母 S 表示“十”，用 12...n 来表示不为零的个位数字 n（<10），换个格式来输出任一个不超过 3 位的正整数。例如 234 应该被输出为 BBSSS1234，因为它有 2 个“百”、3 个“十”、以及个位的 4。

输入格式：
每个测试输入包含 1 个测试用例，给出正整数 n（<1000）。

输出格式：
每个测试用例的输出占一行，用规定的格式输出 n。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(n) {
    let a = '',b = parseInt(n / 100),c = parseInt((n % 100) / 10) ,d = n % 10
    for(let i = 0;i < b;i++){
        a += 'B'
    }
    for(let i = 0;i < c;i++){
        a += 'S'
    }
    for(let i = 0;i < d;i++){
        a += `${i + 1}`
    }
    console.log(a)
    rl.close(); //
})