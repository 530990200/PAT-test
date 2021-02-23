/*

读入一个正整数 n，计算其各位数字之和，用汉语拼音写出和的每一位数字。

输入格式：
每个测试输入包含 1 个测试用例，即给出自然数 n 的值。这里保证 n 小于 10^100。

输出格式：
在一行内输出 n 的各位数字之和的每一位，拼音数字间有 1 空格，但一行中最后一个拼音数字后没有空格。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(n) {
    let a = 0,b = ''
    for(let i = 0;i < n.length;i++){
        a = a + n[i] * 1
    }
    a = (a + '').split('')
    a.map((item,index) => {
        item = item * 1
        switch (item){
            case 1:
                item = 'yi'
                break
            case 2:
                item = 'er'
                break
            case 3:
                item = 'san'
                break
            case 4:
                item = 'si'
                break
            case 5:
                item = 'wu'
                break
            case 6:
                item = 'liu'
                break
            case 7:
                item = 'qi'
                break
            case 8:
                item = 'ba'
                break
            case 9:
                item = 'jiu'
                break
            case 0:
                item = 'ling'
                break
            default:
                break
        }
        if(index != a.length - 1){
            item = item + ' '
        }
        b = b + item
    })
    console.log(b)
    rl.close()
})