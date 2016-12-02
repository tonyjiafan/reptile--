var Cat = function(){
  this.name = 'coco'
}
var maomi = new Cat();
console.log(maomi.name)
//========1111111111===========//

function A(){
  this.name = 'tony'
}
var B = function(){};
B.prototype = new A();

var b = new B();
console.log(b.name)
//=======2222222222222===========//

var DD = function(){};
DD.prototype = {
  name:'yoho',
  age:18
}
var FF = function(){
  this.type = 'yellow,bad'
  this.more = '禽兽'
}
FF.prototype = new DD();
var ff = new FF();
console.log(ff.name + '今年' + ff.age + '他是个' + ff.type + ff.more)
//=======3333333333333===========//
