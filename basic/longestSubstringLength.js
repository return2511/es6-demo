function longestSubstringLength (str) {
    let len = 0;
    let substr = ''
    for( let i = 0; i < str.length ; i++) {
        const index = substr.indexOf(str[i]);
        if (index === -1) {
            substr += str[i];
        } else {
            substr = substr.slice(index + 1) + str[i];
        }
        len = Math.max(len, substr.length)
    }
    return len;
}

console.log(longestSubstringLength('1123444567456789'))