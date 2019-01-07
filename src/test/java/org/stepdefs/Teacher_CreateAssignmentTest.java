package org.stepdefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.stepdefs.BaseTest.test;
import static org.testng.Assert.*;

public class Teacher_CreateAssignmentTest {
	
	@When("^Click on Continue To Success Center$")
	public void click_on_Continue_To_Success_Center() throws Throwable {
		test.createassignment.refreshPage();
	}
	
	@When("^Click on Manage Classes$")
	public void click_on_Manage_Classes() throws Throwable {
		test.createassignment.clickManageClassesLink();
	}

	@When("^Click on Create Assignment$")
	public void click_on_Create_Assignment() throws Throwable {
	    test.createassignment.clickCreateAssignment();
	}

	@When("^Enter Assignment Name$")
	public void enter_Assignment_Name() throws Throwable {
	    test.createassignment.enterAssignmentName("Automated Assignment");
	}

	@When("^Click on Create Quick Assignment button$")
	public void click_on_Create_Quick_Assignment_button() throws Throwable {
	    test.createassignment.clickQuickAssignmentButton();
	}

	@When("^Select Course Topic$")
	public void select_Course_Topic() throws Throwable {
	    test.createassignment.selectCourseTopicFromDropdown();
	}

	@When("^Click on Continue button$")
	public void click_on_Continue_button() throws Throwable {
		test.createassignment.clickOnContinueButton();
	}

	@When("^Click on Save & Exit button$")
	public void click_on_Save_Exit_button() throws Throwable {
	    test.createassignment.clickOnSaveAndExitButton();
	}

	@Then("^Verify it should display Assignment under Assignment Grades$")
	public void verify_it_should_display_Assignment_under_Assignment_Grades() throws Throwable {
	    assertEquals(test.createassignment.assignMentName(), "Automated Assignment");
	}

}
