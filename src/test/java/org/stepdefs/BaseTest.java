package org.stepdefs;

import java.net.MalformedURLException;

import org.Reporting.ExtentManager;
import org.testinitiator.TestSessionInitiator;
import org.utils.ReadingPropertyFile;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BaseTest {
	
	public static TestSessionInitiator test;
	public static ExtentReports rep;
	public static ExtentTest scenario;
	
	
	@Before
	public void setUp(Scenario scenarioName) throws MalformedURLException {
		test = new TestSessionInitiator(this.getClass().getSimpleName());
		test.initReports(scenarioName.getName());
	}
	
	@After
	public void closeUp(Scenario scenario) throws Exception{
		
		if (scenario.getStatus().contains("pass")) {
			test.infoLogPass(scenario.getName() + " ------> is passed");
		}
		
		
		if (!(scenario.getStatus().contains("pass"))) {
			test.reportFailure(scenario.getName() +"-------> got failed");
			//throw new RuntimeException(scenario.getName() + " got failed");
		}
		test.putReport();
		test.closeTestSession();
	}
}