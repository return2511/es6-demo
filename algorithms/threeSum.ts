// 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 输入：nums = [-1,0,1,2,-1,-4] 输出：[[-1,-1,2],[-1,0,1]]
// 解法：排序 + 双指针算法
// 解法说明：排序之后，遍历取一个数字，然后分别两个指针放在下一个数字和数组尾部，计算三个位置之和，如果大于0则右指针左移，小于0则左指针右移
function threeSum(nums: number[]): number[][] {
  if (!Array.isArray(nums) || nums.length < 3) return [];
  const result = [];
  // 先排序，注意js的排序sort对负数时有问题，不可以直接sort; 因为sort默认是比较字符串
  const list = nums.sort((a, b) => a - b);
  for (let i = 0; i < list.length; i++) {
    // 已排序的数组，如果当前数值大于0，则后面所有数字都大于0，所以三数之和也必定大于0
    if (list[i] > 0) break;
    // 如果当前的数值和上一个一致，则跳过本次循环，用来去重
    if (i > 0 && list[i] === list[i - 1]) continue;
    let left = i + 1;
    let right = list.length - 1;
    while (left < right) {
      const sum = list[i] + list[left] + list[right];
      if (sum === 0) {
        result.push([list[i], list[left], list[right]]);
        // 这里面需要加上两个while语句用来判断双指针范围内重复的数值，做去重处理
        while (left < right && list[left] === list[left + 1]) left ++;
        while (left < right && list[right] === list[right - 1]) right --;
        // 正常获取一个有效结果之后，左右指针均需要往中间收缩一位；
        left ++;
        right --;
      } else if (sum < 0) {
        // 如果小于0，则左指针右移一位
        left ++;
      } else {
        // 如果sum大于0，则右指针左移一位
        right --;
      }
    }
  }
  return result;
};

const arr = [-1,0,1,2,-1,-4];
console.log(threeSum(arr));