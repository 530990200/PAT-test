/*

大家应该都会玩“锤子剪刀布”的游戏：两人同时给出手势，胜负规则如图所示：

现给出两人的交锋记录，请统计双方的胜、平、负次数，并且给出双方分别出什么手势的胜算最大。

输入格式：
输入第 1 行给出正整数 N（≤10
​5
​​ ），即双方交锋的次数。随后 N 行，每行给出一次交锋的信息，即甲、乙双方同时给出的的手势。C 代表“锤子”、J 代表“剪刀”、B 代表“布”，第 1 个字母代表甲方，第 2 个代表乙方，中间有 1 个空格。

输出格式：
输出第 1、2 行分别给出甲、乙的胜、平、负次数，数字间以 1 个空格分隔。第 3 行给出两个字母，分别代表甲、乙获胜次数最多的手势，中间有 1 个空格。如果解不唯一，则输出按字母序最小的解。

运行超时

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let i = -1,a = [],b = [],win = 0,fail = 0,draw = 0,aWinWay={j:0,c:0,b:0},bWinWay={j:0,c:0,b:0}
const getResult = function (a,b){
    for(let i = 0;i < a.length;i++){
        switch(a[i]){
            case 'J':
                if(b[i] == 'J'){
                    draw++
                }else if(b[i] == 'C'){
                    fail++
                    bWinWay.c++
                }else{
                    win++
                    aWinWay.j++
                }
                break
            case 'C':
                if(b[i] == 'J'){
                    win++
                    aWinWay.c++
                }else if(b[i] == 'C'){
                    draw++
                }else{
                    fail++
                    bWinWay.b++
                }
                break
            case 'B':
                if(b[i] == 'J'){
                    fail++
                    bWinWay.j++
                }else if(b[i] == 'C'){
                    win++
                    aWinWay.b++
                }else{
                    draw++
                }
                break
            default:
                break
        }
    }
}
const getMax = function (a){
    let max = 'J'
    if(a.c >= a.j){
        max = 'C'
        if(a.b >= a.c){
            max = 'B'
        }
    }else{
        if(a.b >= a.j){
            max = 'B'
        }
    }
    return max
}
rl.on('line', function(n) {
    if(i == -1){
        i = n
    }else{
        i--
        n = n.split(' ')
        a.push(n[0])
        b.push(n[1])
    }
    if(i == 0 || n == 0){
        getResult(a,b)
        console.log(win,draw,fail)
        console.log(fail,draw,win)
        console.log(getMax(aWinWay),getMax(bWinWay))
        rl.close()
    }
})