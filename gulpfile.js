"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const sass = require("gulp-ruby-sass");


gulp.task("compile", () => {
    return sass("./app/*.scss") // which Sass file to grab
    .pipe(gulp.dest("./app")) // where to put the compiled stylesheet
    .pipe(reload({ stream:true })); // if the stylesheet is altered, reload the browser
});


gulp.task("refresh", ["compile"], () => {
    browserSync({
        server:{
            baseDir: "./app"
        }
    });
});
gulp.watch(["*.html", "*.scss", "*.js"], {cwd: "./app"}, ["compile"], reload);