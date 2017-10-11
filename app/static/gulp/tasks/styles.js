var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('backend-style', function() {
  gulp.src([
      'src/www/**/*.css',
      'node_modules/react-notifications/lib/notifications.css',
      'node_modules/select2/dist/css/select2.css',
      'node_modules/react-progress-bar-plus/lib/progress-bar.css',
  ])
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(concat('admin.min.css'))
      .pipe(gulp.dest('./build')),
  gulp.src(['node_modules/react-notifications/lib/fonts/*{ttf,woff}'])
      .pipe(gulp.dest('./build/fonts'))
});

gulp.task('frontend-style', function() {
  gulp.src('./css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./build'))
});
gulp.task('move-images', function() {
    gulp.src("./img/**/*.*")
        .pipe(gulp.dest('./build'));
})