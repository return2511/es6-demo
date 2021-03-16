// leetcode 复原 IP 地址
// 回溯 + 剪枝算法

/**
 * 判断截取的字符串是否符合规范
 * 1: 开始大于结束是异常
 * 2: 如果以0开头的多个字符是不合规范的
 * 3: 大于255的数不是ip地址
 * @param {*} str 原字符串
 * @param {*} start 截取起始位置
 * @param {*} end 截取结束问题
 * @return {*}
 */
const isValid = (str: string, start: number, end: number): boolean => {
  if (end > str.length) return false;
  if (start !== (end - 1) && str[start] === '0') return false;
  const num = Number(str.substring(start, end));
  return num <= 255
}

const restoreIpAddresses = (str: string): string[] => {
  const result = [];

  const backTrack = (res: string[], start: number) => {
    // 如果res结果存满了，但是字符串还没遍历到最后，则直接剪枝，该分支不满足
    if (res.length === 4 && start < str.length) return;
    // 如果res满足了，且已经遍历结束了，则把结果塞进result中
    if (res.length === 4 && start === str.length) {
      result.push(res.join('.'));
      return;
    }
    // 建立回溯树，每个节点最多可以有三个分支
    for (let i = 1; i <= 3; i++) {
      if (isValid(str, start, start + i)) {
        const subRes = str.substring(start, start + i);
        res.push(subRes);
        backTrack(res, start + i);
        res.pop()
      }
    }
  }

  backTrack([], 0);
  return result;
};

const str = "101023";

console.log('restoreIpAddresses', restoreIpAddresses(str))