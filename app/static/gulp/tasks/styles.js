var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('backend-style', function() {
  gulp.src('src/www/**/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(concat('admin.min.css'))
      .pipe(gulp.dest('./build')) 
});

gulp.task('frontend-style', function() {
  gulp.src('./css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./build'))
});
