package org.stepdefs;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/resources/featurefiles/testing.feature", 
glue ="org.stepdefs", 
format = {"pretty", "json:target/cucumber/report.json",
		"junit:target/cucumber/report.xml",
		"html:target/cucumber"},
monochrome=true
		)

public class RunnableClass extends AbstractTestNGCucumberTests{
//format = {"json:target/cucumber/report.json" })
}
