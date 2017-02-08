'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', (callback) => runSequence(
    'clean',
    'copy',
    'html',
    'images',
    'svg',
    'scripts',
    'styles',
    'hugo',
    'serve',
    'notify',
    callback
));
