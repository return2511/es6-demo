var p={
    name:'kevin',
    age:2,
    sex:'male'
}

Object.defineProperty(p,Symbol.iterator,{
    enumberable:false,
    configurable:false,
    writable:false,
    value:function() {
        var nowIndex=-1;
        var key=Object.keys(this);
        return {
            next:() => {
                nowIndex++;
                return {
                    value:this[key[nowIndex]],
                    done:(nowIndex+1>key.length)
                }
            }
        }
    }
})

for(var i of p){
  console.log(i)
}