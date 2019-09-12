const { src, watch, dest } = require('gulp'),
        sass = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        browserSync = require('browser-sync'),
        uglify = require('gulp-uglify'),
        postcss = require('gulp-postcss')

let server = browserSync.create()

function styles(){

    return src('./src/sass/**/*.scss')
    .pipe(sass({
        outputStyle : "compressed"
    }))

    .pipe(autoprefixer())

    .pipe(dest('public/css'))
    
    .pipe(server.stream())
}

function dev(){
    server.init({
        server : {
            baseDir : './'
        }
    })

    watch('./src/sass/**/*.style', styles)
} 

exports.default = function() {
    dev()
};