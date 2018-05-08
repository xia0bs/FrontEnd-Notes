容器的属性（弹性flex布局）：
1、改变主轴的方向 flex-direction
row：主轴在水平方向，从左到右的（默认值）
row-reverse：主轴在水平方向，从右到左的
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。

2、指定项目的换行	flex-wrap
wrap：项目换行，从上到下排布
nowrap：项目不换行（默认值）
wrap-reverse：项目换行，从下到上进行排布

3、项目在主轴的对齐方式 justify-content
flew-start：主轴的起点
center：主轴的中点
flew-end：主轴的终点
space-between：两端对齐
space-around：项目两侧的距离相等

4、项目在交叉轴方向的对齐方式 align-items
（一根轴线和多根轴线）
flew-start：交叉轴的起点
center：交叉轴的中点
flew-end：交叉轴的终点
baseline：基线对齐（文字的底部）

5、项目在交叉轴方向的对齐方式 align-content
（只适用于多根轴线）
flew-start：交叉轴的起点
center：交叉轴的中点
flew-end：交叉轴的终点
space-between：两端对齐
space-around：项目两侧的距离相等

项目的属性：
1、order
定义项目的排列顺序，数值越小越靠前，默认值为0
2、flex-grow
定义项目的放大比例，默认值为0，即使存在剩余空间也不放大；如果所有项目的flex-grow的值均为1，会等分剩余空间。
3、flex-shrink
定义项目的放大比例，默认值为1，空间不足进行缩小；值为0，即使空间不足也不进行缩小。 
4、flex-basis
定义了项目在主轴上占据的空间
5、align-self
定义单个项目在交叉轴上的对齐方式
flex-start 交叉轴的起点
center 交叉轴的中心
flex-end 交叉轴的终点
baseline 基线
