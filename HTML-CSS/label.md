1、表单标签
form action="a.php" method="post"
action 提交的位置
method 提交的方式
get 信息量少 不安全
post 信息量多 安全
2、输入框
用户名：input type="text" placeholder="请输入用户名" maxlength="10" 

type： 制定空间的类型
placeholder： 提示的文本
maxlenght:限制输入的最大字符
size：制定控件的宽度
name：和后台进行数据交互的
disabled：禁用
readonly:只读

 3、获取焦点
.box：focus

4、外边线
online：none；
box-sizing：border-box；   （自定义大小）

5、密码框
密码：<input type="password" placeholder="请输入密码" name="psw">

6、上传文件
<input type="flie">

7、多选按钮 checked 默认选中
请选择你喜欢的音乐：
 爵士<input type="checkbox" checked>
 爵士<input type="checkbox" >
 爵士<input type="checkbox" >

8、单选按钮
选择你居住的城市：name属性的值相同
太原<input type="radio" name="city">
西安<input type="radio" name="city">
北京<input type="radio" name="city">

9、下拉框
选择最高学历：
<select name="" id="" size="x（1，2，3）" multiple="">
multiple用来实现多选 按住Ctrl
<option value="">学士</option>
<option value="">硕士</option>
<option value="">博士</option>
</select>

10、留言板
<textarea name="" id="" cols="30" rows="10"></textarea>           
设置是否允许用户进行设置大
css：
textarea：resize
none：两个方向都不能设置
            both:两个方向都能设置
            vertial：只能在垂直方向设置
            horizontal只能在水平方向设置

11、提交按钮
<input type="submit">

12、重置按钮
<input type="reset">

13、按钮
<input type="button" value="按钮">
<button>按钮</button>


<input type="date"><br>  年月日
<input type="month"><br>  年月
 年周 <input type="week"><br>
 时分 <input type="time"><br>
 年月十分  <input type="datetime-local"><br>


 数字范围
 <input type="number" min="1" max="20" step="5" value="4" > 

 滑块范围 

 <input type="range" min="1" max="20" step="5" value="5">

正则验证

email: <input type="email"><br>
url:   <input type="url"><br>
tel:   <input type="tel"><br>

颜色

<input type="color">

水平线
<hr>

列表标签（快标签）
无序列表 square  disc  circle

有序列表 A  I  a  i  1
<ol type></ol>

自定义列表
<dl>
	<dt>第一张</dt>   条目
	<dd> 第一节</dd>         内容
</dl>

标题标签（块标签

<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>

字体效果标签（行内标签）

倾斜 <i>倾斜</i>
<em>倾斜</em>


<b>加粗</b>
<strong>加粗</strong>

段落标签( 快标签)
<p> 段落</p>
<span></span>（行内标签）

<pre></pre> 

区别

p标签中不嵌套 块标签，pre标签按照编辑器编辑好的进行显示。

快标签： div  p  ul  li   ol  dl  dt   dd  h1-h6 语义化标签

行内快：  img   input   canvas  video   audio

行内:    a   span   i  em  b  strong
<hr>


  h5语义化标签（块标签）

  <header>头部</header>
  <aside>测导航</aside>
  <nav>导航</nav>
  <section>每一部分</section> （若干次）
  <footer>底部</footer>

  引入音频
  <audio src="" controls loop autoplay></audio>
     
controls： 向用户显示控件

loop   单曲循环

autoplay   页面加载自动播放

 引入视频
    
  <video src="" controls loop autoplay></video>
  <canvas style="width: 300px;height: 200px;background: red;"></canvas>
  <canvas></canvas>
  画布

