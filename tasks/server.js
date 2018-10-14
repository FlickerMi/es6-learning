import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args'

gulp.task('server', (cb)=>{
  // 不处于监听状态下
  if (!args.watch) return cb();
  // 处于监听状态下，--harmony当前命令行下执行server/bin/www
  var server = liveserver.new(['--harmony','server/bin/www']);
  server.start()
  // 监听需要热更新文件
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs','server/public/**/*.css'], function (file) {
    server.notify.apply(server, [file]);
  });
  // 监听需要重启的文件
  gulp.watch(['server/routers/**/*.js','server/app.js'],function () {
    server.start.bind(server)()
  });
});