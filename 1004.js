/*

读入 n（>0）名学生的姓名、学号、成绩，分别输出成绩最高和成绩最低学生的姓名和学号。

输入格式：
每个测试输入包含 1 个测试用例，格式为

第 1 行：正整数 n
第 2 行：第 1 个学生的姓名 学号 成绩
第 3 行：第 2 个学生的姓名 学号 成绩
  ... ... ...
第 n+1 行：第 n 个学生的姓名 学号 成绩
其中姓名和学号均为不超过 10 个字符的字符串，成绩为 0 到 100 之间的一个整数，这里保证在一组测试用例中没有两个学生的成绩是相同的。

输出格式：
对每个测试用例输出 2 行，第 1 行是成绩最高学生的姓名和学号，第 2 行是成绩最低学生的姓名和学号，字符串间有 1 空格。

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let check = function(value){
    if(value.indexOf(' ') == -1){
        return
    }else{
        let arr = value.split(' ')
        let student = {name: arr[0],id: arr[1],grades: arr[2] * 1}
        if(maxStudent.name == '' && maxStudent.id == '' && maxStudent.grades == ''){
            maxStudent.name = student.name
            maxStudent.id = student.id
            maxStudent.grades = student.grades
        }else{
            if(student.grades > maxStudent.grades){
                maxStudent.name = student.name
                maxStudent.id = student.id
                maxStudent.grades = student.grades
            }
        }
        if(minStudent.name == '' && minStudent.id == '' && minStudent.grades == ''){
            minStudent.name = student.name
            minStudent.id = student.id
            minStudent.grades = student.grades
        }else{
            if(student.grades < minStudent.grades){
                minStudent.name = student.name
                minStudent.id = student.id
                minStudent.grades = student.grades
            }
        }
    }
}
let i = -1,maxStudent = {name:'',id:'',grades:''},minStudent = {name:'',id:'',grades:''}
rl.on('line', function(n) {
    if(i == -1){
        i = n
    }else{
        i--
        check(n)
    }
    if(i == 0 || n == 0){
        console.log(maxStudent.name + ' ' + maxStudent.id)
        console.log(minStudent.name + ' ' + minStudent.id)
        rl.close()
    }
})