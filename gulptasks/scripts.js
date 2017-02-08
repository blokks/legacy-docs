'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const envify = require('envify/custom');
const plumber = require('gulp-plumber');
const sourcestream = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const watchify = require('watchify');
const errors = require('../gulperrors');

gulp.task('scripts', () => {
    const source = ['../src/static/scripts/index.js'];
    const destination = 'src/.static/scripts';

    const bundler = browserify({
        basedir: __dirname,
        entries: source,
        debug: !isProduction,
        cache: {},
        packageCache: {},
        fullPaths: !isProduction,
    });

    bundler.transform('envify', {
        _: 'purge',
        global: true,
        NODE_ENV: process.env.NODE_ENV,
    });

    const bundle = () => bundler.bundle().on('error', errors)
        .pipe(plumber())
        .pipe(sourcestream('main.js'))
        .pipe(buffer())
        .pipe(gulpif(isProduction, uglify({ mangle: false })))
        .pipe(gulp.dest(destination))

    bundler.on('update', bundle);

    if (!isProduction) {
        watchify(bundler);
    }

    return bundle();
});
