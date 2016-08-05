var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
    sass: ['./lib/scss/**/*.scss']
};

gulp.task('sass', function(done) {
    gulp.src('./lib/scss/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./assets/css/'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watch']);