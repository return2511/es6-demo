// 简化路径 https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1013/

const simplifyPath = (path: string): string => {
  const res = path.split('/');
  const stack = [];
  res.forEach((item: string) => {
    if (item !== '.' && item !== '') {
      if (item === '..') {
        stack.pop();
      } else {
        stack.push(item);
      }
    }
  })
  return `/${stack.join('/')}`;
};

console.log('xxxxx', simplifyPath('/a/./b/../../c/'));