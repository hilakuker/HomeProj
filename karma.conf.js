module.exports = function (config) {
  config.set({

    basePath: './app',

    preprocessors: {
      'templates/*.html': ['ng-html2js']
    },

    files: [
      'bower_components/html5-boilerplate/dist/js/vendor/jquery-1.12.0.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      "../e2e-tests/scenarios.js",
      'templates/*.html'
    ],

    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    },

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

