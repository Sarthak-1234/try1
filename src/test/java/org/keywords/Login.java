package org.keywords;

import org.getpageobjects.GetPage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.utils.ReadingPropertyFile;

public class Login extends GetPage{
	
	public Login(WebDriver driver) {
		super(driver);
		//System.out.println(this.getClass().getSimpleName()+".properties............done");
		
	}
	
	public void clickOnLoginButton() {
		//driver.findElement(By.xpath("(//a[text()='login/join'])[1]")).click();
		click("Loginjoinbutton_xpath");
	}
	

	public void enterCorrectEmailID() {
		//driver.findElement(By.id("UserName")).sendKeys("vandanasharma@qainfotech.com");
		type("Email_id","vandanasharma@qainfotech.com");
	}
	
	public void enterCorrectPassword() {
		//driver.findElement(By.id("Password")).sendKeys("password");
		type("Password_id","password");
	}
	
	public void enterInCorrectPassword() {
		//driver.findElement(By.id("Password")).sendKeys("password2");
		type("Password_id","password2");
	}
	
	public void clickLogin() {
		//driver.findElement(By.id("btnLogin")).click();
		click("Login_id");
	}
	
	public void enterInCorrectEmailID() {
		//driver.findElement(By.id("UserName")).sendKeys("vandanasharmaa@qainfotech.com");
		type("Email_id","vandanasharma2@qainfotech.com");
		pressTabKey("Email_id");
	}
	
	public String incorrectEmailMessage() {
		//return driver.findElement(By.cssSelector("div#emailCheck>div")).getText();
		return getMessage("Emailmessage_css");
	}
	

	public String loginverificationName() {
		//return driver.findElement(By.cssSelector("a.pull-right.postLogin>b")).getText();
		return getMessage ("LoginVerificationName_css");
	}
	
	public boolean isAlertMessagePresent() {
		return isElementPresent("AlertMessage_xpath");
	}

}
