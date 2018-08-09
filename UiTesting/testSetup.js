var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
 'browserName' : 'Firefox',
 'browser_version' : '58.0',
 'os' : 'Windows',
 'os_version' : '10',
 'resolution' : '1024x768',
 'browserstack.user' : 'USERNAME',
 'browserstack.key' : 'ACCESS_KEY'
}

var driver = new webdriver.Builder().
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com');