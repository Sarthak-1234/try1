package org.stepdefs;


import cucumber.api.java.en.Then;

import static org.stepdefs.BaseTest.test;
import static org.testng.Assert.*;


public class TitleVerification {
	
	
	
	@Then ("^Verify Title")
		public void Verify_Title() throws Throwable{
		
		assertEquals(test.titlecheck.verifyTitle(), "Textbooks and Classroom Resources for Nursing and Health Professions - F.A. Davis Company"); 
		
	}
	
}
