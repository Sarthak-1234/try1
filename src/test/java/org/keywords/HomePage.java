package org.keywords;

import org.getpageobjects.GetPage;
import org.openqa.selenium.WebDriver;

public class HomePage extends GetPage{
	
	public HomePage(WebDriver driver) {
		super(driver);
	}
	
	public void clickBrowserSite() {
		click("BrowserSite_id");
	}
	
	public void clickOnDavisEdge() {
		click("DavisEdge_css");
	}
	
	public void enterCorrectEmailID(String email) {
		//driver.findElement(By.id("UserName")).sendKeys("vandanasharma@qainfotech.com");
		type("Email_id",email);
		System.out.println(email);
	}
	
	public void enterCorrectPassword(String password) {
		//driver.findElement(By.id("Password")).sendKeys("password");
		type("Password_id",password);
	}
	
	
	
	
	

}
