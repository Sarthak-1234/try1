package org.getpageobjects;

import static org.stepdefs.BaseTest.test;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.utils.ConfigPropertyReader;
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
	
	public void switchNextTab() {
		Set<String> windows = driver.getWindowHandles();
		ArrayList<String> liwindows = new ArrayList<String>(windows);
		driver.switchTo().window(liwindows.get(1));
	}
	
	public void implicitWait() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	public void launchURL() {
		test.launchUrl("https://www.fadavis.com");
	}
	
	public boolean isElementPresent(String propFilename, String objectKey) {
		if(objectKey.endsWith("_xpath")) {
			e = driver.findElements(By.xpath(ConfigPropertyReader.getProperty(propFilename, objectKey)));// present
		}else if(objectKey.endsWith("_id")) {
				e = driver.findElements(By.id(ConfigPropertyReader.getProperty(propFilename, objectKey)));// present
		}
		else if(objectKey.endsWith("_name")) {
			e = driver.findElements(By.name(ConfigPropertyReader.getProperty(propFilename, objectKey)));// present
		}
		else if(objectKey.endsWith("_css")) {
			e = driver.findElements(By.cssSelector(ConfigPropertyReader.getProperty(propFilename, objectKey)));// present
		}
		if(e.size()==0)
			return false;
		else
			return true;
	}
	
	public void click(String propFilename, String objectKey) {
		getObject(propFilename,objectKey).click();
	}
	
	public String getMessage(String propFilename,String objectKey) {
		return getObject(propFilename,objectKey).getText().trim();
	}
	
	public void type(String propFilename, String objectKey,String data) {
		getObject(propFilename,objectKey).sendKeys(data);
	}
	public void select(String propFilename, String objectKey,String data) {
		Select s= new Select(getObject(propFilename,objectKey));
		s.selectByVisibleText(data);
	}
	
	public void clear(String propFilename,String objectKey) {
		getObject(propFilename,objectKey).clear();
	}
	
	public void pressTabUsingAction(String propFilename,String objectKey) {
		Actions act = new Actions(driver);
		act.sendKeys(getObject(propFilename,objectKey),Keys.TAB).build().perform();
	}
	
//	public void pressTabKey(String objectKey) {
//		getObject(objectKey).sendKeys(Keys.TAB);
//	}
	
	public WebElement getObject(String propFilename, String objectKey) {
		ee = null;
		wait  =  new WebDriverWait(driver, 20);

		try {
			//System.out.println(objectKey);
			if(objectKey.endsWith("_xpath")) {
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(ConfigPropertyReader.getProperty(propFilename, objectKey))));
				ee = driver.findElement(By.xpath(ConfigPropertyReader.getProperty(propFilename, objectKey)));// present
				
			}else if(objectKey.endsWith("_id")) {
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id(ConfigPropertyReader.getProperty(propFilename, objectKey))));
				ee = driver.findElement(By.id(ConfigPropertyReader.getProperty(propFilename, objectKey)));// present
					
			}
			else if(objectKey.endsWith("_name")) {
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.name(ConfigPropertyReader.getProperty(propFilename, objectKey))));
				ee = driver.findElement(By.name(ConfigPropertyReader.getProperty(propFilename, objectKey)));// present
				
			}
			else if(objectKey.endsWith("_css")) {
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.cssSelector(ConfigPropertyReader.getProperty(propFilename, objectKey))));
				ee = driver.findElement(By.cssSelector(ConfigPropertyReader.getProperty(propFilename, objectKey)));// present
				
			}
		}catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
		return ee;
	}
	
	
	
	
}
