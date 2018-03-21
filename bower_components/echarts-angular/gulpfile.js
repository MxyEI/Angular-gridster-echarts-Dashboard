var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var banner = ['/**',
	' * <%= pkg.name %> - <%= pkg.description %>',
	' * @version v<%= pkg.version %>',
	' * @author <%= pkg.author %>',
	' * @link <%= pkg.homepage %>',
	' * @license <%= pkg.license %>',
	' */',
	''
].join('\n');


gulp.task('clean', function () {
	return gulp.src('dist', { read: false })
		.pipe(plugins.clean());
});

gulp.task('script', ['clean'], function () {
	gulp.src('src/**.js')
		.pipe(plugins.concat('echarts-angular.js'))
		.pipe(plugins.header(banner, { pkg: pkg }))
		.pipe(gulp.dest('dist'))
		.pipe(plugins.uglify({ preserveComments: 'all' }))
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['script']);

gulp.task('watch', function () {
	gulp.watch('src/*.js', ['script']);
});

gulp.task('script-watch', ['script'], function (done) {
	browserSync.reload();
	done();
});

gulp.task('serve', ['script'], function () {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch('src/*.js', ['script-watch']);
	gulp.watch("*.html").on('change', browserSync.reload);
});