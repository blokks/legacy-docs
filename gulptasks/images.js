'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');

gulp.task('images', () => {
    const source = ['src/static-source/images/**/*.{gif,png,jpg,jpeg}'];
    const destination = 'src/static-compiled';

    return gulp.src(source)
        .pipe(plumber())
        .pipe(gulpif(isProduction, imagemin()))
        .pipe(gulp.dest(destination))
});
