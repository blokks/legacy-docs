'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const gulp = require('gulp');
const exec = require('child_process').execSync;

gulp.task('hugo', (callback) => {
    let config;
    switch (process.env.NODE_ENV) {
        case 'development': config = 'src/development.toml'; break;
        case 'staging': config = 'src/staging.toml'; break;
        case 'production': config = 'src/production.toml'; break;
    }

    const command = `hugo --config=${config} --source=./src --destination=../dist`;
    const result = exec(command, { encoding: 'utf-8' });

    callback();
});
