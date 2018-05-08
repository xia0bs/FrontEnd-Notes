DOM
对于元素的内容、属性、样式、位置的操作。

document.title='啊哈哈';
document.write();
获取文档窗口大小：
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
获取屏幕分辨率：
console.log(window.screen.width);
console.log(window.screen.height);

获取元素的方法：（获取DOM对象集合）
document.querySelector();
document.querySelectorAll();

console.log(div instanceof Array);
用来检测某一个对象是否是某个构造函数的实例。

innerHTML		标签
innerText		只能识别文本内容

对于元素样式的操作
div.style.color	只能行内样式

内容 属性 样式
认识事件
是用户或者是浏览器的一些行为或操作

鼠标事件
click 点击
dblclick双击
mousemove移动
mouseover移入
mouseout移出
mouseenter进入
mouseleave离开
mousedown按下
mouseup抬起
mousewheel滚轮


