'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const errors = require('../gulperrors');

gulp.task('html', () => {
    const HTMLminOptions = {
        collapseWhitespace: true,
    };

    const source = 'src/layouts/**/*.html';
    const destination = 'src/.layouts';

    return gulp.src(source)
        .pipe(gulpif(isProduction, htmlmin(HTMLminOptions))).on('error', errors)
        .pipe(gulp.dest(destination))
});
