var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

/**
 * Main styles
 */
gulp.task('less', function() {
    gulp.src('assets/less/**/*.less')
        .pipe(plugins.changed('public'))
        .pipe(plugins.less())
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('public'))
        .pipe(plugins.livereload());
});

/**
 * Main scripts
 */
gulp.task('scripts', function() {
    gulp.src('assets/js/**/*.js')
        .pipe(plugins.changed('public'))
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.uglify( { mangle: false } ).on('error', plugins.util.log))
        .pipe(gulp.dest('public'))
        .pipe(plugins.livereload());
});

/**
 * Views
 */
gulp.task('views', function() {
    gulp.src('assets/js/**/*.jade')
        .pipe(plugins.changed('public'))
        .pipe(plugins.jade({
         locals: {} 
        }))
        .pipe(gulp.dest('public/views'))
        .pipe(plugins.livereload());
});

gulp.task('latex', function() {
    gulp.src('documents')
        .pipe(plugins.changed('documents'))
        .pipe(plugins.shell('pdflatex -output-directory=./documents ./documents/preamble.tex'));
});

/**
 * The default gulp task
 */
gulp.task('default', function() {
    gulp.start('less', 'scripts', 'views', 'latex');
});

/**
 * Keep an eye on these folders when running 'gulp watch' and start the defined scripts if changes appear.
 * (gulp-changed plugin will make sure only files that are edited will be re-compiled by gulp)
 */
gulp.task('watch', function() {
    plugins.livereload.listen()
    gulp.watch('assets/less/**/*.less', ['less']);
    gulp.watch('assets/js/**/*.js', ['scripts']);
    gulp.watch('assets/js/**/*.jade', ['views']);
    gulp.watch('documents/*.tex', ['latex']);
});
