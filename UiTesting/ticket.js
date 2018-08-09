var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
var option = new chrome.Options();
console.log(option.map_.get('chromeOptions'));
option.map_.set('chromeOptions', {
        'args': ['--disable-infobars', "--disable-web-security", '--test-type','--start-maximized']
})
console.log(option.map_.get('chromeOptions'));
var driver = new webdriver.Builder().withCapabilities(option.toCapabilities()).build();
driver.getWindowHandel();



