/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix: number[][]): number[] => {
  const [first] = matrix;
  if (matrix.length === 0 || first.length === 0) return [];
  const res = [];
  let left = 0;
  let top = 0;
  let bottom = matrix.length - 1;
  let right = first.length - 1;
  // 当res中的数比 二维数组中少的时候都继续遍历
  while(res.length < matrix.length * first.length) {
    // 分别从左到右， 然后右到下，然后右到左，从下到上，以此循环遍历，注意可能存在遍历完一次循环就结束的情况，需要加跳出条件
    // 1: 从左到右，循环完一次后，上边界下移一位，跳出条件为上边界超过下边界的情况
    for (let i = left; i <= right; i ++) res.push(matrix[top][i])
    top ++;
    if (top > bottom) break;
    // 2: 从上到下，循环完一次后，右边界左移一位，跳出条件为左边界超过右边界
    for (let i = top; i <= bottom; i ++) res.push(matrix[i][right])
    right --;
    if (left > right) break
    // 3: 从右到左，循环完一次后，下边界上移一位，跳出条件为上边界超过下边界
    for (let i = right; i >= left; i --) res.push(matrix[bottom][i])
    bottom --;
    if (top > bottom) break;
    // 4: 从下到上，循环玩一次后，左边界右移一位，不需要跳出条件，因为while循环体中加了长度判断
    for (let i = bottom; i >= top; i --) res.push(matrix[i][left])
    left ++;
  }
  return res;
};

const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

console.log(spiralOrder(matrix));