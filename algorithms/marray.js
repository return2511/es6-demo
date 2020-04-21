

function sliceArr(arr, n) {
    if (arr.length <= n) {
        return Math.max(arr);
    }

    const arrSum = sum(arr);



    return arrSum;
}

function sum(arr) {
    let s = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        s += arr[i];
    }
    return s;
}


const arr = [5, 1, 5, 2, 3];
const number = 3;

console.log(sliceArr(arr, number));