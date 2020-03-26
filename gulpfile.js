const
    gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require("browser-sync").create(),
    del           = require('del'),
    cache         = require('gulp-cache'),
    autoPrefixer  = require('gulp-autoprefixer');

function startServer(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
    });
    done();
}

function clean() {
    return del(["dist"]);
}

function clear() {
    return cache.clearAll();
}

function reload(done) {
    browserSync.reload();
    done();
}

function watchFiles(done) {
    gulp.watch('./**/*.css', gulp.parallel(reload));
    gulp.watch("./**/*.html", gulp.parallel(reload));
    gulp.watch('./**/*.js', gulp.parallel(reload));
    done();
}

gulp.task('default',gulp.parallel(watchFiles, startServer));

exports.clean = clean;
exports.clear = clear;