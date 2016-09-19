
/**
 * Dependency Imports
 */
import gulp   from './gulpconfig/gulp.classes.js';
import config from './gulpconfig/gulp.config.json';

// Copy Folders / Files
gulp.Copy('copy', [
  { src: `${config.paths.vendor.bootstrap.sass}/**/**/*.scss`, dest: `${config.paths.src.sass}/vendor/bootstrap` },
  { src: `${config.paths.vendor.bootstrap.js}/**/**/*.js`, dest: `${config.paths.src.js}/vendor/bootstrap` },
  { src: `${config.paths.vendor.fontawesome.sass}/**/*`, dest: `${config.paths.src.sass}/vendor/font-awesome` },
  { src: `${config.paths.vendor.fontawesome.fonts}/**/*`, dest: `./fonts` }
]);

// Compile Sass
gulp.Sass('sass', `${config.paths.src.sass}/**/*.scss`, config.paths.dist.css);

// Complile Typescript
gulp.Browserify('browserify', `${config.paths.src.js}/scripts.js`, `${config.paths.dist.js}/main.js`);

// Lint ES6
gulp.Eslint('eslint', `${config.paths.src.js}/**/*.js`, './.eslintrc');

// Lint Scss
gulp.Scsslint('scsslint', `${config.paths.src.sass}/**/*.scss`, `${config.paths.src.sass}/vendor/**/*.scss`, '.scss-lint.yml');

// Clean Dist Folder
gulp.Clean('clean', [`${config.paths.dist.css}/*.css`, `${config.paths.dist.css}/*.css.map`, `${config.paths.dist.js}/*.js`, `${config.paths.dist.js}/*.js.map`]);

// Default Task
gulp.Default(['copy', 'sass', 'scsslint', 'eslint', 'browserify']);

// Watch Task
gulp.Watch([], [
  { path: `${config.paths.src.js}/**/*.js`, tasks: ['eslint','browserify'] },
  { path: `${config.paths.src.sass}/**/*.scss`, tasks: ['scsslint','sass'] }
]);
