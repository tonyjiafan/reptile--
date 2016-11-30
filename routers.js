'use strict'
const index = require('./urls/index'),
      news = require('./urls/news'),
      team = require('./urls/team');

exports.urls = function(app){
  index.url(app), //首页
  news.url(app), //请求新闻数据
  team.url(app) //请求新闻数据
}
