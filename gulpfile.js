var gulp = require('gulp');
var del = require('del');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('favicon', ['clean'], function() {
    return gulp.src('src/favicon.ico')
        .pipe(gulp.dest('dist'));
});

gulp.task('assets', ['clean'], function() {
    return gulp.src('src/assets/**/!(*.ase)*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('compile', ['clean'], function () {
    return gulp.src(['src/*.html'])
        .pipe(useref('app.min.js'))
        .pipe(gulpIf('*.js', uglify({ mangle: true })))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'favicon', 'assets', 'compile']);