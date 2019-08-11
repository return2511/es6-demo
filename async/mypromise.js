// 实现promise
class MyPromise {
    constructor(executor) {
        // 初始化promise状态
        this.status = 'pending';
        // 初始化 value 和 reason 分别用于promise resolve和 reject时使用
        this.value = undefined;
        this.reason = undefined;
        // 成功存放的数组
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        // 定义promise中的resolve方法
        const resolve = (value) => {
            // 只有在 pending状态时，promise才是可变的
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;

                // 一旦resolve执行，调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn=>fn());
            }
        }
        // 定义promise中的reject方法
        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;

                // 一旦reject执行，调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        }

        // 执行executor方法
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === 'fulfilled') {
            onFulfilled(this.value);
        }

        if (this.status === 'rejected') {
            onRejected(this.reason);
        }

        if (this.status === 'pending') {
            // onFulfilled 传入到成功数组的函数
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value);
            })
            // onRejected 传入到失败数组的函数
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })
        }
    }
}

const p2 = new MyPromise((resolve, reject) => setTimeout(() => {
    resolve(1)
}));
p2.then((value) => console.log(value));

const p = new MyPromise((resolve, reject) => resolve(222));
p.then((value) => console.log(value));

const p3 = new MyPromise((resolve, reject) => setTimeout(() => {
    resolve(333)
}));
p3.then((value) => console.log(value));
