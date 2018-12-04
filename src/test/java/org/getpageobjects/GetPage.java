package org.getpageobjects;

import org.openqa.selenium.WebDriver;

public class GetPage extends BaseUi {
	
	public WebDriver driver;
	
	public GetPage(WebDriver driver) {
	this.driver = driver;
	}
	
	public String getTitle() {
		return driver.getTitle();
	}
	
}
