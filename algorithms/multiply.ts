const multiply = (num1: string, num2: string): string => {
  if (num1 === '0' || num2 === '0') return '0';
  const result = [];
  const len1 = num1.length;
  const len2 = num2.length;
  for (let i = len1; i > 0; i --) {
    const temp1 = num1[i - 1]; // num1 从后循环最后的字符
    for (let j = len2; j > 0; j --) {
      const temp2 = num2[j - 1]; // num2 从后循环最后的字符
      const currentIndex = len1 - i + len2 - j; // 取当前循环应该对应的result的index
      const res = result[currentIndex] || 0; // 取result数组中的值， 如果没有则置为0
      const next = result[currentIndex + 1] || 0; // 取result数组中的值， 如果没有则置为0
      const current = Number(temp1) * Number(temp2) + res; // 计算循环中两个单字符的乘积，两个 0-9 的数字相乘为 0 - 81 ，所以结果集只需要考虑当前位数和下一位位数
      result[currentIndex] = current % 10; // 计算出来的值 % 10 即为当前数字
      // 处理当前位数的下一位
      if (current >= 10) {
        result[currentIndex + 1] = next + Math.floor(current / 10);
      }
    }
  }
  return result.reverse().join('');
};

console.log(multiply('123', '456'));