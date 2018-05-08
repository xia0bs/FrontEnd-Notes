边框图片:

引入图片：
boder-image-source:url('');
设置边框图片的宽度：
boder-image-width:20px;
切片 九个区域 四个角 四个边 中间 fill：
boder-image-slice:45;
重复：
stretch 拉伸（默认）
repeat 重复（不完整）
round 重复（完整）
boder-image-repeat:round;

浏览器内核：
谷歌 -webkit-
火狐 -moz-
ie -ms-
o -o-

线性渐变：
添加属性：background-image
linear-gradient(top,red,yellow);
第一参数：渐变开始的方向
第二参数：开始的颜色
第三参数：结束的颜色
颜色：关键字，十六进制，rgb，rgba
方向：关键字 left top bottom right
   角度 0deg
均匀的线性渐变
不均匀的线形渐变：（百分比 纯色）
linear-gradient(top,red 30%,yellow);
重复性渐变：
repeating-linear-gradient(top,red,yellow 20%);

径向渐变：
添加属性：background-image
radial-gradient(at 30px 30px,red,yellow);
第一参数：中心点位置
第二参数：开始的颜色
第三参数：结束的颜色
不均匀径向渐变
重复性径向渐变：
repeating-gradial-gradient(red,yellow 20%);

创建3d场景（景深）：
perspective:(1000px);
允许子元素3d效果：
transform-style:preserve-3d;

上传代码到GitHub：

克隆仓库
git  clone  https//
进入文件夹
cd   文件夹名
添加
git add *
查看状态
git status
标记
git commit -m  "xiaomi"
上传
git push



动画：
1、定义动画
@keyframes bianse{
from{
background{}
}
to{
background{}
}

2、绑定到选择器上
animation-name:bianse; 动画名称
animation-duration:2s;动画时间
animation-timing-function:ease;运动方式
animation-delay:1s;延迟时间
animation-iteration-count:2s;运动次数（infinite 无数次）
animation-fill-mode;forwards;运动停止的状态（停止在最后状态）
animation-direction:normal;运动方向（alternate下次反向）
animation-play-state:paused（停止）控制运动状态 running运动

图片精灵

锚链接：
点击：<a href="#mao"></a>
跳转：<a href="mao"></a>
