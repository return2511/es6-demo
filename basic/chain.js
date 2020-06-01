class Chain {
    constructor() {
        this.task = [];
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
            setTimeout(() => {
                this.next()
            }, 0)
        }
        return this;
    }

    next() {
        const func = this.task.shift();
        func && func();
    }
}

const chain = new Chain()
chain.work().eat().work().sleep(3).work().sleep(5).work()
