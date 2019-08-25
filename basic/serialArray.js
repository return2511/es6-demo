// 列举法求二维数组排列组合所有可能
function mySerialArray(arr) {
    let length = 1;
    const result = [];
    const lengthArr = [];
    const productArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const len = element.length;
        length *= len;
        lengthArr.push(len);
        const product = i === 0 ? 1 : lengthArr[i - 1] * productArr[i - 1];
        productArr.push(product);
    }

    for (let i = 0; i < length; i++) {
        let str = '';
        for (let j = 0; j < arr.length; j++) {
            const secondKey = Math.floor(i / productArr[j]) % lengthArr[j];
            if (str === '') {
                str += arr[j][secondKey];
            } else {
                str += '+' + arr[j][secondKey];
            }

        }
        result.push(str);
    }
    return result;
}

var myArr = [
    ['A', 'B', 'C'],
    ['A1', 'B1', 'C1'],
    ['A2', 'B2']
];
console.log(mySerialArray(myArr));
var myArr1 = [
    ['A', 'B', 'C'],
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'],
    ['A2', 'B2', 'C2'],
    ['A3', 'B3', 'C3', 'D3']
];
console.log(mySerialArray(myArr1));
var myArr2 = [
    ['A', 'B', 'C'],
    ['A1', 'B1', 'C1', 'D1'],
    ['A2', 'B2', 'C2']
];
console.log(mySerialArray(myArr2));
