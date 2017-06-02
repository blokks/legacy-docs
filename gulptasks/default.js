const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', (callback) => runSequence(
    'clean',
    'copy',
    'html',
    'scripts',
    'styles',
    'images',
    'svg',
    'hugo',
    'serve',
    callback
));
