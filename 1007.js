/*

让我们定义dn
​​ 为：d
​n
​​ =p
​n+1
​​ −p
​n
​​ ，其中p
​i
​​ 是第i个素数。显然有d
​1
​​ =1，且对于n>1有d
​n
​​ 是偶数。“素数对猜想”认为“存在无穷多对相邻且差为2的素数”。

现给定任意正整数N(<10
​5
​​ )，请计算不超过N的满足猜想的素数对的个数。

输入格式:
输入在一行给出正整数N。

输出格式:
在一行中输出不超过N的满足猜想的素数对的个数。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let num = 0, nextNumIsPrime = false
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
    n = n * 1
    for(let j = 3;j <= n - 2;j += 2){
        if(nextNumIsPrime == false){
            if(isPrime(j) && isPrime(j + 2)){
                num++
                nextNumIsPrime = true
            }else{
                nextNumIsPrime = false
            }
        }else{
            if(isPrime(j + 2)){
                num++
            }else{
                nextNumIsPrime = false
            }
        }
        
    }
    console.log(num)
    rl.close(); //
})