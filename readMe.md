# Alpacalypso
- Gulp
- SCSS layout
- Carousel
- Information widget

## Gulp
`npm init -yes` was used in the command line to install npm. This created a `package.json` file, where the packages installed are listed. After that gulp was installed using `npm gulp install`.
The packages were installed by running `gulp install package-name` in the command line. This downloads the specific packages required.

### gulpfile.js
The `gulpfile.js` file contains all the methods used in order to:
- Turn all SCSS files into a single CSS file, for browser compatibility
- Concatinate all JS files into one
- Minify the CSS, and uglify the JS, for performance improvements
- Create a `watch` task that automatically runs these tasks when changes are applied to the developer files.

The final CSS and JS files which are linked into the final project are have the `.min.js` added t