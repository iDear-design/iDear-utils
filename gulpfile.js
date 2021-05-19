const gulp = require('gulp')
const replace = require('gulp-replace')
const pack = require('./package.json')

gulp.task('copy_resource', () => {
  return gulp.src('./src/*')
    .pipe(gulp.dest('./dddd'))
})

gulp.task('copy_resource2', () => {
  return gulp.src('./src/*/*')
    .pipe(gulp.dest('./dddd'))
})

/*gulp.task('update_version', () => {
  return gulp.src('./func/ctor.js')
    .pipe(replace(/'@VERSION'/, `'${pack.version}'`))
    .pipe(gulp.dest('./'))
})*/

gulp.task('build', gulp.series('copy_resource', 'copy_resource2'))
