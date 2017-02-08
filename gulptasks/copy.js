'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const changed = require('gulp-changed');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gulpIgnore = require('gulp-ignore');
const plumber = require('gulp-plumber');

gulp.task('copy', () => {
    const source = [
        'src/static/**/*',
        'src/static/.htaccess',
        '!src/static/scripts/**/*',
        'src/static/scripts/modernizr.js',
        '!src/static/styles/**/*',
        '!src/static/images/**/*',
    ];

    const destination = 'src/.static';

    return gulp.src(source)
        .pipe(plumber())
        .pipe(changed(destination))
        .pipe(gulp.dest(destination))
});
