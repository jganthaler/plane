import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass  from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleancss from 'gulp-clean-css';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
const sass = gulpSass(dartSass)

// Compile SCSS to CSS
gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleancss())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Concatenate, transpile, and minify JS
gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('dist/js'));
});

// Watch files for changes
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/**/*.js', gulp.series('scripts'));
});

// Build task
gulp.task('build', gulp.series('sass', 'scripts'));

// Default task
gulp.task('default', gulp.series('build', 'watch'));
