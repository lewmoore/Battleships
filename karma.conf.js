module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    reporters: ['spec'],

    files: ['tests/*.js', 'src/*.js']

  });
};
