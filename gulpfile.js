var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rigger = require('gulp-rigger');

gulp.task('sass', function(){
  return gulp.src('src/style/main.scss')
    .pipe(rigger())
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task("html:build", function(){
  return gulp.src("src/index.html")
  .pipe(rigger())
  .pipe(gulp.dest("build"))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task("js:build", function(){
    return gulp.src("src/js/**/*.js")
    .pipe(rigger())
    .pipe(gulp.dest("build/js"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task("image:build", function(){
    return gulp.src("src/img/*.+(jpg|jpeg|png)")
    .pipe(gulp.dest("build/img"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  })
});

gulp.task('watch', ["browserSync", "html:build", "sass", "image:build", "js:build"], function(){
  gulp.watch('src/style/**/*.scss', ['sass']);
  gulp.watch('src/**/*.html', ['html:build']);
  gulp.watch('src/js/**/*.js', ['js:build']);
  gulp.watch('src/img/*.+(jpg|jpeg)', ['image:build']);
});
