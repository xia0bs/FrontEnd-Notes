元素的内容 样式位置
offsetleft
offsettop
看上级元素有无定位，如果直接父元素没有定位，一直向上找，如果间接父元素有定位，计算间接父元素的距离，如果一直没有，就计算距离body的。
有定位属性的上级元素的距离 body

一楼的高度<=窗口高度+滚动条的高度

节点/节点之间相互关系：
整个文档构成了树结构模型。
整个文档中的各种类型的节点，和节点之间的相互关系，构成了html文档树模型。
节点的类型：
标签、属性、文本、注释、文档节点document
 nodeType nodeName nodeValue
文档 9 #document null
元素 1 标签名大写 null
属性 2 属性名字 属性的值
文本 3 #text 文本的内容
注释 8 #comment 注释的内容

创建节点
创建元素节点

console.dir(div);
console.log(div.childNodes);
console.dir(div.parentNode.parentNode);
console.dir(div.parentElement);
console.log(div.nextElementSibling);
console.log(div.nextSibling);
console.log(div.previousElementSibling);
console.log(div.previousSibling);
console.log(div.lastChild);
console.log(div.lastElmentChild);
console.log(div.firstChild);
console.log(div.firstElementChild);
