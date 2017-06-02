'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const changed = require('gulp-changed');
const gulp = require('gulp');

gulp.task('copy', () => {
    const source = [
        'src/static/**/*',
        'src/static/.htaccess',
        'src/static/scripts/modernizr.js',
        '!src/static/images/**/*',
        '!src/static/scripts/**/*',
        '!src/static/styles/**/*',
    ];

    const destination = 'src/.static';

    return gulp.src(source)
        .pipe(changed(destination))
        .pipe(gulp.dest(destination))
});
