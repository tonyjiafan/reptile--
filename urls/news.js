'use strict'
const request = require('request'),
      async = require('async'),
      cheerio = require('cheerio');
exports.url = function(app){
  app.get('/api/news',function(req,res){
    async.waterfall([
   	function(callback){
      let basicUrl = 'http://voice.hupu.com/nba'; //虎扑新闻页面
          request(basicUrl,function (error, response, body){
            if (!error && response.statusCode == 200) {
              let $ = cheerio.load(body),resData = {success:true,datas:[]};
              $('.news-list ul').children().each(function(index,element){
                let news = {};
                  news.title = $(element).find('.list-hd h4>a').text(); //标题
                  news.des = $(element).find('.list-content .J_share_title').text(); //简单内容
                  news.createTime = $(element).find('.otherInfo .other-left > a').text(); //创建时间
                  news.comeFrom = $(element).find('.otherInfo .other-left > .comeFrom a').text(); //消息来源
                  resData.datas.push(news)
              })
              let listData = resData;
              callback(null,listData)
            } else { //请求失败
              resData.success = false;
              res.send(resData)
            }
          })
    },function(listData,callback){
      console.log(listData.datas[0])
        res.render('pages/news',{
          title:'虎扑篮球新闻',
          layout:'layouts/layout',
          listData:listData.datas
        })
    }],function(err,result){
  			return result
  	})

  })
}
