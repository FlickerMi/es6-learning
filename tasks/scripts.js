import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({ //统一错误处理
      errorHandle: function(){

      }
    }))
    .pipe(named()) //重命名
    .pipe(gulpWebpack({ //编译
      module:{
        rules:[{
          test:/\.js$/,
          loader:'babel-loader'
        }]
      }
    }),null,(error, stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks: false
      }))
    })
    .pipe(gulp.dest('server/public/js')) //存储到文件夹
    .pipe(rename({ //压缩的文件复制一份
      basename: 'cp',
      extname: '.min.js'
    }))
    .pipe(uglify({
      compress:{
        properties: false
      },
      output:{
        'quote_keys':true
      }
    })) //压缩文件
    .pipe(gulp.dest('server/public/js'))// 存储压缩文件到文件夹
    .pipe(gulpif(args.watch, livereload())) //热更新
});