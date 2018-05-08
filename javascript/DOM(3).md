事件绑定的方式添加
添加事件监听：
div.addEventListener('click',function(){
console.log(1);
});
移除事件监听：
div.removeEventListener('click',function(){
console.log(1);
});
添加浏览器兼容事件监听：
attachEvent()
移除浏览器兼容事件监听：
detachEvent()

在事件发生的时候，事件相关的所有信息，会存储在一个对象身上，这个对象叫做事件对象。e
在事件发生的时候，js会自动创建一个对象，用来保存时间发生的时候的所有信息，这个对象，叫做事件对象。

事件源		事件发生谁身上，谁就是事件源
事件类型		
事件处理程序

altKey
cancelBubble

ctrlKey
detail

offsetX		距离事件源左上角
offsetY
clientX		距离窗口左上角
clientY
screenX		距离屏幕左上角
screenY
pageX		距离页面左上角
pageY

returnValue
srcElement
target
type
which


事件流
当页面中某个元素触发事件的时候，父元素乃至整个页面都会按照一定的顺序来依次触发这个事件，事件触发的顺序，叫做事件流。

冒泡型事件流
由当前元素向上级元素触发，直到根元素为止。

捕获型事件流
由根元素向下依次触发，直到当前元素为止。

阻止事件的传递：
e.cancelBubble=true		e.stopPropagation()
阻止默认的跳转：
e.returnValue=false		e.preventDefault()

事件委派 事件委托
1、如果新增加的大量元素需要事件处理
2、事件优化的时候
3、ajax 返回的数据处理的时候

目标事件源
e.target
