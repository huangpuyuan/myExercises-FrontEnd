var year = usePrompt("年份");
var month = usePrompt("月份");
var day = usePrompt("日期");
print(year, month, day);

function print(year, month, day) {
    document.write("您的生日在" + year + "年的第" + sumDays(year, month, day) + '天');
}
//Leap函数判断年份是否为闰年，是闰年返回1，平年返回中0。由于0为false，1为true这里可以妙用。
function Leap(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return 1;
    } else {
        return 0;
    }
}

function usePrompt(string) {
    //当函数传入一个true的参数则执行while循环
    while (string) {
        var value = parseInt(prompt("请输入您的出生" + string));
        var DA = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        //判断输入的是否为数字
        if (isNaN(value)) {
            alert("请输入合法数字");
        } else {
            switch (string) {
                case "年份":
                    return value;
                case "月份":
                    //判断月份输入是否合法
                    if (value < 1 || value > 12) {
                        alert("请重新输入合法月份(数字1到12)");
                    } else {
                        return value;
                    }
                    break;
                case "日期":
                    //判断日期输入是否合法,因为year,month为全局变量且在日期之间执行了所以必定存在;
                    if (Leap(year)) DA[2] = 29;
                    if (value < 1 || value > DA[month]) {
                        alert("请重新输入合法日期(数字1到31且符合日期规则)")
                    } else {
                        return value;
                    }
                    break;
            }
        }


    }

}

function sumDays(year, month, day) {
    //返回一年中的天数
    var Total, sum;
    switch (month) {
        case 1:
            Total = 0;
            break;
        case 2:
            Total = 31;
            break;
        case 3:
            Total = 59;
            break;
        case 4:
            Total = 90;
            break;
        case 5:
            Total = 120;
            break;
        case 6:
            Total = 151;
            break;
        case 7:
            Total = 181;
            break;
        case 8:
            Total = 212;
            break;
        case 9:
            Total = 242;
            break;
        case 10:
            Total = 273;
            break;
        case 11:
            Total = 303;
            break;
        case 12:
            Total = 334;
            break;
        default:
            console.error();
            break;
    }
    if (month > 2) {
        //Leap函数在这里妙用闰年值为1。
        sum = Total + day + Leap(year);
    } else {
        sum = Total + day;
    }
    return sum;
}
