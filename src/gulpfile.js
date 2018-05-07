const gulp = require('gulp');
const sass = require('gulp-sass');

const dir = {
    src: {
        base: './',
        styles: './scss',
    },
    dest: {
        base: '../',
        styles: '../css',
    }
}

gulp.task('css', () => {
    return gulp.src(dir.src.styles)
        .pipe(sass())
        .pipe(gulp.dest(dir.dest.styles));
});

gulp.task('default', ['css']);