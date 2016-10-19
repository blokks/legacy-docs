'use strict';

const gulp = require('gulp');
const exec = require('child_process').execSync;

gulp.task('hugo', (callback) => {
    const command = 'hugo --config=src/config.toml --source=./src --destination=../dist';
    const result = exec(command, { encoding: 'utf-8' });

    callback();
});
