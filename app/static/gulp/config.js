var dest = './build',
  src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
      {
        entries: src + '/diagnostic/app.js',
        dest: dest,
        outputName: 'app.js'
      },
      {
        entries: src + '/performer/performer.js',
        dest: dest,
        outputName: 'performer.js'
      }
    ],
    extensions: ['.js']
  }
};
