const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

gulp.task('scripts', () => {
    return gulp.src('./src/js/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', () => {
    return gulp.src('./src/scss/index.scss')
        .pipe(sass({style: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', () => {
    gulp.watch('./src/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('./src/js/**/*.js', gulp.series('scripts')); // watch for webpack
});