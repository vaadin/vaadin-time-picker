var argv = require('yargs').argv;

module.exports = {
  plugins: {
    istanbul: {
      dir: './coverage',
      reporters: ['text-summary', 'lcov'],
      include: [
        '**/vaadin-time-picker/src/*.html'
      ],
      exclude: [],
      thresholds: {
        global: {
          statements: 98
        }
      }
    }
  },

  registerHooks: function(context) {
    var saucelabsPlatforms = [
      'macOS 10.12/iphone@10.3',
      'Windows 10/microsoftedge@15',
      'Windows 10/internet explorer@11',
      'macOS 10.12/safari@11.0',
      'macOS 9.3.2/iphone@9.3'
    ];

    var cronPlatforms = [
      'macOS 10.12/ipad@11.0',
      'Windows 10/chrome@65',
      'Windows 10/firefox@59'
    ];

    if (argv.env === 'saucelabs') {
      context.options.plugins.sauce.browsers = saucelabsPlatforms;

    } else if (argv.env === 'saucelabs-cron') {
      context.options.plugins.sauce.browsers = cronPlatforms;
    }
  }
};
