/**
 * leetcode 20 有效的括号 https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const list = [];
    // 如果字符串长度为奇数，直接返回false
    const len = s.length;
    if (len % 2) return false;
    for(let i = 0; i < len; i ++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            list.push(s[i])
        } else {
            if (s[i] === '}'  && list.pop() !== '{') {
                return false
            } else if (s[i] === ']'  && list.pop() !=='[') {
                return false
            } else if (s[i] === ')'  && list.pop() !=='(') {
                return false
            }
        }
    }
    return list.length === 0
};

console.log('isValid', isValid("()[]{}"))