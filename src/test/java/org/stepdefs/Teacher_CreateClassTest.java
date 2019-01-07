package org.stepdefs;

import static org.stepdefs.BaseTest.test;
import static org.testng.Assert.*;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Teacher_CreateClassTest {
	
	@When("^click on Davis Edge$")
	public void click_on_Davis_Edge() throws Throwable {
	    test.homepage.clickOnDavisEdge();
	}
	
	@And("^It should open Davis Edge in new window$")
	public void it_should_open_Davis_Edge_in_new_window() throws Throwable {
		test.createclass.switchNextTab();
		assertEquals(test.createclass.getTitle(), "DavisEdge - My Products");
	}
	
	
	@When("^Click on Rudd Title$")
	public void click_on_Rudd_Title() throws Throwable {
	    test.createclass.clickOnRuddTitle();
	}

	@When("^Click on Add Button$")
	public void click_on_Add_Button() throws Throwable {
	    test.createclass.clickOnAddClassButton();
	}
	
	@When("^Enter Class Title$")
	public void enter_Class_Title() throws Throwable {
	    test.createclass.enterClassTitle();
	}

	@When("^Enter Class Description$")
	public void enter_Class_Description() throws Throwable {
	    test.createclass.enterDescription();
	}

	@When("^Click for Auto Enroll checkbox$")
	public void click_for_Auto_Enroll_checkbox() throws Throwable {
	    test.createclass.checkAutoEnroll();
	}

	@When("^Click on Create Class button$")
	public void click_on_Create_Class_button() throws Throwable {
		test.createclass.ClassAccessCode();
	    test.createclass.createClassButton();
	}

	@Then("^It should display Class Created Alert$")
	public void it_should_display_Class_Created_Alert() throws Throwable {
		assertEquals(test.createclass.createClassMessageDisplayed(), "Your class has been successfully created.");
		
		
	}

}
