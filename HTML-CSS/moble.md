移动端：
1、测试
2、、修改视口：
物理像素修改为逻辑像素
320 375 412 414  360
3、布局方式；
百分比布局 rem布局
rem是一个单位，根据根元素字体大小设定的单位
100px=1rem

4、步骤：
1、修改视口
2、引入rem.js
3、修改设计稿的宽度

<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

定位：（会脱离文档流）
相对定位：position:relactive;
（当元素发生层叠关系）
绝对定位：position:absolute;
top left right bottom
固定定位：position:fixed;
top left right bottom
层级：0
z-index:999;

两个问题：
1、父元素只要有定位属性即可实现绝对定位。
2、父元素都没有定位属性，相对于文档进行定位。

自定义盒子模型：
box-sizing: border-box;	
