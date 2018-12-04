package org.stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.stepdefs.BaseTest.test;

import org.testng.Assert;

public class TestingFeature {

	@Given("^Launch URL$")
		public void Launch_URL() throws Throwable{
			test.obj.launchURL();
		}
	
	@Then ("^Verify Title")
		public void Verify_Title() throws Throwable{
		Assert.assertEquals(test.obj.getTitle(), "Textbooks and Classroom Resources for Nursing and Health Professions - F.A. Davis Company", "Title is different");
	}
	
}
