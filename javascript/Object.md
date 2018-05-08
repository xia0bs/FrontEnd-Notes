对象
类是对象的抽象
对象是类的实例化

创建对象：
以json格式创建对象
用构造函数创建对象 	new Fun()
用Object创建对象		 new Object()

访问对象的属性和方法   . 运算符	或者是使用[] 进行访问

let  obj={
                name : “ lisi”,
                age :  30,
                fun  :  function ( ) {
                  console.log(1);
                   }
              };
obj.name
obj["name"]
obj.fun ()
obj ['fun'] ()

删除对象的属性：
delete obj.name;
删除对象：
obj=null;

构造函数 是提供对象的初始化

原型或者原型对象prototype
原型链
一个普通对象的__proto__属性会指向构造函数的原型对象，
构造函数的原型对象的__proto__会指向原型对象的构造函数的原型，一直向上，最终指向Object的原型

xiaohuang.__proto__ === dog.prototype
dog.prototype.__proto__ === animal.prototype
animal.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null
