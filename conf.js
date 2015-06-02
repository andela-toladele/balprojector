exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['js/e2etests/balproj-spec.js'],
  capabilities: {
    browserName: 'firefox'
  },
  baseUrl: 'http://localhost:80'
};