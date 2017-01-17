var gulp = require('gulp'),
    livereload = require('gulp-livereload'),  // 网页自动刷新（服务器控制客户端同步刷新）
    webserver = require('gulp-webserver');  // 本地服务器 gulp-webserver

    // 注册任务
    gulp.task('webserver', function () {
        gulp.src('./') // 服务器目录（./代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
            port:8080,   //默认端口号是8080
            livereload: true, // 启用LiveReload
            open: 'http://localhost:7000/' // 服务器启动时自动打开网页
        }));
    });

    // 监听任务
    gulp.task('watch', function () {
        gulp.watch('./**', function (file) {  //要监听的文件目录
          var date = new Date();
            livereload.changed(file.path);
            console.log(date.toLocaleTimeString() + "=>执行监听变化成功");
        })

    });

    gulp.task('start', ['webserver', 'watch']);
