'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const errors = require('../gulperrors');
const slack = require('gulp-slack')({
    url: 'https://hooks.slack.com/services/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',
    icon_emoji: ':dog:',
    user: 'Toby',
});

gulp.task('notify', (callback) => {
    if (!isProduction) {
        return callback();
    }

    const source = 'src/**/*';
    const message = `Updated docs @ ${process.env.NODE_ENV === "staging" ? "https://staging.blokks.co/docs" : 'https://blokks.co/docs'}`;

    return gulp.src(source)
        .pipe(plumber())
        .pipe(gulpif(isProduction, slack(message))).on('error', errors);
});
