package org.stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.stepdefs.BaseTest.test;
import static org.testng.Assert.*;

public class HomePageTest {
	
	@When("^click on BrowserSite dropdown$")
	public void click_on_BrowserSite_dropdown() throws Throwable {
		test.homepage.clickBrowserSite();
	}

	@When("^click on Davis Edge$")
	public void click_on_Davis_Edge() throws Throwable {
	    test.homepage.clickOnDavisEdge();
	}
	
	@Then("^it should open the new tab with title KIA$")
	public void it_should_open_the_new_tab_with_title_KIA() throws Throwable {
		test.homepage.switchNextTab();
		assertEquals(test.homepage.getTitle(), "Kinesiology In Action");
	}

}
