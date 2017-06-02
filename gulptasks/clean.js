'use strict';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean', (callback) => {
    const source = [
        'src/.layouts/**/*',
        'src/.static/**/*',
        'dist/**/*'
    ];

    del(source).then((paths) => callback());
});
