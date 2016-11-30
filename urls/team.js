'use strict'
const request = require('request'),
      async = require('async'),
      cheerio = require('cheerio');
exports.url = function(app){
  //获取NBA球队图标
  app.get('/api/teams',function(req,res){
    async.waterfall([
    function(callback){
        let basicUrl = 'http://g.hupu.com/nba/teams';
        request(basicUrl,function (error, response, body){
        if (!error && response.statusCode == 200) {
          let $ = cheerio.load(body),resData = {success:true,datas:[]};
          $('.box').each(function(index,element){
            let team = {};
    			 	  team.teamIcon = $(element).find('img').attr('src'),
    			 		team.teamName = $(element).find('h2').text(),
    			 		team.teamRecord = $(element).find('p').text();
              resData.datas.push(team)
    			})
          let listObj = resData;
          callback(null,listObj)
        } else { //请求失败
          resData.success = false;
          res.send(resData)
        }
      })
    },function(listObj,callback){
        res.render('pages/teams',{
          title:'虎扑NBA球队战绩',
          layout:'layouts/layout',
          listObj:listObj.datas
        })
    }],function(err,result){
        return result
    })
  })
}
