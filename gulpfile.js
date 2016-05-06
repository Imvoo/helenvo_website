var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ['browser-sync']);

gulp.task('compileJS', function() {
	return gulp.src("src/app.js")
	  .pipe(browserify({
	    insertGlobals: false,
	    debug: false,
	    transform: [reactify]
	  }))
	  .pipe(gulp.dest('./public/dist'));
	//   .pipe(reload({stream:true}));
});

gulp.task('watch-js', function() {
	gulp.watch(['src/*.js', 'src/*.jsx'], ['compileJS']);
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./public",
		},
		files: ["public/css/*.css", "public/*.html"],
		port: 8080,
		open: false,
		ui: false
	});

	// gulp.watch(["public/html/*.html", "public/css/*.css"], reload);
	// gulp.watch("public/dist/*").on('change', browserSync.reload);
});

gulp.task('production', function() {
	connect.server({
		root: 'public',
		port: 8080,
		middleware: function(connect, opt) {
			return [
				historyApiFallback()
			];
		}
	});
});