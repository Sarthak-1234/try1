package org.testinitiator;

import org.keywords.Testing_Action;
import org.openqa.selenium.WebDriver;

import java.net.MalformedURLException;

public class TestSessionInitiator {

	private String testname;
	public TestSessionInitiator test;
	public  Testing_Action obj;
	protected WebDriver driver;

	public TestSessionInitiator(String testname) throws MalformedURLException {
		this.testname = testname;
		testInitiator(testname);
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
		this.driver = WebDriverFactory.getDriver();
		System.out.println("Browser is launched");
		obj = new Testing_Action(driver);
	}

	private void testInitiator(String testname) throws MalformedURLException {
		//setYamlFilePath();
		_initPage();
		//codestartedFor(testname);
	}

	
}
