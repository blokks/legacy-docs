'use strict';

var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', (callback) => {
    const source = ['src/static-compiled/**/*', 'dist/**/*'];
    del(source).then((paths) => callback());
});
