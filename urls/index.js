'use strict'
//首次加载的页面
exports.url = function(app){
   app.get('/',function(req,res){
    res.render('pages/index',{
      layout:'layouts/layout',
      title:'Express',
      jsModel:'static/javascripts/oop1.js'
    })
   })

}
