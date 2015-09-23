var gulp = require('gulp');
var jshint = require('gulp-jshint');
var del = require('del');

var paths = {
    src: "./Assets/**/*.js",
    dest: "./wwwroot/js/"
}

gulp.task("clean", function () {
    del(paths.dest + '**/*');    // Delete everything in 'wwwroot/js'
});

gulp.task('default', ['clean'], function () {
    return gulp.src(paths.src)         // Returns a stream
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest(paths.dest))   // Pipes the stream somewhere
});