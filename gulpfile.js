var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    // html文件改变，就自动刷新页面
    gulp.watch(['src/**/*.html', 'src/**/*.js', 'src/**/*.css']).on('change',reload);
});
gulp.task('server',['browser-sync']);
gulp.task('default',['server']);
