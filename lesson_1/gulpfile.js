const gulp 			= require('gulp');
const sass 			= require('gulp-sass');
const less 			= require('gulp-less');
const rename 		= require('gulp-rename');
const autoprefixer 	= require('gulp-autoprefixer');
const sourcemaps 	= require('gulp-sourcemaps');

/* ------------ Styles compile ------------- */
gulp.task('styles:compile', function () {
	return gulp.src('./scss/checkout-page.scss') /*файл содержащий импорты и лежащий в scss*/
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(rename('checkout-page.css'))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('style'));
});

/* ------------ Watchers ------------- */
gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', gulp.series('styles:compile'));
});