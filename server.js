'use strict'
const express = require('express'),
      bodyParser = require('body-parser'),
      routers = require('./routers'),
      path = require('path'),
      app = express();


//请求接口入口地址
routers.urls(app);

//使用static中间件 制定public目录为静态资源目录,其中资源不会经过任何处理
app.use('/static',express.static(__dirname + '/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//请求主体解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(7000,function(){
    console.log('服务已经启动请访问')
})
