package org.stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.stepdefs.BaseTest.test;
import static org.testng.Assert.*;

import java.io.IOException;

import javax.mail.MessagingException;

import org.testng.Assert;

import com.aventstack.extentreports.Status;

public class TitleVerification {
	
	
	
	@Then ("^Verify Title")
		public void Verify_Title() throws Throwable{
		
		assertEquals(test.titlecheck.verifyTitle(), "Textbooks and Classroom Resources for Nursing and Health Professions - F.A. Davis Company"); 
		
	}
	
}
