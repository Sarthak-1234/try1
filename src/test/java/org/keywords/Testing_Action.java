package org.keywords;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import static org.stepdefs.BaseTest.test;

import org.getpageobjects.GetPage;

public class Testing_Action extends GetPage{

	public Testing_Action(WebDriver driver) {
		super(driver);
	}
	
	public void clickOnBrowserSite() {
		driver.findElement(By.cssSelector("button#ctl00_btnDefaultApp")).click();
	}
	
	public void launchURL() {
		test.launchUrl("https://www.fadavis.com");
	}
	
	
	

}
