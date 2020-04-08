const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// compile sass file into css file
gulp.task('sass', () => {
	return gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.stream());
})

//create server and watching files
gulp.task('serve', ['sass'], () => {
	browserSync.init({
		server: ''
	});

	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('*.html').on('change', browserSync.reload);
})

gulp.task('default', ['serve']);