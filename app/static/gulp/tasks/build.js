var gulp = require('gulp');

gulp.task('build', ['browserify', 'markup', 'frontend-style', 'backend-style', 'move-images']);
