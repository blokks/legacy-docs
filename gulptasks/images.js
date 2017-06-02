'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');

gulp.task('images', () => {
    const source = ['src/static/images/*.{gif,png,jpg,jpeg}'];
    const destination = 'src/.static/images';

    return gulp.src(source)
        .pipe(gulpif(isProduction, imagemin()))
        .pipe(gulp.dest(destination))
});
