package org.stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.stepdefs.BaseTest.test;

import org.testng.Assert;

public class LoginTest {

	@When("^Click on Login/Join button$")
	public void click_on_Login_Join_button() throws Throwable {
		test.logincheck.clickOnLoginButton();
	}

	@When("^Enter Correct Email ID$")
	public void enter_Correct_Email_ID() throws Throwable {
	    test.logincheck.enterCorrectEmailID();
	}

	@When("^Enter Correct Password$")
	public void enter_Correct_Password() throws Throwable {
	    test.logincheck.enterCorrectPassword();
	}

	@When("^Click on Login Button$")
	public void click_on_Login_Button() throws Throwable {
	    test.logincheck.clickLogin();
	}

	@Then("^Login is Successfull\\.$")
	public void login_is_Successfull() throws Throwable {
		Assert.assertEquals(test.logincheck.loginverificationName(), "Welcome!");
	}

	@When("^Enter Incorrect Email ID$")
	public void enter_Incorrect_Email_ID() throws Throwable {
	    test.logincheck.enterInCorrectEmailID();
	}

	@Then("^Application displays error message\\.$")
	public void application_displays_error_message() throws Throwable {
	    Assert.assertEquals(test.logincheck.incorrectEmailMessage(), "Email not recognized. Please check the spelling and try again. If your email address is correct, you do not have an existing account yet. Please create a new account below.");
	}

	@When("^Enter Incorrect Password$")
	public void enter_Incorrect_Password() throws Throwable {
	    test.logincheck.enterInCorrectPassword();
	}

	@Then("^Alert message should be present about incorrect password$")
	public void alert_should_be_present_about_incorrect_password() throws Throwable {
	    Assert.assertTrue(test.logincheck.isAlertMessagePresent());
	}

}
