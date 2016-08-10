var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var paths = {
    sass: ['./lib/scss/**/*.scss'],
    web: ['./'],
    js: ['./lib/js/**/*.js']
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

gulp.task('webserver', function() {
  gulp.src(paths.web)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('uglyjs', function(){
    gulp.src(paths.js)
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['uglyjs']);
});

gulp.task('default', ['watch', 'webserver']);