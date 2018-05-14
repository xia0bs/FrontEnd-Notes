# 内填充（padding）

是什么： 代表的是内容到边框之间的距离。

问题：  盒子会变大

解决方式： 在width或height上减去相应的值 



两个值；  上下  左右

三个值；  上   左右   下

四个值；  上  右  下  左 （ 顺时针方向）



padding-top ;上填充

padding-bottom；下填充

padding-left；  左填充

padding-right；  右填充  


# 外边距（margin)

是什么：盒子与盒子之间的距离

margin：20px ；  四个方向 

margin： 10px 20px ;   上下  左右

margin：10px  20px  30px ;  上  左右   下

margin：10px  20px   30px   40px;  上  右  下 左



margin：0 auto    上下 左右

flex布局：垂直



## 盒子模型中的问题

1.  margin可以设负值，padding不可以

2.去掉浏览器默认样式

```
*{ margin 0
padding 0
}
```

3盒子模型真实宽高

寛 ：border-left + padding-left + width + padding-right + border-right

高：  border-top + padding-top + height + padding-bottom + border-bottom



标签分类： 大小   独占一行

块标签: div    可以设置大小   独占一行

行内标签：a     不可以设置大小   不能 独占一行， 



转换为块标签：  display：block；

转换为行内标签： display：inline；

转换为行内块标签：display：inline-block；



4  行内标签 a   不能设置上下间距   只能设置左右间距.


5、**margin-top的bug问题**

现象：给子元素设置margin-top，父元素跟着一起下移

原因：（5个条件同时满足）


  1. 子元素是父元素的第一个子元素
  
  2. 父元素没有边框
  
  3. 父元素没有填充
  
  4. 父元素没有浮动
  
  5. 子元素没有浮动
  
解决：

  1. 给父元素加over-flow:hidden;
  
  2. 用父元素的padding-top模拟子元素的margin-top


## img与背景图片的区别

经常更新用 IMG

背景图片用 css  


backgrand-image：url(../) ; 引入背景图片

backgrand-repeat: none-repeat  禁止重复

backgrand-position：center  center  调整位置

水平： left     center     right

垂直： top     center     bottom

简写  background: url(‘../car.png) no-repeat  center  center  ;

