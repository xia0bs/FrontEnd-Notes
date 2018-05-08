AJAX

Asynchronous（异步） JavaScript and XML
ajax是一种动态网页交互技术，可以实现无跳转无刷新的更新数据。

目的是为了传递数据和接收数据 不能跳转 不能刷新

let ajax = new XMLHttpRequest();
//XML格式的http请求
ajax.open('get',"index.php",true);
送到哪里去——index.php
送的方式——get/post
送的是什么——数据
账号——*
密码——*
等不等待是同步还是异步——true/false
get：地址栏进行信息传递 传递的信息量小 信息不安全

post：不通过地址栏进行信息传递 传递信息量大 信息相对安全

ajax.setRequstHeader("content-type",application/x-www-form-urlencoded);
ajax 不能跨域请求
