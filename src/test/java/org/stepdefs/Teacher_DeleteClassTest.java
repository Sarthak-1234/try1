package org.stepdefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.stepdefs.BaseTest.test; 
import static org.testng.Assert.*;

public class Teacher_DeleteClassTest {
	
	@When("^click on settings icon$")
	public void click_on_settings_icon() throws Throwable {
	    test.deleteclass.clickSettingsIcon();
	}

	@When("^click on Delete button$")
	public void click_on_Delete_button() throws Throwable {
	    test.deleteclass.deleteoption();
	}

	@Then("^confirm deletion pop-up opens up$")
	public void confirm_deletion_pop_up_opens_up() throws Throwable {
	    assertEquals(test.deleteclass.getConfirmDeletionPopUpMessage(), "Confirm Deletion");
	}

	@When("^click on ok button$")
	public void click_on_ok_button() throws Throwable {
	    test.deleteclass.clickOkButton();
	}

	@Then("^a confirmation pop-up appears$")
	public void a_confirmation_pop_up_appears() throws Throwable {
		assertTrue(test.deleteclass.deleteAlert());
	}

}
