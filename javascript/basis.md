基础语法部分  5-6天

js之父 布兰登艾奇

JavaScript：
ECMAScript	基础语法
BOM			浏览器对象模型
DOM			文档对象模型

能够干什么？
1、动态效果
2、数据验证
3、使用ajax
4、能够制作游戏等实现逻辑处理
5、能够使用cookie、session
6、...

是什么？
js 是一种基于事件和对象驱动的解释型松散型的语言
解释型：js 是由浏览器解释执行
松散型：非严格类型 不用明确指定数据类型

js如何引入
1、外部引入
2、script标签对
3、重定向
4、行内

弹出
alert()
输出值
console.log();
输出结构
console.dir();
写入到文档中 可以识别标签
document.write();

变量
可变的量
变量是内存里的一块地址单元
let box
关键词 保留字

定义方式：
1、先声明后使用
2、声明的同时赋值

变量命名规则：
不能以关键字或者是保留字命名
不能以数字开头
用数字、字母、下划线、$构成
严格区分大小写
变量命名要有意义
变量以首字母大写的方式和驼峰命名法来命名

注意：
变量需要先声明后使用
一个变量，只声明没有赋值的时候，默认值是undefined
变量不能被重复声明
如果一个变量，没有声明但是赋值了，那么这个变量就会被当作一个全局变量来处理，不会报错

常量：
不能被改变的量
必须在声明的时候，初始化
const

数据类型：
两者的划分是依据在内存中的存储位置的不同来划分的
所以在使用引用数据类型的时候，一定要注意传递的是地址！
在使用基础数据类型的时候，注意传递的是值！

初始数据类型		引用数据类型
位	bit	b	1b=2状态 （0、1）
字节 Byte	B	1B=8b
1KB=1024B
1MB=1024KB
1GB=1024MB
1TB=1024GB

初始数据类型：

Number 数值类型
let nub = 0b（二进制）、0o（八进制）、0x（十六进制）;
console.log(nub);

String
let str='a\nb';
console.log(str);

\转义字符
\n 换行
\t 制表符
\f 分页符
\v 垂直制表符
\r 回车

boolean
true false
1	0

null
占位符，代表空

undefined

Symbol
用来表示唯一值

引用数据类型：

函数 function
数组 array
对象 object

let nub = 123;		//'number'
let str = '123';		//'string'
let bool = true;	//'boolean'
let n = null;		//'object'
let un = undefined;	//'undefined'
let fun = function(){};	//'function'
let arr = [];			//'object'
let obj = {};			//'object'
let result = typeof obj;	//'string'
console.log(typeof result);

运算符：

算数运算符
加、减、乘、除、取余
当字符串和其他类型相加的时候，表示连接

console.log(1-'123');
隐式数据类型转化 number

逻辑运算符
let result;
result = 1 && 0 ;
console.log(result);
&& 两者都满足为真
|| 只要有一个满足为真就行
判断的时候，可以用bool类型值判断，但是结果是第一个值或者是第二个值本身。
如果能够计算出结果，立即停止运算。

let str='abc';
let nub='def'
console.log(str<nub)
控制台：true

如果能够计算出结果，立即停止运算。

比较运算符
> < =
赋值运算符
+=、-=、*=、/=、%=

&&、||、！
&& 和 并且	|| 或者	! 非
0	0.0	null	undefined 	""	 false
! 运算的结果一定是一个boolean类型的

>、<、>=、<=、!=、==、===、!==
== 只比较转化成的数值
=== 不但比较数值，还比较类型
null 不等于 0
undefined != 0
undefined == null

"a" 97
"A" 65
"0" 48
ASCII码进行比较
美国标准信息交换码
当字符串和字符串进行比较的时候，比较的是ASCII

一元运算符
++	自增
--	自减

let nub = ,result;
result = nub++;
console.log(nub);
console.log(result);
存在赋值的情况，++在前就先加，++在后就后加

三元运算符
目的：为了赋值
let res;
res = 1>0? 1:2;
console.log(res);

特殊运算符
new		用来创建对象
delete	用来删除对象的属性和方法

扩展运算符
...



