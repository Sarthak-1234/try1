package org.stepdefs;

import java.net.MalformedURLException;

import org.testinitiator.TestSessionInitiator;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BaseTest {
	
	public static TestSessionInitiator test;
	
	@Before
	public void setUp(Scenario scenario) throws MalformedURLException {
		System.out.println("I am in Setup scenario");
		test = new TestSessionInitiator(this.getClass().getSimpleName());
		
	}
	
	@After
	public void closeUp(Scenario scenario) throws MalformedURLException{
		test.closeTestSession();
	}

}
