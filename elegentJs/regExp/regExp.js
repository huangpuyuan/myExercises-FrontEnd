/**
 * Created by Kaitai on 2017/6/1.
 */
// 正则：用户名4-6位字母数字下划线
var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
console.log(uPattern.test("iFat3"));

// 正则：密码强度，最少6位，包括至少一个大写字母，一个小写字母，1个数字，1个特殊字符
var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&? ]).*$/;
console.log("=="+pPattern.test("iFat3#"));

/**
 *整数正则：
 */
// 非负整数
var posPattern = /^\d+$/;
var posPattern2 = /^[1-9]\d*$/;
console.log(posPattern.test("42"));
console.log(posPattern2.test("0"));
// 非正整数
