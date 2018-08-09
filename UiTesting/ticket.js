var webdriver = require('selenium-webdriver');
var firefox = require('selenium-webdriver/firefox');
var firefoxOptions = new firefox.Options();
var driver = new webdriver.Builder().forBrowser('firefox')
    .setFirefoxOptions(firefoxOptions)
    .build();
// Go to widget
driver.get("https://portal.office.com/support/altusupport.aspx");

//Login
driver.findElement(webdriver.By.name("loginfmt")).sendKeys("porsche@ferdinandporsche.onmicrosoft.com");
driver.findElement(webdriver.By.id("idSIButton9")).click();
driver.findElement(webdriver.By.name("passwd")).sendKeys("i4FHNAB8G9EP");
driver.findElement(webdriver.By.id("idSIButton9")).click();
driver.findElement(webdriver.By.id("idBtn_Back")).click();

