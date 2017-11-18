import gulp from "gulp";
import sass from "gulp-sass";
import rimraf from "rimraf";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";

const reload = browserSync.reload;

gulp.task("rmrf", () => {
  rimraf.sync("build");
});

gulp.task("css", () => {
  gulp
    .src(["lib/styles.scss"])
    .pipe(plumber())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("dist"))
    .pipe(reload({ stream: true }));
});

gulp.task("default", ["rmrf", "css"]);

gulp.task("watch", () => {
  gulp.start("default");

  browserSync({ server: { baseDir: "./" }, open: false });

  gulp.watch("lib/**/*.scss", ["css"]);
  gulp.watch(["*.html", "src/**/*.css", "src/**/*.js"]).on("change", reload);
});
