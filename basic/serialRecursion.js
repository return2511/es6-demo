// 递归解决而为数据排列组合问题
function serialRecursion(arr) {
    const arrLength = arr.length;

    if (arrLength === 1) {
        return arr[0]
    }

    const len1 = arr[0].length;
    const len2 = arr[1].length;
    const lengBoth = len1 * len2;
    const items = new Array(lengBoth);

    let index = 0;
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            items[index] = `${arr[0][i]}+${arr[1][j]}`;
            index++;
        }
    }

    const newArray = new Array(arrLength - 1);
    for (let i = 2; i < arr.length; i++) {
        newArray[i - 1] = arr[i];
    }
    newArray[0] = items
    return serialRecursion(newArray);
}

var myArr = [
    ['A', 'B', 'C'],
    ['A1', 'B1', 'C1'],
    ['A2', 'B2']
];
console.log(serialRecursion(myArr));

var myArr1 = [
    ['A', 'B', 'C'],
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'],
    ['A2', 'B2', 'C2'],
    ['A3', 'B3', 'C3', 'D3']
];

console.log(serialRecursion(myArr1));