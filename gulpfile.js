/**
 * @desc
 * @author msr
 * @time 2017/4/27
 */
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var del = require('del');

gulp.task("default",['clean'], function () {
    // return gulp.src("test/**/*.js")// ES6 源码存放的路径
    //     .pipe(babel())
    //     .pipe(gulp.dest("test/dist")); //转换成 ES5 存放的路径

    return gulp.src("test/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        // .pipe(concat("all.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("test/dist"));
});

gulp.task('clean',function (cb) {
    return del([
        // 这里我们使用一个通配模式来匹配 outPath 文件夹中的所有东西
       'test/dist/**/*'
    ], {force: true}, cb);
});