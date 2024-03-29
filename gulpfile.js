var gulp = require('gulp');
var del = require('del');
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');

gulp.task('clean', function(done) {
    del.sync(['dist/*', '!dist/.git']);
    done();
});

gulp.task('favicon', function(done) {
    gulp.src('src/favicon.ico')
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('images', function(done) {
    gulp.src('src/assets/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'));
    done();
});

gulp.task('assets', function(done) {
    gulp.src('src/assets/!(img)**/*')
        .pipe(gulp.dest('dist/assets'));
    done();
});

gulp.task('compile', function (done) {
    gulp.src(['src/*.html'])
        .pipe(useref('app.min.js'))
        .pipe(gulpIf('*.js', uglify({ mangle: true })))
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('default', gulp.series('clean', 'favicon', 'images', 'assets', 'compile'));