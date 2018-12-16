package org.stepdefs;

import static org.stepdefs.BaseTest.test;

import cucumber.api.java.en.Given;

public class CommonFunctions {
	@Given("^Launch URL$")
	public void Launch_URL() throws Throwable{
		test.titlecheck.launchURL();
		test.infoLogPass("URL is launched - http://www.fadavis.com");
		test.titlecheck.implicitWait();
	}
}
