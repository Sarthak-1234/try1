$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/featurefiles/HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Check BrowserSite and navigation to other products",
  "description": "",
  "id": "check-browsersite-and-navigation-to-other-products",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Check the product navigation through FADAVIS.COM",
  "description": "",
  "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Login in the application with \"\u003cemailid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on BrowserSite dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on Davis Edge",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "it should open the new tab with title KIA",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com;",
  "rows": [
    {
      "cells": [
        "emailid",
        "password"
      ],
      "line": 10,
      "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com;;1"
    },
    {
      "cells": [
        "vandanasharma@qainfotech.com",
        "password"
      ],
      "line": 11,
      "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13409519818,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check the product navigation through FADAVIS.COM",
  "description": "",
  "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Login in the application with \"vandanasharma@qainfotech.com\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on BrowserSite dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on Davis Edge",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "it should open the new tab with title KIA",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctions.launch_URL_for_Login()"
});
formatter.result({
  "duration": 10739481449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vandanasharma@qainfotech.com",
      "offset": 31
    },
    {
      "val": "password",
      "offset": 66
    }
  ],
  "location": "CommonFunctions.login_in_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 18478470454,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.click_on_BrowserSite_dropdown()"
});
formatter.result({
  "duration": 1450022912,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.click_on_Davis_Edge()"
});
formatter.result({
  "duration": 3950043578,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.it_should_open_the_new_tab_with_title_KIA()"
});
formatter.result({
  "duration": 14224726123,
  "status": "passed"
});
formatter.after({
  "duration": 1568939302,
  "status": "passed"
});
});