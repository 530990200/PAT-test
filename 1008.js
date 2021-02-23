/*

一个数组A中存有N（>0）个整数，在不允许使用另外数组的前提下，将每个整数循环向右移M（≥0）个位置，即将A中的数据由（A
​0
​​ A
​1
​​ ⋯A
​N−1
​​ ）变换为（A
​N−M
​​ ⋯A
​N−1
​​ A
​0
​​ A
​1
​​ ⋯A
​N−M−1
​​ ）（最后M个数循环移至最前面的M个位置）。如果需要考虑程序移动数据的次数尽量少，要如何设计移动的方法？

输入格式:
每个输入包含一个测试用例，第1行输入N（1≤N≤100）和M（≥0）；第2行输入N个整数，之间用空格分隔。

输出格式:
在一行中输出循环右移M位以后的整数序列，之间用空格分隔，序列结尾不能有多余空格。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let str = '',i = -1
let move = function(arr){
    if(i == 0){
        str = arr
    }else{
        arr = arr.split(' ')
        if(i > arr.length){
            i = i % arr.length
        }
        let n = arr.length - i
        for(let j = n;j < arr.length;j++){
            str += arr[j] + ' '
        }
        for(let j = 0;j < n;j++){
            str += arr[j]
            if(j != n - 1){
                str += ' '
            }
        }
    }
    console.log(str)
    rl.close()
}
rl.on('line', function(n) {
    if(i == -1){
        i = n.split(' ')[1] * 1
    }else{
        move(n)
    }
})