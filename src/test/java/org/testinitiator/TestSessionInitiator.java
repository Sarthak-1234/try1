package org.testinitiator;

import static org.assertj.core.api.Assertions.assertThat;
import org.Reporting.ExtentManager;
import org.keywords.Login;
import org.keywords.TitleVerification;
import org.openqa.selenium.WebDriver;
import org.utils.ReadingPropertyFile;
import org.utils.TakeScreenshots;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;

import static org.junit.Assert.assertThat;

import java.net.MalformedURLException;

public class TestSessionInitiator {

	private String testname;
	public ReadingPropertyFile prop;
	public ReadingPropertyFile prop1;
	
	
	
	/*-----Initializing Object of TestInitiator Class-----*/
	public TestSessionInitiator test;
	
	protected WebDriver driver;
	
	/*-----Initializing Object of Reports-----*/
	public ExtentReports rep;
	public ExtentTest scenario;
	
	
	/*-----Initializing Object of Action Class-----*/
	public  TitleVerification titlecheck;
	public Login logincheck;
	public TakeScreenshots screencapture;

	public TestSessionInitiator(String testname) throws MalformedURLException {
		this.testname = testname;
		testInitiator(testname);
	}
	
	public void reportFailure(String errMsg) throws Exception {
		// fail in extent reports
		String screenshotFile = screencapture.TakeScreenshot();
		scenario.log(Status.FAIL,errMsg +" Screenshot-> "+ scenario.addScreenCaptureFromPath(ExtentManager.screenshotFolderPath+screenshotFile));
		//scenario.log(Status.FAIL, errMsg);
		
		// take screenshot and put in repots
		// fail in cucumber as well
		assertThat(false);
	}
	
	public void initReports(String scenarioName) {
		rep = ExtentManager.getInstance(System.getProperty("user.dir")+"\\target\\");
		scenario = rep.createTest(scenarioName);
		screencapture = new TakeScreenshots(scenario, driver);
		//scenario.log(Status.INFO, "Starting " +scenarioName);
	}
	
	public void putReport() {
		rep.flush();
	}
	
	public void infoLogPass(String msg) {
		scenario.log(Status.PASS, msg);
	}
	
	public void infoLogFail(String msg) {
		scenario.log(Status.FAIL, msg);
	}
	
	public void infoLogMessage(String msg) {
		scenario.log(Status.INFO, msg);
	}

	public WebDriver getDriver() {
		return this.driver;
	}

	public void launchUrl(String url) {
		driver.get(url);
	}

	public void closeTestSession() {
		driver.quit();
	}

	public void closeWebDriver() {
		driver.close();
	}

	private void _initPage() throws MalformedURLException {
		prop1=new ReadingPropertyFile("config.properties");
		this.driver = WebDriverFactory.getDriver();
		driver.manage().deleteAllCookies();
		titlecheck = new TitleVerification(driver);
		logincheck = new Login(driver);
		//System.out.println(logincheck.getClass().getSimpleName()+".propertiessony");
		prop=new ReadingPropertyFile(logincheck.getClass().getSimpleName()+".properties");
	}

	private void testInitiator(String testname) throws MalformedURLException {
		//setYamlFilePath();
		_initPage();
		//codestartedFor(testname);
	}

	
}
