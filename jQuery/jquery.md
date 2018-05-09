jQuery

特点：

快速小巧功能丰富 跨平台，可扩展
核心思想： 链式操作，隐式循环

文档遍历和操作
事件处理
动画
ajax
文档处理

clone：

clone 不加参数的时候就会拷贝所有的子节点，自身和子节点的所有数据和事件不拷贝。 clone(true),clone(true,true)会拷贝所有的子节点，子节点自身和子节点的所有的数据和事件全部拷贝。 clone(true,false)会拷贝所有的子节点，自身的所有的数据会拷贝，子节点的所有数据和事件不拷贝。

事件

ready

$(document).ready(function(){
    文档结构加载完毕
})

$(function(){
    文档结构加载完毕
})

windows.onload=function(){
    文档结构和资源全部加载完毕
}
click

$(".par").on('click.fun',function(){
    console.log(1);
    $(this).off('click.fun');
})
$(document.body).on('click',function(){
    console.log('body');
})
$(".par").on('click.fun',function(){
    console.log(1);
}).on('click.f',function(){
    console.log(2);
}).triggerHandler('click');
效果

animate动画

队列特点——先进先出

解决animate不出现问题的方法：清空队列。

栈特点——先进后出

stop

没有参数的时候，立即停止当前动画，继续队列的后续动画。

参数：

true 立即停止当前动画，并且清空队列。

true,true 立即完成当前动画，并且清空队列。

finish

立即到达队列的最后一个状态。
