/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.testinitiator;
import java.awt.Dimension;
import java.awt.Toolkit;
import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;

import org.openqa.selenium.Capabilities;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.LocalFileDetector;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.testng.Reporter;
import org.utils.ConfigPropertyReader;
import org.utils.ReadingPropertyFile;
import static org.utils.ConfigPropertyReader.getProperty;

public class WebDriverFactory {
	
	

	public static final String USERNAME = "priyankavanama1";
	public static final String AUTOMATE_KEY = "KTQv1sFzVzZPvypEztYU";
	public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
	static String browserstackLocal = System.getenv("BROWSERSTACK_LOCAL");
	static String browserstackLocalIdentifier = System.getenv("BROWSERSTACK_LOCAL_IDENTIFIER");
	
	public static WebDriver driver;
	private String browser = "";
	public enum DriverType {
		CHROME, FIREFOX, SAFARI, IE, MOBILE
	}

	public enum DriverLocation {
		LOCAL, REMOTE
	}


	public static WebDriver getDriver() throws MalformedURLException {
		//DriverType type = DriverType.valueOf(System.getProperty("browser").toUpperCase());
		DriverType type = DriverType.valueOf(ConfigPropertyReader.getProperty("browser").toUpperCase());
		//DriverLocation location = DriverLocation.valueOf(System.getProperty("server").toUpperCase());
		DriverLocation location = DriverLocation.LOCAL;
		return getDriver(type, location);
	}

	public static WebDriver getDriver(DriverType type, DriverLocation location) throws MalformedURLException {
		//        if (driver != null) {
		//            return driver;
		//        }

		switch (location) {
		case LOCAL:
			driver = getLocalDriver(type);
			break;
		case REMOTE:
			driver = getRemoteDriver(type);
			break;
		default:
			throw new IllegalArgumentException("unknown selenium server location argument");
		}

		return configureBrowser(driver);
	}

	private static WebDriver getLocalDriver(DriverType type) throws MalformedURLException {
		WebDriver driver;
		switch (type) {
		case CHROME:
			driver = getChromeDriver();
			break;
		case FIREFOX:
			driver = getFirefoxDriver();
			break;
		case SAFARI:
			driver = getSafariDriver();
			break;
		case IE:
			driver = getInternetExplorerDriver();
			break;
		case MOBILE:
			driver = getMobileDriver();
			break;
		default:
			throw new IllegalArgumentException("unknown browser argument");
		}
		return driver;
	}

	private static WebDriver getRemoteDriver(DriverType type) throws MalformedURLException {
		String seleniumHubAddress = System.getProperty("vm.IP");

		DesiredCapabilities desiredCapabilities;
		switch (type) {
		case CHROME:
			desiredCapabilities = DesiredCapabilities.chrome();
			desiredCapabilities.setCapability("browser", "Chrome");
			desiredCapabilities.setCapability("browser_version", "69.0");
			desiredCapabilities.setCapability("name", "Remote File Upload using Selenium 2's FileDetectors");
			break;
		case FIREFOX:
			desiredCapabilities = DesiredCapabilities.firefox();
			desiredCapabilities.setCapability("browser", "Firefox");
			desiredCapabilities.setCapability("browser_version", "42.0");
			break;
		case SAFARI:
			desiredCapabilities = DesiredCapabilities.safari();
			break;
		case IE:
			desiredCapabilities = DesiredCapabilities.internetExplorer();
			desiredCapabilities.setCapability("browser", "Internet Explorer");
			desiredCapabilities.setCapability("browser_version", "11.0");
			desiredCapabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
			desiredCapabilities.setCapability("ignoreZoomSetting", true);
			break;
		default:
			throw new IllegalArgumentException("unknown selenium browser argument");
		}

		desiredCapabilities.setJavascriptEnabled(true);
		
		if(seleniumHubAddress.contains("browserstack")){
			desiredCapabilities.setCapability("browserstack.local", browserstackLocal);
			desiredCapabilities.setCapability("browserstack.localIdentifier", browserstackLocalIdentifier);
			desiredCapabilities.setCapability("browserstack.local", "true");
			driver=new RemoteWebDriver(new URL(URL), desiredCapabilities);
			((RemoteWebDriver) driver).setFileDetector(new LocalFileDetector());
			return driver;
		}
		return new RemoteWebDriver(new URL(seleniumHubAddress), desiredCapabilities);
	}

	private static WebDriver getChromeDriver() {
		String driverPath = "src/test/resources/selenium-drivers/";
		System.getProperty("driverpath");
		String localMachineEnvironment = System.getProperty("os.name");
		if (localMachineEnvironment.toLowerCase().trim().contains("mac")) {
			System.setProperty("webdriver.chrome.driver", driverPath + "chromedriver");
		} else if (driverPath.endsWith(".exe") || driverPath.endsWith("chromedriver")) {
			System.setProperty("webdriver.chrome.driver", driverPath);
		} else {
			System.setProperty("webdriver.chrome.driver", driverPath + "chromedriver.exe");
		}
		ChromeOptions options = new ChromeOptions();
		DesiredCapabilities cap = DesiredCapabilities.chrome();
		LoggingPreferences logPrefs = new LoggingPreferences();
		logPrefs.enable(LogType.BROWSER, Level.ALL);
		cap.setCapability(CapabilityType.LOGGING_PREFS, logPrefs);
		cap.setCapability(ChromeOptions.CAPABILITY, options);
		return new ChromeDriver(cap);
	}

