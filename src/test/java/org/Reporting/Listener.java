package org.Reporting;

import java.io.IOException;

import org.testng.ITestResult;
import org.testng.TestListenerAdapter;
import static org.stepdefs.BaseTest.test;

public class Listener extends TestListenerAdapter{
	
	public void onTestFailure(ITestResult r){
		
	}
	
	public void onTestSuccess(ITestResult r){
		String filename = r.getMethod().getMethodName();
		try {
			System.out.println("");
			//initProject.takescreenshot(filename);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public void onTestSkipped(ITestResult r){
		System.out.println("****");
	}

}

