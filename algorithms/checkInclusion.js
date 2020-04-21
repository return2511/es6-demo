/**
 * leetcode 567 字符串的排列  https://leetcode-cn.com/problems/permutation-in-string/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 解法，滑动窗口 + hash
 * 写了段翔一样的代码，竟然work了！！！！！ 后面再优化
 */
var checkInclusion = function (s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    if (len1 > len2) return false;
    const obj1 = {};
    for (let i = 0; i < s1.length; i++) {
        if (!obj1[s1[i]]) {
            obj1[s1[i]] = 1
        } else {
            obj1[s1[i]] = obj1[s1[i]] + 1;
        }
    }
    let index = 0;
    while (index + len1 <= len2) {
        const obj2 = {};
        const slide = s2.substr(index, len1);
        for (let i = 0; i < slide.length; i++) {
            if (!obj2[slide[i]]) {
                obj2[slide[i]] = 1
            } else {
                obj2[slide[i]] = obj2[slide[i]] + 1;
            }
        }

        const arr1 = Object.keys(obj1);
        const arr2 = Object.keys(obj2);
        if (arr1.length !== arr2.length) {
            index ++
        } else {
            let flag = true;
            for (let i = 0; i < arr1.length; i++) {
                if (obj1[arr1[i]] !== obj2[arr1[i]]) {
                    index ++ ;
                    flag = false;
                    break;
                }
            }
            if (flag) return flag;
        }
    }
    return false;
};

var s1 = "ab"; var s2 = "eidboaoo"

console.log('checkInclusion', checkInclusion(s1, s2))