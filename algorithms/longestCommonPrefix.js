
// letcode 14最长公共前缀 https://leetcode-cn.com/problems/longest-common-prefix/

function longestCommonPrefix (strs) {
    if (strs.length === 0) return '';
    // 取其第一项为假设最长前缀
    let [ item ] = strs;
    for (let i = 1; i < strs.length; i++) {
        const element = strs[i];
        let j = 0;
        for (; j < item.length && j < element.length; j++) {
            if (item[j] !== element[j]) break;
        }
        item = item.substr(0, j)
        if (item === '') return ''
    }
    return item;
}

// 改良版
// 因为最长子前缀不会大于当前数组的每一项的长度，所以存储最小的item的长度用来做第二次的遍历番位
function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    // 取其第一项为假设最长前缀
    let [item] = strs;
    let minLength = item.length;
    for (let i = 1; i < strs.length; i++) {
        minLength = Math.min(minLength, strs[i].length)
    }

    for (let i = 1; i < strs.length; i++) {
        const element = strs[i];
        let j = 0;
        for (; j < item.length && j < minLength; j++) {
            if (item[j] !== element[j]) break;
        }
        item = item.substr(0, j)
        if (item === '') return ''
    }
    return item;
}

const list = ["flower", "flow", "flight"];
const list2 = ["c", "c"]
console.log('longestCommonPrefix', longestCommonPrefix(list2))