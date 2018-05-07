const gulp = require('gulp');
const sass = require('gulp-sass');
const svgSymbols = require('gulp-svg-symbols');
// const inject = require('gulp-inject');

const dir = {
    src: {
        base: './',
        styles: './scss/',
        icons: './images/icons/',
    },
    dest: {
        base: '../',
        styles: '../css/',
        icons: '../images/icons/',
    }
}

gulp.task('css', () => {
    return gulp.src(`${dir.src.styles}styles.scss`)
        .pipe(sass())
        .pipe(gulp.dest(dir.dest.styles));
});

gulp.task('sprite', () => {
    return gulp.src(`${dir.src.icons}*.svg`)
        .pipe(svgSymbols({
            id: 'icon--%f',
            class: '.icon--%f',
            fontSize: 16,
            title: '%f',
            templates: ['default-svg'],
        }))
        .pipe(gulp.dest(dir.dest.icons));
});

gulp.task('default', ['css', 'sprite']);