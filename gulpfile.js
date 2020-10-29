let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');

gulp.task('minify-css', () => {
    return gulp.src('./css/styles.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass', function () {
	return gulp.src('./scss/styles.scss')
		.pipe(sass())
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('./css/'));
});

gulp.task('minify-sass', gulp.series('sass', 'minify-css'));

// JS
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

gulp.task('scripts', function() {
    return gulp.src('./js/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./js/dist'));
});

gulp.task("uglify", function () {
    return gulp.src("./js/dist/all.js")
        .pipe(rename("all.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('./js/dist'));
});

gulp.task('minify-js', gulp.series('scripts', 'uglify'));



// watch all
gulp.task('watch', () => {
    gulp.watch('./js/*.js', gulp.task('minify-js'))
    gulp.watch('./scss/*.scss', gulp.task('minify-sass'));
});

