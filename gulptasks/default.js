'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', (callback) => runSequence(
    'clean',
    'copy',
    'scripts',
    'styles',
    'images',
    'svg',
    'hugo',
    'serve',
    'notify',
    callback
));
