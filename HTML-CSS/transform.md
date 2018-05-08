2d  转换;
transform

1、平移

transform：translateX（-30px);  水平方向   左右，负正
transform：translateY（-30px);  垂直方向  正上；负下
transform：translate（-30px，30px); 斜

2 、旋转 ：角度

transform：rotate （180deg）

3 、缩放：倍数

transform：scale
transform：scaleX
transform：scaleY

4、斜切：角度

transform：skew
transform：skewX
transform：skewY

5、过度：对运动过程进行控制

transition；all  2s  1s  ease;
属性名称 持续时间   延迟   运动方式（贝塞尔曲线）

6、阴影：box-shadow: 0px  0px  10px   10px  rgba(0,0,0,0.4 ） 

        第一个参数：水平方向   正 右； 负 左；  0 左右
        第二个参数： 垂直方向   正上 ；  负下 ；   0  上下
        第三个参数： 迷糊程度  值越大越模糊
        第四个参数：阴影大小
        第五个参数： 阴影颜色
        第六个参数：  内阴影  inset;


1 布局  定位
2 超出部分隐藏
3 大  阴影  平移
4 小  bottom：0； 
5  过度
