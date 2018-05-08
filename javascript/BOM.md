BOM 浏览器对象模型

浏览器窗口	window
  ● 历史记录		history
  ● 地址栏			location
  ● 文档内容		document

属性：
alert
clearInterval
clearTimeout
close
confirm
document
frames
getComputedStyle
history
localStorage
location
navigator	判断浏览器
prompt
screen		判断屏幕
sessionStorage
setInterval
setTimeout

this指向window
var aa=200;
function fun(){
this.aa=300;
}
fun()
console.log(aa)

关闭窗口close
window.onload=function(){
let btn = document.querySelector('button');
btn.onclick=function(){
window.close();
}
}

提示框
confirm

时间函数：

设置：
setInterval
在指定的时间内，重复不断的去做某个事情
setInterval(function(){
	console.log()
},1000)
setTimeout
清除：
clearInterval
clearTimeout

地址栏：
https/http	网络协议	 超文本传输协议					protocol
127.0.0.1/	www.baidu.com			主机名/域名		hostname
:8080	:80						端口号				port
/s/								路径				pathname
?	aa=bb&cc=dd				查询字符串			search
#box							锚地址				hash

href		可以用来获取或者设置完整路径
assign()	加载一个页面，会留下历史记录
reload()	重新加载，如果有参数ture，跳过缓存，重新加载页面
reaplace()替换当前页面，不会留下历史记录

history：
back()				历史记录上一条
forward()			历史记录下一条
go(0) go(-1)  go(1)		历史记录位置

