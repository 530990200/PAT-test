/*

给定区间 [−2
​31
​​ ,2
​31
​​ ] 内的 3 个整数 A、B 和 C，请判断 A+B 是否大于 C。

输入格式：
输入第 1 行给出正整数 T (≤10)，是测试用例的个数。随后给出 T 组测试用例，每组占一行，顺序给出 A、B 和 C。整数间以空格分隔。

输出格式：
对每组测试用例，在一行中输出 Case #X: true 如果 A+B>C，否则输出 Case #X: false，其中 X 是测试用例的编号（从 1 开始）。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = [],i = -1,num = 1
let check = function(value,num){
    arr = value.split(' ')
    if((arr[0] * 1) + (arr[1] * 1) > (arr[2] * 1)){
        console.log(`Case #${num}: true`)
    }else{
        console.log(`Case #${num}: false`)
    }
}
rl.on('line', function(n) {
    if(i == -1){
        i = n
    }else{
        i--
        check(n,num)
        num++
    }
    if(i == 0 || n == 0){
        rl.close()
    }
})