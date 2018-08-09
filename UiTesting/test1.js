var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

driver.get("https://www.npmjs.com/package/selenium-webdriver");