var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    header  = require('gulp-header'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat');
    sourcemaps = require('gulp-sourcemaps'),
    package = require('./package.json');


var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');


/**
 * File paths to various assets are defined here.
 */
var PATHS = {
    jsVendor: [
        'bower_components/jquery/dist/jquery.slim.min.js',
        'bower_components/popper.js/dist/umd/popper.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js'
    ],
    jsScripts: [
      'src/js/scripts/*.js',
      'src/js/scripts.js'
    ]
};

// ########################
// Task Building Blocks
// ########################
gulp.task('css', function () {
    return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(header(banner, { package : package }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({stream:true}));
});

// JS Default Scripts
gulp.task('js:scripts',function(){
  return gulp.src(PATHS.jsScripts)
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/assets/js'))
    .pipe(browserSync.reload({stream:true, once: true}));
});

// JS Vendor Scripts
gulp.task('js:vendor',function(){
  return gulp.src(PATHS.jsVendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('app/assets/js'));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
      proxy: {
        target: "http://app.php-starter-template.dev/",
      }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});


// ########################
// Main Tasks
// ########################
gulp.task('default', ['css', 'js:vendor', 'js:scripts'], function () {
    gulp.watch("src/scss/**/*.scss", ['css']);
    gulp.watch(PATHS.jsScripts, ['js:scripts']);
    gulp.watch("app/**/*.php", ['bs-reload']);
});

gulp.task('watch', ['css', 'js:vendor', 'js:scripts', 'browser-sync'], function () {
    gulp.watch("src/scss/**/*.scss", ['css']);
    gulp.watch(PATHS.jsScripts, ['js:scripts']);
    gulp.watch("app/**/*.php", ['bs-reload']);
});
