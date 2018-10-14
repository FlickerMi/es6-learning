import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args'

gulp.task('css', ()=>{
  return gulp.src('app/**/*.css') //扫描css文件
    .pipe(gulp.dest('server/public')) //拷贝到server
    .pipe(gulpif(args.watch, livereload())) //热更新
});