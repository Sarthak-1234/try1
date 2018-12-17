package org.getpageobjects;

import static org.stepdefs.BaseTest.test;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.utils.ReadingPropertyFile;

public class GetPage extends BaseUi {
	
	public WebDriver driver;
	public List<WebElement> e=null;
	public WebDriverWait wait;
	public WebElement ee;
	
	public GetPage(WebDriver driver) {
	super(driver);
	this.driver = driver;
	}
	
	public String getTitle() {
		return driver.getTitle();
	}
	
	public void implicitWait() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	public void launchURL() {
		test.launchUrl("https://www.fadavis.com");
	}
	
	public boolean isElementPresent(String objectKey) {
		
		
		if(objectKey.endsWith("_xpath")) {
			e = driver.findElements(By.xpath(test.prop.getProperty(objectKey)));// present
		}else if(objectKey.endsWith("_id")) {
				e = driver.findElements(By.id(test.prop.getProperty(objectKey)));// present
		}
		else if(objectKey.endsWith("_name")) {
			e = driver.findElements(By.name(test.prop.getProperty(objectKey)));// present
		}
		else if(objectKey.endsWith("_css")) {
			e = driver.findElements(By.cssSelector(test.prop.getProperty(objectKey)));// present
		}
		if(e.size()==0)
			return false;
		else
			return true;
	}
	
	public void click(String objectKey) {
		getObject(objectKey).click();
	}
	
	public String getMessage(String objectKey) {
		return getObject(objectKey).getText().trim();
	}
	
	public void type(String objectKey,String data) {
		getObject(objectKey).sendKeys(data);
	}
	public void select(String objectKey,String data) {
		Select s= new Select(getObject(objectKey));
		s.selectByVisibleText(data);
	}
	
	public void clear(String objectKey) {
		getObject(objectKey).clear();
	}
	
	public void pressTabUsingAction(String objectKey) {
		Actions act = new Actions(driver);
		act.sendKeys(getObject(objectKey),Keys.TAB).build().perform();
	}
	
//	public void pressTabKey(String objectKey) {
//		getObject(objectKey).sendKeys(Keys.TAB);
//	}
	
	public WebElement getObject(String objectKey) {
		ee = null;
		wait  =  new WebDriverWait(driver, 20);

		try {
			//System.out.println(objectKey);
			if(objectKey.endsWith("_xpath")) {
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(test.prop.getProperty(objectKey))));
				ee = driver.findElement(By.xpath(test.prop.getProperty(objectKey)));// present

			}else if(objectKey.endsWith("_id")) {
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id(test.prop.getProperty(objectKey))));
				ee = driver.findElement(By.id(test.prop.getProperty(objectKey)));// present
					
			}
			else if(objectKey.endsWith("_name")) {
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.name(test.prop.getProperty(objectKey))));
				ee = driver.findElement(By.name(test.prop.getProperty(objectKey)));// present
				
			}
			else if(objectKey.endsWith("_css")) {
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.cssSelector(test.prop.getProperty(objectKey))));
				ee = driver.findElement(By.cssSelector(test.prop.getProperty(objectKey)));// present
				
			}
		}catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
		return ee;
	}
	
	
	
	
}
