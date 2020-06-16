class Chain {
    constructor() {
        this.task = [];
        // 使用一个标识来记录是否已经开始
        this.start = false
    }

    work() {
        const func = () => {
            console.log('work')
            this.next()
        }
        this.task.push(func);
        this.launch()
        return this;
    }

    eat() {
        const func = () => {
            console.log('eat')
            this.next()
        }
        this.task.push(func);
        this.launch()
        return this;
    }
    sleep(time) {
        const func = () => {
            setTimeout(() => {
                    console.log(`sleep: ${time}s`)
                    this.next()
                }, time * 1000);
        }
        this.task.push(func)
        this.launch()
        return this;
    }

    launch() {
        if (!this.start) {
            this.start = true
            // 异步任务，push完所有的任务，再进行执行
            setTimeout(() => {
                this.next()
            }, 0)
        }
    }

    next() {
        const func = this.task.shift();
        func && func();
        // 如果任务队列为空，则重置开始状态
        if (this.task.length === 0) this.start = false
    }
}

const chain = new Chain()
chain.sleep(2).work().eat().work().sleep(3).work().sleep(5).work()
