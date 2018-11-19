const gulp = require('gulp');
const del = require('del');

gulp.task('clean', () => {
  // Clean `dist` & `typings` directory
  return del([ 'dist/*', 'typings/*' ]);
});
