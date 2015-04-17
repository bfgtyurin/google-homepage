var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('./*.html').on('change', reload);
  gulp.watch('./css/*.css').on('change', reload);
});

gulp.task('default', ['browser-sync']);
