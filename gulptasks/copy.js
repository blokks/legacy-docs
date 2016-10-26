'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const changed = require('gulp-changed');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gulpIgnore = require('gulp-ignore');
const plumber = require('gulp-plumber');

gulp.task('copy', () => {
    const source = [
        'src/static-source/**/*',
        'src/static-source/.htaccess',
        '!src/static-source/scripts/**/*',
        'src/static-source/scripts/modernizr.js',
        '!src/static-source/styles/**/*',
        '!src/static-source/images/**/*',
    ];

    const destination = 'src/static-compiled';

    return gulp.src(source)
        .pipe(plumber())
        .pipe(changed(destination))
        .pipe(gulp.dest(destination))
});
