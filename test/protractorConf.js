// An example configuration file.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./e2e/**/*.spec.js'],
  baseUrl: 'http://127.0.0.1:9000',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
