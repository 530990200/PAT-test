/*

大侦探福尔摩斯接到一张奇怪的字条：我们约会吧！ 3485djDkxh4hhGE 2984akDfkkkkggEdsb s&hgsfdk d&Hyscvnm。大侦探很快就明白了，字条上奇怪的乱码实际上就是约会的时间星期四 14:04，因为前面两字符串中第 1 对相同的大写英文字母（大小写有区分）是第 4 个字母 D，代表星期四；第 2 对相同的字符是 E ，那是第 5 个英文字母，代表一天里的第 14 个钟头（于是一天的 0 点到 23 点由数字 0 到 9、以及大写字母 A 到 N 表示）；后面两字符串第 1 对相同的英文字母 s 出现在第 4 个位置（从 0 开始计数）上，代表第 4 分钟。现给定两对字符串，请帮助福尔摩斯解码得到约会的时间。

输入格式：
输入在 4 行中分别给出 4 个非空、不包含空格、且长度不超过 60 的字符串。

输出格式：
在一行中输出约会的时间，格式为 DAY HH:MM，其中 DAY 是某星期的 3 字符缩写，即 MON 表示星期一，TUE 表示星期二，WED 表示星期三，THU 表示星期四，FRI 表示星期五，SAT 表示星期六，SUN 表示星期日。题目输入保证每个测试存在唯一解。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let getDayAndHour = function(str1,str2){
    for(let i = 0;i < str1.length;i++){
        if(str2[i] && str1[i] == str2[i] && (isUpper(str1[i]) || isNum(str1[i]))){
            if(getLength == 0 && weekList[str1[i]]){
                str += weekList[str1[i]]
                getLength++
            }else if(getLength == 1 && hourList[str1[i]]){
                str += hourList[str1[i]]
                getLength++
                break
            }
        }
    }
}
let getMin = function(str1,str2){
    for(let i = 0;i < str1.length;i++){
        if(str2[i] && str1[i] == str2[i] && isLetter(str1[i])){
            if(i < 10){
                str += `0${i}`
            }else{
                str += i
            }
            break
        }
    }
}
let isUpper = function(str){
    var regex=/^[A-Z]+$/
    return regex.test(str)
}
let isLetter = function(str){
    var regex=/^[a-zA-Z]+$/
    return regex.test(str)
}
let isNum = function(str){
    var regex=/^[0-9]+$/
    return regex.test(str)
}
let weekList = {
    'A': 'MON ',
    'B': 'TUE ',
    'C': 'WED ',
    'D': 'THU ',
    'E': 'FRI ',
    'F': 'SAT ',
    'G': 'SUN '
}
let hourList = {
    '0': '00:',
    '1': '01:',
    '2': '02:',
    '3': '03:',
    '4': '04:',
    '5': '05:',
    '6': '06:',
    '7': '07:',
    '8': '08:',
    '9': '09:',
    'A': '10:',
    'B': '11:',
    'C': '12:',
    'D': '13:',
    'E': '14:',
    'F': '15:',
    'G': '16:',
    'H': '17:',
    'I': '18:',
    'J': '19:',
    'K': '20:',
    'L': '21:',
    'M': '22:',
    'N': '23:'
}
let list = [],getLength = 0,str = ''
rl.on('line', function(n) {
    if(list.length < 4){
        list.push(n)
    }
    if(list.length == 4){
        getDayAndHour(list[0],list[1])
        getMin(list[2],list[3])
        console.log(str)
        rl.close()
    }
})