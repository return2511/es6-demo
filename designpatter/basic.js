// 单一职责

class Idol {
    constructor(type) {
        this.type = type
    }

    sing() {
        if (this.type === 'old') console.log('I am a singer')
        if (this.type === 'new') console.log('I think my music is NO. 1')
    }

    acting() {
        if (this.type === 'old') console.log('my acting is very good!')
        if (this.type === 'new') console.log('what is acting, you known nothing about acting!')
    }

    faceScore() {
        if (this.type === 'old') console.log('my face score is full mark!')
        if (this.type === 'new') console.log('I am the most beautiful idol!s')
    }
}

const idol = new Idol('old')
idol.sing()

// 给你一个字符串，将这个字符串转化成大写，然后逆序。
let str = 'asdfghjkl'

function doSth(str) {
    const upperStr = str.toUpperCase()
    return upperStr.split('').reverse().join('')
}

console.log(doSth(str))

const strToUpper = str => str.toUpperCase()

const strReverse = str => str.split('').reverse().join('')

let toUpperAndReverse = compose(strToUpper, strReverse)

function compose(...args) {
    return (x) => args.reduce((arg, fn) => fn(arg), x)
}

console.log('toUpperAndReverse', toUpperAndReverse(str))


// 开闭原则
class Car {
    constructor(price) {
        this.price = price
    }

    getPrice() {
        return this.price
    }
}

class DiscountCar extends Car{
    constructor(price, discount){
        super(price)
        this.discount = discount
    }

    getPrice() {
        return this.price * this.discount
    }
}

const car = new DiscountCar(198000, 0.6)
console.log('car', car.getPrice())

// 依赖倒置
class Any {
    constructor(price, name) {
        this.price = price
        this.name = name
    }

    getPrice() {
        return this.price
    }

    getName() {
        return this.name
    }
}

class Seller extends Any{
    constructor(price, name) {
        super(price, name)
    }

    getPrice() {
        return this.price
    }
}
