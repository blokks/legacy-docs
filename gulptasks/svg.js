'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgsprite = require('gulp-svg-sprite');
const errors = require('../gulperrors');

gulp.task('svg', () => {
    const minifyOptions = {
         plugins: [[{
             cleanupID: false,
         }]]
    };

    const spriteOptions = {
        svg: {
            xmlDeclaration: false,
            rootAttributes: {
                width: 0,
                height: 0,
                style: 'position:absolute',
            },
        },
        mode: {
            symbol: {
                dest: '.',
                sprite: 'sprite.svg',
                example: false,
            },
        },
    };

    const source = ['./src/static-source/images/**/*.svg'];
    const destination = './src/static-compiled/images';

    return gulp.src(source)
        .pipe(svgmin(minifyOptions)).on('error', errors)
        .pipe(svgsprite(spriteOptions)).on('error', errors)
        .pipe(gulp.dest(destination))
});
