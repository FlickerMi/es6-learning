import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args'

gulp.task('pages', ()=>{
  return gulp.src('app/**/*.ejs') //扫描模板文件
    .pipe(gulp.dest('server')) //拷贝到server
    .pipe(gulpif(args.watch, livereload())) //热更新
});