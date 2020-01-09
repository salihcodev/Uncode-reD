let
gulp = require('gulp'),
// pug = require('gulp-pug'),
pug = require('gulp-pug'),
sass = require('gulp-sass'),
image = require('gulp-image'),
notify = require('gulp-notify'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
prefix = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps');
// =====


// MARKUP TASK
gulp.task('markup', function () {
  return gulp.src("public/markup/app-root.pug")
    .pipe(pug({
      pretty: true
    }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('dist'))
    // .pipe(notify('HTML #done'))
})

// STYLES TASK
gulp.task('style', function() {
  return gulp.src(['public/style/libs/*.css', 'public/style/sass/app-root.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(prefix())
    .pipe(concat('app-style.css'))
    .pipe(sourcemaps.write('../../public/maps'))
    .pipe(gulp.dest('dist/css'))
    // .pipe(notify('CSS #done'))
})

// SCRIPT TASK
gulp.task('script', function () {
  return gulp.src(['public/script/libs/jquery-3.4.1.min.js', 'public/script/libs/*.*', 'public/script/app-root.js'])
    .pipe(uglify())
    .pipe(concat('app-script.js'))
    .pipe(gulp.dest('dist/js'))
    // .pipe(notify('JS #done'))
})


// WATCH ALL FILES
gulp.task('shotAll', function() {
  gulp.watch("public/markup/**/*.*", gulp.series('markup'))
  gulp.watch("public/style/**/*.*", gulp.series('style'))
  gulp.watch("public/script/**/*.*", gulp.series('script'))
})

// APPLY ALL CHANGES
gulp.task('default', gulp.series('shotAll'))



// Images optimization.
gulp.task('images', function () {
  return gulp.src('public/images/**/*.*')
  .pipe(image())
  .pipe(gulp.dest('dist/images'))
})