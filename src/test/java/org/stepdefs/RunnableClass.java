package org.stepdefs;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/resources/featurefiles", 
glue ="org.stepdefs", 
plugin = {"html:target/site/cucumber-html",
		"json:target/cucumber1.json"},
monochrome=true
		)

public class RunnableClass extends AbstractTestNGCucumberTests{
//format = {"json:target/cucumber/report.json" })
}

/*
Firefox
pass browser through config file
report comes under  project folder
jenkins should show html report
email the reports
*/