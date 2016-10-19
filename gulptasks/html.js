'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const errors = require('../gulperrors');

gulp.task('html', () => {
    const HTMLminOptions = {
        collapseWhitespace: true,
    };

    const source = 'src/templates/**/*.html';
    const destination = 'dist/templates';

    return gulp.src(source)
        .pipe(plumber())
        .pipe(gulpif(isProduction, htmlmin(HTMLminOptions))).on('error', errors)
        .pipe(gulp.dest(destination))
});
