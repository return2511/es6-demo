// 实现promise

class MyPromise {
    constructor(executor) {
        // 初始化promise状态
        this.status = 'pending';
        // 初始化 value 和 reason 分别用于promise resolve和 reject时使用
        this.value = undefined;
        this.reason = undefined;
        // 定义promise中的resolve方法
        const resolve = (value) => {
            // 只有在 pending状态时，promise才是可变的
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
            }
        }
        // 定义promise中的reject方法
        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
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
    }
}

const p = new MyPromise((resolve, reject) => resolve(222));
p.then((value) => console.log(value));

const p2 = new MyPromise((resolve, reject) => setTimeout(() => {
    resolve(1)
}));
p2.then((value) => console.log(value));