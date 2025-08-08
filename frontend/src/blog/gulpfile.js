import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import minifyCSS from'gulp-clean-css';
import concat from'gulp-concat';
import sourcemaps from'gulp-sourcemaps';
import livereload from'gulp-livereload';
import connect from'gulp-connect';
import uglify from'gulp-uglify';
import rename from'gulp-rename';
import fileinclude from'gulp-file-include';
import autoprefixer from'gulp-autoprefixer';
import copy from 'gulp-copy';

const sass      = gulpSass(dartSass);
const distPath  = '../../template';
const theme     = 'blog';
const file      = 'blog';

export function html() {
	return gulp.src(['./html/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file',
			rootPath: './'
		}))
		.pipe(gulp.dest(distPath + '/template_'+ file +''))
		.pipe(livereload());
};

export function cssVendor() {
  return gulp.src([
		'node_modules/animate.css/animate.min.css',
		'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
		'node_modules/jquery-ui-dist/jquery-ui.min.css',
		'node_modules/pace-js/themes/black/pace-theme-flash.css',
		'node_modules/bootstrap-icons/font/bootstrap-icons.css'
	])
	.pipe(concat('vendor.min.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/assets/css/'+ theme +'/'))
	.pipe(livereload());
};

export function cssApp() {
	return gulp.src([
		'./scss/styles.scss'
	])
	.pipe(sourcemaps.init())
	.pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(distPath + '/assets/css/'+ theme +'/'))
	.pipe(livereload());
};

export function fonts() {
	gulp.src(['node_modules/bootstrap-icons/font/fonts/**'])
		.pipe(copy('dist/assets/css/fonts', { prefix: 4 }));
	return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/**'])
		.pipe(copy('dist/assets/webfonts', { prefix: 4 }));
};

export function plugins() {
	return gulp.src([
		'node_modules/animate.css/**',
		'node_modules/@fortawesome/**',
		'node_modules/jquery-ui-dist/**',
		'node_modules/pace-js/**',
		'node_modules/bootstrap-icons/**',
  	'node_modules/jquery/**',
  	'node_modules/bootstrap/dist/**',
  	'node_modules/js-cookie/**',
	], { base: './node_modules/' }).pipe(copy(distPath + '/assets/plugins', { prefix: 1 }));
};

export function jsVendor() {
  return gulp.src([
		'node_modules/pace-js/pace.min.js',
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/jquery-ui-dist/jquery-ui.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
		'node_modules/js-cookie/dist/js.cookie.js'
	])
	.pipe(sourcemaps.init())
	.pipe(concat('vendor.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(distPath + '/assets/js/'+ theme +'/'))
	.pipe(livereload())
};

export function jsApp() {
	return gulp.src([
			'./js/app.js',
		])
		.pipe(uglify())
    .pipe(rename('app.min.js'))  
		.pipe(gulp.dest(distPath + '/assets/js/'+ theme +'/'))
		.pipe(livereload())
};

export function watch() {
	livereload.listen();
	gulp.watch('./html/*.html', gulp.series(html));
	gulp.watch('./html/*/*.html', gulp.series(html));

	gulp.watch('./scss/*.scss', gulp.series(cssApp));
	gulp.watch('./scss/*/*.scss', gulp.series(cssApp));
	
	gulp.watch('js/**/*.js', gulp.series([jsApp]));
};

export function webserver() {
	connect.server({
		name: 'Color Admin - Blog',
		root: [distPath, distPath + '/template_'+ file +'/'],
		port: 8000,
		livereload: true,
		fallback: 'index.html'
	});
};

export default gulp.series(
	html, 
	cssVendor, 
	cssApp, 
	jsVendor,
	jsApp,
	fonts,
	gulp.parallel(watch, webserver)
);