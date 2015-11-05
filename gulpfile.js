var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

/**
 * Main styles
 */
gulp.task('less', function() {
    gulp.src('assets/less/**/*.less')
        .pipe(plugins.changed('www/assets/css'))
        .pipe(plugins.less())
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('www/assets/css'));
});

/**
 * Main scripts
 */
gulp.task('scripts', function() {
    gulp.src('assets/js/**/*.js')
        .pipe(plugins.changed('www/assets/js'))
        .pipe(plugins.concat('main.js'))
        .pipe(gulp.dest('www/assets/js'));
});

gulp.task('latex', function() {
    gulp.src('documents/preamble.tex')
        .pipe(plugins.changed('documents'))
        .pipe(plugins.latex())
        .pipe(gulp.dest('documents'));
});

/**
 * The default gulp task
 */
gulp.task('default', function() {
    gulp.start('less', 'scripts');
});

/**
 * Keep an eye on these folders when running 'gulp watch' and start the defined scripts if changes appear.
 * (gulp-changed plugin will make sure only files that are edited will be re-compiled by gulp)
 */
gulp.task('watch', function() {
    gulp.watch('assets/less/**/*.less', ['less']);
    gulp.watch('assets/js/**/*.js', ['scripts']);
    gulp.watch('documents/*.tex', ['latex']);
});