	private static WebDriver getInternetExplorerDriver() {
		String driverPath = "src/test/resources/selenium-drivers/";
		if (!driverPath.endsWith(".exe")) {
			driverPath = driverPath + "IEDriverServer.exe";
		}
		System.setProperty("webdriver.ie.driver", driverPath);

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability(InternetExplorerDriver.IE_ENSURE_CLEAN_SESSION, true);
		
		capabilities.setCapability("acceptSslCerts", true);
		//capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
		capabilities.setCapability(CapabilityType.SUPPORTS_JAVASCRIPT, true);
		//capabilities.setCapability("ignoreZoomSetting", true);
		capabilities.setCapability("ignoreZoomLevel", true);
		capabilities.setJavascriptEnabled(true);
		capabilities.setCapability("nativeEvents", false);
		capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
		
		capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
		capabilities.setCapability("ignoreZoomSetting", true);
		return new InternetExplorerDriver(capabilities);
	}

	private static WebDriver getSafariDriver() {
		return new SafariDriver();
	}

	private static WebDriver getFirefoxDriver() {

		String driverPath = "src/test/resources/selenium-drivers/";
		System.getProperty("driverpath");
		String localMachineEnvironment = System.getProperty("os.name");
		if (localMachineEnvironment.toLowerCase().trim().contains("mac")) {
			System.setProperty("webdriver.gecko.driver", driverPath + "geckodriver");
		} else if (driverPath.endsWith(".exe") || driverPath.endsWith("geckodriver")) {
			System.setProperty("webdriver.gecko.driver", driverPath);
		} else {
			System.setProperty("webdriver.gecko.driver", driverPath + "geckodriver.exe");
		}
//		DesiredCapabilities dc = new DesiredCapabilities();
//		dc.setCapability("acceptInsecureCerts", true);
		
		System.setProperty("webdriver.gecko.driver", driverPath);
		FirefoxProfile profile = new FirefoxProfile();
		profile.setPreference("browser.cache.disk.enable", false);
		return new FirefoxDriver(profile);
	}

	private static WebDriver getMobileDriver() throws MalformedURLException {
		DesiredCapabilities capabilities = new DesiredCapabilities();

		capabilities.setCapability("deviceName", System.getProperty("mobileDeviceName", "094c9e7f"));
		capabilities.setCapability("device", System.getProperty("mobileDeviceType", "Android"));
		capabilities.setCapability("platformName", System.getProperty("mobileDeviceType", "Android"));
		capabilities.setCapability("app", System.getProperty("mobileBrowser", "Chrome"));
		capabilities.setCapability(CapabilityType.VERSION, "5.0.2");
		capabilities.setCapability(CapabilityType.PLATFORM, "Windows");
		capabilities.setJavascriptEnabled(true);

		return new RemoteWebDriver(new URL(System.getProperty("appiumServer")), capabilities);
	}

	private static WebDriver configureBrowser(WebDriver driver) throws MalformedURLException {
		Capabilities caps = ((RemoteWebDriver) driver).getCapabilities();
		String browserVersion = caps.getVersion();
		String uAgent = (String) ((JavascriptExecutor) driver).executeScript("return navigator.userAgent;");
		System.setProperty("userAgent", uAgent);
		System.setProperty("browserVersion", browserVersion);
		System.out.println("Browser Version :::: " + browserVersion);
		if (isNotMobile() && isLocal()) {
			maximizeScreen(driver);
		} else if (!isLocal()) {
			driver.manage().window().maximize(); //TODO: figure out actual logic here? this is probably some combo of
			// browser and OS
		}
		int webDriverTimeout = Integer.parseInt("60");
		
		driver.manage().timeouts().implicitlyWait(webDriverTimeout, TimeUnit.SECONDS);

		return driver;
	}

	private static boolean isNotMobile() {
		return !System.getProperty("browser").equalsIgnoreCase("mobile");
	}

	private static boolean isLocal() {
		return System.getProperty("server").equals("local");
	}

	private static void maximizeScreen(WebDriver driver) {
		Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
		org.openqa.selenium.Point point = new org.openqa.selenium.Point(0, 0);
		driver.manage().window().setPosition(point);
		org.openqa.selenium.Dimension maximizedScreenSize = new org.openqa.selenium.Dimension((int) screenSize
				.getWidth(), (int) screenSize.getHeight());
		driver.manage().window().setSize(maximizedScreenSize);
	}
}
