const a = { b: 3}
const c = 11

function foo(obj, num) {
  obj.b = 5
  num = 22
  return obj
}

const aa = foo(a, c)

console.log(a.b)

console.log(c)

console.log(aa.b)


function Ofo() {}

function Bick() {
	this.name = 'mybick'
}


var myBick = new Ofo()

Ofo.prototype = new Bick()

var youbick = new Bick()

console.log(myBick.name)

console.log(youbick.name)