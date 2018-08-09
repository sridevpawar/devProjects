var webdriver = require('selenium-webdriver');
var firefox = require('selenium-webdriver/firefox');
var firefoxOptions = new firefox.Options();
var driver = new webdriver.Builder().forBrowser('firefox')
    .setFirefoxOptions(firefoxOptions)
    .build();
driver.get("https://team.goodeggs.com");