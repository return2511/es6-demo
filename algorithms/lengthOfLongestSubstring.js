/**
 * leetcode 3. 无重复字符的最长子串
 * @param {*} s
 * 给定一个字符串， 请你找出其中不含有重复字符的 最长子串 的长度。
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let result = 0;
    const slide = [];
    for (let i = 0; i < s.length; i++) {
        if (slide.indexOf(s[i]) !== -1) {
            slide.shift();
            i --;
            continue;
        } else {
            slide.push(s[i])
        }
        result = Math.max(result, slide.length);
    }
    return result;
};

const str = 'aabcdefaa';
console.log(lengthOfLongestSubstring(str));