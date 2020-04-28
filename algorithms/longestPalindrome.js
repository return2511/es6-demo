/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1 ) return s
    const arr = s.split('').join('#')
    console.log('arr', arr)
    let max = 0;
    let index = -1;
    for(let i = 0; i < arr.length; i ++) {
        let c = 0;
        let times = 1
        while(i - times >= 0 && arr[i - times] === arr[i + times]) times ++ ;
        if (times > max) {
            max = times;
            index = i
        }
    }
    console.log('max', max - 1)
    console.log('index', index)
    const start = index - max + 1
    // console.log('object', s.substr(start - c, start + c))
    return s.substr(start, max)
};

const str = "accbab"
console.log('longestPalindrome: ', longestPalindrome(str))