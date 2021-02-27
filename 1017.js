/*

本题要求计算 A/B，其中 A 是不超过 1000 位的正整数，B 是 1 位正整数。你需要输出商数 Q 和余数 R，使得 A=B×Q+R 成立。

输入格式：
输入在一行中依次给出 A 和 B，中间以 1 空格分隔。

输出格式：
在一行中依次输出 Q 和 R，中间以 1 空格分隔。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(n) {
  let str = n.split(' ')[0],a = parseInt(n.split(' ')[1]),b = 0,c = '',d = 0
  if(str.length > 1){
      for(let i = 0;i < str.length - 1;i++){
        if(i == 0){
            b = parseInt(str[0] + str[1])
        }else{
            b = parseInt(d +str[i+1] )
        }
        c = c + Math.floor(b / a)
        d = b % a
      }
  }else{
      b = str[0]
      c = c + Math.floor(b / a)
      d = b % a
  }
  console.log(c+' '+d)
  rl.close();
})