var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect:true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['./specs.js']
   // specs: ['./specs2.js']
   //specs: ['./testcases/invoke.js'],

   //specs: ['./testcases/invoke.js'],
   specs: ['./testcases/test1.js'],

   onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'reports/screenshots'
    }).getJasmine2Reporter());

    var AllureReporter = require('jasmine-allure-reporter');
   jasmine.getEnv().addReporter(new AllureReporter({
  resultsDir: 'allure-results'
}));
 },
 
  };