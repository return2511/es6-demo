// 构造函数
function Dog(name) {
    this.name = name;
    return {
        age: 5,
        name: this.name
    }
}
// 使用new来实例化一个对象
const dog = new Dog('qiaokeli');

// 手动实现一个_new 来实现new方法
/**
 * new 到底干了什么
 * 1: 它创建了一个全新的对象。
 * 2: 它会被执行[[Prototype]]（ 也就是 __proto__） 链接。
 * 3: 它使 this指向新创建的对象。
 * 4: 通过 new创建的每个对象将最终被[[Prototype]] 链接到这个函数的 prototype对象上。
 * 5: 如果函数没有返回对象类型 Object(包含 Functoin, Array, Date, RegExg, Error)， 那么 new表达式中的函数调用将返回该对象引用。
 */
// 写法1
function _new(func){
    const res = new Object();
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    const ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === 'object' || typeof ret === 'functoin') && ret !== null){
        return ret;
    }
    return res;
}

const dog2 = _new(Dog, 'xiaoxiao');

// 写法2
function myNew(func) {
    if (typeof func !== 'function') {
        throw 'the first params is must be a functoin';
    }
    const res = new Object();
    res.__proto__ = func.prototype;
    const argsArr = [...arguments].slice(1);
    const ret = func.apply(res, argsArr);

    const isObject = typeof ret === 'object' && ret !== null;
    const isFunc = typeof ret === 'function';
    return isObject || isFunc ? ret : res;
};

const dog3 = myNew(Dog, 'hahhahahah');