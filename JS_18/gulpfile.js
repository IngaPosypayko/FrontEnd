'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync=require('browser-sync');

gulp.task('myTask', function () {
    console.log('Hello I am task!')

});


gulp.task('sass', function () {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({stream:true}))
});


gulp.task('browser-sync', function () {
    server: {
        baseDir: 'app'
    }
    notify:false
});

gulp.task('watch',['browser-sync', 'sass'] ,function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'sass:watch']);
