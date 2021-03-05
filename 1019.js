/*

给定任一个各位数字不完全相同的 4 位正整数，如果我们先把 4 个数字按非递增排序，再按非递减排序，然后用第 1 个数字减第 2 个数字，将得到一个新的数字。一直重复这样做，我们很快会停在有“数字黑洞”之称的 6174，这个神奇的数字也叫 Kaprekar 常数。

例如，我们从6767开始，将得到

7766 - 6677 = 1089
9810 - 0189 = 9621
9621 - 1269 = 8352
8532 - 2358 = 6174
7641 - 1467 = 6174
... ...
现给定任意 4 位正整数，请编写程序演示到达黑洞的过程。

输入格式：
输入给出一个 (0,10
​4
​​ ) 区间内的正整数 N。

输出格式：
如果 N 的 4 位数字全相等，则在一行内输出 N - N = 0000；否则将计算的每一步在一行内输出，直到 6174 作为差出现，输出格式见样例。注意每个数字按 4 位数格式输出。

运行超时

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = [],numMax = '',numMin = ''
const sortMax = function(str){
    arr = str.split('')
    arr.sort(function(a, b) {
      return b - a
    })
    numMax = arr.join('')
}
const sortMin = function(str){
    arr = str.split('')
    arr.sort(function(a, b) {
      return a - b
    })
    numMin = arr.join('')
}
rl.on('line', function(n) {
    while(n !== '6174' || n !== '0000'){
        sortMax(n)
        sortMin(n)
        n = (numMax - numMin).toString()
        switch(n.length){
            case 3:
                n = '0' + n
            break
            case 2:
                n = '00' + n
            break
            case 1:
                n = '000' + n
            break
            default:
            break
        }
        console.log(`${numMax} - ${numMin} = n`)
    }
    rl.close()
})