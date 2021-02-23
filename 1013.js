/*

令 P
​i
​​  表示第 i 个素数。现任给两个正整数 M≤N≤10
​4
​​ ，请输出 P
​M
​​  到 P
​N
​​  的所有素数。

输入格式：
输入在一行中给出 M 和 N，其间以空格分隔。

输出格式：
输出从 P
​M
​​  到 P
​N
​​  的所有素数，每 10 个数字占 1 行，其间以空格分隔，但行末不得有多余空格。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let nextNumIsPrime = false,arr = [2]
let isPrime = function(num){
    if(num == 1){
        return false
    }
    if(num == 2){
        return true
    }
    if(num % 2 == 0){
        return false
    }
    for(let i = 3;i <= Math.sqrt(num);i +=2){
        if(num % i == 0){
            return false
        }
    }
    return true
}
rl.on('line', function(n) {
    let a = n.split(' ')[0] * 1,b = n.split(' ')[1] * 1,temp = 1
    for(let i = 3;temp < b;i += 2){
        if(isPrime(i)){
            arr.push(i)
            temp++
        }
    }
    arr.splice(0,a - 1)
    let c = Math.ceil(arr.length / 10)
    for(let i = 0;i < c;i++){
        console.log(arr.splice(0,10).join(' '))
    }
    rl.close();
})