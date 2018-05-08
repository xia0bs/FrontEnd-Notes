CSS引入方式：
1、外部引入方式
引入CSS文件 link标签 href
内容与表现分离
2、一个css文件引入到另一个css文件中
@import url("");
3、嵌入式
在html页面写style标签对
4、行内样式
style属性 style=""

css引入方式的优先级：
行内样式最高。嵌入式和外部引入方式，位置靠下的更高。

网站logo
link rel="shortcut icon" href="favicon.ico"

table:
border="1"设置表格的边框
cellspacing="0"
设置单元格与单元格之间的距离
cellpadding="10"
设置内容与单元格之间的距离
width height 设置单元格的宽高
align="center"单元格在水平方向位置

tr：
bgcolor="yellow"每行的颜色
align="center"
left center right设置文本在本行水平方向的位置
valign="center"
top center bottom 设置文本在垂直方向的位置

td：
colspan 跨列合并
rowspan 跨行合并


css特性：

继承性：
color text- line- font-

叠加性：

1、[class]：
选中页面中有class属性的元素
2、div[class="box"]
匹配div元素，有属性class，且值为box的元素
3、	div[class="box"]
匹配div元素，有class属性，属性之中有空格
其中一个是box单词，它本身也会被选中。
4、div[class|="box"]
匹配div元素，有class属性，属性值中有连字符，
并且以box单词开头，它本身会被选中
5、div[class="box"]
匹配div元素，有class属性，属性之中包含box三个字母的元素被选中
6、div[class^="b"]
匹配div元素，有class属性，属性之中以b开头的元素被选中
7、div[class$="b"]
匹配div元素，有class属性，属性之中以b结尾的元素被选中

1、div > p 直系父级为div的p元素。
2、div + p 选中div后面紧挨着的p标签兄弟元素
3、div ~ p 选中div后面同级别的p元素  所有的

用来让非中日韩文字换行
word-break：break-all；
文本溢出：
while-space：nowarp；禁止换行
overflow：hidden；超出隐藏
text-overflow：ellipsis；文本溢出以点的形式展示

overflow 设置超出部分
hidden 隐藏
scroll 有滚动条
auto 自动

background-size：
cover：按照宽高中的较小者占满盒子，图片显示不完全
contain：按照宽高中的较大者占满盒子，图片显示完整
