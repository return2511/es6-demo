// promise 拦截器 统计promise resolve 和reject的次数
(function(Promise){
    const originThen = Promise.prototype.then;
    const originCatch = Promise.prototype.catch;
    let successNum = 0
    let failedNum = 0

    Promise.prototype.then = function(onFulfilled, onFailure) {
        return originThen.call(this, (value) => {
            console.log('value', value);
            successNum ++
            console.log('successNum', successNum)
            return onFulfilled && onFulfilled(value)
        },
        // 如果then中第二个参数存在的情况， catch就不能抓到 promise体中reject 的错误
            (err) => {
                console.log('err in promise', err)
                // failedNum ++
                // console.log('failedNum', failedNum)
                return onFailure && onFailure(err)
            }
        )
    }

    Promise.prototype.catch = function(onRejected) {
        return originCatch.call(this, (err) => {
            console.log('error in catch', err)
            failedNum ++
            console.log('failedNum', failedNum)

            return onRejected(err)
        })
    }
})(Promise)

new Promise((resolve, reject) => {
    console.log('promise 1')
    resolve(1)
}).then((data) => {
    console.log('data1', data)
})

new Promise((resolve, reject) => {
    console.log('promise 2')
    resolve(2)
}).then((data) => {
    console.log('data2', data)
})

Promise.resolve('hahhaha').then(data => console.log('out out out resolve', data))

Promise.reject('hehehehehhehe').catch(err => console.log('out out out reject ', err))

new Promise((resolve, reject) => {
    console.log('promise 3')
    reject('error')
}).then((data) => {
    console.log('data3', data)
}).catch((err) => console.log('err 33', err))
