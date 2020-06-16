const arr = [1,2,3,4,5,6]

console.log('start')

// arr.forEach(item => {
//     arr.push(7,8)
//     console.log(item)
// })

console.log('end')



for(var i = 0; i <= arr.length; i++) {
    if (i === 0 ) arr.push(7,8)
    // setTimeout(() => console.log(i))
    console.log(arr[i])
}



