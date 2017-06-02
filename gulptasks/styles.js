const isProduction = process.env.NODE_ENV !== 'development';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const info = require('../package.json');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const errors = require('../gulperrors');

gulp.task('styles', () => {
    const CSSNextOptions = {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
    };

    const assetOptions = {
        loadPaths: [
            'src/static/',
        ],
    };

    const sortingOptions = {
        'sort-order': 'csscomb',
        'empty-lines-between-children-rules': 0,
        'empty-lines-between-media-rules': 0,
        'empty-lines-before-comment': 0,
        'preserve-empty-lines-between-children-rules': false,
    };

    const fontMagicianOptions = {
        formats: 'woff',
    };

    let CSSNanoOptions = {
        autoprefixer: false,
        zindex: false,
    };

    if (!isProduction) {
        CSSNanoOptions = Object.assign({}, CSSNanoOptions, {
            core: false,
            discardEmpty: false,
            reduceIdents: false,
        });
    }

    const processors = [
        require('postcss-reporter'),
        require('precss'),
        require('postcss-calc'),
        require('postcss-short'),
        require('postcss-easings'),
        require('postcss-animation'),
        require('postcss-cssnext')(CSSNextOptions),
        require('postcss-assets')(assetOptions),
        require('postcss-font-magician')(fontMagicianOptions),
        require('postcss-sorting')(sortingOptions),
        require('cssnano')(CSSNanoOptions),
    ];

    const source = ['src/static/styles/screen.css'];
    const destination = 'src/.static/styles';

    return gulp.src(source)
        .pipe(gulpif(!isProduction, sourcemaps.init()))
        .pipe(postcss(processors)).on('error', errors)
        .pipe(gulpif(!isProduction, sourcemaps.write()))
        .pipe(gulp.dest(destination));
});
